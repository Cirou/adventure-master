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
    this.isSubmitting = true;

    const form = event.target as HTMLFormElement;
    
    // Usa il metodo nativo del browser per inviare il form
    // Crea un form temporaneo nel DOM per bypassare Angular
    const tempForm = document.createElement('form');
    tempForm.method = 'POST';
    tempForm.action = 'https://formsubmit.co/adventuremasteruo@gmail.com';
    tempForm.style.display = 'none';

    // Copia tutti i campi del form
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value as string;
      tempForm.appendChild(input);
    });

    // Aggiungi il form al body e invialo
    document.body.appendChild(tempForm);
    tempForm.submit();
  }
}
