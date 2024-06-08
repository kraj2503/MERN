import React from 'react'
import avatar from '../assets/avatar.png'

import image from '../assets/image.png'
const css = ' flex p-3 rounded  hover:bg-white-100 hover:text-white-500 hover:cursor-pointer'

export const SideBar = () => {
    return (
        
        <div className='bg-blue-800 w-60 pt-4 pb-10 rounded overflow-y-auto text-white-500' >

            {/* name */}
            <div className='flex justify-center ml-2 mb-6'>
                <div className='size-10 ml-1 '>
                    <img src={avatar} alt="" />
                </div>
                <div className='pr-14 justify-center ml-auto text-md'>

                    Kshitiz
                    <div className='text-sm underline font-light font-sans hover:cursor-pointer'>
                        Visit Store
                    </div>
                </div>

                <div className='ml-auto pr-2 justify-end hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>
            {/* Sidebar Contents start */}
            <div className='font-font-medium text-white'>

                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Home
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>


                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Orders
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>


                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Products
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>


                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Delivery
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                        </svg>



                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Marketing
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>


                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Analytics
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div className='mt-1 '>
                        <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 209.281 209.281" xml:space="preserve">
                            <g>
                                <path d="M207.17,99.424l-20.683-21.377l4.168-29.455c0.567-4.006-2.145-7.739-6.131-8.438l-29.298-5.137L141.285,8.739
		c-1.896-3.575-6.287-4.998-9.919-3.223L104.64,18.582L77.916,5.517c-3.636-1.777-8.023-0.351-9.92,3.223L54.055,35.018
		l-29.298,5.137c-3.985,0.698-6.698,4.432-6.131,8.438l4.167,29.455L2.11,99.424c-2.813,2.907-2.813,7.522,0,10.43l20.682,21.378
		l-4.167,29.456c-0.566,4.005,2.146,7.738,6.13,8.438l29.299,5.14l13.942,26.275c1.896,3.574,6.284,5,9.919,3.223l26.724-13.062
		l26.727,13.062c1.059,0.518,2.181,0.763,3.288,0.763c2.691,0,5.286-1.454,6.63-3.986l13.942-26.275l29.299-5.14
		c3.984-0.699,6.697-4.433,6.13-8.438l-4.168-29.456l20.684-21.378C209.984,106.946,209.984,102.332,207.17,99.424z
		 M173.158,123.438c-1.608,1.662-2.359,3.975-2.035,6.266l3.665,25.902l-25.764,4.52c-2.278,0.4-4.245,1.829-5.329,3.872
		l-12.26,23.105l-23.502-11.486c-1.039-0.508-2.166-0.762-3.294-0.762c-1.127,0-2.254,0.254-3.293,0.762l-23.5,11.486l-12.26-23.105
		c-1.084-2.043-3.051-3.472-5.329-3.872l-25.764-4.52l3.664-25.902c0.324-2.29-0.427-4.603-2.036-6.265l-18.186-18.799
		l18.186-18.797c1.608-1.662,2.36-3.975,2.036-6.265l-3.664-25.901l25.763-4.517c2.279-0.399,4.246-1.829,5.331-3.872l12.259-23.108
		l23.499,11.489c2.078,1.017,4.508,1.017,6.588,0l23.501-11.489l12.26,23.108c1.084,2.043,3.051,3.473,5.33,3.872l25.763,4.517
		l-3.665,25.901c-0.324,2.291,0.427,4.603,2.036,6.266l18.186,18.796L173.158,123.438z"/>
                                <path d="M80.819,98.979c10.014,0,18.16-8.146,18.16-18.158c0-10.016-8.146-18.164-18.16-18.164
		c-10.015,0-18.162,8.148-18.162,18.164C62.657,90.834,70.805,98.979,80.819,98.979z M80.819,74.657c3.397,0,6.16,2.765,6.16,6.164
		c0,3.396-2.764,6.158-6.16,6.158c-3.398,0-6.162-2.763-6.162-6.158C74.657,77.422,77.421,74.657,80.819,74.657z"/>
                                <path d="M140.867,68.414c-2.342-2.343-6.143-2.344-8.484,0l-63.968,63.967c-2.343,2.343-2.343,6.142,0,8.485
		c1.172,1.172,2.707,1.757,4.243,1.757c1.535,0,3.071-0.586,4.243-1.757l63.967-63.967C143.21,74.556,143.21,70.757,140.867,68.414z
		"/>
                                <path d="M128.46,110.301c-10.013,0-18.158,8.146-18.158,18.158c0,10.016,8.146,18.164,18.158,18.164
		c10.016,0,18.164-8.148,18.164-18.164C146.624,118.447,138.476,110.301,128.46,110.301z M128.46,134.624
		c-3.395,0-6.158-2.765-6.158-6.164c0-3.395,2.763-6.158,6.158-6.158c3.398,0,6.164,2.763,6.164,6.158
		C134.624,131.858,131.859,134.624,128.46,134.624z"/>
                            </g>
                        </svg>

                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Discount
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>


                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Payouts
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div className='size-6 invert'>
                        <img src={image} alt="" />

                    </div>
                    {/* Text */}
                    <div className='ml-3 align-middle '>
                        Audience
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 46.991 46.99" xml:space="preserve" stroke="#ffffff" stroke-width="0.00046991000000000003" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.082,2.61c-3.74,0-7.598,0.592-11.465,1.76C9.503,4.706,6.115,5.73,4.877,9.082c-1.222,3.312,0.536,6.051,1.819,8.052 c0.732,1.142,1.563,2.436,1.563,3.337c0,1.522-2.301,4.68-3.824,6.77c-2.771,3.804-5.914,8.113-3.672,12.523 c2.081,4.092,7.132,4.615,11.299,4.615c18.282,0,34.928-11.048,34.928-23.179C46.99,12.261,37.469,2.61,22.082,2.61z M16.5,34.109 c-0.027,2.194-1.809,3.967-4.01,3.967c-2.217,0-4.014-1.798-4.014-4.015c0-2.219,1.797-4.017,4.014-4.017 c0.682,0,1.314,0.188,1.877,0.486c1.266,0.675,2.137,1.991,2.137,3.526C16.503,34.078,16.5,34.095,16.5,34.109z M17.01,15.082 c-0.848-0.736-1.395-1.809-1.395-3.02c0-2.218,1.798-4.015,4.015-4.015c2.218,0,4.015,1.797,4.015,4.015 c0,0.205-0.031,0.401-0.061,0.599c-0.291,1.931-1.941,3.416-3.954,3.416C18.623,16.077,17.715,15.693,17.01,15.082z M24.63,35.076 c-1.424,0-2.668-0.746-3.381-1.864c-0.396-0.623-0.635-1.357-0.635-2.15c0-2.217,1.799-4.015,4.018-4.015 c1.975,0,3.607,1.431,3.941,3.31c0.041,0.23,0.07,0.466,0.07,0.705C28.644,33.278,26.849,35.076,24.63,35.076z M27.486,13.244 c-0.021-0.171-0.052-0.339-0.052-0.516c0-1.855,1.265-3.401,2.975-3.861c0.333-0.09,0.678-0.153,1.04-0.153 c1.575,0,2.925,0.916,3.582,2.237c0.27,0.538,0.432,1.136,0.432,1.777c0,1.387-0.701,2.609-1.771,3.33 c-0.641,0.433-1.412,0.685-2.242,0.685C29.408,16.743,27.742,15.215,27.486,13.244z M33.74,28.743 c-0.676,0-1.305-0.184-1.863-0.479c-1.271-0.675-2.148-1.996-2.148-3.535c0-2.218,1.797-4.017,4.014-4.017 c1.258,0,2.366,0.59,3.104,1.494c0.562,0.69,0.914,1.562,0.914,2.521C37.755,26.945,35.958,28.743,33.74,28.743z"></path> </g> </g></svg>

                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Appearence
                    </div>
                </div>
                <div className={css}>
                    {/* icon  */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>


                    </div>
                    {/* Text */}
                    <div className='ml-3 '>
                        Plugins
                    </div>
                </div>



            </div>

            <div className='bg-blue-900 flex mx-4 rounded-md p-2 mt-5 items-center '>
                <div className="align-middle flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>

                </div>
                <div className='ml-4 hover:cursor-pointer'>
                    Available Credits
                <div>
                    224.10
                </div>
                </div>
            </div>














        </div>













    )
}

