const Hero = () => {
  return (
    <div className="relative h-full min-h-lvh w-full overflow-hidden bg-boycott-red">
      <img
        src="/gun.png"
        alt="Hero"
        className="absolute right-10 bottom-[-5px] left-0 w-[90vw] max-w-2xl object-contain opacity-100"
        style={{ zIndex: 10 }}
      />

      <div
        className="opacity-50"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: -10,
          left: -10,
          zIndex: 0,
          backgroundImage: `url('/PDR_netting.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '110vw',
          height: '110vh',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default Hero;
