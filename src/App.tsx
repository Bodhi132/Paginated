import React, { useState } from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import {BiSearchAlt} from 'react-icons/bi'

export interface Post {
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {

  const [list, setLists] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const postsPerPage: number = 8
  const [info, setInfo] = useState<{ owner: string; repo: string }>({
    owner: '',
    repo: '',
  })


  const fetchPosts = async () => {
    setLoading(true);
    await fetch(`https://api.github.com/repos/${info.owner}/${info.repo}/issues`).then(response => response.json()).then(data => setLists(data))
    setLoading(false)
      ;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const subFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchPosts()
    console.log(info);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentlists = list.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  return (
    <div className='w-[100vw]  h-[100vh]'>
      <div className=' flex ml-[32%] mt-5 w-[30%] p-[2rem] bg-slate-600 rounded-md mb-9'>
        <h1 className=' ml-20 font-semibold text-xl text-white'>List Repository Issues Here</h1>
      </div>
      <div className='flex flex-col items-center' >
        <form onSubmit={subFunc} className='flex flex-row'>
          <div className='flex flex-col mr-6'>
            <h2 className='text-center font-semibold text-2xl'>Owner</h2>
            <input type="text"
              name='owner'
              onChange={handleChange}
              className='px-6 py-2 bg-slate-200 mt-5 rounded-md'
            />
          </div>
          <div className='flex flex-col '>
            <h2 className='text-center font-semibold text-2xl'>Repository</h2>
            <input type="text"
              name='repo'
              onChange={handleChange}
              className='px-6 py-2 bg-slate-200 mt-5 border-2 rounded-md' 
            />
          </div>
          <div className='mt-4 ml-10 rounded bg-slate-500 p-2 drop-shadow-lg '>
          <button type="submit" className='mt-6 text-2xl'> <BiSearchAlt/></button>
          </div>
        </form>
      </div>
      <Posts lists={currentlists} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={list.length} paginate={paginate} />
    </div>
  )
}

export default App
