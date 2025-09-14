import CTA from '../CTA';
import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import demandImg from '/ball-grenade.png';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurDemands = () => {
  const { t } = useTranslation();
  const listItems = [
    t('ourDemands.demands.1'),
    t('ourDemands.demands.2'),
    t('ourDemands.demands.3'),
  ];
  return (
    <PageContainer bgColor="bg-boycott-green" textColor="text-boycott-light">
      <SectionHeading>{t('ourDemands.title')}</SectionHeading>
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-24">
        <div>
          <SubHeading>{t('ourDemands.text')}</SubHeading>
          <ul className="space-y-4 mt-6 text-left">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5 transition-transform group-hover:scale-110">
                  <Check className="w-3 h-3" strokeWidth={2.5} color="white" />
                </div>
                <span className="leading-relaxed font-medium uppercase italic">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={demandImg}
          alt="Hero"
          className="w-full max-w-sm object-contain opacity-100"
          style={{ zIndex: 10 }}
        />
      </div>
      <CTA />
    </PageContainer>
  );
};

export default OurDemands;
