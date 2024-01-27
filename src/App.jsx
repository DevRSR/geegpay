import { useState } from 'react'
import SideBar from './components/Sidebar/Index'
import Header from './components/Header/Index'
import LastOrders from './components/LastOrders/Index'
import TopPlatform from './components/TopPlatform/Index'
import SalesTrends from './components/SalesTrends/Index'
import Performance from './components/Performance/Index'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex w-full md:w-[calc(100%-80px)] md:ml-20 bg-[#fafafa]'>
     <SideBar />

     <div className=" relative flex flex-col w-full h-24 bg-[#fafafa] dark:bg-slate-800">
      <div className=' fixed top-0 left-0 w-full md:left-20 md:w-[calc(100%-80px)] bg-white'>
        <Header />
      </div>
      <div className="flex flex-col-reverse lg:flex-row dark:bg-slate-800 bg-[#fafafa] gap-5 lg:gap-[15px] p-2 sm:p-3 xl:gap-5 xl:p-5 mt-[88px] w-full">

        <div className="flex flex-1 justify-between lg:min-w-[650px] dark:bg-slate-800 bg-[#fafafa] xl:min-w-[690px] 2xl:min-w-[806px] flex-col gap-5">
          <SalesTrends /> 
          <LastOrders />
          
        </div>

        <div className="flex 2xl:min-w-[500px] bg-[#fafafa] dark:bg-slate-800 justify-between flex-col gap-5">
          <Performance />
          <TopPlatform />
        </div>
       
      </div>
     </div>
    </div>
   
  )
}

export default App
