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
        <div className="flex items-center flex-col h-screen sm:h-auto">
          <img src={EmptyCart} className="sm:h-scree m-auto " />
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
          <div className="w-1/2 text-start shadow-lg dark:bg-gray-700 relative mb-10 h-20 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>

            <h1 className="text-[1.5em]  m-auto p-3 rounded text-white font-bold mt-10 mb-10">
              Cart
            </h1>
            <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
          </div>

          <div className="overflow-x-auto w-full bg-gray-300 dark:bg-gray-700 rounded-lg sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 ">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10 text-center">
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
                        className="border-b border-neutral-200 dark:bg-gray-700 dark:border-white/10 text-center bg-gray-200"
                      >
                        <td className="whitespace-nowrap px-6 py-4 ">
                          <img
                            src={p?.images[0]}
                            width={70}
                            className="m-auto"
                          />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 ">
                          {p?.title}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="bg-whit rounded-lg">
                            <Button
                              onClick={() => dispatch(decrement(p))}
                              color="white"
                              size="sm"
                            >
                              -
                            </Button>
                            <Button size="sm" className="ms-2 me-2 font-bold">
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
                        <td className="whitespace-nowrap px-6 py-4">
                          {p?.price * p?.count}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
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
          <div className="sm:w-1/2 m-auto text-center mb-10 dark:bg-gray-700 dark:text-white bg-gray-300 flex justify-evenly rounded p-4 items-center mt-10">
            <Button
              onClick={() => dispatch(deleteAll())}
              color="red"
              // size="sm"
              className="flex items-center gap-2"
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
