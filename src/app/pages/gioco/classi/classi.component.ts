import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classi.component.html',
  styleUrls: ['./classi.component.scss']
})
export class ClassiComponent {

  classi = [
    {
      nome: 'Arcanista',
      immagine: 'images/classi/arcanist.png',
      racconto: `Nel cuore della Biblioteca Sigillata, dietro dieci porte senza serratura, esiste una stanza in cui il tempo non scorre. Lì, Lirael cammina a occhi chiusi. Le formule si scrivono da sole al suo passaggio, e l’Etere la osserva come farebbe con una divinità caduta.
  
  Nessuno sa da dove provenga. Alcuni dicono che sia nata da un esperimento fallito della Gilda. Altri, che sia il sogno di un arcanista morto, mai svanito del tutto.
  
  Ma ciò che è certo è che l’Arcanista non lancia magie. Lei ridefinisce le regole.`,
      descrizione: 'L’Arcanista è un canalizzatore puro dell’Etere, capace di modellarlo in formule complesse, scudi temporanei, esplosioni controllate o illusioni destabilizzanti. È la classe con la maggiore padronanza teorica della materia arcana e spesso l’unica a comprendere davvero come l’Etere reagisca a certi stimoli. A distanza domina il campo, ma resta fragile fisicamente. Tuttavia, ciò che gli manca in armatura lo compensa con potenza distruttiva.'
    },

    {
      nome: 'Bardo',
      immagine: 'images/classi/bard.png',
      racconto: `La leggenda vuole che ci sia stato un assedio in cui i difensori erano sul punto di cedere. Le torce erano spente, le lame spezzate, i cuori vuoti. Poi, qualcuno iniziò a suonare. Una nota sola. Seguita da un’altra. E un’altra ancora.
  
  Si dice che Kaen non parli mai. Ma che ogni sua canzone sia un frammento di futuro, rubato all’Etere stesso. Le sue melodie portano confusione, coraggio, caos. Nessuno ricorda la sua faccia. Ma tutti hanno una canzone in testa che non riescono a togliersi.
  
  Il Bardo non canta per noi. Canta per il mondo. Affinché non dimentichi.`,
      descrizione: 'Il Bardo è un combattente dell’anima. Usa strumenti musicali, parole o semplici gesti per influenzare il morale degli alleati e la lucidità dei nemici. Può potenziare l’attacco di un gruppo, rafforzarne la volontà o generare confusione tra le file avversarie. Ogni effetto ha un ritmo, ogni nota una funzione. Il Bardo agisce dove le spade non arrivano, creando armonia o dissonanza a seconda del momento.'
    },
    {
      nome: 'Berserker',
      immagine: 'images/classi/berserker.png',
      racconto: `Nelle miniere eteriche proibite, là dove il cristallo corrompe anche la pietra, si udì un ruggito. Non umano. Non animale. Qualcosa che la terra cercò di dimenticare. Poi uscì da lì, coperto di sangue e luce, e si mise a ridere.
  
  Thorkan non ha maestri. Non ha ricordi. Il suo nome è inciso su una pietra che arde da sola, nel deserto rosso del Sud. Ogni volta che combatte, una parte di lui si dissolve nell’Etere. Ma ogni volta ritorna, più affamato, più veloce.
  
  Il Berserker non vive nel tempo. È una cicatrice nel tessuto stesso della realtà.`,
      descrizione: 'Brutale, impetuoso, indomabile. Il Berserker non controlla l’Etere: lo lascia esplodere attraverso di sé. In combattimento entra in uno stato di trance che potenzia muscoli e istinti. I suoi attacchi sono devastanti, ma non caotici: dietro l’ira c’è una forma di lucidità predatoria. È in grado di sopravvivere a colpi mortali e combattere a lungo dopo aver subito ferite gravi. La sua presenza sul campo incute paura persino agli alleati.'
    },
    {
      nome: 'Cacciatore',
      immagine: 'images/classi/archer.png',
      racconto: `Nessuno l’ha mai sentita arrivare. Solo il battito d’ali di una creatura mai vista prima, un’eco dorata tra i rami, e poi il silenzio.

Lei lo chiama Ash, ma Ash non è un animale. È Etere che ha preso forma, nato dal legame con la sua anima. Il Cacciatore non addestra: crea. Non uccide per sopravvivere: colpisce per ristabilire un equilibrio.

Si racconta che provenga dalle terre selvagge a ovest di Clover, dove la natura ha inghiottito città e confini. Là dove gli altri vedono un mondo perduto, lui vede un mondo sveglio.

Ogni colpo è una scelta. Ogni creatura che lo accompagna è un ricordo.

Il Cacciatore non è mai solo. E se lo vedi… non sei più al sicuro.`,
      descrizione: 'Il Cacciatore è un arciere legato all’Etere vivente, capace di evocare famigli eterici che lo affiancano in battaglia. Preciso e furtivo, controlla il campo a distanza sfruttando sinergie tra frecce incantate e creature arcane. Il suo potere nasce dal legame con la natura e dall’istinto affinato nella solitudine dei territori selvaggi.'
    },
    {
      nome: 'Curatore Arcano',
      immagine: 'images/classi/healer.png',
      racconto: `Quando tutto tace e persino la speranza cede il passo, lui arriva. Senza nome, senza volto, solo una veste bianca che brilla appena. Le sue mani tremano, non per paura, ma per il peso che portano: il confine tra vita e oblio.
  
  Jano non cura i corpi: li convince. Li persuade che è ancora possibile. La sua voce non è mai alta, ma ogni volta che la pronuncia, il mondo sembra respirare un po’ meglio.
  
  Il Curatore Arcano è ciò che resta quando il dolore si rifiuta di vincere.`,
      descrizione: 'Discepolo della luce eterica, il Curatore Arcano è il fulcro del gruppo. Guarisce ferite, rimuove maledizioni, rafforza le difese altrui con incantamenti sottili e potenti. Alcuni curatori più esperti sono anche in grado di riportare in vita un compagno caduto, se l’Etere lo consente. La sua magia non è passiva: può infliggere danni purificanti a chi usa energie oscure. Ovunque vada, porta conforto, equilibrio e speranza.'
    },
    {
      nome: 'Guerriero',
      immagine: 'images/classi/warrior.png',
      racconto: `C’è una strada che nessuno osa più percorrere. La chiamano la Via dei Giuramenti, e al suo termine sorge una statua... che respira. Si narra che Agramar vi sia giunto una notte, con l’armatura rotta e gli occhi spenti, e che lì abbia affrontato la sua ultima battaglia. Ma il suo corpo non fu mai ritrovato.
  
  Da allora, ogni volta che Clover è in pericolo, la statua sembra mutare posizione. La sua spada punta a nord, o a est, secondo i venti della guerra. Nessuno lo ha più visto in volto, ma molti giurano di aver sentito il rintocco dei suoi passi sulla pietra.
  
  Il Warrior non cerca la gloria. Egli è l’eco di tutte le promesse non mantenute.`,
      descrizione: 'Il Guerriero incarna la potenza fisica e la determinazione dell’uomo in simbiosi con l’Etere. La sua armatura, spesso incisa con rune di protezione, amplifica la sua resistenza e lo rende un baluardo sul campo di battaglia. Non è solo un picchiatore: è stratega, guardiano e scudo vivente. In prima linea, assorbe danni che distruggerebbero un villaggio. Ogni sua carica è una dichiarazione di volontà: l’umanità non arretra.'
    },
    {
      nome: 'Necromante',
      immagine: 'images/classi/necromancer.png',
      racconto: `Nel cuore della notte, tra le nebbie che avvolgono i campi dimenticati della Vecchia Sosaria, un sussurro percorre la terra come un battito antico. Elhan cammina scalzo tra i corpi, non per pietà, ma per memoria. Ogni ossa spezzata, ogni volto annerito dal tempo, porta con sé un frammento d’Etere che i più ignorano. Ma non lui.
  
  Le sue dita si muovono nell’aria come artigli sul velluto, e la realtà si piega. Non è resurrezione, non è magia. È qualcosa di più oscuro, più antico: è connessione. Il Necromante non comanda i morti. Li ascolta. E da quell’ascolto, trae alleati, segreti, verità che nessun vivente osa pronunciare.
  
  Dove cammina, il vento si ritrae. Dove parla, il silenzio obbedisce.`,
      descrizione: 'Il Necromante è uno studioso delle profondità dell’Etere, capace di infonderlo nei corpi dei defunti per animarli come servitori o strumenti. Non si limita a evocare: ascolta l’eco dei morti, ne assorbe il sapere, li piega al proprio volere. Le sue magie infliggono danni diretti manipolando l’Etere presente negli esseri viventi, causando corruzione interiore. Un maestro della decadenza e della rinascita artificiale, temuto per ciò che sa, non solo per ciò che fa.'
    },
    {
      nome: 'Ladro',
      immagine: 'images/classi/rogue.png',
      racconto: `Le porte non sono mai chiuse. I segreti non sono mai al sicuro. Le verità... sono sempre troppo in vista.
  
  Elion non ruba per guadagno. Ruba per equilibrio. C’è chi lo accusa di omicidi che non ha mai commesso. C’è chi lo ringrazia per furti che non ha mai pianificato. Nessuno sa chi sia davvero. Ma tutti temono una sola cosa: svegliarsi e accorgersi che ciò che credevano immutabile… è svanito.
  
  Il Ladro non ha un’ombra. È lui stesso l’ombra...`,
      descrizione: 'Il Ladro è un maestro dell’occultamento, delle trappole, dell’infiltrazione. Usa l’Etere per distorcere la percezione altrui, camminare tra le ombre, manipolare serrature e menti. In combattimento è rapido, preciso, letale. I suoi attacchi mirano ai punti deboli, ai tendini, alla volontà. Ma è fuori dal combattimento che il Ladro mostra il suo vero valore: in ogni segreto svelato, in ogni tesoro rubato, in ogni volta che non è stato visto.'
    }
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.classi.length) % this.classi.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.classi.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }


}
