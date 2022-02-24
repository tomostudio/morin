import Link from 'next/link';
import { forwardRef } from 'react';

// FANCY LINK COMPONENT capable to switch between internal link, external link and button

const FancyLink = forwardRef(
  (
    {
      destination,
      a11yText,
      className = '',
      children,
      blank = false, // Set Target Blank for External Link
      onClick = () => {}, // Pass on Click Events
      ...others // Pass other variables
    },
    ref
  ) => {
    return !destination ? ( // No destination, interactive link.
      <button
        aria-label={a11yText}
        className={`cursor-pointer ${className} pointer-events-auto`}
        onClick={onClick}
        ref={ref}
        {...others}
      >
        {children}
      </button>
    ) : !blank ? ( //
      <Link href={destination} scroll={false}>
        <a
          aria-label={a11yText}
          className={`${className} pointer-events-auto`}
          ref={ref}
          onClick={onClick}
          {...others}
        >
          {children}
        </a>
      </Link>
    ) : (
      <a
        aria-label={a11yText}
        className={`${
          destination ? 'pointer-events-auto' : 'pointer-events-none'
        } ${className} pointer-events-auto`}
        target='_blank'
        href={destination}
        ref={ref}
        {...others}
      >
        {children}
      </a>
    );
  }
);

export default FancyLink;
