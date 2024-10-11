function Cards (props){
    return(
        <div className="p-5 bg-bgBody hover:shadow-inner hover:shadow-gray-300 hover:rounded-2xl flex flex-col items-center">
            <img src={props.img} alt="" className="md:h-60" />
            <h1 className="font-bold text-2xl my-2">{props.header}</h1>
            <p className="font-medium">{props.text}</p>
            <button className="bg-bgtext text-bgBody py-4 px-6 font-semibold mt-3 hover:bg-red-700">ORDER NOW</button>
        </div>
    );
} 
export default Cards;