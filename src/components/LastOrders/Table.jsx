import React from 'react'
import view from '../../assets/document-download.svg'
import jaydon from '../../assets/jaydon.svg'
import marcus from '../../assets/marcus.svg'
import philips from '../../assets/philips.svg'
import corey from '../../assets/corey.svg'
import cooper from '../../assets/cooper.svg'

const headers = [
    { 
     title: "Name",
     width: "216px",
     key: "name"    
    },
    { 
     title: "Date",
     width: "116px",
     key: "date"    
    },
    { 
     title: "Amount",
     width: "120px",
     key: "amount"    
    },
    { 
     title: "Status",
     width: "95px",
     key: "status"    
    },
    { 
     title: "Invoice",
     width: "80px",
     key: "invoice"    
    }
]

const data = [
    {
        name: "Marcus Bergson",
        date: "Nov 15, 2023",
        amount: "$80,000",
        status: "Paid",
        invoice: "View",
        image: marcus
    },
    {
        name: "Jaydon Vaccaro",
        date: "Nov 15, 2023",
        amount: "$150,000",
        status: "Refund",
        invoice: "View",
        image: jaydon
    },
    {
        name: "Corey Schleifer",
        date: "Nov 14, 2023",
        amount: "$87,000",
        status: "Paid",
        invoice: "View",
        image: corey
    },
    {
        name: "Cooper Press",
        date: "Nov 14, 2023",
        amount: "$100,000",
        status: "Refund",
        invoice: "View",
        image: cooper
    },
    {
        name: "Phillip Lubin",
        date: "Nov 14, 2023",
        amount: "$78,000",
        status: "Paid",
        invoice: "View",
        image: philips
    }
]

function Table() {
  return (
    <div>
        <div className="flex justify-between items-center mb-5">
            {headers.map(header => (
                <div key={header.key} className={`text-left dark:text-slate-300 text-[#9ca4ab] w-[${header.width}]`}>
                    <p className=" text-[10px] sm:text-sm lg:text-base font-medium">{header.title}</p>
                </div>
            ))}
        </div>

        <div className="flex flex-col gap-2 sm:gap-4 lg:gap-3 xl:gap-4">
            {data.map((item, index) => (
                <div key={index} className='flex items-center justify-between border-t-[1px] py-1 sm:py-3 lg:pt-2 lg:pb-0 xl:py-3 font-serif'>
                    <div className="flex justify-start gap-1 sm:gap-[10px] items-center w-[216px]">
                        <img src={item.image} alt="" className='rounded-full w-4 h-4 sm:w-8 sm:h-8' />
                        <div className="text-left dark:text-slate-100 text-[#3a3f51]">
                            <p className=" xl:text-base font-medium max-xsm:text-[8px] text-[10px] sm:text-sm">{item.name}</p>
                        </div>
                    </div>

                    <div className="text-left dark:text-slate-300 text-[#737373] w-[116px]">
                        <p className=" xl:text-base font-normal text-[8px] sm:text-sm">{item.date}</p>
                    </div>

                    <div className="text-left max-xsm:pl-1 dark:text-slate-100 text-[#0d062d] w-[120px]">
                        <p className=" xl:text-base font-medium max-xsm:text-[8px] text-[10px] sm:text-sm">{item.amount}</p>
                    </div>

                    <div className={`text-left ${item.status == "Paid" ? 'text-[#34CAA5]' : "text-[#ED544E]"} justify-start max-xsm:w-[90px] w-[95px]`}>
                        <p className=" xl:text-base font-normal max-xsm:text-[8px] text-[10px] sm:text-sm">{item.status}</p>
                    </div>

                    <button className=" flex justify-start items-center gap-1 sm:gap-[6px] dark:text-slate-100 text-[#0d062d] hover:opacity-70 w-[80px]">
                        <div className=' w-3 h-3 sm:w-4 sm:h-4'>
                            <img src={view} alt="" className='w-full h-full ' />
                        </div>
                        <p className=" text-[8px] sm:text-xs lg:text-sm font-normal">{item.invoice}</p>
                    </button>
                </div>
            ))}
    </div>

    </div>
  )
}

export default Table