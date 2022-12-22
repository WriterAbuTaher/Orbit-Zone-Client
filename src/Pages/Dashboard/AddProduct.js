import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/UserContext";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { user } = useContext(AuthContext);

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
                        image_url: imgData.data.url,
                        email: user.email
                    };
                    console.log(addproduct);
                    fetch("https://orbit-zone.vercel.app/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addproduct)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success("Product Added Successfully");
                        });
                }
            });
    };
    return (
        <div>
            <div className="mx-auto py-10">
                <form onSubmit={handleSubmit(handleAddproduct)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">
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
                            {errors.name && (
                                <p className="text-red-600">{errors.name?.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="img" className="block text-gray-700">
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
                            <label htmlFor="originalprice" className="block text-gray-700">
                                Original Price
                            </label>
                            <input
                                {...register("originalprice", {
                                    required: "originalprice is Required",
                                })}
                                type="text"
                                name="originalprice"
                                id="originalprice"
                                placeholder="Original Price"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                            {errors.email && (
                                <p className="text-red-600">{errors.originalprice?.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="resaleprice" className="block text-gray-700">
                                Resale Price
                            </label>
                            <input
                                {...register("resaleprice", {
                                    required: "resaleprice is Required",
                                })}
                                type="text"
                                name="resaleprice"
                                id="resaleprice"
                                placeholder="Resale Price"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                            {errors.email && (
                                <p className="text-red-600">{errors.resaleprice?.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-gray-700">
                                Location
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
                            <label htmlFor="phone" className="block text-gray-700">
                                Phone
                            </label>
                            <input
                                {...register("phone", { required: "phone is Required" })}
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="purchase" className="block text-gray-700">
                                Uses Year
                            </label>
                            <input
                                {...register("purchase", { required: "purchase is Required" })}
                                type="text"
                                name="purchase"
                                id="purchase"
                                placeholder="Uses Year"
                                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="condition"
                                className="block text-gray-700 mt-6"
                            >
                                Condition
                            </label>
                            <select
                                {...register("condition", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-gray-700 mt-6">
                                category
                            </label>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option value="1">Super Cars</option>
                                <option value="2">Luxury Cars</option>
                                <option value="3">Sports Cars</option>
                            </select>
                        </div>
                        <input
                            className="btn btn-primary w-full rounded-none py-2 px-8 mt-6 text-gray-100"
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