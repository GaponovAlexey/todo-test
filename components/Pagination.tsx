import { NextPage } from 'next'
import React from 'react'

const Pagination: NextPage = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = []

  for (let i = 1; i <= (totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul>
        {pageNumbers?.map((number: any) => (
          <a href='#!' key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
