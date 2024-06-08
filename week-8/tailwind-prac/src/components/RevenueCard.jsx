export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded-lg shadow-lg p-5 mx-3 w-96 h-28 overflow-hidden">
        <div className="text-gray-700 flex">
            <div className="pr-2">{title} </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>


        </div>

        <div className="flex justify-between">
            <div className="font-semibold text-3xl p-1">
                  {`$ ${amount}`}
            </div>
            {orderCount ? <div className="flex underline cursor-pointer font-semibold justify-center">
                <div className="text-blue-600 ">
                    {orderCount} order(s)
                </div>
                <div className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </div>
            </div> : null}
        </div>

    </div>
} 