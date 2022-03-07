import React from "react";
import colors from "@/helpers/colors";
import Link from "next/link";
import { Arrow } from "./svg";

const MorinButton = ({
  children,
  color = "#fff",
  arrow = true,
  center = true,
  className,
  destination,
  targetBlank,
  ariaLabel,
  onClick = () => {},
  ...others
}) => {
  const renderArrow = () => {
    if (arrow)
      return (
        <div className="w-[20px] ml-[10px] md:w-[25px]">
          <Arrow color={color} />
        </div>
      );
  };
  const defaultClass = `flex flex-wrap items-center w-fit min-h-[25px] font-semibold leading-none rounded-full border-2 border-solid px-5 md:min-h-[30px] ${
    center ? "mx-auto" : ""
  } `;

  return !destination ? (
    <button
      type="button"
      onClick={onClick}
      className={`${defaultClass} ${className ? className : ""}`}
      style={{ color: color, borderColor: color }}
      {...others}
    >
      {children}
      {renderArrow()}
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass} ${className ? className : ""}`}
        style={{ color: color, borderColor: color }}
        onClick={onClick}
        {...others}
      >
        {children}
        {renderArrow()}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={a11yText}
      className={`${defaultClass} ${className ? className : ""}`}
      style={{ color: color, borderColor: color }}
      target="_blank"
      {...others}
    >
      {children}
      {renderArrow()}
    </a>
  );
};

export default MorinButton;
