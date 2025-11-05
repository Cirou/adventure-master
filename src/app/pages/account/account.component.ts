import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  showSuccessMessage = false;
  isSubmitting = false;
  showBgHelp = false;

  // Discord Webhook URL - Sostituisci con il tuo webhook URL
  private discordWebhookUrl = 'https://discord.com/api/webhooks/1347220410688864398/3MvNqhSxwsJfM1REQ-En-DPgfvb0COWc00kYkVMLqw22OkgHOqqsTwGKEsA7Tfrnf6l2';

  // Dati del form
  formData = {
    email: '',
    discord: '',
    account: '',
    character: '',
    characterClass: '',
    lineage: '',
    background: ''
  };

  // Controlla se il form è valido
  get isFormValid(): boolean {
    return !!(
      this.formData.email &&
      this.formData.discord &&
      this.formData.account &&
      this.formData.character &&
      this.formData.characterClass &&
      this.formData.lineage &&
      this.formData.background &&
      this.isValidEmail(this.formData.email)
    );
  }

  // Valida formato email
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Lista delle classi disponibili
  characterClasses = [
    { value: 'Arcanista', label: 'Arcanista' },
    { value: 'Arciere', label: 'Arciere' },
    { value: 'Bardo', label: 'Bardo' },
    { value: 'Berserker', label: 'Berserker' },
    { value: 'Guaritore', label: 'Guaritore' },
    { value: 'Necromante', label: 'Necromante' },
    { value: 'Ladro', label: 'Ladro' },
    { value: 'Guerriero', label: 'Guerriero' }
  ];

  // Lista delle stirpi disponibili
  lineages = [
    { value: 'Nord', label: 'Nord' },
    { value: 'Sud', label: 'Sud' },
    { value: 'Ovest', label: 'Ovest' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['submitted'] === 'true') {
        this.showSuccessMessage = true;
      }
    });
  }

  // Invia notifica a Discord
  private async sendDiscordNotification(): Promise<boolean> {
    try {
      // Prepara i campi base
      const fields = [
        {
          name: '📧 Email',
          value: this.formData.email,
          inline: false
        },
        {
          name: '� Discord',
          value: this.formData.discord,
          inline: false
        },
        {
          name: '�👤 Nome Account',
          value: this.formData.account,
          inline: true
        },
        {
          name: '⚔️ Nome Personaggio',
          value: this.formData.character,
          inline: true
        },
        {
          name: '🎭 Classe',
          value: this.formData.characterClass,
          inline: true
        },
        {
          name: '🏰 Stirpe',
          value: this.formData.lineage,
          inline: true
        }
      ];

      // Dividi il background in chunk da 1024 caratteri
      const background = this.formData.background;
      const chunkSize = 1024;
      const backgroundChunks: string[] = [];
      
      for (let i = 0; i < background.length; i += chunkSize) {
        backgroundChunks.push(background.substring(i, i + chunkSize));
      }

      // Aggiungi i chunk del background come campi separati
      backgroundChunks.forEach((chunk, index) => {
        const isFirst = index === 0;
        const isLast = index === backgroundChunks.length - 1;
        const totalParts = backgroundChunks.length;
        
        fields.push({
          name: isFirst 
            ? (totalParts > 1 ? `📜 Background (Parte 1/${totalParts})` : '📜 Background')
            : `📜 Background (Parte ${index + 1}/${totalParts})`,
          value: chunk,
          inline: false
        });
      });

      // Crea un embed colorato per Discord
      const embed = {
        title: '🎮 Nuova Richiesta Account - Adventure Master',
        color: 0x5865F2, // Blu Discord
        fields: fields,
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Adventure Master - Sistema di Richiesta Account'
        }
      };

      const response = await fetch(this.discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      });

      return response.ok;
    } catch (error) {
      console.error('Errore invio Discord:', error);
      return false;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Verifica che il form sia valido prima di procedere
    if (!this.isFormValid) {
      return;
    }

    this.isSubmitting = true;
    
    // Prima invia a Discord, poi a FormSubmit
    this.sendDiscordNotification().then(discordSuccess => {
      if (discordSuccess) {
        console.log('✅ Notifica Discord inviata con successo');
      } else {
        console.warn('⚠️ Errore invio Discord, continuo comunque con FormSubmit');
      }

      // Procedi con FormSubmit indipendentemente dal risultato Discord
      this.submitToFormSubmit();
    });
  }

  private submitToFormSubmit() {
    // Crea un form temporaneo nel DOM per bypassare Angular
    const tempForm = document.createElement('form');
    tempForm.method = 'POST';
    tempForm.action = 'https://formsubmit.co/adventuremasteruo@gmail.com';
    tempForm.style.display = 'none';

    // Aggiungi i campi di configurazione di FormSubmit
    const configFields = {
      '_next': 'https://adventure-master.onrender.com/account?submitted=true',
      '_subject': 'Nuova Richiesta Account - Adventure Master',
      '_captcha': 'false',
      '_template': 'basic',
      '_honey': ''
    };

    // Aggiungi i campi di configurazione
    Object.entries(configFields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });

    // Aggiungi i dati del form
    Object.entries(this.formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });

    // Aggiungi il form al body e invialo
    document.body.appendChild(tempForm);
    tempForm.submit();
  }
}
