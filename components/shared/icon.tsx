"use client";

import { ReactSVG } from "react-svg";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  src: string;
  wrapper?: "span" | "div";
}

const Icon: React.FC<IconProps> = ({
  src,
  className,
  style,
  onClick,
  wrapper,
}: IconProps) => {
  return (
    <ReactSVG
      src={src}
      beforeInjection={(svg) => {
        if (className) {
          className.split(" ").forEach((cls) => {
            if (cls) svg.classList.add(cls);
          });
        }
        if (style) Object.assign(svg.style, style);
        if (onClick)
          svg.addEventListener("click", (e) =>
            onClick(
              e as unknown as React.MouseEvent<SVGSVGElement, MouseEvent>,
            ),
          );
      }}
      wrapper={wrapper}
    />
  );
};

export default Icon;
