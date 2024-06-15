export const NextPayout = ({
    title,
    orderCount,
    amount,
    NextPaymentDate
}) => {
    return(
    <div  >
        <div className="w-96 text-white-500 shadow-lg overflow-hidden">

        <div className="bg-sky-700 rounded-t-lg  p-5 w-96 h-30">
            <div className="text-white flex font-semibold">
                <div className="pr-2">{title} </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>


            </div>

            <div className="flex justify-between text-white">
                <div className="font-semibold text-3xl p-1">
                    {`$ ${amount}`}
                </div>
                {orderCount ? <div className=" text-white flex underline cursor-pointer font-semibold justify-center">
                    <div className="text-white">
                        {orderCount} order(s)
                    </div>
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div> : null}
            </div>


        </div>

        <div className=" flex justify-between bg-sky-900 font-semibold text-white px-4 py-2 rounded-b-lg">
            <div>
                NextPaymentDate
            </div>
            <div>
                {NextPaymentDate}

            </div>
        </div>
    </div>
        </div>
)} 