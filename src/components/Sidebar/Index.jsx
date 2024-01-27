import React from 'react'
import { createPortal } from 'react-dom'
import MainMenu from '../Menu/index' // Fix the casing of the file name


function Index() {
    return createPortal (
        <div className='fixed hidden bg-[#fafafa] dark:bg-slate-800 top-0 bottom-0 max-h-full border-r-[1px] overflow-x-hidden overflow-y-scroll no-scrollbar w-20 md:flex items-center flex-col gap-48 p-5'>
                <MainMenu />
        </div>, document.getElementById('sidebar')
    )
}

export default Index