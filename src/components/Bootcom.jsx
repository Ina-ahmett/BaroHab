import studen from '../assets/student.webp'
import sharaxaadimg from '../assets/sharaxaad.png'
import some from '../assets/some.webp'
const Bootcomp = () => {
  return(
    <>
    <h1 className="text-4xl font-semibold text-center pt-10">Join a career-changing bootcamp</h1>
    <p className="text-center font-thin px-10">Our transformative training courses have helped thousands of students launch new careers in tech.</p>
    <div className="flex justify-center items-center space-x-8 pt-5">
      <div className="flex items-center space-x-3">
      <i class="fa-solid fa-check text-2xl text-red-600"></i>
      <h1 className="text-xl font-bold ">200-400 hours</h1>
      </div>
      <div className="flex items-center space-x-3">
      <i class="fa-solid fa-check text-2xl text-red-600"></i>
      <h1 className="text-xl font-bold ">200-400 hours</h1>
      </div>
      <div className="flex items-center space-x-3">
      <i class="fa-solid fa-check text-2xl text-red-600"></i>
      <h1 className="text-xl font-bold ">200-400 hours</h1>
      </div>
      <div className="flex items-center space-x-3">
      <i class="fa-solid fa-check text-2xl text-red-600"></i>
      <h1 className="text-xl font-bold ">200-400 hours</h1>
      </div>
    </div>
    <div className="flex justify-center items-center pt-10 space-x-8">
      <div className="w-[300px] h-[300px]">
        <div className="w-full h-[150px]">
        <img src={studen} className='w-full h-full' alt="" />
        </div>
        <h1 className="text-2xl font-semibold pl-4 pt-3">Web developement</h1>
        <p className="text-md pl-4 font-thin">Building a websites and mobile Apps</p>
        <button className='py-2 px-10 ml-2 rounded-xl mt-3 border-2 text-blue-900 font-semibold border-blue-500'>Learn Web development
        <i class="fa-solid fa-angle-right ml-3"></i>
        </button>
      </div>
      <div className="w-[300px] h-[300px]">
        <div className="w-full h-[150px]">
        <img src={studen} className='w-full h-full' alt="" />
        </div>
        <h1 className="text-2xl font-semibold pl-4 pt-3">Web developement</h1>
        <p className="text-md pl-4 font-thin">Building a websites and mobile Apps</p>
        <button className='py-2 px-10 ml-2 rounded-xl mt-3 border-2 text-blue-900 font-semibold border-blue-500'>Learn Web development
        <i class="fa-solid fa-angle-right ml-3"></i>
        </button>
      </div>
      <div className="w-[300px] h-[300px]">
        <div className="w-full h-[150px]">
        <img src={studen} className='w-full h-full' alt="" />
        </div>
        <h1 className="text-2xl font-semibold pl-4 pt-3">Web developement</h1>
        <p className="text-md pl-4 font-thin">Building a websites and mobile Apps</p>
        <button className='py-2 px-10 ml-2 rounded-xl mt-3 border-2 text-blue-900 font-semibold border-blue-500'>Learn Web development
        <i class="fa-solid fa-angle-right ml-3"></i>
        </button>
      </div>
      <div className="w-[300px] h-[300px]">
        <div className="w-full h-[150px]">
        <img src={studen} className='w-full h-full' alt="" />
        </div>
        <h1 className="text-2xl font-semibold pl-4 pt-3">Web developement</h1>
        <p className="text-md pl-4 font-thin">Building a websites and mobile Apps</p>
        <button className='py-2 px-10 ml-2 rounded-xl mt-3 border-2 text-blue-900 font-semibold border-blue-500'>Learn Web development
        <i class="fa-solid fa-angle-right ml-3"></i>
        </button>
      </div>
    </div>
    <p className='mt-10 text-center'>You can start for FREE! <span className='text-blue-600 underline'>Join a live webinar</span> for web development, data analytics, or UX design.</p>
    <div className="w-[600px] px-20 pt-20">
    <h1 className='text-4xl font-bold'>Join the 1st ranked tech bootcamp</h1>
    </div>
    <div className="flex justify-center  items-center">
      <div className="">
        <h3 className='text-2xl font-thin px-10'>We are ranked among the best bootcamps in the world on Course Report, Switchup and Career Karma.</h3>
        <div className="flex justify-start pl-10 pt-5 items-center space-x-8">
        <div className=" w-20">
        <i class="fa-solid fa-star text-yellow-600"></i>
        <i class="fa-solid fa-star text-yellow-600"></i>
        <i class="fa-solid fa-star text-yellow-600"></i>
        <i class="fa-solid fa-star text-yellow-600"></i>
        <i class="fa-solid fa-star text-yellow-600"></i>
        </div>
        <div className="w-60">
          <p className='text-md font-bold'>4.98/5 based on 6000+ student reviews</p>
        </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="">
          <img src={sharaxaadimg} className='w-[200px] h-40' alt="" />
        </div>
        <div className="">
          <img src={sharaxaadimg} className='w-[200px] h-40' alt="" />
        </div>
        <div className="">
          <img src={sharaxaadimg} className='w-[200px] h-40' alt="" />
        </div>
      </div>
    </div>
    <div className="h-screen bg-blue-950 mt-10">
      <h2 className="text-center text-gray-500 pt-8">why LE WAGON</h2>
      <h1 className="text-center font-bold text-5xl px-80 pt-4 text-white">Learn with supportive teachers and change your career in a few months</h1>
      <div className="flex justify-center pt-10 items-center">
        <div className="w-[700px]">
          <h1 className='text-3xl font-bold px-40'>Get solid foundations by working on real-world projects</h1>
          <p className='text-2xl font-thin px-32 pt-20'>Join courses developed with industry experts and practice on hands-on projects to get actionable skills. Develop a standout portfolio to be ready for your job search.</p>
        </div>
        <div className="">
          <img src={some} className='rounded-2xl' alt="" />
        </div>
      </div>
    </div>
    <div className="h-screen bg-blue-950 pt-20">
      <div className="flex justify-center  items-center">
      <div className="">
          <img src={some} className='rounded-2xl' alt="" />
        </div>
        <div className="w-[700px]">
          <h1 className='text-3xl font-bold px-40'>Get solid foundations by working on real-world projects</h1>
          <p className='text-2xl font-thin px-32 pt-20'>Join courses developed with industry experts and practice on hands-on projects to get actionable skills. Develop a standout portfolio to be ready for your job search.</p>
        </div>
      </div>
    </div>
    <div className="h-screen bg-blue-950 pt-20">
      <div className="flex justify-center  items-center">
        <div className="w-[700px]">
          <h1 className='text-3xl font-bold px-40'>Get solid foundations by working on real-world projects</h1>
          <p className='text-2xl font-thin px-32 pt-20'>Join courses developed with industry experts and practice on hands-on projects to get actionable skills. Develop a standout portfolio to be ready for your job search.</p>
        </div>
        <div className="">
          <img src={some} className='rounded-2xl' alt="" />
        </div>
      </div>
    </div>
    <h3 className="text-center text-md font-semibold text-blue-600 pt-10">GLOBAL IMPACT</h3>
    <h1 className="text-center font-bold px-60 text-5xl">Join an exciting community, access new opportunities</h1>
    <div className="h-[70vh] flex justify-center space-x-20 items-center">
      <div className="space-y-5">
      <h1 className='text-7xl font-bold text-blue-950'>28,000</h1>
      <h1 className='text-3xl font-normal'>graduates worldwide</h1>
      <p className="text-md w-80 font-thin">Join a global community present in 100+ countries to find a job, freelance gigs, launch your startup and access lots of career opportunities.</p>
      </div>
      <div className="space-y-5">
      <h1 className='text-7xl font-bold text-blue-950'>#1</h1>
      <h1 className='text-3xl font-normal '>graduates worldwide</h1>
      <p className="text-md w-80 font-thin">Join a global community present in 100+ countries to find a job,  freelance gigs, launch your startup and access lots of career opportunities.</p>
      </div>
    </div>
    <div className="h-[70vh] flex justify-center space-x-20 items-center">
      <div className="space-y-5">
      <h1 className='text-7xl font-bold text-blue-950'>28,000</h1>
      <h1 className='text-3xl font-normal'>graduates worldwide</h1>
      <p className="text-md w-80 font-thin">Join a global community present in 100+ countries to find a job, freelance gigs, launch your startup and access lots of career opportunities.</p>
      </div>
      <div className="space-y-5">
      <h1 className='text-7xl font-bold text-blue-950'>#1</h1>
      <h1 className='text-3xl font-normal '>graduates worldwide</h1>
      <p className="text-md w-80 font-thin">Join a global community present in 100+ countries to find a job,  freelance gigs, launch your startup and access lots of career opportunities.</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
    <p className='text-md font-thin text-center px-60  pt-10'>*Our reports are based on surveys sent 6 months after training from 3467 respondents and publicly available data. Our last report was updated in December 2024 and captures outcomes of bootcamp graduates that finished bootcamp in Europe or Online from 1st of Oct. 2022 to 30th of Sep. 2023.</p>
    <button className="text-md font-semibold py-2 px-8 l mt-10 rounded-md border-2 text-center border-blue-500">Get Our job report
    <i class="fa-solid fa-angle-right ml-3"></i>
    </button>
    </div>
    </>
  )
}

export default Bootcomp;