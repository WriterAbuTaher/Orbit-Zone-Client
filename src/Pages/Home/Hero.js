import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className="min-h-screen flex">
                <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
                    <div className="flex items-center flex-wrap gap-12 lg:gap-0">
                        <div className="lg:w-5/12 space-y-8">
                            <span className="flex space-x-2">
                                <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                                <span className="font-medium text-gray-600 dark:text-gray-400">Buy And Sell</span>
                            </span>
                            <h1 className="text-4xl font-bold md:text-6xl dark:text-white">Perfect Way <br /> To Buy And Sell <br /> Car On Our Platform.</h1>

                            <div className="flex space-x-4">
                                <Link type="button" title="Start Buying" className="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                    <span className="block text-white font-semibold">
                                        Buy Now
                                    </span>
                                </Link>
                                <Link type="button" title="Start Selling" className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                    <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                        Sell Now
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden relative md:block lg:w-7/12">
                            <img src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=996&t=st=1669314009~exp=1669314609~hmac=38d68fb2a84bedaa79b3dcf7994b9a1cdee6007ca6f8430c3aba0c75e3ba4cc8" className="ml-auto" alt="" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 w-full">
                    <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
                        <Link to='/about' className="hidden space-x-4 md:flex md:items-center">
                            <div className="text-gray-600 dark:text-gray-400">
                                <span className="text-sm">What You Know ?</span>
                                <p className="font-semibold text-gray-700 dark:text-gray-300">More About Our Platform</p>
                            </div>
                        </Link>
                        <div>
                            <Link className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">Facebook /</Link>
                            <Link className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">YouTube / </Link>
                            <Link className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;