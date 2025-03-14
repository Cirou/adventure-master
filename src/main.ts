import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { AmbientazioneComponent } from './app/pages/ambientazione/ambientazione.component';
import { StirpiComponent } from './app/pages/stirpi/stirpi.component';
import { RegolamentoComponent } from './app/pages/regolamento/regolamento.component';
import { DownloadComponent } from './app/pages/download/download.component';
import { StirpiSudComponent } from './app/pages/stirpi-sud/stirpi-sud.component';
import { StirpiNordComponent } from './app/pages/stirpi-nord/stirpi-nord.component';
import { StirpiOvestComponent } from './app/pages/stirpi-ovest/stirpi-ovest.component';
import { GildaAvventurieriComponent } from './app/pages/gilda-avventurieri/gilda-avventurieri.component';
import { TabulaRasaComponent } from './app/pages/tabula-rasa/tabula-rasa.component';
import { CloverComponent } from './app/pages/clover/clover.component';
import { EtereComponent } from './app/pages/etere/etere.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'ambientazione', component: AmbientazioneComponent },
      { path: 'stirpi', component: StirpiComponent },
      { path: 'regolamento', component: RegolamentoComponent },
      { path: 'download', component: DownloadComponent },
      { path: 'stirpi/sud', component: StirpiSudComponent },
      { path: 'stirpi/nord', component: StirpiNordComponent },
      { path: 'stirpi/ovest', component: StirpiOvestComponent },
      { path: 'stirpi/avventurieri', component: GildaAvventurieriComponent },
      { path: 'tabula-rasa', component: TabulaRasaComponent },
      { path: 'clover', component: CloverComponent },
      { path: 'etere', component: EtereComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
});
