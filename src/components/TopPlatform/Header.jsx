import React from 'react'

function Header() {
  return (
    <div className='w-full flex justify-between items-center mb-[20px] font-serif'>
        <h1 className=' dark:text-slate-100 text-xs sm:text-[16px] xl:text-lg lg:text-sm font-semibold text-[#26282c]'>Top Platform</h1>
        <button className=' text-xs sm:text-[16px] text-[#34caa5] lg:text-sm xl:text-lg font-medium py-2 px-4 rounded'>
            See All
        </button>
    </div>
  )
}

export default Header