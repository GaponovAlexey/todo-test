import type { NextPage } from 'next'
import Todo from './Todo'

const Home: NextPage = () => {
  return (
    <div className=''>
      <link
        href='https://fonts.googleapis.com/css2?family=Hubballi&family=Montserrat:wght@400;500;700&display=swap'
        rel='stylesheet'
      ></link>
      <h1>TODO</h1>
      <Todo />
    </div>
  )
}

export default Home
