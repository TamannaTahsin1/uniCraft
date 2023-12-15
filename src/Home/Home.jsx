import Banner from "../Components/Banner/Banner";
import Contact from "../Content/Contact";
import Pricing from "../Content/Pricing/Pricing";
import Question from "../Content/Question/Question";
import Recent from "../Content/Recent/Recent";
import Review from "../Content/Review/Review";
import Works from "../Content/Works/Works";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recent></Recent>
      <Works></Works>
      <Review></Review>
      <Pricing></Pricing>
      <Question></Question>
      <Contact></Contact>
      <div className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
