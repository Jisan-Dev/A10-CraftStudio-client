import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtCard from '../components/ArtCard';

const Category = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  console.log(name);
  useEffect(() => {
    fetch(`https://a10-craft-studio-server.vercel.app/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, [name]);
  return (
    <>
      <header className="my-6">
        <h1 className="text-4xl font-bold text-center pb-6">{name}</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-4">
        {products.map((product) => {
          return <ArtCard key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Category;
