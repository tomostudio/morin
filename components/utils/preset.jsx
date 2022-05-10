

const useEffectInit = ({context = null, mobileDark = true}) => {
  document.querySelector('body').classList.remove('overflow-hidden');
  window.scroll(0, 0);

  if (context) {
    context.mobileMenuOpen = false;
    context.mobileDark = mobileDark;
  }
};

export { useEffectInit };
