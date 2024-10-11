// import Aos from 'aos'
// import 'aos/dist/aos.css'
import { useEffect } from 'react';
function Home() {
    // useEffect(()=>{
    //     Aos.init();
    // }, [])
  return (
    <div className="flex items-center justify-center md:h-[80vh] pt-32 md:pt-0 md:pb-0 pb-10">
        <div className="w-[90%] md:w-[80%] flex md:flex-row flex-col-reverse gap-7 md:gap-0">
            <div className=" md:w-[47%] flex flex-col justify-center items-center md:items-baseline" >
                <div className="md:w-[80%]">
                    <div className="border-[3px] border-bgtext border-dotted px-2 py-4 h-fit">
                        <p className="text-2xl font-semibold text-center font-Archivo">
                        IT IS GOOD TIME FOR THE GREAT
                         TASTE OF BURGER
                        </p>
                    </div>
                    <h1 className="font-bold text-4xl md:text-8xl mt-5 font-Garamond">
                        BURGER WEEK
                    </h1>
                </div>
            </div>
            <div className="md:w-[53%] rotate-1  ">
                <img src="header.png" alt=""/>
            </div>
        </div>
    </div>
  );
}
export default Home;
