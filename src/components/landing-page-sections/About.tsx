import LogoCloud from '../LogoCloud';
import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';

const About = () => {
  return (
    <PageContainer bgColor="bg-boycott-light" textColor="text-boycott-dark">
      <SectionHeading>About</SectionHeading>
      <SubHeading>
        This campaign is powered by a coalition of ordinary people - organisers,
        activists, humanitarians and football fans - fighting for justice,
        accountability and freedom for Palestine.
      </SubHeading>
      <LogoCloud />
    </PageContainer>
  );
};

export default About;
