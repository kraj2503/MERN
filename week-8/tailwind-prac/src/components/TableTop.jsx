export const TableTop = () => {

    return (
        <>

            <div className="pt-10 font-semibold">
                Transactions | This Month
            </div>

            <div className="flex pt-5 font-inter">
                <div className="rounded-full border-2 px-5 py-1 bg-slate-200 text-gray-500 ">
                    {"Payouts (22)"}
                </div>
                <div className="rounded-full border-2 px-5 py-1 bg-sky-700 text-white-500 ml-4">
                    {"Refunds (6)"}
                </div>

            </div>

            <div className=" flex mt-6 justify-between">

                <div className="border  w-80 h-10 rounded-md flex  justify-center align-middle items-center ">
                    <div className="pl-4 pr-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080" />
                        </svg>
                    </div>

                    <form action="" className='w-full'>
                        <input placeholder='Order ID or Transactions ID' type="text" className='w-full bg-inherit text-base pl border-none focus:outline-none' />
                    </form>

                </div>
                <div className="flex text-gray-700">
                    <div className=" flex border px-3 items-center text-md">
                        Sort
                        <div className="pl-1 ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>

                    </div>
                    <div className="border ml-2 mr-8 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </div>
                </div>
            </div>
            {/* <div className="flex justify-between items-center px-20 bg-slate-300 ">
                <div className="">
                    Order ID
                </div>
                <div>
                    STATUS
                </div>
                <div>
                    TRANSACTION ID
                </div>
                <div>
                    REFUND DATE
                </div>
                <div>ORDER AMOUNT</div>

            </div> */}


        </>
    )
}