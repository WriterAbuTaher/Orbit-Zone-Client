import React from 'react';

const Sponsors = () => {
    return (
        <>

            <div className="relative flex flex-col items-center overflow-hidden py-16 md:py-20 my-20 bg-gray-100 dark:bg-gray-800">
                <div className="container relative z-[1] m-auto px-6 md:px-12">
                    <div className="m-auto text-center md:w-8/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Your favorite companies are our partners.</h2>
                    </div>
                    <div className="m-auto mt-16 md:w-11/12">
                        <div className="flex flex-wrap justify-center gap-6">
                            <div
                                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src="https://www.carlogos.org/car-logos/tesla-logo.png"
                                    className="contrast-0 transition group-hover:contrast-100 w-32"
                                    loading="lazy"
                                    alt="logo airbnb"
                                />
                            </div>
                            <div
                                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src="https://www.carlogos.org/car-logos/bmw-logo.png"
                                    className="contrast-0 transition group-hover:contrast-100 w-32"
                                    loading="lazy"
                                    alt="logo microsoft"
                                />
                            </div>
                            <div
                                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src="https://www.carlogos.org/car-logos/honda-logo.png"
                                    className="contrast-0 transition group-hover:contrast-100 w-32"
                                    loading="lazy"
                                    alt="logo ge"
                                />
                            </div>
                            <div
                                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src="https://www.carlogos.org/car-logos/nissan-logo.png"
                                    className="contrast-0 transition group-hover:contrast-100 w-32"
                                    loading="lazy"
                                    alt="logo"
                                />
                            </div>
                            <div
                                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src="https://www.carlogos.org/car-logos/hyundai-logo.png"
                                    className="contrast-0 transition group-hover:contrast-100 w-32"
                                    loading="lazy"
                                    alt="logo"
                                />
                            </div>
                            <div
                                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src="https://www.carlogos.org/car-logos/toyota-logo.png"
                                    className="contrast-0 transition group-hover:contrast-100 w-32"
                                    loading="lazy"
                                    alt="logo automatic"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sponsors;