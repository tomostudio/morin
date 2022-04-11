import React from 'react';
import Link from 'next/link';
import { Arrow } from './svg';

const SolidButton = ({
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
  const defaultClass = `solid-button relative overflow-hidden group flex flex-wrap items-center w-fit min-h-[30px] font-semibold leading-none rounded-full border-2 border-solid px-5 pt-[1px] ${
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
      <div
        className='background absolute w-full h-full top-0 left-0 z-0 group-hover:opacity-0 transition-opacity duration-300'
        style={{ background: color }}
      />
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass}  ${className ? className : ''}`}
        style={{ color: color, borderColor: color }}
        onClick={onClick}
        {...others}
      >
        <div className='pt-[2px] '>{children}</div>
        {arrow ? (
          <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
            <Arrow color={color} />
          </div>
        ) : (
          ''
        )}
        <div className='background' style={{ background: color }} />
        <div
          className='background absolute w-full h-full top-0 left-0 z-0 group-hover:opacity-0 transition-opacity duration-300'
          style={{ background: color }}
        />
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
      <div className='pt-[2px] relative z-1'>{children}</div>
      {arrow ? (
        <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
          <Arrow color={color} />
        </div>
      ) : (
        ''
      )}
      <div
        className='background absolute w-full h-full top-0 left-0 z-0 group-hover:opacity-0 transition-opacity duration-300'
        style={{ background: color }}
      />
    </a>
  );
};

export default SolidButton;
