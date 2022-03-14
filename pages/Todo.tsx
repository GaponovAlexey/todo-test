import { fetchApi } from '../components/redux/reducer'
import { TypeData } from '../components/Types'

const Todo = () => {
  const { data, isLoading, error } = fetchApi.useGetDataFetchQuery('')

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>error...`${error}`</h1>
  }
  return (
    <div>
      <ul>
        {data?.map((el: TypeData) => (
          <ul className='list-disc' key={el.id}>
            <li>{el.title}</li>
          </ul>
        ))}
      </ul>
    </div>
  )
}

export default Todo
