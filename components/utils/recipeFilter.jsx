import Collapsible from "react-collapsible";
import CheckboxTag from "@/components/utils/checkboxTag";

const RecipeFilter = ({
  data,
  value,
  filterFunc,
  isOpen,
  trigger = <div />,
  transitionTime = 150,
  lazyRender = true,
}) => {
  const fadeInFadeOut = isOpen ? "opacity-100 visible" : "opacity-0 invisible";
  return (
    <Collapsible
      open={isOpen}
      transitionTime={transitionTime}
      lazyRender={lazyRender}
      trigger={trigger}
    >
      <div
        className={`bg-white rounded-2xl overflow-hidden p-4 pb-5 mb-5 transition-all md:p-7 md:mb-7 lg:flex lg:flex-wrap lg:justify-center lg:mb-10 ${fadeInFadeOut}`}
      >
        {data?.map((x) => (
          <div className="mb-4 last:mb-0 lg:flex lg:items-center lg:mr-10 lg:last:mr-0" key={x?.title}>
            <span className="block font-nutmeg text-default text-morin-red leading-tight mb-2 lg:text-ctitleSmall lg:mr-5">
              {x?.title}:
            </span>
            <div className="flex flex-wrap">
              {x?.options?.map((y) => (
                <div className="mr-2 last:mr-0" key={y?.name}>
                  <CheckboxTag
                    name={y.name}
                    label={y.label}
                    value={y.value}
                    checked={value.includes(y.value)}
                    onChange={() => filterFunc(y.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Collapsible>
  );
};

export default RecipeFilter;
