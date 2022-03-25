const CheckboxTag = ({ name, label, value, onChange, checked }) => {
  return (
    <div className="font-semibold leading-tight">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <label
        htmlFor={name}
        className="flex items-center min-h-[25px] border-2 border-solid border-morin-red text-morin-red rounded-full px-4 cursor-pointer select-none overflow-hidden transition-all lg:min-h-[30px] peer-checked:text-white peer-checked:bg-morin-red"
      >
        <span className="pt-1 lg:pt-1.5">{label}</span>
      </label>
    </div>
  );
};

export default CheckboxTag;
