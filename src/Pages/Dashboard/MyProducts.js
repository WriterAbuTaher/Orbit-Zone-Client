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

        console.log(addProduct)

        fetch("http://localhost:5000/adverstainment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Product added successfully");
            });
    }

    return (
        <>
            {
                products.map(e => {
                    console.log(e);
                    return (
                        <div>
                            <button onClick={() => handleAdvertainment(e)} className="btn">advers</button>
                            <button className="btn">delete</button>
                        </div>
                    )
                })
            }
        </>
    );
};

export default MyProducts;