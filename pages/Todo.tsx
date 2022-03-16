import { useState } from 'react'
import Pagination from '../components/Pagination'
import { fetchApi } from '../components/redux/reducer'
import { DbType, TypeData } from '../components/Types'
import InputText from '../components/InputText'
import { NextPage } from 'next'

const Todo: NextPage = () => {
  const { data, isLoading, error } = fetchApi.useGetDataFetchQuery()
  console.log(data)
  //edit
  const [corectData, {}] = fetchApi.usePathDataFetchMutation()

  //edit
  const [editDatas, {}] = fetchApi.useCorectDataMutation()

  const editData = (post: DbType) => {
    const promtdata = prompt() || ''
    editDatas({ ...post, title: promtdata })
  }

  //toggle
  const [toggleCorect, {}] = fetchApi.useToggleMutationMutation()
  const isTogle = async (el: DbType) => {
    await toggleCorect({ ...el, toggle: !el.toggle })
  }

  //delete
  const [DelPost, {}] = fetchApi.useDeletePostMutation()
  const deletePosts = async (id: number) => {
    console.log(id)
    await DelPost(id)
  }

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, serpostsPerPage] = useState(10)
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
        <InputText corectData={corectData} />
      </div>
      <ul>
        {currentPosts?.map((el: DbType) => (
          <ul className='list-disc' key={el.id}>
            <div className='flex justify-between  '>
              <li>
                -{'<<'}
                {el.toggle.toString()}
                {'>>'}-{el.title}
              </li>
              <div className='text-xl first:right-2  '>
                <button
                  onClick={() => isTogle(el)}
                  className='mx-3 hover:text-emerald-400 '
                >
                  toggle
                </button>
                <button
                  onClick={() => editData(el)}
                  className='mx-3 hover:text-sky-500 '
                >
                  edit
                </button>
                <button
                  onClick={() => deletePosts(el.id)}
                  className='mx-3 hover:text-red-500 '
                >
                  delete
                </button>
              </div>
            </div>
          </ul>
        ))}
      </ul>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data?.length as number}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Todo
