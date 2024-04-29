import React from 'react';
import ArtCard from '../components/ArtCard';

const MyCraftList = () => {
  return (
    <div className="container mx-auto font-gsans">
      <header>
        <h1 className="text-4xl font-bold text-center mb-2">Your Craft Items</h1>
        <p className="text-center text-xl text-base-content font-medium mb-4">Find the best craft and art items you have added</p>
      </header>
      <main>{/* <ArtCard /> */}</main>
    </div>
  );
};

export default MyCraftList;
