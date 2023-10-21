import { useContext } from "react";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import { AuthContext } from "../provider/AuthProvider";


const Home = () => {
    const {darkMode} = useContext(AuthContext)
    return (
        <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-[#FFF]'}`}>
            <Banner></Banner>
            <Brands></Brands>
            <WhyChooseUs></WhyChooseUs>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;