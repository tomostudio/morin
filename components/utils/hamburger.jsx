import FancyLink from "./fancyLink";

const Hamburger = ({ className, onClick, opened, duration = 200 }) => {
  const line = `${opened ? "w-[30px]" : "w-6"} h-0.5 rounded-full bg-white shadow transition ease transform duration-${duration}`;

  return (
    <FancyLink className={`space-y-2 group ${className}`} onClick={onClick}>
      <div className={`${line} ${opened && "rotate-45 translate-y-2.5"}`} />
      <div className={`${line} ${opened && "opacity-0 -translate-x-1.5"}`} />
      <div className={`${line} ${opened && "-rotate-45 -translate-y-2.5 "}`} />
    </FancyLink>
  );
};

export default Hamburger;
