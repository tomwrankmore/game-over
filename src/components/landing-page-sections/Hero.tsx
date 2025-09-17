import { Button } from '../ui/button';
import HeroGun from '/Gun_Headline.png';
import RedBG from '/textured/Red_BG-min.png';
import { useTranslation } from 'react-i18next';
import { FaMailBulk } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const ENmailToLink =
    'info@rbfa.be,mark.bullingham@thefa.com,pdiallo@fff.fr,IanG.Maxwell@scottishfa.co.uk,paul.cooke@fai.ie,epo@epo.gr,President@fotball.no,gabinetepresidencia@rfef.es,integridad@rfef.es,prensa@rfef.es,presidenza@figc.it?subject=Football%20is%20no%20place%20for%20war%20criminals&body=To%20the%20Presidents%20of%20the%20Football%20federations%20of%20Belgium%2C%20England%2C%20France%2C%20Greece%2C%20Ireland%2C%20Italy%2C%20Norway%2C%20Scotland%20and%20Spain%0D%0A%0D%0ADear%20Presidents%2C%0D%0A%0D%0AWe%20love%20football.%0D%0A%0D%0ATo%20us%20football%20is%20a%20religion%2C%20a%20family%2C%20a%20community.%20Our%20national%20and%20club%20pitches%20are%20sacred%2C%20our%20stadium%20seats%20hallowed.%20It%20is%20here%20we%20form%20our%20closest%20bonds%2C%20our%20strongest%20memories%20and%20family%20traditions%20that%20last%20generations.%0D%0A%0D%0AFootball%20isn%E2%80%99t%20just%20a%20game.%20Football%20is%20life.%0D%0A%0D%0ABut%20today%20our%20pitches%20are%20stained%20with%20blood%2C%20and%20our%20teams%20covered%20in%20shame.%0D%0A%0D%0AIn%20Gaza%2C%20football%20pitches%20are%20turning%20into%20graveyards%2C%20dreams%20of%20football%20are%20being%20wiped%20away.%0D%0A%0D%0AIsrael%20kills%20the%20equivalent%20of%20two%20children%E2%80%99s%20football%20teams%20every%20single%20day.%20Players%2C%20fans%2C%20and%20families%20who%20live%20and%20breathe%20the%20game%20are%20being%20bombed%2C%20starved%2C%20and%20displaced.%0D%0A%0D%0AAnd%20you%20do%20nothing.%20Instead%2C%20Israel%20is%20playing%20in%20Europe%2C%20on%20our%20pitches%2C%20in%20our%20stadiums.%0D%0A%0D%0AThis%20gruesome%20show%20must%20stop.%20Where%20do%20we%20look%20when%20their%20national%20anthem%20plays%20in%20the%20stadium%2C%20knowing%20what%20crimes%20are%20being%20committed%20in%20their%20name%3F%0D%0A%0D%0AEverywhere%2C%20we%20the%20people%20are%20speaking%20out.%20In%20stadiums%20across%20the%20world%20we%20sing%20for%20Palestine%2C%20raise%20flags%2C%20and%20display%20banners%20of%20solidarity%20%E2%80%93%20often%20risking%20punishment%20for%20doing%20so.%20Our%20message%20is%20clear%3A%20football%20can%20no%20longer%20turn%20a%20blind%20eye.%0D%0A%0D%0AYou%20acted%20before.%20When%20Russia%20invaded%20Ukraine%2C%20football%20federations%20and%20associations%20across%20Europe%20boycotted%20the%20Russian%20National%20team%20and%20Russian%20club%20teams%2C%20leading%20to%20their%20eventual%20suspension%20from%20the%20sport.%0D%0A%0D%0AThe%20same%20principle%20must%20apply%20here.%20We%20value%20the%20lives%20of%20Palestinian%20children%20equally%20%E2%80%93%20do%20you%3F%0D%0A%0D%0AIf%20your%20Federation%20boycotts%20Israel%E2%80%99s%20national%20team%2C%20their%20club%20teams%2C%20and%20ban%20their%20players%2C%20UEFA%20and%20FIFA%20will%20be%20forced%20to%20listen.%20Refuse%20to%20play%20them%20now%20and%20call%20for%20Israel%20to%20be%20suspended.%0D%0A%0D%0AThis%20is%20not%20about%20politics%2C%20it%20is%20about%20humanity%2C%20about%20the%20very%20values%20our%20sport%20claims%20to%20represent.%20Are%20you%20with%20us%3F%0D%0A%0D%0ASincerely%2C%0D%0A%0D%0A%5BInsert%20name%5D';
  const FRmailToLink =
    'info@rbfa.be,mark.bullingham@thefa.com,pdiallo@fff.fr,IanG.Maxwell@scottishfa.co.uk,paul.cooke@fai.ie,epo@epo.gr,President@fotball.no,gabinetepresidencia@rfef.es,integridad@rfef.es,prensa@rfef.es,presidenza@figc.it?subject=Pas%20de%20place%20pour%20les%20criminels%20de%20guerre%20dans%20le%20football&body=Aux%20Pr%C3%A9sidents%20des%20F%C3%A9d%C3%A9rations%20de%20Football%20de%20Belgique%2C%20Angleterre%2C%20France%2C%20Gr%C3%A8ce%2C%20Irlande%2C%20Italie%2C%20Norv%C3%A8ge%2C%20%C3%89cosse%20et%20Espagne%0D%0A%0D%0AChers%20Pr%C3%A9sidents%2C%0D%0A%0D%0ANous%20aimons%20le%20football.%0D%0A%0D%0APour%20nous%2C%20le%20football%20est%20une%20religion%2C%20une%20famille%2C%20une%20communaut%C3%A9.%20Nos%20terrains%20nationaux%20et%20de%20club%20sont%20sacr%C3%A9s%2C%20nos%20places%20de%20stade%20sont%20sanctifi%C3%A9es.%20C%27est%20ici%20que%20nous%20formons%20nos%20liens%20les%20plus%20%C3%A9troits%2C%20nos%20souvenirs%20les%20plus%20forts%20et%20des%20traditions%20familiales%20qui%20durent%20des%20g%C3%A9n%C3%A9rations.%0D%0A%0D%0ALe%20football%20n%27est%20pas%20qu%27un%20jeu.%20Le%20football%2C%20c%27est%20la%20vie.%0D%0A%0D%0AMais%20aujourd%27hui%2C%20nos%20terrains%20sont%20tach%C3%A9s%20de%20sang%20et%20nos%20%C3%A9quipes%20couvertes%20de%20honte.%0D%0A%0D%0A%C3%80%20Gaza%2C%20les%20terrains%20de%20football%20se%20transforment%20en%20cimeti%C3%A8res%2C%20les%20r%C3%AAves%20de%20football%20sont%20an%C3%A9antis.%0D%0A%0D%0AIsra%C3%ABl%20tue%20l%27%C3%A9quivalent%20de%20deux%20%C3%A9quipes%20de%20football%20d%27enfants%20chaque%20jour.%20Les%20joueurs%2C%20les%20fans%20et%20les%20familles%20qui%20vivent%20et%20respirent%20le%20jeu%20sont%20bombard%C3%A9s%2C%20affam%C3%A9s%20et%20d%C3%A9plac%C3%A9s.%0D%0A%0D%0AEt%20vous%20ne%20faites%20rien.%20Au%20lieu%20de%20cela%2C%20Isra%C3%ABl%20joue%20en%20Europe%2C%20sur%20nos%20terrains%2C%20dans%20nos%20stades.%0D%0A%0D%0ACe%20spectacle%20macabre%20doit%20cesser.%20O%C3%B9%20devons-nous%20regarder%20lorsque%20leur%20hymne%20national%20retentit%20dans%20le%20stade%2C%20en%20sachant%20quels%20crimes%20sont%20commis%20en%20leur%20nom%20%3F%0D%0A%0D%0APartout%2C%20nous%2C%20le%20peuple%2C%20%C3%A9levons%20la%20voix.%20Dans%20les%20stades%20du%20monde%20entier%2C%20nous%20chantons%20pour%20la%20Palestine%2C%20levons%20des%20drapeaux%20et%20brandissons%20des%20banderoles%20de%20solidarit%C3%A9%2C%20souvent%20au%20risque%20d%27%C3%AAtre%20punis.%20Notre%20message%20est%20clair%20%3A%20le%20football%20ne%20peut%20plus%20fermer%20les%20yeux.%0D%0A%0D%0AVous%20avez%20agi%20auparavant.%20Lorsque%20la%20Russie%20a%20envahi%20l%27Ukraine%2C%20les%20f%C3%A9d%C3%A9rations%20et%20associations%20de%20football%20%C3%A0%20travers%20l%27Europe%20ont%20boycott%C3%A9%20l%27%C3%A9quipe%20nationale%20russe%20et%20les%20clubs%20russes%2C%20conduisant%20%C3%A0%20leur%20suspension%20finale%20du%20sport.%0D%0A%0D%0ALe%20m%C3%AAme%20principe%20doit%20s%27appliquer%20ici.%20La%20vie%20des%20enfants%20palestiniens%20a%20la%20m%C3%AAme%20valeur.%20La%20reconaissez-vous%20vraiment%20%3F%0D%0A%0D%0ASi%20votre%20F%C3%A9d%C3%A9ration%20boycotte%20l%27%C3%A9quipe%20nationale%20isra%C3%A9lienne%2C%20ses%20clubs%2C%20et%20bannit%20ses%20joueurs%2C%20l%27UEFA%20et%20la%20FIFA%20seront%20forc%C3%A9es%20d%27%C3%A9couter.%20Refusez%20de%20les%20affronter%20maintenant%20et%20exigez%20la%20suspension%20d%27Isra%C3%ABl.%0D%0A%0D%0AIl%20ne%20s%27agit%20pas%20de%20politique%2C%20mais%20d%27humanit%C3%A9%2C%20des%20valeurs%20m%C3%Aames%20que%20notre%20sport%20pr%C3%A9tend%20repr%C3%A9senter.%20%C3%8Ates-vous%20de%20notre%20c%C3%B4t%C3%A9%20%3F%0D%0A%0D%0ARespectueusement%2C%0D%0A%0D%0A%5BIns%C3%A9rer%20le%20nom%5D';
  const ESmailToLink =
    'info@rbfa.be,mark.bullingham@thefa.com,pdiallo@fff.fr,IanG.Maxwell@scottishfa.co.uk,paul.cooke@fai.ie,epo@epo.gr,President@fotball.no,gabinetepresidencia@rfef.es,integridad@rfef.es,prensa@rfef.es,presidenza@figc.it?subject=El%20f%C3%BAtbol%20no%20es%20lugar%20para%20criminales%20de%20Guerra&body=A%20los%20Presidentes%20de%20las%20Federaciones%20de%20F%C3%BAtbol%20de%20B%C3%A9lgica%2C%20Inglaterra%2C%20Francia%2C%20Grecia%2C%20Irlanda%2C%20Italia%2C%20Noruega%2C%20Escocia%20y%20Espa%C3%B1a%0D%0A%0D%0AEstimados%20Presidentes%2C%0D%0A%0D%0ANos%20encanta%20el%20f%C3%BAtbol.%0D%0A%0D%0APara%20nosotros%20el%20f%C3%BAtbol%20es%20una%20religi%C3%B3n%2C%20unafamilia%2C%20una%20comunidad.%20Nuestros%20campos%20nacionales%20y%20de%20club%20son%20sagrados%2C%20nuestros%20asientos%20de%20estadio%20son%20santificados.%20Es%20aqu%C3%ADdonde%20formamos%20nuestros%20lazos%20m%C3%A1s%20cercanos%2C%20nuestros%20recuerdos%20m%C3%A1s%20fuertes%20y%20tradiciones%20familiares%20que%20duran%20generaciones.%0D%0A%0D%0AEl%20f%C3%BAtbol%20no%20es%20solo%20un%20juego.%20El%20f%C3%BAtbol%20es%20vida.%0D%0A%0D%0APero%20hoy%20nuestros%20campos%20est%C3%A1n%20manchadosde%20sangre%2C%20y%20nuestros%20equipos%20cubiertos%20de%20verg%C3%BCenza.%0D%0A%0D%0AEn%20Gaza%2C%20los%20campos%20de%20f%C3%BAtbol%20se%20conviertenen%20cementerios%2C%20los%20sue%C3%B1os%20de%20f%C3%BAtbol%20est%C3%A1n%20siendo%20borrados%20por%20completo.%0D%0A%0D%0AIsrael%20mata%20el%20equivalente%20a%20dos%20equipos%20de%20f%C3%BAtbol%20infantiles%20cada%20d%C3%ADa.%20Jugadores%2C%20aficionados%20y%20familias%20que%20viven%20y%20respiran%20eljuego%20est%C3%A1n%20siendo%20bombardeados%2C%20privados%20de%20alimento%20y%20desplazados.%0D%0A%0D%0AY%20ustedes%20no%20hacen%20nada.%20En%20cambio%2C%20Israel%20juega%20en%20Europa%2C%20en%20nuestros%20campos%2C%20en%20nuestros%20estadios.%0D%0A%0D%0AEste%20espect%C3%A1culo%20horrendo%20debe%20parar.%20%C2%BFA%20hacia%20d%C3%B3nde%20miramos%20cuando%20su%20himno%20nacional%20suena%20en%20el%20estadio%2C%20sabiendo%20qu%C3%A9%20cr%C3%ADmenes%20se%20est%C3%A1n%20cometiendo%20en%20su%20nombre%3F%0D%0A%0D%0AEn%20todas%20partes%2C%20nosotros%2C%20el%20pueblo%2C%20estamos%20alzando%20la%20voz.%20En%20estadios%20de%20todo%20el%20mundo%20cantamos%20por%20Palestina%2C%20alzamos%20banderas%20y%20mostramos%20pancartas%20de%20solidaridad%2C%20a%20menudo%20arriesg%C3%A1ndonos%20a%20ser%20castigados.%20%0D%0ANuestro%20mensaje%20es%20claro%3A%20el%20f%C3%BAtbol%20ya%20no%20puede%20hacer%20la%20vista%20gorda.%0D%0A%0D%0AUstedes%20actuaron%20antes.%20Cuando%20Rusia%20invadi%C3%B3Ucrania%2C%20las%20federaciones%20y%20asociaciones%20de%20f%C3%BAtbol%20de%20toda%20Europa%20boicotearon%20a%20la%20selecci%C3%B3n%20nacional%20rusa%20y%20a%20los%20clubes%20rusos%2C%20lo%20que%20llev%C3%B3%20a%20su%20suspensi%C3%B3n%20definitiva%20del%20deporte.%0D%0A%0D%0AEl%20mismo%20principio%20debe%20aplicarse%20aqu%C3%AD.%20Nosotros%20valoramos%20las%20vidas%20de%20los%20ni%C3%B1ospalestinos%20por%20igual%20%E2%80%93%20%C2%BFy%20ustedes%3F%0D%0A%0D%0ASi%20su%20Federaci%C3%B3n%20boicotea%20a%20la%20selecci%C3%B3n%20nacional%20israel%C3%AD%2C%20a%20sus%20clubes%20y%20proh%C3%ADbe%20a%20sus%20jugadores%2C%20la%20UEFA%20y%20la%20FIFA%20se%20ver%C3%A1n%20obligadas%20a%20escuchar.%20Reh%C3%BAsense%20a%20jugar%20con%20ellos%20ahora%20y%20exijan%20que%20Israel%20sea%20suspendido.%0D%0A%0D%0AEsto%20no%20es%20sobre%20pol%C3%ADtica%2C%20es%20sobre%20humanidad%2C%20sobre%20los%20mismos%20valores%20que%20nuestro%20deportedice%20representar.%20%C2%BFEst%C3%A1n%20con%20nosotros%3F%0D%0A%0D%0AAtentamente%2C%0D%0A%0D%0A%5BInsertar%20nombre%5D';
  const ITmailToLink =
    'info@rbfa.be,mark.bullingham@thefa.com,pdiallo@fff.fr,IanG.Maxwell@scottishfa.co.uk,paul.cooke@fai.ie,epo@epo.gr,President@fotball.no,gabinetepresidencia@rfef.es,integridad@rfef.es,prensa@rfef.es,presidenza@figc.it?subject=Il%20calcio%20non%20%C3%A8%20un%20posto%20per%20criminali%20di%20guerra&body=Ai%20Presidenti%20delle%20Federazioni%20Calcistiche%20di%20Belgio%2C%20Inghilterra%2C%20Francia%2C%20Grecia%2C%20Irlanda%2C%20Italia%2C%20Norvegia%2C%20Scozia%20e%20Spagna%0D%0A%0D%0ACari%20Presidenti%2C%0D%0A%0D%0ANoi%20amiamo%20il%20calcio.%0D%0A%0D%0APer%20noi%20il%20calcio%20%C3%A8%20una%20religione%2C%20una%20famiglia%2C%20una%20comunit%C3%A0.%20I%20nostri%20campi%20nazionali%20e%20di%20club%20sono%20sacri%2C%20come%20sono%20sacri%20i%20nostri%20posti%20allo%20stadio.%20%C3%88%20qui%20che%20formiamo%20i%20legami%20pi%C3%B9%20stretti%2C%20i%20ricordi%20pi%C3%B9%20intensi%20e%20tradizioni%20familiari%20che%20durano%20generazioni.%0D%0A%0D%0AIl%20calcio%20non%20%C3%A8%20solo%20un%20gioco.%20Il%20calcio%20%C3%A8%20vita.%0D%0A%0D%0AMa%20oggi%20i%20nostri%20campi%20sono%20macchiati%20di%20sangue%2C%20e%20le%20nostre%20squadre%20coperte%20di%20vergogna.%0D%0A%0D%0AA%20Gaza%2C%20i%20campi%20da%20calcio%20si%20stanno%20trasformando%20in%20cimiteri%2C%20i%20sogni%20del%20calcio%20vengono%20spazzati%20via.%0D%0A%0D%0AIsraele%20uccide%20l%27equivalente%20di%20due%20squadre%20di%20calcio%20di%20bambini%20ogni%20singolo%20giorno.%20Giocatori%2C%20tifosi%20e%20famiglie%20che%20vivono%20e%20respirano%20il%20gioco%20vengono%20bombardati%2C%20privati%20del%20cibo%20e%20sfollati.%0D%0A%0D%0AE%20voi%20non%20fate%20nulla.%20Invece%2C%20Israele%20gioca%20in%20Europa%2C%20sui%20nostri%20campi%2C%20nei%20nostri%20stadi.%0D%0A%0D%0AQuesto%20macabro%20spettacolo%20deve%20finire.%20Dove%20volgiamo%20lo%20sguardo%20quando%20il%20loro%20inno%20nazionale%20suona%20nello%20stadio%2C%20sapendo%20quali%20crimini%20vengono%20commessi%20in%20loro%20nome%3F%0D%0A%0D%0AOvunque%2C%20noi%2C%20il%20popolo%2C%20stiamo%20alzando%20la%20voce.%20Negli%20stadi%20di%20tutto%20il%20mondo%20cantiamo%20per%20la%20Palestina%2C%20alziamo%20bandiere%20e%20mostriamo%20striscioni%20di%20solidariet%C3%A0%2C%20spesso%20rischiando%20punizioni%20per%20farlo.%20Il%20nostro%20messaggio%20%C3%A8%20chiaro%3A%20il%20calcio%20non%20pu%C3%B2%20pi%C3%B9%20far%20finta%20di%20niente.%0D%0A%0D%0AVoi%20avete%20agito%20in%20passato.%20Quando%20la%20Russia%20ha%20invasa%20l%27Ucraina%2C%20le%20federazioni%20e%20le%20associazioni%20calcistiche%20in%20tutta%20Europa%20hanno%20boicottato%20la%20Nazionale%20russa%20e%20le%20squadre%20di%20club%20russe%2C%20portando%20alla%20loro%20definitiva%20sospensione%20dallo%20sport.%0D%0A%0D%0ALo%20stesso%20principio%20deve%20valere%20qui.%20Noi%20valutiamo%20le%20vite%20dei%20bambini%20palestinesi%20allo%20stesso%20modo%20%E2%80%93%20e%20voi%3F%0D%0A%0D%0ASe%20la%20vostra%20Federazione%20boicotta%20la%20nazionale%20israeliana%2C%20le%20sue%20squadre%20di%20club%20e%20bandisce%20i%20suoi%20giocatori%2C%20UEFA%20e%20FIFA%20saranno%20costrette%20ad%20ascoltare.%20Rifiutatevi%20di%20giocare%20con%20loro%20ora%20e%20chiedete%20la%20sospensione%20di%20Israele.%0D%0A%0D%0ANon%20si%20tratta%20di%20politica%2C%20si%20tratta%20di%20umanit%C3%A0%2C%20dei%20valori%20stessi%20che%20il%20nostro%20sport%20afferma%20di%20rappresentare.%20Siete%20con%20noi%3F%0D%0A%0D%0ACordialmente%2C%0D%0A%0D%0A%5BInserire%20nome%5D';
  const mailToLink =
    {
      en: ENmailToLink,
      fr: FRmailToLink,
      es: ESmailToLink,
      it: ITmailToLink,
    }[i18n.language] || ENmailToLink;

  return (
    <div className="relative h-full w-full overflow-hidden pt-12 mt-[68px] sm:mt-[74px] p-4">
      <img
        src={RedBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <img
        src={HeroGun}
        alt="Your pitch, your choice. Boyctt Israel"
        className="max-w-[200px] w-full sm:max-w-sm mx-auto mb-12"
      />

      <div className="relative w-full flex items-center justify-center ">
        <div className="relative w-full max-w-4xl aspect-video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ucm5lhFB7Ps"
            playing
            controls={false}
            width="100%"
            height="100%"
            className="rounded-2xl overflow-hidden shadow-2xl"
          />
        </div>
      </div>
      <div id="buttons" className="pt-24">
        <a
          href={`mailto:${mailToLink}`}
          target="_blank"
          rel="noreferrer"
          className="hover:underline my-12 block text-center w-fit mx-auto"
        >
          <Button
            size="lg"
            variant="default"
            className="text-boycott-light uppercase font-bold bg-boycott-black hover:underline cursor-pointer rounded-full py-6"
          >
            <FaMailBulk />
            {t('ourDemands.button')}
          </Button>
        </a>
        <a
          href="https://linktr.ee/game.over.israel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline my-12 block text-center w-fit mx-auto"
        >
          <Button
            size="lg"
            variant="outline"
            className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4"
          >
            {t('heroTitle')}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
