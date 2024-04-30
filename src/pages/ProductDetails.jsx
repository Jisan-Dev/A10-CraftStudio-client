import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://a10-craft-studio-server.vercel.app/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div className="flex max-sm:flex-col my-10 container mx-auto gap-8 pb-10 w-full max-sm:px-4 overflow-x-hidden font-gsans">
      <div data-aos="fade-right" data-aos-duration="1000" className="w-1/2 max-sm:w-full rounded-lg overflow-hidden">
        <img src={product?.image} className="h-full object-cover" />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="w-1/2 max-sm:w-full flex flex-col justify-center">
        <h2 className="text-base-content text-opacity-80 text-lg font-medium mb-1 font-kufam">{product?.subcategory_name}</h2>
        <h1 className="text-base-content text-3xl md:text-4xl font-bold mb-4 font-kufam">{product?.item_name}</h1>
        <div className="flex gap-6 items-center font-kufam mb-5">
          <h3 className="text-base-content text-opacity-80 text-2xl font-semibold"> ${product?.price} </h3>
          <span className="text-sm bg-primary bg-opacity-60 text-white rounded-md py-2 px-4 capitalize font-bold font-source">{product?.stock_status}</span>
        </div>
        <p className="text-base-content text-opacity-80 text-base sm:text-lg font-medium mb-4 font-source"> {product?.feedbackText} </p>
        <p className="text-primary text-opacity-70 text-base md:text-xl font-semibold mb-2 font-source">
          <strong className="text-base-content text-[18px] font-bold mr-1">Added by: </strong> {product?.user_name}
        </p>
        <p className="text-base-content text-opacity-70 text-base md:text-xl font-semibold font-source">
          <strong className="text-base-content text-[18px] font-bold mr-1">Rating : </strong> {product?.rating}
        </p>
        <p className="text-base-content text-opacity-70 text-base md:text-xl font-semibold font-source">
          <strong className="text-base-content text-[18px] font-bold mr-1">Processing-time : </strong> {product?.processing_time}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
