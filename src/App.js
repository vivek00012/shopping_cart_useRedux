import "./App.css";
import { useReducer, useEffect } from "react";
import { cartReducer } from "./reducers/cartReducer";
import axios from "axios";
import Products from "./components/Products";
import Carts from "./components/carts";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log(state);
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-4">
      <header className="App-header"></header>
      <div className="grid grid-cols-8 -betweenjustify">
        <div className="col-span-6 h-screen w-full">
          <Products state={state} dispatch={dispatch} />
        </div>
        <div className="col-span-2">
          <Carts state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
