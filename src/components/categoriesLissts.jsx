import imageThree from "../assets/imageThree.webp"

const Categories = (props) =>{
    return(
        <div className="flex gap-5 mt-5 w-full py-2 px-5 border-2 border-gray-300 rounded-xl">
            <img src={props.img} className="w-36 h-30 rounded-xl" />
            <div>
                <h1 className="bg-[#F6F2FC] text-blue-500 font-bold w-28 px-2 rounded-md">{props.title}</h1>
                <h1 className="text-xl font-bold w-[470px]">How to finance your bootcamp with an interest-free loan</h1>
                <p className="font-bold text-red-500">Tue, February 4 • 12:00 pm (Europe/Amsterdam Time)</p>
                <h3 className="text-gray-500">Online</h3>
            </div>
            <button className="bg-blue-500 px-15 text-white font-bold h-10 mt-10 rounded-md">Register Now</button>
        </div>
    )
}
export default Categories;