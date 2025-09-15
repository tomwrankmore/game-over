import logo from '/PDR_Logo_Slim_White.svg';

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      className="w-full h-auto max-w-[150px] md:max-w-[200px]"
    />
  );
};

export default Logo;
