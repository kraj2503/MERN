import { TopBar } from './components/TopBar'
import { SideBar } from './components/SideBar'
import { Overview } from './components/Overview'
import { Table } from './components/Table'

function App() {

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:block fixed h-full">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col ml-0 md:ml-60">
          {/* Topbar */}
          <div className="w-full">
            <TopBar />
          </div>

          {/* Main Page Content */}
          <div className="flex-1 overflow-auto p-4 mt-2 ">
            <Overview />
            <div className='bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4'>

            <Table />
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default App




// <div className="flex">
// <div className='hidden sm:block fixed sm:w-64'> 

// <SideBar />
// </div>
// <div className="flex- border-b border-black-150 sm:pl-64 bg-white-500">
//   <TopBar />
//   <div className="p-4">
//   <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-around '>
//       <NextPayout title={"Next Payout"} amount={"92,312.20"} orderCount={"13"} NextPaymentDate={"Today, 4:00PM"} />
//       <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
//       <AmountProcessd title={"Amount Processed"} amount={"23,92,312"} />
//     </div>
//   </div>
// </div>




{/* // // <div className='grid grid-cols-1 sm:grid-cols-3'> */ }


{/*
        <div className='flex justify-around'>
          <NextPayout title={"Next Payout"} amount={"92,312.20"} orderCount={"13"} NextPaymentDate={"Today, 4:00PM"} />
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
          <AmountProcessd title={"Amount Processed"} amount={"23,92,312"} />
        </div>
        <div className='flex justify-around'>
          <NextPayout title={"Next Payout"} amount={"92,312.20"} orderCount={"13"} NextPaymentDate={"Today, 4:00PM"} />
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
          <AmountProcessd title={"Amount Processed"} amount={"23,92,312"} />
        </div>
        <div className='flex justify-around'>
          <NextPayout title={"Next Payout"} amount={"92,312.20"} orderCount={"13"} NextPaymentDate={"Today, 4:00PM"} />
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
          <AmountProcessd title={"Amount Processed"} amount={"23,92,312"} />
        </div>
        <div className='flex justify-around'>
          <NextPayout title={"Next Payout"} amount={"92,312.20"} orderCount={"13"} NextPaymentDate={"Today, 4:00PM"} />
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
          <AmountProcessd title={"Amount Processed"} amount={"23,92,312"} />
        </div>
      </div> */}
// </div>
