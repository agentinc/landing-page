import LogoSvg from '../assets/logo_svg';

const Logo = ({ width }: { color?: string; width?: number }) => {
  return (
    <div
      className="object-cover"
      style={{ width: width ?? 32, height: width ?? 32 }}
    >
      <LogoSvg
        customColor="#FFFFFF"
        accentColor="#10B981"
        width={width}
      />
    </div>
  );
};

export default Logo;
