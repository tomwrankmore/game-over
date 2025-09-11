import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
// import SlantedHeading from '../SlantedHeading';
import SubHeading from '../SubHeading';

const TheWhy = () => {
  return (
    <PageContainer bgColor="bg-boycott-green" textColor="text-boycott-light">
      <SectionHeading>Why</SectionHeading>
      <div>
        <SubHeading>
          Israel is committing genocide and live streaming it to the world, yet
          they still play “the beautiful game” against our national teams and in
          our stadiums.
        </SubHeading>
      </div>
      <img
        src="/football.png"
        alt="Hero"
        className="w-full max-w-[200px] lg:max-w-sm object-contain opacity-100 absolute right-0 bottom-0"
        style={{ zIndex: 10 }}
      />
    </PageContainer>
  );
};

export default TheWhy;
