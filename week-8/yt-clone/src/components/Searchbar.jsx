
export function Searchbar() {
    return <div>

    
        <div className="w-96 flex border border-grey-500 rounded-3xl p-1 pl-3 text-sm pr-2 mt-3 bg-slate-100 ">
            <input id="default-search" className="w-full bg-slate-100 text-white border-none outline-none font-sans text-base pb-1 pl-1" placeholder="Search" required />
            <button className="bg-slate-750 text-grey-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>



            </button>
        </div>
        {/* </form> */}

    </div>
}