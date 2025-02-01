import Image1 from "../assets/imageOne.webp";
const Bandhig = ()=>{
    return(
        <div className="flex justify-around w-[80%] ml-40 mt-20">
            <div className="mt-10">
                <h1 className="font-bold text-4xl w-[500px]">Find the right financing
                options for you</h1>
                <p className="mt-5 text-gray-600 w-[500px]">Finances shouldn't be a barrier to accessing our bootcamps. We're always finding new ways to facilitate payments and fundings.</p>
                <button className="border-2 border-blue-500 px-20 text-blue-500 font-bold rounded-lg mt-2">See you...</button>
            </div>
            <img src={Image1} className="rounded-xl" />
        </div>
    )
}
export default Bandhig;