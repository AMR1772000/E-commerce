import React from "react";

const Products = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 py-3">
        <div>
          <h1 className="text-[55px] font-thin">Latest Products</h1>
          <hr />
        </div>
        <div className="flex flex-row gap-10 mt-10 mb-10 text-gray-700 text-[19px] leading-8 font-medium">
          <button className="border border-solid border-black px-4 py-1">
            All
          </button>
          <button className="border border-solid border-black px-4 py-1">
            Men's Clothes
          </button>
          <button className="border border-solid border-black px-4 py-1">
            Women's Clothes
          </button>
          <button className="border border-solid border-black px-4 py-1">
            Jewelery
          </button>
          <button className="border border-solid border-black px-4 py-1">
            Electronics
          </button>
        </div>
        
      </div>
    </>
  );
};

export default Products;
