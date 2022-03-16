import { useState } from 'react'

const InputText = ({ corectData }) => {
  const [valueText, setvalueText] = useState('')

  const handlerSubmit = async () => {
    await corectData({ title: valueText, body: valueText, toggle: false })
    console.log(valueText)
  }

  return (
    <div className='ml-[20%] '>
      <input
        type='text'
        className='text-black'
        value={valueText}
        onChange={(e) => setvalueText(e.target.value)}
      />
      <button onClick={() => handlerSubmit()} className='ml-2'>
        add
      </button>
    </div>
  )
}

export default InputText
