import { useState, useEffect } from "react";

const MorinTabs = ({ tabData, onChange = () => {} }) => {
  const defaultTab = tabData[tabData.length - 1];

  const [currentTab, setCurrentTab] = useState(defaultTab?.value);
  const [thisEl, setThisEl] = useState(null);

  const handleTabChange = (val, id) => {
    // do callback function here
    onChange();

    measureEl(id);
    setCurrentTab(val);
  };

  const measureEl = (id) => {
    const parent = document
      .querySelector(".radio-switch")
      .getBoundingClientRect();
    const current = document
      .querySelector(`input#${id}`)
      .getBoundingClientRect();
    const left = current.left - parent.left;

    setThisEl(left);
  };

  useEffect(() => {
    measureEl(defaultTab?.id);
  }, []);

  return (
    <form
      className="radio-switch flex"
      onSubmit={(e) => e.preventDefault()}
    >
      {tabData?.map((item) => (
        <div key={item.id} className="radio-switch__item">
          <input
            type="radio"
            name="desktop-nav"
            className="radio-switch__input sr-only"
            id={item.id}
            value={item.value}
            checked={item.value === currentTab}
            onChange={(e) => handleTabChange(e.target.value, item.id)}
          />
          <label className="radio-switch__label" htmlFor={item.id}>
            {item.title}
          </label>
        </div>
      ))}
      {thisEl ? (
        <div
          aria-hidden="true"
          style={{ transform: `translate(${thisEl}px, -50%)` }}
          className="radio-switch__marker"
        />
      ) : (
        ""
      )}
    </form>
  );
};

export default MorinTabs;
