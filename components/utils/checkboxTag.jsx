const CheckboxTag = ({ name, label, value, onChange, checked }) => {
  return (
    <div className='font-semibold leading-tight'>
      <input
        type='checkbox'
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className='peer hidden'
      />
      <label
        htmlFor={name}
        className='stroke-button hover:shadow-softer hover:bg-current duration-300 flex items-center min-h-[30px] border-2 border-solid border-morin-red text-morin-red rounded-full px-4 cursor-pointer select-none overflow-hidden transition-all  peer-checked:text-white peer-checked:bg-morin-red'
      >
        <span className='pt-[2px]'>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxTag;
