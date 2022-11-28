import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/UserContext';

const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://orbit-zone.vercel.app/products?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(products);

    const handleAdvertainment = (e) => {

        const { product_name, original_price, image_url } = e;

        const addProduct = {
            product_name: product_name,
            original_price: original_price,
            image_url: image_url
        }

        fetch("https://orbit-zone.vercel.app/adverstainment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Product Adverstainment Successfully");
            });
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-8'>
                {
                    products.map(e => {
                        const { _id, image_url, product_name, price, mobile, location } = e;
                        console.log(e);
                        return (
                            <div key={_id}>
                                <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                                    <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                </div>
                                <div>
                                    <h1 className="text-gray-800 lg:text-2xl transition duration-100 mb-1">{product_name}</h1>
                                    <div className="flex items-end gap-2">
                                        <span className="text-gray-800 lg:text-lg font-bold">${price}</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                                    <div>
                                        <p className="text-gray-500">Location</p>
                                        <p className="font-medium">{location}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Price</p>
                                        <p className="font-medium">{price}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Mobile</p>
                                        <p className="font-medium">{mobile}</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-sm">
                                    <button
                                        onClick={() => handleAdvertainment(e)}
                                        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                    >
                                        <span
                                            className="absolute inset-0 border border-gray-600 group-active:border-gray-500"
                                        ></span>
                                        <span
                                            className="block border border-gray-600 bg-gray-600 px-12 py-3 transition-transform active:border-gray-500 active:bg-gray-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                        >
                                            Adverstainment Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default MyProducts;