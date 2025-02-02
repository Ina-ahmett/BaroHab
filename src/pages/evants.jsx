import Header from "../components/header";
import imageTwo from "../assets/imageTwo.webp";
import Categories from "../components/categoriesLissts";
import imageThree from "../assets/imageThree.webp";
import imageFour from "../assets/imageFour.webp";
import imageFive from "../assets/imageFive.webp"
import imageSix from "../assets/imageSix.webp"
import imageSeven from "../assets/imageSeven.webp"
import Footer from "../components/footer";

const EvantsPage = ()=>{
    return(
        <div>
            <Header/>
            <div className="bg-[#FFF3E8] w-[81%] ml-36 px-15 py-16 rounded-xl flex justify-evenly">
                <div>
                    <li className="bg-[#FFEBE9] w-28 px-2  rounded-xl text-red-500"> <span className="ml-[-10px]">Live events</span></li>
                    <h1 className="text-4xl font-bold w-[500px]">Explore our live events, talks and free workshops</h1>
                    <p className="text-gray-500 w-[500px] mt-2">Jump into a free workshop on UX design or data analytics, attend our students' demo days or join us for an interactive info session and find out more about Le Wagon.</p>
                </div>
                <img src={imageTwo} className="rounded-xl" />
            </div>

            <div className="flex gap-5">
                {/* leftSide */}
                <div className="p-6 max-w-xs bg-white ml-36">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>

                    {/* Topic */}
                    <div className="mb-6">
                        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                        <select id="topic" className="block w-40 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option disabled selected>Select</option>
                        <option>Data</option>
                        <option>Data Science</option>
                        <option>Data analysis</option>
                        <option>Data Engineering</option>
                        </select>
                    </div>
                    <hr className="w-40 mb-5"/>

                    {/* Type */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Type</h3>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="radio" name="type" value="all"className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">All</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio"  name="type" value="online"  className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">Online</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="type" value="on-site" className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">On-site</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="type" value="replay" className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">Replay</span>
                            </label>
                        </div>
                    </div>
                    <hr className="w-40 mb-5"/>

                    {/* Language */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Language</h3>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="radio" name="language" value="all" className="text-purple-600 focus:ring-purple-500"/>
                                <span className="ml-2 text-gray-700">All</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="language" value="english" className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">English</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="language" value="french" className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">French</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="language" value="spanish" className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">Spanish</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="language" value="german" className="text-purple-600 focus:ring-purple-500"/>
                                <span className="ml-2 text-gray-700">German</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="language"value="portuguese" className="text-purple-600 focus:ring-purple-500"/>
                                <span className="ml-2 text-gray-700">Portuguese</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="language" value="japanese" className="text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-gray-700">日本語</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* rightSide */}
                <div className="mt-5">
                    <h1 className="text-xl font-bold mb-4">Events that match your search</h1>
                    <hr className="mb-10"/>

                    <h1 className="text-2xl">Categories</h1>
                    <ul className="flex gap-5 mt-2">
                        <li className="bg-[#F6F2FC] text-blue-800 font-bold px-3 rounded-md">All</li>
                        <li className="hover:bg-[#F6F2FC] hover:text-blue-800 font-bold px-3 rounded-md">WorkShop</li>
                        <li className="hover:bg-[#F6F2FC] hover:text-blue-800 font-bold px-3 rounded-md">Talk</li>
                        <li className="hover:bg-[#F6F2FC] hover:text-blue-800 font-bold px-3 rounded-md">Info Session</li>
                        <li className="hover:bg-[#F6F2FC] hover:text-blue-800 font-bold px-3 rounded-md">Demo Day</li>
                    </ul>
                    {/* Evants Match */}
                    <div>
                        <Categories img={imageThree} title="Info Session"/>
                        <Categories img={imageFour} title="Demo Day"/>
                        <Categories img={imageFive} title="Talk"/>
                        <Categories img={imageSix} title="WorkShop"/>
                        <Categories img={imageSeven} title="Info Session"/>
                        <Categories img={imageThree} title="Demo Day"/>
                        <Categories img={imageFour} title="Talk"/>
                        <Categories img={imageFive} title="WorkShop"/>
                        <Categories img={imageSix} title="Info Session"/>
                        <Categories img={imageSeven} title="WorkShop"/>
                        <Categories img={imageThree} title="Demo Day"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default EvantsPage;