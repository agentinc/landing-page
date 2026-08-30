import LogoSvg from '../assets/logo_svg';

const Logo = ({ width = 32 }: { width?: number }) => {
  return (
    <LogoSvg
      aria-hidden="true"
      className="shrink-0 text-current"
      customColor="currentColor"
      accentColor="currentColor"
      width={width}
      height={width}
    />
  );
};

export default Logo;
