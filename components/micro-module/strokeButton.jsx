import React from 'react';
import Link from 'next/link';
import { Arrow } from '../utils/svg';

const StrokeButton = ({
  children,
  color = '#fff',
  arrow = true,
  center = true,
  className,
  destination,
  targetBlank,
  ariaLabel,
  hover,
  onClick = () => {},
  ...others
}) => {
  const defaultClass = `stroke-button flex flex-wrap items-center w-fit min-h-[30px] font-semibold leading-none rounded-full border-2 border-solid px-5 hover:shadow-softer hover:bg-current duration-300 transition-all ${
    center ? 'mx-auto' : ''
  } `;

  return !destination ? (
    <button
      type='button'
      onClick={onClick}
      className={`${defaultClass} bg-[${color.toLowerCase()}]  ${
        className ? className : ''
      }`}
      style={{ color: color, borderColor: color }}
      {...others}
    >
      <div className='pt-[2px]'>{children}</div>
      {arrow ? (
        <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
          <Arrow color={color} />
        </div>
      ) : (
        ''
      )}
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass} bg-[${color.toLowerCase()}]   ${
          className ? className : ''
        } ${hover === "black" && 'hover-black'}`}
        style={{ color: color, borderColor: color }}
        onClick={onClick}
        {...others}
      >
        <div className='pt-[2px]'>{children}</div>
        {arrow ? (
          <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
            <Arrow color={color} />
          </div>
        ) : (
          ''
        )}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`${defaultClass} bg-[${color.toLowerCase()}]  ${
        className ? className : ''
      }`}
      style={{ color: color, borderColor: color }}
      target='_blank'
      {...others}
    >
      <div className='pt-[2px]'>{children}</div>
      {arrow ? (
        <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
          <Arrow color={color} />
        </div>
      ) : (
        ''
      )}
    </a>
  );
};

export default StrokeButton;
