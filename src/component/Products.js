import { useEffect, useState } from "react";

const Products = () => {
  //States
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  //Fetching Data
  useEffect(() => {
    const getProducts = async () => { 
      const response = await fetch("https://fakestoreapi.com/products/");
      setData(await response.clone().json());
      console.log(response.clone().json());
      setFilter(await response.json());
    };
    getProducts();
  }, []);

  //Review Stars
  const reviewStars = (reviewRating) => {
    const roundedRating = Math.round(reviewRating * 2) / 2;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (roundedRating - i >= 1) {
        stars.push(<i key={i} className="fa fa-star text-orange-500"></i>); // Full star
      } else if (roundedRating - i === 0.5) {
        stars.push(
          <i key={i} className="fa fa-star-half-o text-orange-500"></i>
        ); // Half star
      } else {
        stars.push(<i key={i} className="fa fa-star-o text-orange-500"></i>); // Empty star
      }
    }
    return stars;
  };

  //Filter Data
  const filterData = (choice) => {
    const newList = data.filter((el) => el.category === choice);
    setFilter(newList);
  };

  //Show results
  const ShowResults = () => {
    return (
      <>
        {filter.map((el) => {
          return (
            <div
              key={el.id}
              className="flex flex-col w-[350px] justify-center items-center shadow-2xl rounded-2xl bg-gray-100"
            >
              <div className="w-[300px] flex flex-col justify-center items-center text-wrap px-4 pt-4 mt-4">
                <img
                  src={el.image}
                  alt="card"
                  className="w-[200px] h-[180px] mb-4"
                />
                <h3 className="text-[25px] leading-7 font-semibold mb-3">
                  {el.title.substring(0, 12)} ...
                </h3>
                <p className="text-[16px] text-gray-500 text-center py-2">
                  {el.description.substring(0, 90)} ...
                </p>
                <span className="text-[30px] leading-9 font-semibold text-orange-500 tracking-wide pb-2">
                  ${Math.ceil(el.price)}
                </span>
                <div className="flex justify-center items-center pt-1 pb-3 px-2">
                  {reviewStars(el.rating.rate)}
                </div>
              </div>
              <div className="flex flex-row flex-wrap px-4 py-4 gap-5 justify-center items-center border-t border-gray-400">
                <button className="flex justify-center items-center rounded-md px-2 py-1 bg-orange-500 text-[18px] font-semibold text-white">
                  Buy Now
                </button>
                <button className="flex justify-center items-center rounded-md px-2 py-1 bg-orange-500 text-[18px] font-semibold text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>
          <h1 className="text-[55px] font-thin">Latest Products</h1>
          <hr />
        </div>
        <div className="flex flex-row flex-wrap gap-10 mt-10 mb-10 text-gray-700 text-[19px] leading-8 font-medium">
          <button
            onClick={() => setFilter(data)}
            className="border border-solid border-black px-4 py-1  rounded-md"
          >
            All
          </button>
          <button
            onClick={() => filterData("men's clothing")}
            className="border border-solid border-black px-4 py-1 rounded-md"
          >
            Men's Clothes
          </button>
          <button
            onClick={() => filterData("women's clothing")}
            className="border border-solid border-black px-4 py-1 rounded-md"
          >
            Women's Clothes
          </button>
          <button
            onClick={() => filterData("jewelery")}
            className="border border-solid border-black px-4 py-1 rounded-md"
          >
            Jewelery
          </button>
          <button
            onClick={() => filterData("electronics")}
            className="border border-solid border-black px-4 py-1 rounded-md"
          >
            Electronics
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-16  mt-8 pt-5 justify-center items-center">
          <ShowResults />
        </div>
      </div>
    </>
  );
};

export default Products;
