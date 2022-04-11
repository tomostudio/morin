import React from 'react';
import Link from 'next/link';
import { Arrow } from './svg';

const MorinButton = ({
  children,
  color = '#fff',
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
        <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
          <Arrow color={color} />
        </div>
      );
  };

  const defaultClass = `flex flex-wrap items-center w-fit min-h-[30px] font-semibold leading-none rounded-full border-2 border-solid px-5 pt-[1px] ${
    center ? 'mx-auto' : ''
  } `;

  return !destination ? (
    <button
      type='button'
      onClick={onClick}
      className={`${defaultClass} ${className ? className : ''}`}
      style={{ color: color, borderColor: color }}
      {...others}
    >
      <span className='pt-px md:pt-0.5'>{children}</span>
      {renderArrow()}
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass} ${className ? className : ''}`}
        style={{ color: color, borderColor: color }}
        onClick={onClick}
        {...others}
      >
        <span className='pt-px md:pt-0.5'>{children}</span>
        {renderArrow()}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`${defaultClass} ${className ? className : ''}`}
      style={{ color: color, borderColor: color }}
      target='_blank'
      {...others}
    >
      <span className='pt-px md:pt-0.5'>{children}</span>
      {renderArrow()}
    </a>
  );
};

export default MorinButton;
