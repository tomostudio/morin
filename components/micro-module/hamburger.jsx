import FancyLink from '../utils/fancyLink'

const Hamburger = ({ className, onClick, opened, duration = 50, color }) => {
  const isOpen = `${opened ? 'w-8' : 'w-6'} ${
    opened || color === 'white' ? 'bg-white' : `bg-black`
  }`
  const line = `${isOpen} h-[2px] rounded-full  shadow transition ease transform duration-${duration}`

  return (
    <FancyLink
      a11yText="hamburger"
      className={`space-y-2 group ${className}`}
      onClick={onClick}
    >
      <div className={`${line} ${opened && 'rotate-45 translate-y-2.5'}`} />
      <div className={`${line} ${opened && 'opacity-0 -translate-x-1.5'}`} />
      <div className={`${line} ${opened && '-rotate-45 -translate-y-2.5 '}`} />
    </FancyLink>
  )
}

export default Hamburger
