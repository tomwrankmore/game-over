const Logo = ({ isDark }: { isDark: boolean }) => {
  return (
    <img
      src={isDark ? '/logo-dark.png' : '/logo.png'}
      alt="Logo"
      style={{ width: '100%', height: 'auto', maxWidth: '100px' }}
    />
  );
};

export default Logo;
