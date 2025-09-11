import CTA from '../CTA';
import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
import SlantedHeading from '../SlantedHeading';
import SubHeading from '../SubHeading';
import { Check } from 'lucide-react';

const listItems = [
  'Boycott the Israeli National Team',
  'Boycott Israeli Clubs',
  'Ban Israeli players',
];

const OurDemands = () => {
  return (
    <PageContainer>
      <SectionHeading>Our Demand</SectionHeading>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-24 text-center lg:text-left">
        <div>
          <SubHeading>
            The heads of our Football Federations have the executive authority
            to issue a complete boycott of any team and any player.
          </SubHeading>
          <ul className="space-y-4">
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
          src="/ball-grenade.png"
          alt="Hero"
          className="w-full max-w-sm object-contain opacity-100"
          style={{ zIndex: 10 }}
        />
      </div>

      <SlantedHeading>
        No more waiting. No more excuses. Boycott Israel now.
      </SlantedHeading>
      <CTA />
    </PageContainer>
  );
};

export default OurDemands;
