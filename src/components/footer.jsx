const Footer = ()=>{
    return(
        <div className="bg-blue-900  mt-36 px-66 py-20 text-white">
            <div className="flex gap-20">
                <div className="flex gap-20">
                    <div>
                        <h1>ABOUT US</h1>
                        <ul>
                            <li className="hover:text-gray-500 text-gray-400">FAQ</li>
                            <li className="hover:text-gray-500 text-gray-400">About le wadbf</li>
                            <li className="hover:text-gray-500 text-gray-400">Press</li>
                            <li className="hover:text-gray-500 text-gray-400">join us</li>
                            <li className="hover:text-gray-500 text-gray-400">Contact us</li>
                            <li className="hover:text-gray-500 text-gray-400">Privecy Policy</li>
                            <li className="hover:text-gray-500 text-gray-400">Legel Notice</li>
                        </ul>
                    </div>
                    <div>
                        <h1>ABOUT US</h1>
                        <ul>
                            <li className="hover:text-gray-500 text-gray-400">FAQ</li>
                            <li className="hover:text-gray-500 text-gray-400">About le wadbf</li>
                            <li className="hover:text-gray-500 text-gray-400">Press</li>
                            <li className="hover:text-gray-500 text-gray-400">join us</li>
                            <li className="hover:text-gray-500 text-gray-400">Contact us</li>
                            <li className="hover:text-gray-500 text-gray-400">Legel Notice</li>
                        </ul>
                    </div>
                    <div>
                        <h1>ABOUT US</h1>
                        <ul>
                            <li className="hover:text-gray-500 text-gray-400">FAQ</li>
                            <li className="hover:text-gray-500 text-gray-400">About le wadbf</li>
                            <li className="hover:text-gray-500 text-gray-400">Press</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h1 className="text-2xl mb-2">Explore our free courses</h1>
                    <div className="flex gap-5 text-2xl">
                        <i class="fa-brands fa-python"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <p className="mt-5 text-gray-300">Get access to over 200 hours of expertly curated content.</p>
                    <button className="bg-blue-500 px-5 py-2 rounded-md mt-5">Start Now!</button>
                </div>
            </div>

            <hr className="mt-44 font-bold" />
            <div className="flex justify-between px-10 py-5">
                <h1><i class="fa-regular fa-copyright"></i>  2025 Le Wagon, Inc. All rights reserved.</h1>
                <div className="flex gap-5 text-2xl">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    )
}
export default Footer;