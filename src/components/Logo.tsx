import logo from '/PDR_Logo_Slim_White.svg';

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      className="min-w-[150px] sm:min-w-[200px] w-full h-auto max-w-[150px] md:max-w-[200px]"
    />
  );
};

export default Logo;
