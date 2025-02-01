import image from "../assets/imageHeader.webp";
const ImageHeader = ()=>{
    return(
        <div>
            <div style={{ backgroundImage: `url(${image})` }} className="h-[500px] w-[80%] ml-40 rounded-xl"> 
                <div className="ml-20 pt-20">
                    <p className="bg-[#FFF3E8]  px-2 rounded-lg w-[425px]">🚀 1st-ranked bootcamp in the world for 6,000+ reviews </p> 
                    <h1 className="text-4xl w-96 text-white">Build your future.
                    Learn Tech & AI.</h1>
                    <p className="text-gray-500 w-96">Join our immersive courses in web development, data and AI to transform your career and access new opportunities.</p>
                    <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-5">Browse Course</button>
                </div>
                <h1 className="text-white font-bold ml-[850px] mt-20">Aisha, Software Engineer</h1>
            </div>

            <div className="bg-blue-500 mt-10 w-[80%] ml-40 py-5 rounded-xl">
                <h1 className="text-center text-white text-xl">Top tech companies hire our graduates</h1>
                <div className="flex gap-20 mt-5 text-xl text-white">
                    <div className="flex ml-56">
                        <i class="fa-brands fa-meta text-xl"></i>
                        <h1 className="font-bold">Meta</h1>
                    </div>
                    <div className="flex">
                        <i class="fa-brands fa-airbnb"></i>
                        <h1>Airbnd</h1>
                    </div>
                    <div className="flex">
                        <i class="fa-brands fa-google"></i>
                        <h1>Google</h1>
                    </div>
                    <div className="flex">
                        <i class="fa-brands fa-space-awesome"></i>
                        <h1>Accenture</h1>
                    </div>
                    <div>
                        <h1>IBM</h1>
                    </div>
                    <div className="flex">
                        <i class="fa-brands fa-shopify"></i>
                        <h1>Shopify</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageHeader;