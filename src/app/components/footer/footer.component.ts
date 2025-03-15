import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  audio = new Audio('/audio/Tales of Iron and Fire.mp3');
  volume = 0.3;

  constructor() {
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.play();
  }

  setVolume(event: any) {
    this.volume = event.target.value;
    this.audio.volume = this.volume;
  }
}
