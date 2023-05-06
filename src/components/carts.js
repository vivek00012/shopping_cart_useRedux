import React, { useCallback, useMemo } from "react";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
const Carts = ({ state, dispatch }) => {
  const { cart } = state;

  const total = useMemo(() => {
    return cart
      .reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      .toFixed(2);
  }, [cart]);

  const handleRemove = useCallback(
    (c) => {
      dispatch({
        type: "UPDATE_CART",
        payload: {
          id: c.id,
          qty: c.qty - 1,
        },
      });
    },
    [dispatch]
  );

  const handleAdd = useCallback(
    (c) => {
      dispatch({
        type: "UPDATE_CART",
        payload: {
          id: c.id,
          qty: c.qty + 1,
        },
      });
    },
    [dispatch]
  );

  return (
    <div className="pl-4 w-full h-[95vh] ">
      <div className="w-full h-full  overflow-y-auto mb-4 p-x-4 bg-slate-300 flex flex-col">
        <div className="bg-white my-2 mx-2 text-black font-bold flex justify-between items-center px-2 py-4">
          <span>Cart Items</span>
          <div className="flex flex-col">
            <span className="text-gray-700">$ {total}</span>
          </div>
        </div>

        <hr className="border-black" />
        {cart.length > 0 ? (
          cart.map((c) => (
            <div
              key={c.id}
              className="flex flex-row bg-white rounded mx-2 my-2 justify-between px-2 py-3"
            >
              <div className="w-[50px] h-[50px]">
                <img src={c.thumbnail} alt="cart" className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-gray-600">{c.title}</span>
                <span className="">${c.price}</span>
                <div className="flex flex-row my-4 justify-end gap-4 items-center">
                  <IoIosRemoveCircle onClick={() => handleRemove(c)} />
                  <span className="text-sm">{c.qty}</span>
                  <IoIosAddCircle onClick={() => handleAdd(c)} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-4 flex justify-center text-slate-700 ">
            No Items to display
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
