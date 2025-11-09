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
  
  // Web3Forms Access Key - Sostituisci con la tua access key
  private web3formsAccessKey = '7311af65-0343-485e-a557-ed59dea3ca3b';

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
    
    // Prima invia a Discord, poi a Web3Forms
    this.sendDiscordNotification().then(discordSuccess => {
      if (discordSuccess) {
        console.log('✅ Notifica Discord inviata con successo');
      } else {
        console.warn('⚠️ Errore invio Discord, continuo comunque con Web3Forms');
      }

      // Procedi con Web3Forms indipendentemente dal risultato Discord
      this.submitToWeb3Forms();
    });
  }

  private async submitToWeb3Forms() {
    try {
      const formData = new FormData();
      
      // Aggiungi i campi di configurazione di Web3Forms
      formData.append('access_key', this.web3formsAccessKey);
      formData.append('subject', 'Nuova Richiesta Account - Adventure Master');
      formData.append('from_name', 'Adventure Master');
      formData.append('redirect', 'https://adventure-master.onrender.com/account?submitted=true');
      
      // Aggiungi i dati del form
      formData.append('email', this.formData.email);
      formData.append('discord', this.formData.discord);
      formData.append('account', this.formData.account);
      formData.append('character', this.formData.character);
      formData.append('characterClass', this.formData.characterClass);
      formData.append('lineage', this.formData.lineage);
      formData.append('background', this.formData.background);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        // Reindirizza alla pagina di successo
        window.location.href = 'https://adventure-master.onrender.com/account?submitted=true';
      } else {
        console.error('Errore Web3Forms:', result.message);
        alert('Si è verificato un errore durante l\'invio. Riprova più tardi.');
        this.isSubmitting = false;
      }
    } catch (error) {
      console.error('Errore invio Web3Forms:', error);
      alert('Si è verificato un errore durante l\'invio. Riprova più tardi.');
      this.isSubmitting = false;
    }
  }
}
