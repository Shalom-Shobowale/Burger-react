import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
function Footer (){
    return(
        <footer className="bg-fixed bg-cover bg-no-repeat text-bgBody flex flex-col items-center mt-32 md:mt-0" style={{backgroundImage:"url(footer.png)"}}>
           <div className="md:w-[80%] w-[90%] py-14">
                <div>
                    <img src="logo-white.png" alt="" className="h-11"/>
                    <p className="mt-5 text-sm md:text-lg">Welcome to Burger Company, where passion for exceptional food and genuine hospitality come together. Our story is one of dedication to crafting the perfect burger experience, from sourcing the finest ingredients to delivering<br/> unparalleled taste in every bite.</p>
                </div>
                <div className="mt-7">
                    <div className="flex gap-4 items-center">
                        <FaLocationDot />
                        <p>IYANA IYESI, OJU ORE, 12908</p>
                    </div>
                    <div className="flex gap-4 mt-3 items-center">
                        <FaEnvelope />
                        <p>shobowaleshallom@gmail.com</p>
                    </div>
                    <div className="flex gap-5 text-2xl font-bold mt-10">
                        <FaFacebook />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaWhatsapp />
                    </div>
                </div>
           </div>
           <p className="text-center text-sm md:text-lg">Copyright © 2024 Web Design Mastery. All rights reserved.</p>
        </footer>
    );
}
export default Footer;