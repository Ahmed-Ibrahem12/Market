import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/slices/wishlist";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { WishlistProducts } = useSelector((state) => state.wishlist);

  if (WishlistProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh] text-center ">
        <Heart size={60} className="text-gray-400 mb-3" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 mb-4">
          Browse products and add your favorites to your wishlist ❤️
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Wishlist ❤️</h2>
        <button
          onClick={() => dispatch(clearWishlist())}
          className="text-red-500 hover:text-red-700 flex items-center gap-2"
        >
          <Trash2 size={18} /> Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {WishlistProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image || product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </Link>

            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2 truncate">
                  {product.category}
                </p>
                <p className="text-blue-600 font-bold">${product.price}</p>
              </div>

              <button
                onClick={() => dispatch(removeFromWishlist(product))}
                className="mt-3 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg text-sm transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
