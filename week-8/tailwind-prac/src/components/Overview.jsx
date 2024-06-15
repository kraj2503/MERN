import { AmountProcessd } from "./AmountProcesed"
import { RevenueCard } from "./RevenueCard"
import { NextPayout } from "./NextPayout"
import { TableTop } from "./TableTop"

export const Overview = () => {

    return (
        <>
            <div className="flex justify-between">
                <div className="font-semibold text-xl pb-4">
                    Overview
                </div>
                <div className=" flex  border items-center px-3 py-1 shadow-md">
                    This Month
                    <div className="pl-1 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                </div>
            </div>

            <div className='grid grid-cols-1  2xl:grid-cols-3'>
                <NextPayout title={"Next Payout"} amount={"92,312.20"} orderCount={"13"} NextPaymentDate={"Today, 4:00PM"} />
                <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
                <AmountProcessd title={"Amount Processed"} amount={"23,92,312"} />
            </div>

<TableTop/>




        </>
    )
}