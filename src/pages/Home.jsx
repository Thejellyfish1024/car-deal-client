import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <WhyChooseUs></WhyChooseUs>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;