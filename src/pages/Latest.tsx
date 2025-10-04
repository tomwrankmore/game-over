import GreenBG from '/textured/Green_BG-min.png';
import SectionHeading from '@/components/SectionHeading';
// import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { FaFilePdf } from 'react-icons/fa';

const featuredPress = [
  {
    articles: [
      {
        title: 'Zeteo',
        date: '16/09/25',
        headline:
          '‘Game Over Israel’ Campaign Demands Boycott of Israeli Soccer Clubs Over Government’s Killing of Palestinian Players',
        url: 'https://zeteo.com/p/game-over-israel-campaign-demands',
        isFeatured: true,
      },
      {
        title: 'Reuters',
        date: '17/09/25',
        headline:
          'Advocacy groups call for European ban on Israel team and players in Times Square billboard',
        url: 'https://www.reuters.com/sports/soccer/advocacy-groups-call-european-ban-israel-team-players-times-square-billboard-2025-09-17/',
        isFeatured: true,
      },
      {
        title: 'The National News',
        date: '17/09/25',
        headline:
          '#GameOverIsrael aims to see country removed from football ’until justice is delivered’',
        url: 'https://www.thenationalnews.com/sport/football/2025/09/17/game-over-israel-aims-to-see-country-removed-from-football-until-justice-is-delivered-for-palestinians/',
        isFeatured: true,
      },
      {
        title: 'NRK',
        date: '17/09/25',
        headline: 'Ber NFF boikotte Israel – aksjonerte på Ullevaal',
        url: 'https://www.nrk.no/nyheter/ber-nff-boikotte-israel-_-aksjonerte-pa-ullevaal-1.17575125',
        isFeatured: true,
      },
      {
        title: 'AJ+',
        date: '18/09/25',
        headline: 'Football is important, but so are human rights.',
        url: 'https://www.instagram.com/reel/DOwjGipjOQV/?igsh=djZlbjd2ZXN4dm52',
        isFeatured: true,
      },
      {
        title: 'FT',
        date: '20/09/25',
        headline:
          '‘It’s our South Africa moment’: the growing global boycott of Israel',
        url: 'https://on.ft.com/3IkT8N0',
        isFeatured: true,
      },
      {
        title: 'The Guardian',
        date: '25/09/25',
        headline:
          'Israel’s future in Uefa could come to a head before World Cup qualifiers',
        url: 'https://www.theguardian.com/football/2025/sep/25/israel-future-in-uefa-october-world-cup-qualifiers-suspension-maccabi-tel-aviv?CMP=Share_AndroidApp_Other',
        isFeatured: true,
      },
      {
        title: 'TRT World',
        date: '26/09/25',
        headline: 'Could Israel face a European football ban?',
        url: 'https://youtu.be/8dwv4sQ5Hfw?feature=shared',
        isFeatured: true,
      },
      {
        title: 'Ad Age',
        date: '26/09/25',
        headline: '#GameOverIsrael',
        url: 'https://adage.com/creativity/campaigns-commercials/aa-creative-ads-today-blue-moon-bose-chunky-crocs-mms-mcdonalds-china/?utm_id=gfta-ur-250926&share-code=5FTD2IXEEJAEZLMV5HQ2HSFBS4&user_id=5105023&customer_secondary_source=aac_articleGifting',
        isFeatured: true,
      },
      {
        title: 'Al Jazeera',
        date: '29/09/25',
        headline:
          'Should Israel be banned from international competitions? | Inside Story',
        url: 'https://m.youtube.com/watch?v=hriMIHOvvQg&pp=ygUMaW5zaWRlIHN0b3J5',
        isFeatured: true,
      },
      {
        title: 'Sky News',
        date: '30/09/25',
        headline: 'Atrocities are normalised through culture',
        url: 'https://x.com/skynews/status/1973135098242314613?s=46',
        isFeatured: true,
      },
    ],
  },
];

const otherPress = [
  {
    title: 'The National Scot',
    date: '16/09/25',
    headline:
      '9 European football federations urged to boycott Israel | The National',
    url: 'https://www.thenational.scot/news/25470495.9-european-football-federations-urged-boycott-israel/',
    isFeatured: false,
  },
  {
    title: 'Arab News',
    date: '16/09/25',
    headline: 'Global football campaign aims to boycott Israel',
    url: 'https://www.arabnews.com/node/2615558/sport',
    isFeatured: false,
  },
  {
    title: 'Novara Media',
    date: '16/09/25',
    headline: 'The #GameOverIsrael campaign, launched today',
    url: 'https://www.instagram.com/p/DOq0saTE-KB/?igsh=d2twcG5sNHJ4bWRu',
    isFeatured: false,
  },
  {
    title: 'Middle East Eye',
    date: '16/09/25',
    headline:
      '#GameOverIsrael: European campaign calls to boycott Israel in football⁠',
    url: 'https://www.instagram.com/reel/DOtJzRlDO43/?igsh=NTM0MXh6d2NveDRo',
    isFeatured: false,
  },
  {
    title: 'MSN',
    date: '17/09/25',
    headline: '’Game Over Israel’ campaign seeks to bench Israeli soccer',
    url: 'https://www.msn.com/en-us/sports/soccer/game-over-israel-campaign-seeks-to-bench-israeli-soccer-players-teams-on-global-stage/ar-AA1MH0WF',
    isFeatured: false,
  },
  {
    title: 'VG',
    date: '17/09/25',
    headline: 'NFF oppfordres til Israel-boikott - aksjonerte på Ullevaal',
    url: 'https://www.vg.no/sport/i/QMG1Ex/nff-og-andre-europeiske-fotballforbund-oppfordres-til-aa-boikotte-israel',
    isFeatured: false,
  },
  {
    title: 'TV2nyheter',
    date: '17/09/25',
    headline:
      'Flere demonstranter møtte opp utenfor Ullevaal Stadion for å få NFF til å jobbe for at Israel blir utestengt fra internasjonal fotball.',
    url: 'https://www.instagram.com/reel/DOtpkvbgh3I/?igsh=MTFycTAxaGRwdHllcg%3D%3D',
    isFeatured: false,
  },
  {
    title: 'The New Arab',
    date: '17/09/25',
    headline: '#GameOverIsrael: Activists urge Israel football ban over Gaza',
    url: 'https://www.newarab.com/news/gameoverisrael-activists-urge-israel-football-ban-over-gaza',
    isFeatured: false,
  },
  {
    title: 'Gulf Times',
    date: '17/09/25',
    headline:
      'A billboard in Times Square displays the message "Soccer Federations: Boycott Israel" in New York CityGulf Times',
    url: 'https://www.gulf-times.com/article/710893/region/a-billboard-in-times-square-displays-the-message-soccer-federations-boycott-israel-in-new-york-city',
    isFeatured: false,
  },
  {
    title: 'Sportstar',
    date: '17/09/25',
    headline:
      'Advocacy groups use Times Square billboard to call for European ban on Israel football team, playersSportstar',
    url: 'https://sportstar.thehindu.com/football/advocacy-groups-use-time-square-billboard-european-ban-israel-football-team-protest-boycott-football-news/article70059713.ece',
    isFeatured: false,
  },
  {
    title: 'The Gazette',
    date: '17/09/25',
    headline:
      'Soccer-Advocacy groups call for European ban on Israel team and players in Times Square billboardThe Gazette',
    url: 'https://gazette.com/2025/09/16/soccer-advocacy-groups-call-for-european-ban-on-israel-team-players-in-times-square-billboard-82fe930e-f584-5c8f-b814-90746033f225/',
    isFeatured: false,
  },
  {
    title: 'Street Insider',
    date: '17/09/25',
    headline:
      'Soccer-Advocacy groups call for European ban on Israel team, players in',
    url: 'https://www.streetinsider.com/Reuters/Soccer-Advocacy+groups+call+for+European+ban+on+Israel+team+and+players+in+Times+Square+billboard/25341967.html',
    isFeatured: false,
  },
  {
    title: 'PressTV',
    date: '18/09/25',
    headline: 'Game Over Israel',
    url: 'https://www.presstv.ir/Detail/2025/09/18/755283/Game-Over-Israel',
    isFeatured: false,
  },
  {
    title: 'Nieuwsuur',
    date: '19/09/25',
    headline:
      'De roep om Israël uit te sluiten klinkt steeds luider in de culturele sector en de sportwereld. Kan zo`n boycot effect hebben?',
    url: 'https://x.com/Nieuwsuur/status/1969134478028066844',
    isFeatured: false,
  },
  {
    title: 'Info War',
    date: '21/09/25',
    headline:
      'Ανεπιθύμητη στην Τούμπα η Μακάμπι Τελ Αβίβ λένε εκατοντάδες οπαδοί του ΠΑΟΚ',
    url: 'https://info-war.gr/anepithymiti-stin-toympa-i-makampi-tel/',
    isFeatured: false,
  },
  {
    title: 'Vocal Politics',
    date: '22/09/25',
    headline: 'A global coalition of rights groups, football fans, players...',
    url: 'https://www.instagram.com/reel/DO6TB_9EQmk/?igsh=MTdlMjdxd3VkYzl4dw==',
    isFeatured: false,
  },
  {
    title: 'Telegraph',
    date: '23/09/25',
    headline:
      'Bob Vylan singer fronting campaign to kick Israel out of football',
    url: 'https://www.telegraph.co.uk/football/2025/09/23/bob-vylan-singer-fronting-campaign-kick-israel-out-football/',
    isFeatured: false,
  },
  {
    title: 'The Times',
    date: '23/09/25',
    headline:
      'Bob Vylan singer fronting campaign to kick Israel out of football',
    url: 'https://www.thetimes.com/uk/politics/article/bob-vylan-singer-calls-for-israeli-footballers-and-teams-to-be-banned-b9hcwmdkl',
    isFeatured: false,
  },
];

const Latest = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen h-full">
      <div
        className="relative overflow-hidden min-h-screen pt-16"
        id="our-demands"
      >
        <img
          src={GreenBG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="mx-auto container py-24 px-6 text-left text-boycott-light">
          <SectionHeading>{t('latest.title')}</SectionHeading>
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-24 text-left justify-start">
            <div>
              <a
                href="/GOIPressRelease.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:underline block text-center w-fit mb-8 md:mb-24"
              >
                <Button
                  size="lg"
                  variant="default"
                  className="text-boycott-light uppercase font-bold bg-boycott-black hover:underline cursor-pointer rounded-full py-6"
                >
                  <FaFilePdf />
                  Read Latest Press release
                </Button>
              </a>
              <h2 className="relative z-20 text-left text-xl mb-4">
                Top News Coverage
              </h2>
              <ul className="space-y-4 mt-6 flex flex-col items-left">
                {[...featuredPress[0].articles]
                  .reverse()
                  .map((article, index) => (
                    <li
                      key={index}
                      className="flex flex-col gap-1 group tracking-wider border-b border-boycott-light/25 pb-4 relative"
                    >
                      <span className="font-bold">{article.title}</span>
                      {/* <span className="absolute top-0 right-0 text-xs font-light italic text-boycott-light/50 border border-boycott-light/50 px-2 py-0.5 rounded-full">
                        Featured
                      </span> */}
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:opacity-75"
                      >
                        <span className="text-sm font-medium">
                          {article.headline}
                        </span>
                      </a>
                      <span className="text-xs italic opacity-75">
                        {article.date}
                      </span>
                    </li>
                  ))}
              </ul>
              <h2 className="relative z-20 text-left text-xl mb-4 mt-12">
                Other Coverage
              </h2>
              <ul className="space-y-4 mt-6 flex flex-col items-left">
                {otherPress.reverse().map((article, index) => (
                  <li
                    key={index}
                    className="flex flex-col gap-1 group tracking-wider border-b border-boycott-light/25 pb-4"
                  >
                    <span className="font-bold">{article.title}</span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      <span className="text-sm font-medium">
                        {article.headline}
                      </span>
                    </a>
                    <span className="text-xs italic opacity-75">
                      {article.date}
                    </span>
                  </li>
                ))}
              </ul>
              {/* <ul className="space-y-4 mt-6 list-disc list-inside flex flex-col items-left">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 group demand-item tracking-wider"
                  >
                    <div className="hidden sm:flex flex-shrink-0 w-5 h-5 rounded-full bg-primary items-center justify-center mt-0.5 transition-transform group-hover:scale-110">
                      <GoDotFill
                        className="w-3 h-3"
                        strokeWidth={2.5}
                        color="white"
                      />
                    </div>
                    <span className="leading-relaxed font-medium uppercase text-xl not-italic">
                      {item}
                    </span>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
