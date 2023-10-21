/* eslint-disable react/no-unescaped-entities */


const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto mb-10 p-4">
            <h2 className="md:text-3xl text-2xl font-semibold text-center my-8"> Frequently Asked Questions About Us</h2>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-semibold">
                    What types of vehicles do you offer?
                </div>
                <div className="collapse-content">
                    <p className="font-medium ">We offer a wide range of vehicles, including sedans, SUVs, trucks, and electric cars. Whether you're looking for a family vehicle or a high-performance sports car, we have options to suit your needs.</p>
                </div>
                {/*  */}
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-semibold">
                    Can I customize the features and options on my vehicle?
                </div>
                <div className="collapse-content">
                    <p className="font-medium ">Absolutely! We take pride in our extensive customization options. You can personalize everything from color and interior to advanced tech features to create a vehicle that's uniquely yours.</p>
                </div>
                {/*  */}
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-semibold">
                    How long does it take to get my customized vehicle?
                </div>
                <div className="collapse-content">
                    <p className="font-medium "> The time frame for customization varies depending on the level of personalization and the model chosen. On average, it takes 4-8 weeks for your tailored vehicle to be ready. Our team will provide you with a more specific timeline.</p>
                </div>
                {/*  */}
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-semibold">
                    What financing options do you offer?
                </div>
                <div className="collapse-content">
                    <p className="font-medium ">We offer a range of financing solutions to fit your budget, including lease, loan, and special financing options. Our financial experts can help you find the best option to suit your needs.</p>
                </div>
                {/*  */}
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-semibold">
                    Are your vehicles fuel-efficient or environmentally friendly?
                </div>
                <div className="collapse-content">
                    <p className="font-medium "> Many of our models are designed with fuel efficiency in mind. We also offer electric and hybrid options that are eco-friendly. Check out our lineup to see our environmentally conscious choices.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;






