const Header = ()=>{
    return(
        <div className="flex justify-between px-36 py-5">
            <div className="flex gap-2">
                <div className="bg-red-500 h-8 w-7 rounded-md">
                    <i class="fa-solid fa-car-side text-white ml-1 mt-2"></i>
                </div>
                <h1 className="text-xl font-bold">Le Wagon</h1>
            </div> 
            <ul className="flex gap-20">
                <li>courses</li>
                <li>Location</li>
                <li>Why Le Wagon</li>
                <li>Events</li>
                <li>Enterprise</li>
            </ul> 
            <div>
                <i class="fa-solid fa-language text-2xl"></i>
                <button className="bg-blue-500 py-2 px-2 text-white font-bold rounded-lg ml-10 mb-1">Apply</button>
            </div>          
        </div>
    )
}
export default Header;