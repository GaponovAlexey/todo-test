import { useState } from 'react'
import Pagination from '../components/Pagination'
import { fetchApi } from '../components/redux/reducer'
import { dbType, TypeData } from '../components/Types'
import InputText from '../components/InputText'

const Todo = () => {
  const { data, isLoading, error } = fetchApi.useGetDataFetchQuery('')

  // const {} = fetchApi

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)
  // pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>error...`${error}`</h1>
  }
  return (
    <div>
      <div>
        <InputText />
      </div>
      <ul>
        {currentPosts?.map((el: dbType) => (
          <ul className='list-disc' key={el.id}>
            <div className='flex justify-between  '>
              <li>-{el.title}</li>
              <div className='text-xl first:right-2  '>
                <button className='mx-3 hover:text-emerald-400 '>toggle</button>
                <button className='mx-3 hover:text-sky-500 '>edit</button>
                <button className='mx-3 hover:text-red-500 '>delete</button>
              </div>
            </div>
          </ul>
        ))}
      </ul>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Todo
