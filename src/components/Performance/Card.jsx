import React from 'react'
import curvedArrow from '../../assets/curvedArrow.svg'
import downArrow from '../../assets/trending-down.svg'
import Trends from './Trends'

function Card({ data }) {

  return (
    <div className=' bg-[#fff] dark:bg-slate-700 flex flex-col items-center p-5 gap-[10px] lg:max-w-[240px] lg:max-h-[180px] rounded-lg shadow lg:p-2 xl:p-4 hover:shadow-md'>
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center justify-center max-xsm:w-12 max-xsm:h-12 w-14 h-14 rounded-full lg:w-8 lg:h-8 xl:w-10 xl:h-10 border-[1px] border-[#E6E6E6]">
                <img className=' max-xsm:w-7 max-xsm:h-7 w-8 h-8 lg:w-5 lg:h-5 xl:w-6 xl:h-6' src={ data.image } alt="svg" />
            </div>
            <div className='h-12 w-28 lg:h-8 lg:w-[60px] xl:flex-1 xl:max-w-[104px]'>
                <Trends trendsData={data.dataInfo} />
            </div>
        </div>

        <div className="flex flex-col justify-start gap-3 lg:gap-[5px] w-full">
            <h4 className='text-left max-xsm:text-base text-lg lg:text-xs xl:text-lg font-serif font-medium text-[#898989] dark:text-slate-200'>{data.name}</h4>
            <p className='text-left max-xsm:text-lg text-2xl lg:text-base xl:text-2xl font-serif font-semibold text-[#3a3f51] dark:text-slate-100'>{data.total}</p>
        </div>

        <div className="flex items-center lg:gap-0.5 xl:gap-[10px] justify-between w-full">
            <div className={`flex ${data.textColor === 'green' ? 'bg-[rgba(52,202,165,0.12)]' : 'bg-[rgba(237,84,78,0.12)]'} gap-2 px-4 py-2 md:p-2 lg:px-1 lg:py-[1px] 2xl:px-2 items-center lg:gap-1 xl:gap-2 rounded-full`}>
                <img className=' max-xsm:w-4 max-xsm:h-4 w-5 h-5 lg:w-[7px] lg:h-[6px] xl:w-[10px] xl:h-[9px]' src={ data.textColor === 'green' ? curvedArrow : downArrow } alt='arrow' />
                <p className={` max-xsm:text-xs text-sm md:text-base  lg:text-[6px] xl:text-[8px] 2xl:text-xs ${data.textColor === 'green' ? 'text-[rgb(52,202,165)]' : 'text-[rgb(237,84,78)]'} font-medium font-serif`}>23.5%</p>
            </div>
            <div>
                <p className=' font-sans text-sm md:text-lg lg:text-[7px] xl:text-[10px] 2xl:text-sm font-normal dark:text-slate-100 text-[#606060]'>vs. previous month</p>
            </div>
        </div>
    </div>
  )
}

export default Card
