import { Button } from "@material-tailwind/react";
import React from "react";
import EmptyCart from "../img/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.webp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrement,
  deleteAll,
  deleteProduct,
  increment,
} from "../redux/slices/products";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { CartProducts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = CartProducts.reduce(
    (total, prod) => total + prod.price * prod.count,
    0
  );

  return (
    <div>
      {CartProducts.length == 0 ? (
        <div className="flex flex-col h-screen items-center sm:h-auto">
          <img src={EmptyCart} className="m-auto mt-16 sm:h-scree" />
          <Button
            color="green"
            className="mb-10 mt-10"
            onClick={() => navigate("/")}
          >
            Go Shopping
          </Button>
        </div>
      ) : (
        <div
          className={
            CartProducts.length < 3
              ? "flex flex-col w-full container items-center m-auto h-screen p-5 sm:p-0"
              : "flex flex-col w-full container items-center m-auto mb-10 p-5    sm:p-0"
          }
        >
          <div className="flex bg-gray-500 h-20 rounded-lg shadow-lg text-start text-white w-1/2 dark:bg-gray-700 items-center mb-10 mt-5 relative">
            <span className="bg-green-400 h-full rounded-b-lg rounded-t-lg w-2 absolute left-0 top-0"></span>

            <h1 className="m-auto p-3 rounded text-[1.5em] text-white font-bold mb-10 mt-10">
              Cart
            </h1>
            <span className="bg-green-400 h-full rounded-b-lg rounded-t-lg w-2 absolute right-0 top-0"></span>
          </div>

          <div className="bg-gray-300 rounded-lg w-full dark:bg-gray-700 lg:-mx-8 overflow-x-auto sm:-mx-6">
            <div className="inline-block min-w-full py-2">
              <div className="overflow-hidden">
                <table className="text-left text-sm text-surface dark:text-white font-light min-w-full">
                  <thead className="border-b border-neutral-200 text-center dark:border-white/10 font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartProducts.map((p, i) => (
                      <tr
                        key={i}
                        className="bg-gray-200 border-b border-neutral-200 text-center dark:bg-gray-700 dark:border-white/10"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img
                            src={p?.images[0]}
                            width={70}
                            className="m-auto"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {p?.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="bg-whit rounded-lg">
                            <Button
                              onClick={() => dispatch(decrement(p))}
                              color="white"
                              size="sm"
                            >
                              -
                            </Button>
                            <Button size="sm" className="font-bold me-2 ms-2">
                              {p.count}
                            </Button>
                            <Button
                              onClick={() => dispatch(increment(p))}
                              color="white"
                              size="sm"
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {p?.price * p?.count}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button
                            onClick={() => dispatch(deleteProduct(p))}
                            color="red"
                            size="sm"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-300 justify-evenly m-auto p-4 rounded text-center dark:bg-gray-700 dark:text-white items-center mb-10 mt-10 sm:w-1/2">
            <Button
              onClick={() => dispatch(deleteAll())}
              color="red"
              // size="sm"
              className="flex gap-2 items-center"
            >
              Clear All <MdDelete className="text-[1.2em]" />
            </Button>
            <p className="text-[1.1em] font-bold">
              Total Price : {totalPrice.toFixed(2)}
            </p>
            <Button color="green">Check Out</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
