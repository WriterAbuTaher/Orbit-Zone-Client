import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const MyProducts = () => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <>
            {/* <div key={_id}>
                <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                    <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                </div>
                <div>
                    <Link className="text-gray-800 lg:text-2xl transition duration-100 mb-1">{product_name}</Link>
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
                        <p className="text-gray-500">Condition</p>
                        <p className="font-medium">{condition}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">User Year</p>
                        <p className="font-medium">{PurchaseYear}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                    <div>
                        <p className="text-gray-500">Original Price</p>
                        <p className="font-medium">{original_price}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Mobile</p>
                        <p className="font-medium">{mobile}</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default MyProducts;