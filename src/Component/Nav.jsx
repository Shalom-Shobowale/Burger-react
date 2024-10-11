import { useState } from "react";
import Home from "./Home";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className="min-h-[95vh]"
      style={{ backgroundImage: "url(Landing.png)" }}
    >
      <header className="flex justify-center py-7 fixed md:relative top-0 z-10 w-full md:bg-transparent bg-bgtext " id='home'>
        <div className="flex justify-between items-center w-[80%]">
          <div className="cursor-pointer">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
              <img src="logo.png" alt="" className="h-11 md:flex hidden"/>
            </Link>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
              <img src="logo-white.png" alt="" className="h-11 flex md:hidden"/>
            </Link>
          </div>
          <nav>
              <ul className={`flex md:justify-end justify-center items-center flex-col md:flex-row gap-6 md:gap-10 font-bold text-[18px] left-0 md:right-[129px] top-24 md:top-10 absolute md:w-[90%] w-full md:bg-transparent bg-bgtext md:text-bgtext text-white cursor-pointer py-5 md:py-0 ${menu ? "top-20" : "top-[-490px]"}`}>
                <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                <li><Link to="special" spy={true} smooth={true} offset={30} duration={500}>Special</Link></li>
                <li><Link to="menu" spy={true} smooth={true} offset={25} duration={500}>Menu</Link></li>
                <li><Link to="event" spy={true} smooth={true} offset={-30} duration={500}>Event</Link></li>
                <li><Link to="form" spy={true} smooth={true} offset={-150} duration={500}>Contact Us</Link></li>
              </ul>
          </nav>
          <p className="md:hidden text-4xl cursor-pointer flex text-bgBody" onClick={()=> setMenu(!menu)}>{menu ? <IoMdClose />: <FaBars />}</p>
        </div>
      </header>
      <Home />
    </div>
  );
}
export default Nav;
