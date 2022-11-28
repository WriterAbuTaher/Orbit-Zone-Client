import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://orbit-zone.vercel.app/bookings/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-8'>
            {
                bookings.map(e => {
                    const { _id, image_url, product_name, price, number, address } = e;
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
                                    <p className="font-medium">{address}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Price</p>
                                    <p className="font-medium">{price}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Mobile</p>
                                    <p className="font-medium">{number}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyOrders;