import { useSelector } from "react-redux";
import Loader from "./../components/loader/Loader";
import ProductCard from "../components/ProductCard";

const SearchPage = ({ text }) => {
  const { SearchProducts, loading } = useSelector((state) => state.search);

  if (loading) {
    return <Loader />;
  }

  const hasResults = SearchProducts?.products?.length > 0;

  return (
    <div
      className={`bg-gray-300 flex flex-col items-center dark:bg-gray-800 text-center ${
        hasResults ? "" : "h-screen justify-center"
      }`}
    >
      {/* ===== Header ===== */}
      <div className="w-1/2 text-start shadow-lg relative dark:bg-gray-700 mb-10 h-20 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
        <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
        <h1 className="text-[1.5em] m-auto p-3 rounded text-white font-bold">
          Search Products
        </h1>
        <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
      </div>

      {/* ===== Results Section ===== */}
      <div className="flex flex-wrap container m-auto justify-center">
        {hasResults ? (
          <>
            <div className="w-full text-start shadow-lg relative mb-10 h-20 dark:bg-gray-700 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
              <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
              <h1 className="text-[1.5em] gap-2 ms-3 p-3 rounded text-white font-bold flex items-center">
                This Result Based On:{" "}
                <p className="text-yellow-400 ms-2">{text}</p>
              </h1>
              <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
            </div>

            {SearchProducts.products.map((p, i) => (
              <ProductCard key={i} p={p} />
            ))}
          </>
        ) : (
          // ===== Centered No Results Message =====
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="text-white text-3xl font-bold">No Products Found</h1>
            <p className="text-gray-400 mt-2">
              Try searching for something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
