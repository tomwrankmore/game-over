import LogoCloud from '../LogoCloud';
import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import WhiteBG from '/textured/White_BG-min.png';
import { useTranslation } from 'react-i18next';
import { IoLinkOutline } from 'react-icons/io5';

const bios = [
  {
    title: 'Professor Ghassan Abu-Sittah',
    link: 'https://drghassanabusittah.com/about/',
    text: 'Professor Ghassan Abu-Sittah is a British-Palestinian plastic and reconstructive surgeon, known for his humanitarian work providing medical aid in conflict zones, including Iraq, South Lebanon, and Gaza. He is a Professor of Conflict Medicine and has been a crucial witness to events in Gaza, providing evidence to the International Court of Justice.',
  },
  {
    title: 'Abed Ayoub',
    link: 'https://adc.org/adc-appoints-abed-ayoub-as-national-executive-director/',
    text: 'Abed Ayoub serves as the National Legal & Policy Director of the American -Arab Anti- Discrimination Committee (ADC), the U.S.’s largest Arab American civil rights organisation, based in Washington, D.C.',
  },
  {
    title: 'Richard Falk',
    link: 'https://gazatribunal.com/steering-committee/',
    text: 'Richard Falk serves as President of the Gaza Tribunal Project. He was previously a member of the faculty at Princeton University for 40 years and is now the Albert G. Milbank Professor of International Law Emeritus. He is also a Research Fellow at University of California, Santa Barbara, where he has been a member of the faculty for more than ten years. He served as UN Special Rapporteur of the Human Rights Council in Occupied Palestine from 2008-2014.',
  },
  {
    title: 'Craig Mokhiber',
    link: 'https://www.craigmokhiber.org/',
    text: 'Craig Gerard Mokhiber is an international human rights lawyer and activist and a former senior United Nations human rights official. In October of 2023, he left the United Nations, penning a widely read letter criticising the UN’s human rights failures in the Middle East, warning of unfolding genocide in Gaza, and calling for a new approach to Palestine and Israel based on international law, human rights, and equality.',
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <PageContainer textColor="text-boycott-dark" id="about">
      <img
        src={WhiteBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <SectionHeading>{t('about.title')}</SectionHeading>
      <SubHeading>{t('about.text')}</SubHeading>
      <LogoCloud />
      <SectionHeading>Our Advisors</SectionHeading>
      <ul className="space-y-6 mt-8">
        {bios.map((bio) => (
          <li key={bio.link}>
            <a
              href={bio.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-boycott-dark underline"
            >
              {bio.title} <IoLinkOutline className="inline mb-1" />
            </a>
            <p className="mt-2 text-boycott-dark/80 text-sm">{bio.text}</p>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default About;
