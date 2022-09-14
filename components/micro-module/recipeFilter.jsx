import Collapsible from 'react-collapsible'
import CheckboxTag from '@/components/utils/checkboxTag'

const RecipeFilter = ({
  category,
  lang,
  value,
  filterFunc,
  isOpen,
  trigger = <div />,
  transitionTime = 150,
  lazyRender = true,
}) => {
  const fadeInFadeOut = isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  return (
    <Collapsible
      open={isOpen}
      transitionTime={transitionTime}
      lazyRender={lazyRender}
    >
      <div
        className={`max-w-screen-2xl mx-auto bg-white rounded-2xl overflow-hidden p-4 pb-5 mb-5 transition-all md:p-7 md:mb-7 lg:flex lg:flex-wrap lg:justify-center lg:mb-10 ${fadeInFadeOut}`}
      >
        {category.map((item, id) => (
          <div
            key={id}
            className="mb-4 last:mb-0 lg:flex lg:items-center lg:mr-10 lg:last:mr-0 lg:flex-wrap lg:justify-center"
          >
            <span className="block font-nutmeg text-default text-morin-red leading-tight mb-2 lg:text-subtitle2 lg:mr-5 flex-shrink-0">
              {lang === 'id' ? item.title.id : item.title.en}
            </span>
            <div className="flex flex-wrap flex-shrink-0">
              {item.data?.map((data, index) => (
                <div className="mr-2 last:mr-0 mb-2" key={index}>
                  <CheckboxTag
                    name={data._id}
                    label={lang === 'id' ? data.title.id : data.title.en}
                    value={data._id}
                    checked={value
                      .find((object) => object._id === item._id)?.data._id === data._id}
                    onChange={() => filterFunc(item, item._id, data._id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Collapsible>
  )
}

export default RecipeFilter
