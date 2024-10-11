function Special(){
    return(
        <div className="flex justify-center text-bgBody" id="special">
            <div className="grid md:grid-cols-12 mt-12 w-[95%] md:w-[80%] gap-4"> 
                <div className="md:col-span-6 rounded-3xl h-36 md:h-full bg-center bg-cover bg-no-repeat pl-7 pt-7 text-2xl" style={{backgroundImage: "url(grid-1.png)"}}>
                    <p>TRY IT OUT TODAY</p>
                    <h1 className="font-semibold text-3xl mt-2">MOST POPULAR BURGER</h1>
                </div>
                <div className="md:col-span-6 grid md:grid-rows-12 gap-3">
                    <div className="md:row-span-6 rounded-3xl h-36 md:h-48 bg-center bg-cover bg-no-repeat pl-7 pt-7 text-2xl" style={{backgroundImage: "url(grid-3.png)"}} >
                        <p>TRY IT OUT TODAY</p>
                        <h1 className="font-semibold text-3xl mt-2">MORE FUN <br/>MORE TASTE </h1>
                    </div>
                    <div className="md:row-span-6 rounded-3xl h-36 md:h-48 bg-center bg-cover bg-no-repeat pl-7 pt-7 text-2xl" style={{backgroundImage:"url(grid-2.png)"}} >
                        <p>TRY IT OUT TODAY</p>
                        <h1 className="font-semibold text-3xl mt-2">FRESH & CHILL</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Special;