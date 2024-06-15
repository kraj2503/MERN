import { TableTop } from "./TableTop"
import { orderData } from "./data"
const tablehead = "px-4 py-1 font-medium  "


export const Table = () => {
  return (
    <>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xm font-medium rounded-full uppercase text-black-400 bg-slate-200  ">
          <tr>
            <th scope="col" className={tablehead}>Order Id</th>
            <th scope="col" className={tablehead}>status</th>
            <th scope="col" className={tablehead}>Transaction Id</th>
            <th scope="col" className={tablehead}>Refund Date</th>
            <th scope="col" className={tablehead + "text-right"}>Order Amount</th>
          </tr>
        </thead>
        {orderData.map((order) => {
          return (

            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">
                  #{order.id}
                </th>
                <td className="px-6 py-4 flex items-center gap-2 text-black-600">
                  {(order.status === "Successful") && <div className='h-2.5 w-2.5 rounded-full bg-green-500' />}
                  {(order.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-black-500' />}
                  {(order.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500' />}
                  {order.status}
                </td>
                <td className="px-6 py-4 text-black-400">
                  {order.transactionID}
                </td>
                <td className="px-6 py-4 text-black-400">
                  {order.refundDate}
                </td>
                <td className="px-6 py-4 text-right text-black-600">
                  {order.amount}
                </td>

              </tr>
            </tbody>
          )
        })}
      </table>

    </>
  )
}