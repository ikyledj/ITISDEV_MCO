import { ReactNode } from "react";

type IconProps = {
  size?: 32 | 24 | 18 | 16;
  className?: string;
  handler?: () => void;
  children?: ReactNode;
};

const Icon: React.FC<IconProps> = ({
  size = 24,
  className,
  handler,
  children,
}) => {
  return (
    <span
      onClick={handler}
      className={`${className} block`}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
};
export default Icon;
