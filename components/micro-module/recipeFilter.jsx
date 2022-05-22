import Collapsible from 'react-collapsible'
import CheckboxTag from '@/components/utils/checkboxTag'

const RecipeFilter = ({
  difficulty,
  cookingTime,
  recipeCategory,
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
      trigger={trigger}
    >
      <div
        className={`bg-white rounded-2xl overflow-hidden p-4 pb-5 mb-5 transition-all md:p-7 md:mb-7 lg:flex lg:flex-wrap lg:justify-center lg:mb-10 ${fadeInFadeOut}`}
      >
        <div className="mb-4 last:mb-0 lg:flex lg:items-center lg:mr-10 lg:last:mr-0">
          <span className="block font-nutmeg text-default text-morin-red leading-tight mb-2 lg:text-ctitleSmall lg:mr-5">
            {lang.locale === 'id' ? 'Kesulitan' : 'Difficulty'}:
          </span>
          <div className="flex flex-wrap">
            {difficulty?.map((y) => (
              <div className="mr-2 last:mr-0" key={y?.title_en}>
                <CheckboxTag
                  name={lang.locale === "id" ? y.title_id : y.title_en}
                  label={lang.locale === "id" ? y.title_id : y.title_en}
                  value={lang.locale === "id" ? y.title_id : y.title_en}
                  checked={value.includes(lang.locale === "id" ? y.title_id : y.title_en)}
                  onChange={() => filterFunc(lang.locale === "id" ? y.title_id : y.title_en)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4 last:mb-0 lg:flex lg:items-center lg:mr-10 lg:last:mr-0">
          <span className="block font-nutmeg text-default text-morin-red leading-tight mb-2 lg:text-ctitleSmall lg:mr-5">
            {lang.locale === 'id' ? 'Waktu memasak' : 'Cooking Time'}:
          </span>
          <div className="flex flex-wrap">
            {cookingTime?.map((y) => (
              <div className="mr-2 last:mr-0" key={y?.title_en}>
                <CheckboxTag
                  name={lang.locale === "id" ? y.title_id : y.title_en}
                  label={lang.locale === "id" ? y.title_id : y.title_en}
                  value={lang.locale === "id" ? y.title_id : y.title_en}
                  checked={value.includes(lang.locale === "id" ? y.title_id : y.title_en)}
                  onChange={() => filterFunc(lang.locale === "id" ? y.title_id : y.title_en)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4 last:mb-0 lg:flex lg:items-center lg:mr-10 lg:last:mr-0">
          <span className="block font-nutmeg text-default text-morin-red leading-tight mb-2 lg:text-ctitleSmall lg:mr-5">
            {lang.locale === 'id' ? 'Kategori Resep' : 'Recipe Category'}:
          </span>
          <div className="flex flex-wrap">
            {recipeCategory?.map((y) => (
              <div className="mr-2 last:mr-0" key={y?.title_en}>
                <CheckboxTag
                  name={lang.locale === "id" ? y.title_id : y.title_en}
                  label={lang.locale === "id" ? y.title_id : y.title_en}
                  value={lang.locale === "id" ? y.title_id : y.title_en}
                  checked={value.includes(lang.locale === "id" ? y.title_id : y.title_en)}
                  onChange={() => filterFunc(lang.locale === "id" ? y.title_id : y.title_en)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Collapsible>
  )
}

export default RecipeFilter
