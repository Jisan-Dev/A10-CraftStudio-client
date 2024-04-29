import React, { useContext, useEffect, useState } from 'react';
import ArtCard from '../components/ArtCard';
import { AuthContext } from '../providers/AuthProvider';

const MyCraftList = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllCrafts(data));
  }, [user]);
  console.log(allCrafts);

  return (
    <div className="container mx-auto font-gsans">
      <header>
        <h1 className="text-4xl font-bold text-center mb-2">Your Craft Items</h1>
        <p className="text-center text-xl text-base-content font-medium mb-4">Find the best craft and art items you have added</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allCrafts &&
          allCrafts.map((craft) => {
            return <ArtCard key={craft._id} product={craft} isDelete={true} />;
          })}
      </main>
    </div>
  );
};

export default MyCraftList;
