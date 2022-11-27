import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleAddproduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?key=${'a125c2013df7f50e362c68821df4fb77'}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const addproduct = {
                        product_name: data.name,
                        original_price: data.originalprice,
                        price: data.resaleprice,
                        location: data.location,
                        mobile: data.phone,
                        PurchaseYear: data.purchase,
                        condition: data.condition,
                        category_id: data.category,
                        description: data.message,
                        image_url: imgData.data.url,
                        time: new Date()
                    };
                    console.log(addproduct);
                    fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addproduct)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success("Product added successfully");

                        });
                }
            });
    };
    return (
        <div>
            <div className="max-w-4xl mx-auto bg-white rounded-md shadow-md dark:bg-gray-100">
                <form onSubmit={handleSubmit(handleAddproduct)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
                        <div>
                            <label htmlFor="name" className="block dark:text-gray-400">
                                Product Name
                            </label>
                            <input
                                {...register("name", {
                                    required: "Name Is Required",
                                    minLength: {
                                        value: 4,
                                        message: "Name Must Be 4 Characters Or Long",
                                    },
                                })}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Product Name"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-600">{errors.name?.message}</p>
                        )}
                        <div>
                            <label htmlFor="img" className="block dark:text-gray-400">
                                Product Image
                            </label>
                            <input
                                {...register("image", {
                                    required: true,
                                })}
                                type="file"
                                name="image"
                                id="image"
                                accept="image/*"
                                placeholder="Enter Your img"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="originalprice" className="block dark:text-gray-400">
                                originalprice
                            </label>
                            <input
                                {...register("originalprice", {
                                    required: "originalprice is Required",
                                })}
                                type="text"
                                name="originalprice"
                                id="originalprice"
                                placeholder="originalprice"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-600">{errors.originalprice?.message}</p>
                        )}
                        <div>
                            <label htmlFor="resaleprice" className="block dark:text-gray-400">
                                resaleprice
                            </label>
                            <input
                                {...register("resaleprice", {
                                    required: "resaleprice is Required",
                                })}
                                type="text"
                                name="resaleprice"
                                id="resaleprice"
                                placeholder="resaleprice"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-600">{errors.resaleprice?.message}</p>
                        )}
                        <div>
                            <label htmlFor="location" className="block dark:text-gray-400">
                                location
                            </label>
                            <input
                                {...register("location", { required: "location is Required" })}
                                type="text"
                                name="location"
                                id="location"
                                placeholder="location"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block dark:text-gray-400">
                                phone
                            </label>
                            <input
                                {...register("phone", { required: "phone is Required" })}
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="phone"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="purchase" className="block dark:text-gray-400">
                                purchase
                            </label>
                            <input
                                {...register("purchase", { required: "purchase is Required" })}
                                type="text"
                                name="purchase"
                                id="purchase"
                                placeholder="purchase"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="condition"
                                className="block dark:text-gray-400 mt-6"
                            >
                                Condition*
                            </label>
                            <select
                                {...register("condition", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option>excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block dark:text-gray-400 mt-6">
                                category*
                            </label>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option value="1">HP Laptop</option>
                                <option value="2">DELL Laptop</option>
                                <option value="3">WALTON Laptop</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block dark:text-gray-400">
                                Message*
                            </label>
                            <textarea
                                {...register("message", { required: "message is Required" })}
                                name="message"
                                placeholder="exmple@gmail.com"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <input
                            className="btn btn-secondary w-full rounded-none py-2 px-8 mt-6 text-gray-100"
                            value="Add a Product"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;