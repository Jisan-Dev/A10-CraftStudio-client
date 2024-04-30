/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCraftItem = () => {
  // const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  // const [product, setProduct] = useState({});
  // useEffect(() => {
  //   fetch(`https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/productDetails/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //       console.log('data',data);
  //     });
  // }, [id]);

  const handleAddProduct = (data) => {
    console.log(data);
    fetch('https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/addProduct', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: '<strong>Product added successfully</strong>',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: '<strong>Something went wrong</strong>',
          });
        }
      });
    reset();
  };

  return (
    <div className="container mx-auto py-10 font-gsans">
      <div className="shadow-sm shadow-primary rounded-lg p-5 border-t border-t-indigo-400">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-4xl font-bold">
            <span className="mr-3 text-primary">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-primary">Add </span>
              Your Craft
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 font-medium" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="Name"
                id="name"
                {...register('user_name')}
              />

              <label className="block mb-2 font-medium" htmlFor="item_name">
                Item Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="Item Name"
                id="item_name"
                {...register('item_name')}
              />

              <label className="block mt-4 mb-2 font-medium" htmlFor="subcategory_name">
                Subcategory Name
              </label>
              <select
                {...register('subcategory_name')}
                id="subcategory_name"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="Select Subcategory">
                <option value="">Select Subcategory</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Water color Painting">Water color Painting</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>

              <label className="block mt-4 mb-2 font-medium" htmlFor="price">
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="number"
                placeholder="Enter Price"
                id="Price"
                {...register('price')}
              />

              <div className="mt-6">
                <p className="font-medium">Customization?</p>
                <label>
                  <input type="radio" {...register('customization')} value="yes" /> yes
                </label>
                <br />
                <label>
                  <input type="radio" {...register('customization')} value="no" /> no
                </label>
              </div>
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 font-medium" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="email"
                id="email"
                {...register('email')}
              />

              <label className="block mb-2 font-medium" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                {...register('image')}
                required
              />
              <label className="block mb-2 mt-4 font-medium" htmlFor="processing_time">
                Processing Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="eg: 1 - 2 weeks"
                id="processing_time"
                {...register('processing_time')}
              />

              <label className="block mb-2 mt-4 font-medium" htmlFor="stock_status">
                Stock Status
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                type="text"
                placeholder="eg: in stock / made to order"
                id="stock_status"
                {...register('stock_status')}
              />

              <label className="block mt-4 mb-2 font-medium" htmlFor="rating">
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300  focus:outline-none"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                {...register('rating')}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="feedbackText" className="font-medium">
              Short Description:
            </label>
            <br />
            <textarea
              className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-indigo-300  focus:outline-none mt-2"
              id="feedbackText"
              {...register('feedbackText')}
              rows={5} // Specify the number of visible rows
              cols={40} // Specify the number of visible columns
              placeholder="Type your short description here..."
            />
          </div>

          <button className="btn btn-primary rounded-lg px-4 w-full py-2 mt-4 text-white cursor-pointer font-semibold">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
