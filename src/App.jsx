import Nav from "./Component/Nav";
import Cards from "./Component/Cards";
import Form from "./Component/Form";
import Event from "./Component/Event";
import Special from "./Component/Special";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <Nav />
      <Special />
      <Menu />
      <div className="flex justify-center items-center w-full mt-20">
        <div className="flex md:flex-row flex-col text-center w-[90%] md:w-[80%]">
          <Cards
            header="Chicken Burger"
            text={
              <>
                Sink your teeth into the timeless
                <br /> perfection of our Chicken Burger,an
                <br /> experience that never goes out of <br />
                style.
              </>
            }
            img="img2.png"
          />
          <Cards
            header={
              <>
                Veggie Delight
                <br /> Burger
              </>
            }
            text={
              <>
                Embrace the vibrant flavors of our
                <br /> Veggie Delight Burger, a celebration
                <br /> of freshness.
              </>
            }
            img="img3.png"
          />
          <Cards
            header={
              <>
                Veggie Delight
                <br /> Burger
              </>
            }
            text={
              <>
                Indulge in a symphony of smoky,
                <br /> savory flavors with our BBQ Bacon
                <br /> Burger, grilled .
              </>
            }
            img="img2.png"
          />
        </div>
      </div>
      <Event />
      <Form />
      <Footer />
    </>
  );
}

export default App;
