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

  // Dati del form
  formData = {
    email: '',
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

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Verifica che il form sia valido prima di procedere
    if (!this.isFormValid) {
      return;
    }

    this.isSubmitting = true;
    
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
