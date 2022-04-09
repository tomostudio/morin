import FancyLink from "./fancyLink";

const Hamburger = ({
  className,
  onClick,
  opened,
  duration = 150,
  color = "bg-white",
}) => {
  const isOpen = `${opened ? "w-8" : "w-6"} ${opened ? "bg-white" : color}`;
  const line = `${isOpen} h-0.5 rounded-full  shadow transition ease transform duration-${duration}`;

  return (
    <FancyLink className={`space-y-2 group ${className}`} onClick={onClick}>
      <div className={`${line} ${opened && "rotate-45 translate-y-2.5"}`} />
      <div className={`${line} ${opened && "opacity-0 -translate-x-1.5"}`} />
      <div className={`${line} ${opened && "-rotate-45 -translate-y-2.5 "}`} />
    </FancyLink>
  );
};

export default Hamburger;
