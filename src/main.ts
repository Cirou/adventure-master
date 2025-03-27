import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { AmbientazioneComponent } from './app/pages/ambientazione/ambientazione.component';
import { StirpiComponent } from './app/pages/stirpi/stirpi.component';
import { RegolamentoComponent } from './app/pages/regolamento/regolamento.component';
import { DownloadComponent } from './app/pages/download/download.component';
import { StirpiSudComponent } from './app/pages/stirpi/stirpi-sud/stirpi-sud.component';
import { StirpiNordComponent } from './app/pages/stirpi/stirpi-nord/stirpi-nord.component';
import { StirpiOvestComponent } from './app/pages/stirpi/stirpi-ovest/stirpi-ovest.component';
import { GildaAvventurieriComponent } from './app/pages/stirpi/gilda-avventurieri/gilda-avventurieri.component';
import { TabulaRasaComponent } from './app/pages/ambientazione/tabula-rasa/tabula-rasa.component';
import { CloverComponent } from './app/pages/ambientazione/clover/clover.component';
import { EtereComponent } from './app/pages/ambientazione/etere/etere.component';
import { GiocoComponent } from './app/pages/gioco/gioco.component';
import { ClassiComponent } from './app/pages/gioco/classi/classi.component';

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
      { path: 'gioco', component: GiocoComponent },
      { path: 'classi-di-gioco', component: ClassiComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
});
