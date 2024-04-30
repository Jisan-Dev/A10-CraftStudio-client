/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import ArtCard from '../components/ArtCard';
import { AuthContext } from '../providers/AuthProvider';

const MyCraftList = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { user } = useContext(AuthContext);
  const [customization, setCustomization] = useState('');
  useEffect(() => {
    fetch(`https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/allProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllCrafts(data));
  }, [user, deleted]);
  console.log(allCrafts);

  useEffect(() => {
    if (customization === '') {
      return;
    }
    if (customization === 'yes') {
      fetch(`https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/allProducts/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAllCrafts(data.filter((craft) => craft.customization === 'yes'));
        });
      return;
    } else if (customization === 'no') {
      fetch(`https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/allProducts/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAllCrafts(data.filter((craft) => craft.customization === 'no'));
        });
      return;
    }
  }, [customization]);

  return (
    <div className="container mx-auto font-gsans">
      <header>
        <h1 className="text-4xl font-bold text-center mb-2">Your Craft Items</h1>
        <p className="text-center text-xl text-base-content font-medium mb-4">Find the best craft and art items you have added</p>
      </header>
      <div className="my-3">
        <select onChange={(e) => setCustomization(e.target.value)} name="customization" id="customization" className="w-52 shadow-md p-3 rounded-md">
          <option value="">filter by customization</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allCrafts &&
          allCrafts.map((craft) => {
            return <ArtCard key={craft._id} product={craft} isDelete={true} deleted={deleted} setDeleted={setDeleted} />;
          })}
      </main>
    </div>
  );
};

export default MyCraftList;
