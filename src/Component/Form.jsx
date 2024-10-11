function Form(){
    return(
        <section id="form">
            <div className="flex justify-center mt-20 md:mt-36 relative h-[65vh]">
                <div className="w-[25%] absolute left-0 top-[-80px] hidden md:flex">
                    <img src="img5.png" alt="" data-aos="fade-right" />
                </div>
                <form action="https://formsubmit.co/523932e3b9d23c8a2ef0b4d76d9b1f5d" method="POST" className="md:w-[60%] text-center md:absolute md:left-[20%] md:px-0 px-5"  >
                    <h2 className="font-semibold text-2xl mb-3">RESERVATION</h2>
                    <h1 className="font-bold text-5xl mb-10">BOOK YOUR TABLE</h1>
                    <div className="flex flex-col md:flex-row gap-3 justify-center">
                        <input type="text" name="name" id="name" placeholder="NAME"  required  className="border border-black md:w-96 py-3 rounded-sm px-4 focus:outline-none"/>
                        <input type="text" name="email" id="email" placeholder="EMAIL" required className="border border-black md:w-96 py-3 rounded-sm px-4 focus:outline-none"/>
                    </div>
                        
                    <div className="flex flex-col md:flex-row gap-3 justify-center my-4">
                        <input type="date" name="date" id="date" required className="border border-black w-full md:w-96 py-3 rounded-sm px-4 focus:outline-none"/>
                        <input type="time" name="time" id="time" required className="border border-black w-full md:w-96 py-3 rounded-sm px-4 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 justify-center">
                        <input type="text" name="people" id="" placeholder="PEOPLE" required className="border border-black md:w-96 py-3 rounded-sm px-4 focus:outline-none"/>
                        <button type="submit" className="md:w-96 py-3 px-4 rounded-sm bg-bgtext hover:bg-red-700 text-bgBody font-semibold">FIND A TABLE</button>
                    </div>  
                </form>
                <div className="hidden w-[20%] absolute right-0 top-[-90px] md:flex">
                    <img src="img6.png" alt="" data-aos="fade-left"  />
                </div>
            </div>
        
        </section>
    );
}
export default Form;