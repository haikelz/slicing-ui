import Button from "./parts/Button";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className='bg-hero xl:h-[600px] 2xl:h-[712px]'>
       <div className="container mx-auto px-10 2xl:px-0"> 
       <Navbar />
         <div className='text-center mt-10 pb-14'>
           <h1 className='xl:w-8/12 lg:w-10/12 text-3xl text-white font-semibold mx-auto leading-relaxed font-mono'>Saya seorang FrontEnd Engineer, dan UI/UX Designer</h1>
           <p className='text-white text-opacity-60 2xl:w-3/12 lg:w-6/12 xl:w-4/12 mx-auto leading-relaxed mt-6 text-lg'>Dengan pengalaman selama 5 tahun ke belakang, saya siap menjadi partner kodingmu</p>
           <Button pill className='mt-10 border bg-yellow-500 hover:bg-yellow-600 text-black'>Pelajari</Button>
         </div>
       </div>
       </div>
    )
}

export default Hero; 