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
import { PassatoPresenteComponent } from './app/pages/ambientazione/passato-presente/passato-presente.component';
import { LeggendeComponent } from './app/pages/ambientazione/leggende/leggende.component';
import { GargoyleComponent } from './app/pages/ambientazione/leggende/gargoyle/gargoyle.component';
import { DraghiComponent } from './app/pages/ambientazione/leggende/draghi/draghi.component';
import { DemoniComponent } from './app/pages/ambientazione/leggende/demoni/demoni.component';
import { CultistiComponent } from './app/pages/ambientazione/leggende/cultisti/cultisti.component';
import { GiocoComponent } from './app/pages/gioco/gioco.component';
import { ClassiComponent } from './app/pages/gioco/classi/classi.component';
import { ArmiComponent } from './app/pages/guide/armi/armi.component';
import { CittadinanzaComponent } from './app/pages/guide/cittadinanza/cittadinanza.component';
import { DiplomaziaComponent } from './app/pages/guide/diplomazia/diplomazia.component';
import { GuideComponent } from './app/pages/guide/guide/guide.component';
import { IncantareComponent } from './app/pages/guide/incantare/incantare.component';
import { LinguaggiComponent } from './app/pages/guide/linguaggi/linguaggi.component';
import { NavaleComponent } from './app/pages/guide/navale/navale.component';
import { NuotareComponent } from './app/pages/guide/nuotare/nuotare.component';
import { RankComponent } from './app/pages/guide/rank/rank.component';
import { MercatoComponent } from './app/pages/guide/mercato/mercato.component';
import { PostaComponent } from './app/pages/guide/posta/posta.component';
import { ComandiComponent } from './app/pages/guide/comandi/comandi.component';

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
      { path: 'passato-presente', component: PassatoPresenteComponent },
      { path: 'leggende', component: LeggendeComponent },
      { path: 'leggende/gargoyle', component: GargoyleComponent },
      { path: 'leggende/draghi', component: DraghiComponent },
      { path: 'leggende/demoni', component: DemoniComponent },
      { path: 'leggende/cultisti', component: CultistiComponent },
      { path: 'gioco', component: GiocoComponent },
      { path: 'classi-di-gioco', component: ClassiComponent },
      { path: 'gioco/guide', component: GuideComponent },
      { path: 'gioco/guide/armi', component: ArmiComponent },
      { path: 'gioco/guide/rank', component: RankComponent },
      { path: 'gioco/guide/cittadinanza', component: CittadinanzaComponent },
      { path: 'gioco/guide/nuotare', component: NuotareComponent },
      { path: 'gioco/guide/diplomazia', component: DiplomaziaComponent },
      { path: 'gioco/guide/incantare', component: IncantareComponent },
      { path: 'gioco/guide/linguaggi', component: LinguaggiComponent },
      { path: 'gioco/guide/navale', component: NavaleComponent },
      { path: 'gioco/guide/mercato', component: MercatoComponent },
      { path: 'gioco/guide/posta', component: PostaComponent },
      { path: 'gioco/guide/comandi', component: ComandiComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
});
