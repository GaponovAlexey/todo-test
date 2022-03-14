import { useState } from 'react'

const InputText = () => {
  const [valueText, setvalueText] = useState()

  const handlerSubmit = () => {}

  return (
    <div className='ml-[20%] '>
      <input
        type='text'
        className='text-black'
        value={valueText}
        onChange={(e) => setvalueText(e.target.value)}
      />
      <button className='ml-2'>add</button>
    </div>
  )
}

export default InputText
