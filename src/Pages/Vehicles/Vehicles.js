import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading';

const Vehicles = () => {

    const id = useParams();

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${id.id}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(products);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>

        </>
    );
};

export default Vehicles;