import React, { useState, useEffect } from 'react'
import Search from "../public/Search.svg?react"

const App = () => {
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    if (searchText) {
      console.log(searchText)
    }
  }, [searchText])

  return (
    <div className='p-4 flex min-h-screen bg-[#f3f3f3]'>
      <div className='w-[1200px] mx-auto mt-40 px-10'>
        <h1 className='font-bold text-6xl'>Search</h1>
        <div className='p-2 border border-gray-300 bg-[#eaeaea] rounded-xl mt-5 flex items-center gap-2'>
          <Search className="size-5 text-gray-400" />
          <input
            type="text"
            className='flex-1 bg-transparent outline-none placeholder:text-gray-400'
            placeholder='Search for anything...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default App