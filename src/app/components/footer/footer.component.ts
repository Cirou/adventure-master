import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  audio = new Audio('/audio/Tales of Iron and Fire.mp3');
  isPlaying = false;
  volume = 0.3; // Volume iniziale più basso
  userInteracted = false; // Controlla se l'utente ha interagito

  constructor() {
    this.audio.loop = true;
    this.audio.volume = this.volume;
  }

  // Avvia l'audio manualmente (non più automatico all'apertura del sito)
  // @HostListener('window:click')
  // @HostListener('window:scroll')
  // @HostListener('window:keydown')
  startAudio() {
    if (!this.userInteracted) {
      this.audio.play().then(() => {
        this.isPlaying = true;
        this.userInteracted = true; // Impedisce di riavviare l’audio più volte
      }).catch(error => {
        console.error("Errore nella riproduzione dell'audio:", error);
      });
    }
  }

  toggleAudio() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  setVolume(event: any) {
    this.volume = event.target.value;
    this.audio.volume = this.volume; // Aggiorna il volume in tempo reale
  }
}

