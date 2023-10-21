/* eslint-disable react/no-unescaped-entities */
import { SiLightning } from 'react-icons/si';
import { FcIdea } from 'react-icons/fc';
import { MdGppGood } from 'react-icons/md';


const WhyChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16">
            <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Us</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 gap-5'>
                {/* 1 */}
                <div className='w-96 lg:w-96 md:w-full space-y-4 rounded-lg text-center flex flex-col bg-gray-800 text-white px-12 py-6 items-center'>
                    <div className='p-5 bg-blue-800 w-fit rounded-xl'>
                        <SiLightning className='text-4xl text-base-200'></SiLightning>
                    </div>
                    <h2 className='text-xl font-semibold'>Swift Solutions</h2>
                    <p>When you choose us, you're choosing speed and efficiency. We understand that your time is valuable, which is why we're committed to delivering fast and reliable service. Get back on the road in no time with our prompt solutions.</p>
                </div>
                {/* 2 */}
                <div className='w-96 lg:w-96 md:w-full space-y-4  rounded-lg text-center flex flex-col bg-gray-800 text-white px-12 py-6 items-center'>
                    <div className='p-5 bg-blue-800 w-fit rounded-xl'>
                        <MdGppGood className='text-4xl text-base-200'></MdGppGood>
                    </div>
                    <h2 className='text-xl font-semibold'>Tailored Excellence</h2>
                    <p> We take pride in offering unparalleled customization options that let you make your automotive dreams a reality. Our experts work hand in hand with you to create a vehicle that truly reflects your unique style and preferences.</p>
                </div>
                {/* 3 */}
                <div className='w-96 lg:w-96 md:w-full space-y-4 rounded-lg text-center flex flex-col bg-gray-800 text-white px-12 py-6 items-center'>
                    <div className='p-5 bg-blue-800 w-fit rounded-xl'>
                        <FcIdea className='text-4xl text-base-200'></FcIdea>
                    </div>
                    <h2 className='text-xl font-semibold'>Feature-Rich Innovation</h2>
                    <p>Our vehicles aren't just cars; they're an experience. We pack our automobiles with cutting-edge features and technology to ensure your driving pleasure is taken to the next level. Explore a world of innovation with every ride.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;