import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GuidaSection {
  type: 'title' | 'paragraph' | 'list' | 'images' | 'link';
  content?: string;        // per title e paragraph
  items?: string[];        // per list e images (liste di stringhe o src)
  url?: string;            // per link
  linkText?: string;       // per link
}
interface Classe {
  nome: string;
  immaginegdr: string;
  descrizione: string;
  guida: GuidaSection[];
}

@Component({
  selector: 'app-classi',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './classi.component.html',
  styleUrls: ['./classi.component.scss']
})
export class ClassiComponent {

  classi: Classe[] = [
    {
      nome: 'Guerriero',
      immaginegdr: 'images/classi/warrior.png',
      descrizione: 'Il Guerriero incarna la potenza fisica e la determinazione dell\'uomo in simbiosi con l\'Etere. La sua armatura, spesso incisa con rune di protezione, amplifica la sua resistenza e lo rende un baluardo sul campo di battaglia. Non è solo un picchiatore: è stratega, guardiano e scudo vivente. In prima linea, assorbe danni che distruggerebbero un villaggio. Ogni sua carica è una dichiarazione di volontà: l\'umanità non arretra.',
      guida: [
        { type: 'title', content: 'GUIDA AL GUERRIERO' },
        { type: 'paragraph', content: 'Esperto combattente dedito all\'arte della guerra. È l\'unica classe in grado di indossare armature di piastre e scaglie.' },
        {
          type: 'list', items: [
            'Può utilizzare tutti i colpi speciali delle armi',
            'Può indossare gli scudi'
          ]
        },
        { type: 'paragraph', content: 'Può utilizzare lo scudo per attirare l\'attenzione delle creature, la riuscita è basata sulla skill Parare, per attivare la meccanica basterà doppioclickare lo scudo e successivamente la creatura.' },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Tattiche Combattive',
            'Parare',
            'Combattive',
            'Anatomia',
            'Curare Ferite',
            'Resistenza alla magia'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/warrior1.png']
        }
      ]
    },
    {
      nome: 'Berserker',
      immaginegdr: 'images/classi/berserker.png',
      descrizione: 'Brutale, impetuoso, indomabile. Il Berserker non controlla l\'Etere: lo lascia esplodere attraverso di sé. In combattimento entra in uno stato di trance che potenzia muscoli e istinti. I suoi attacchi sono devastanti, ma non caotici: dietro l\'ira c\'è una forma di lucidità predatoria. È in grado di sopravvivere a colpi mortali e combattere a lungo dopo aver subito ferite gravi. La sua presenza sul campo incute paura persino agli alleati.',
      guida: [
        { type: 'title', content: 'GUIDA AL BERSERKER' },
        { type: 'paragraph', content: 'Combattente versatile in grado di causare ingenti danni e supportare il gruppo tramite l\'etere rilasciato dai suoi impetuosi urli.' },
        { type: 'paragraph', content: 'Può indossare tutte le tipologie di armature ad eccezione delle piastre e scaglie. È l\'unico a poter indossare l\'armatura da berserker.' },
        { type: 'paragraph', content: 'È in grado di canalizzare l\'etere e liberarlo sotto forma di possenti urli in grado di influenzare creature, avversari e compagni.' },
        { type: 'paragraph', content: 'Per utilizzare le proprie abilità di classe è necessario accumulare “Rabbia” che influenzerà l\'efficacia delle abilità. La rabbia può essere generata tramite i colpi inflitti.' },
        { type: 'paragraph', content: 'Ottimo supporto e guerriero d\'assalto, ricercato da molti gruppi.' },
        {
          type: 'list', items: [
            'Può utilizzare tutti i colpi speciali delle armi',
            'Può indossare gli scudi'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Tattiche Combattive',
            'Parare',
            'Combattive',
            'Anatomia',
            'Curare Ferite',
            'Resistenza alla magia'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/berserker1.png'
          ]
        }
      ]
    },
    {
      nome: 'Bardo',
      immaginegdr: 'images/classi/bard.png',
      descrizione: 'Il Bardo è un combattente dell\'anima. Usa strumenti musicali, parole o semplici gesti per influenzare il morale degli alleati e la lucidità dei nemici. Può potenziare l\'attacco di un gruppo, rafforzarne la volontà o generare confusione tra le file avversarie. Ogni effetto ha un ritmo, ogni nota una funzione. Il Bardo agisce dove le spade non arrivano, creando armonia o dissonanza a seconda del momento.',
      guida: [
        { type: 'title', content: 'GUIDA AL BARDO' },
        { type: 'paragraph', content: 'Classe di supporto versatile in grado di debilitare le creature tramite le skills bardiche, potenziare gli alleati o infliggere danni tramite l\'etere infuso nelle sue note.' },
        { type: 'paragraph', content: 'Può indossare tutte le tipologie di armature sino alla Maglia/Anelli.' },
        { type: 'paragraph', content: 'Per utilizzare, potenziare e migliorare le abilità di classe è necessario accumulare “Note Eteriche”, generate tramite Pacificare, Provocare e Dissonanza.' },
        { type: 'paragraph', content: 'Supporto indispensabile per ogni gruppo.' },
        {
          type: 'list', items: [
            'Può utilizzare il primo colpo speciale delle armi',
            'Può indossare gli scudi'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Suonare',
            'Provocare',
            'Pacificare',
            'Dissonanza'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/bard1.png'
          ]
        }
      ]
    },
    {
      nome: 'Ladro',
      immaginegdr: 'images/classi/rogue.png',
      descrizione: 'Il Ladro è un maestro dell\'occultamento, delle trappole, dell\'infiltrazione. Usa l\'Etere per distorcere la percezione altrui, camminare tra le ombre, manipolare serrature e menti. In combattimento è rapido, preciso, letale. I suoi attacchi mirano ai punti deboli, ai tendini, alla volontà. Ma è fuori dal combattimento che il Ladro mostra il suo vero valore: in ogni segreto svelato, in ogni tesoro rubato, in ogni volta che non è stato visto.',
      guida: [
        { type: 'title', content: 'GUIDA AL LADRO' },
        { type: 'paragraph', content: 'Classe combattente in grado di utilizzare sia armi corpo a corpo che a distanza, sfrutta le ombre e le armi corte per colpire letalmente i nemici.' },
        { type: 'paragraph', content: 'Può utilizzare tutte le tipologie di armature sino alla Maglia/Anelli.' },
        { type: 'paragraph', content: 'Tramite le sue abilità è in grado di colpire di nascosto i punti deboli dei nemici infliggendo ingenti danni.' },
        { type: 'paragraph', content: 'Per utilizzare, potenziare e migliorare le abilità di classe è necessario accumulare cariche di “Letalità”, generate tramite i colpi inflitti o tramite l\'abilità [Mutilare].' },
        { type: 'paragraph', content: 'Ottimo combattente, fondamentale per raccogliere i tesori nascosti nei bauli!' },
        {
          type: 'list', items: [
            'Può utilizzare tutti i colpi speciali delle armi',
            'Non può utilizzare gli scudi'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Tattiche Combattive',
            'Nascondersi',
            'Maneggiare Coltelli',
            'Anatomia',
            'Curare Ferite',
            'Muoversi Silenziosamente',
            'Avvelenare'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/rogue1.png'
          ]
        }
      ]
    },
    {
      nome: 'Cacciatore',
      immaginegdr: 'images/classi/archer.png',
      descrizione: 'Il Cacciatore è un arciere legato all\'Etere vivente, capace di evocare famigli eterici che lo affiancano in battaglia. Preciso e furtivo, controlla il campo a distanza sfruttando sinergie tra frecce incantate e creature arcane. Il suo potere nasce dal legame con la natura e dall\'istinto affinato nella solitudine dei territori selvaggi.',
      guida: [
        { type: 'title', content: 'GUIDA AL CACCIATORE' },
        { type: 'paragraph', content: 'Combattente specializzato nel combattimento a distanza che non disdegna l\'utilizzo delle armi corpo a corpo.' },
        { type: 'paragraph', content: 'È in grado di canalizzare l\'etere per aumentare l\'efficacia delle munizioni presente nella sua faretra o creare famigli eterici per supportarlo in battaglia.' },
        { type: 'paragraph', content: 'Può utilizzare tutte le tipologie di armature sino alla Maglia/Anelli.' },
        { type: 'paragraph', content: 'Può potenziare le sue abilità tramite le cariche di “precisione” generabili tramite i colpi inflitti con dardi o frecce.' },
        {
          type: 'list', items: [
            'Può utilizzare tutti i colpi speciali delle armi',
            'Non può utilizzare scudi'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Tattiche Combattive',
            'Mirare',
            'Anatomia',
            'Zoologia',
            'Addestrare animali',
            'Veterinaria'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/archer1.png'
          ]
        }
      ]
    },
    {
      nome: 'Curatore Arcano',
      immaginegdr: 'images/classi/healer.png',
      descrizione: 'Discepolo della luce eterica, il Curatore Arcano è il fulcro del gruppo. Guarisce ferite, rimuove maledizioni, rafforza le difese altrui con incantamenti sottili e potenti. Alcuni curatori più esperti sono anche in grado di riportare in vita un compagno caduto, se l\'Etere lo consente. La sua magia non è passiva: può infliggere danni purificanti a chi usa energie oscure. Ovunque vada, porta conforto, equilibrio e speranza.',
      guida: [
        { type: 'title', content: 'GUIDA AL CURATORE ARCANO' },
        { type: 'link', linkText: '📖 Leggi l\'approfondimento GDR sul Curatore Arcano', url: '/approfondimenti-gdr/curatore-arcano' },
        { type: 'paragraph', content: 'Studioso in grado di canalizzare l\'etere in energie curative in grado di supportare i compagni in battaglia e risanare le loro ferite.' },
        { type: 'paragraph', content: 'È in grado di canalizzare l\'etere durante la sua manipolazione ed accumularlo in cariche di “essenza” per liberarla in una esplosione curativa.' },
        { type: 'paragraph', content: 'Può utilizzare tutte le tipologie di armature di pelle, sino all\'armatura d\'osso. Quest\'ultima però comporta l\'impossibilità di meditare.' },
        { type: 'paragraph', content: 'L\'essenza generata potrà essere utilizzata a piacere, tramite il comando [PotenzaCuratore, per potenziare alcuni incantesimi.' },
        { type: 'paragraph', content: 'Può accedere agli incantesimi tramite il comando [MagieCuratore o tramite il gump [Status nella sezione \'Abilità di Classe\'' },
        {
          type: 'list', items: [
            'Non può utilizzare i colpi speciali delle armi',
            'Non può utilizzare scudi'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Magia',
            'Valutare Intelligenza',
            'Meditare',
            'Curare',
            'Anatomia'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/healer2.png'

          ]
        },
        { type: 'title', content: 'SPECIALIZZAZIONI:' },
        { type: 'paragraph', content: 'Ci sono tre specializzazioni, per cambiare stile bisognerà interagire con l\'essenza cristallizzata facilmente trovabile presso la bottega del Curatore.' },
        {
          type: 'images', items: [
            'images/classi/healer1.png'
          ]
        }
      ]
    },
    {
      nome: 'Arcanista',
      immaginegdr: 'images/classi/arcanist.png',
      descrizione: 'L\'Arcanista è un canalizzatore puro dell\'Etere, capace di modellarlo in formule complesse, scudi temporanei, esplosioni controllate o illusioni destabilizzanti. È la classe con la maggiore padronanza teorica della materia arcana e spesso l\'unica a comprendere davvero come l\'Etere reagisca a certi stimoli. A distanza domina il campo, ma resta fragile fisicamente. Tuttavia, ciò che gli manca in armatura lo compensa con potenza distruttiva.',
      guida: [
        { type: 'title', content: 'GUIDA ALL\'ARCANISTA' },
        { type: 'paragraph', content: 'Studioso in grado di canalizzare l\'etere in forme elementali. È in grado di utilizzare l\'elemento del fuoco, del freddo, dell\'energia e della terra.' },
        {
          type: 'list', items: [
            'Il piromante può generare cariche di Massa Critica che influenza la potenza dei cast e possono essere utilizzate come reagente per alcuni cast per effetti peculiari',
            'Il Criomante genera cariche di Agilità Mentale che riducono il consumo di mana degli Incantesimi',
            'L’elettromante genera Cariche Statiche che influiscono su alcuni dei suoi Incantesimi',
            'Il geomante è in grado di fondersi alla terra stessa per potenziare alcuni dei suoi incantesimi'
               ]
        },
        { type: 'paragraph', content: 'È in grado di accumulare cariche di “Concentrazione” per cambiare o potenziare gli effetti dei suoi incantesimi. Possono essere generate tramite l\'utilizzo di incantesimi o meditando.' },
        { type: 'paragraph', content: 'Può utilizzare tutte le tipologie di armature sino alla borchiata che fornirà un malus alla meditazione.' },
        { type: 'paragraph', content: 'La Concentrazione generata potrà essere utilizzata a piacere, tramite il comando [PotenzaArcana, per potenziare alcuni incantesimi' },
        { type: 'paragraph', content: 'Inoltre ogni carica di concentrazione garantisce un ritorno di mana sugli incantesimi in base al danno effettuato' },
        { type: 'paragraph', content: 'Può visualizzare gli incantesimi tramite il comando [Magie o tramite il gump [Status nella sezione \'Abilità di Classe\'' },
        { type: 'paragraph', content: 'Può interagire con le Fonti Arcane, scegliendo l\'elemento in cui canalizzare l\'etere.' },
        {
          type: 'list', items: [
            'Non può utilizzare i colpi speciali delle armi',
            'Non può utilizzare scudi'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Magia',
            'Valutare Intelligenza',
            'Meditare',
            'Identificare Oggetti (potenzia gli incantesimi)'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/arcanist2.png'
          ]
        },
        { type: 'title', content: 'SPECIALIZZAZIONI:' },
        { type: 'paragraph', content: 'Ci sono quattro specializzazioni, per cambiare stile bisognerà interagire con la fonte arcana facilmente trovabile presso la bottega dell\'Arcanista.' },
        {
          type: 'images', items: [
            'images/classi/arcanist1.png'
          ]
        }
      ]
    },
    {
      nome: 'Necromante',
      immaginegdr: 'images/classi/necromancer.png',
      descrizione: 'Il Necromante è uno studioso delle profondità dell\'Etere, capace di infonderlo nei corpi dei defunti per animarli come servitori o strumenti. Non si limita a evocare: ascolta l\'eco dei morti, ne assorbe il sapere, li piega al proprio volere. Le sue magie infliggono danni diretti manipolando l\'Etere presente negli esseri viventi, causando corruzione interiore. Un maestro della decadenza e della rinascita artificiale, temuto per ciò che sa, non solo per ciò che fa.',
      guida: [
        { type: 'title', content: 'GUIDA AL NECROMANTE' },
        { type: 'link', linkText: '📖 Leggi l\'approfondimento GDR sul Necromante', url: '/approfondimenti-gdr/necromante' },
        { type: 'paragraph', content: 'Studioso in grado di canalizzare l\'etere all\'interno di corpi inanimati e specializzato nell\'utilizzo degli incanti velenosi.' },
        { type: 'paragraph', content: 'È in grado di accumulare cariche \'necromantiche\' per utilizzare o alterare l\'effetto dei propri incantesimi. Possono essere generate tramite l\'utilizzo di incantesimi, meditando o tramite la skill Ascoltare gli Spiriti.' },
        { type: 'paragraph', content: 'Le anime generate potranno essere utilizzate a piacere tramite il comando [PotenzaNecromantica, per potenziare alcuni incantesimi' },
        { type: 'paragraph', content: 'Con la Specializzazione Distruzione è in grado di utilizzare gli attacchi speciali delle armi, con almeno 70 nella skill corrispondente' },
        { type: 'paragraph', content: 'Può utilizzare tutte le tipologie di armature sino alle ossa senza alcun malus alla meditazione.' },
        { type: 'paragraph', content: 'Può visualizzare i propri incantesimi tramite il comando [MagieNecromantiche o tramite il gump [Status nella sezione \'Abilità di Classe\'' },
        {
          type: 'list', items: [
            'Non può utilizzare i colpi speciali delle armi',
            'Non può utilizzare scudi',
            'Non può curarsi utilizzando le bende'
          ]
        },
        { type: 'paragraph', content: 'Skill di classe consigliate:' },
        {
          type: 'list', items: [
            'Necromanzia',
            'Ascoltare gli Spiriti',
            'Meditare',
            'Avvelenare'
          ]
        },
        {
          type: 'images', items: [
            'images/classi/necromancer2.png'

          ]
        },
        { type: 'title', content: 'SPECIALIZZAZIONI:' },
        { type: 'paragraph', content: 'Ci sono tre specializzazioni, per cambiare stile bisognerà interagire con lo scrittoio da studio facilmente trovabile presso la bottega del Necromante.' },
        {
          type: 'images', items: [
            'images/classi/necromancer1.png'
          ]
        }
      ]
    }
  ];

  selectedClasseIndex = 0;

  selectClasse(index: number) {
    this.selectedClasseIndex = index;
  }

  get selectedClasse(): Classe {
    return this.classi[this.selectedClasseIndex];
  }
}
