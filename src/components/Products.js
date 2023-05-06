import React from "react";
const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div className="grid grid-cols-4 gap-8 max-h-[100vh] overflow-y-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between items-center"
        >
          <div className="w-full h-[220px] relative overflow-hidden rounded-xl">
            <img
              src={product.thumbnail}
              alt="product"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex w-full flex-row justify-between items-center py-2 mt-2">
            <span>{product.title}</span>
            <span>${product.price}</span>
          </div>

          <div className="flex flex-col gap-4 relative mt-2 w-full">
            {!cart.some((c) => c.id === product.id) ? (
              <button
                className="text-white border-black bg-sky-900 px-4 w-full"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: product.id,
                      title: product.title,
                      thumbnail: product.thumbnail,
                      qty: 1,
                      price: product.price,
                    },
                  })
                }
              >
                Add To Cart
              </button>
            ) : (
              <button
                className="text-gray-500 border border-black px-4 w-full"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                      id: product.id,
                    },
                  })
                }
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
