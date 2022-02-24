export default function Container({
  children,
  className = '', // add class to inner frame
  classNameOuter = '', // add class to outer frame
  background = 'transparent',
  border = false, // enable border
  bgTail = false, // add background tail for continuation
  safeWidth = true, // enable safe width
}) {
  return (
    <div
      className={`w-full flex justify-center relative ${classNameOuter} ${
        border ? 'rounded-t-[40px] py-[40px]' : ''
      }`}
      style={{ background: background }}
    >
      <div
        className={`mx-auto w-full flex flex-col px-8 text-default ${
          safeWidth ? 'max-w-screen-2xl' : ''
        } ${className}`}
      >
        {children}
      </div>
      {bgTail && (
        <div
          className={`w-full h-[40px] absolute bottom-0 translate-y-[100%] -z-1`}
          style={{ background: background }}
        />
      )}
    </div>
  );
}
