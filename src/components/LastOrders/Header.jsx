import React from 'react'

function Header() {
  return (
    <div className='w-full flex justify-between items-center mb-[14px] font-serif'>
        <h1 className=' text-[14px] sm:text-[16px] dark:text-slate-100 xl:text-lg font-semibold text-[#26282c]'>Last Orders</h1>
        <button className=' text-[#34caa5] text-[14px] sm:text-[16px] xl:text-lg font-medium py-2 px-4 rounded'>
            See All
        </button>
    </div>
  )
}

export default Header