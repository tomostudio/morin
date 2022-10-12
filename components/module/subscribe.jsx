import { useState, useEffect, useRef } from 'react'
import FancyLink from '../utils/fancyLink'

const SubscribeForm = ({ lang, status, message, onValidated }) => {
  const [disable, setDisable] = useState(false)
  const [redError, setRedError] = useState(false)
  const [email, setEmail] = useState(null)
  const [placeholder, setPlaceholder] = useState('Your Email')
  const inputEl = useRef(null)

  // PROCESS
  const handleFormSubmit = () => {
    inputEl.current.blur()
    if(email) {
      setDisable(true)
      email && onValidated({ EMAIL: email })
    }
  }

  // FOR KEYBOARD ENTER
  const handleInputKeyEvent = (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      handleFormSubmit()
    }
  }

  let pTimeout = null
  const time = 4000

  const resetPlaceholderTimer = () => {
    clearTimeout(pTimeout)
    pTimeout = setTimeout(() => {
      setDisable(false)
      setRedError(false)
      setPlaceholder('Your Email')
    }, time)
  }
  useEffect(() => {
    if (status === 'success') {
      // Set Success Message
      setRedError(false)
      inputEl.current.value = ''
      setEmail(null)
      setPlaceholder('Got it!')
      resetPlaceholderTimer()
    } else if (status === 'error') {
      console.log('\x1b[31m%s\x1b[0m',message)
      //Set Error Message
      inputEl.current.value = ''
      setEmail(null)

      setRedError(true)
      setPlaceholder('Something must have gone wrong')
      resetPlaceholderTimer()
    } else if (status === 'sending') {
      // Reset some status.
      clearTimeout(pTimeout)
    } else {
      // Reset some status.
      setRedError(false)
      setDisable(false)
    }
  }, [status])

  return (
    <div className="flex w-full mt-5  overflow-hidden lg:mt-6">
      <div
        className={`relative flex flex-nowrap w-full h-10 lg:h-11  ${
          disable ? 'pointer-events-none' : ''
        }`}
      >
        <input
          className={`w-full h-full px-5 pt-1 border-2 rounded-l-2xl border-white first-letter:default-type text-defaultSmall leading-tight placeholder-white outline-none bg-transparent lg:w-[calc(100%-100px)] lg:pt-[2px] lg:text-default ${
            redError
              ? 'placeholder:opacity-100'
              : 'placeholder:opacity-60'
          }`}
          type="email"
          placeholder={placeholder}
          onChange={(event) => setEmail(event?.target?.value ?? '')}
          onKeyUp={(event) => handleInputKeyEvent(event)}
          ref={inputEl}
        />
        <FancyLink
          a11yText="button_subscribe"
          onClick={handleFormSubmit}
          className="h-full flex-grow-0 border-2 rounded-r-2xl border-l-0 border-white  pl-4 pr-6 pt-1 text-center default-type text-defaultSmall leading-none hover:bg-white hover:text-morin-blue transition-all duration-300 lg:w-24 lg:pt-[2px] lg:text-default"
        >
          {lang === 'id' ? 'Kirim' : 'Submit'}
        </FancyLink>
      </div>
    </div>
  )
}

export default SubscribeForm
