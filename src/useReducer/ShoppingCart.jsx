import { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemExists = state.items.find(item => item.id === action.payload.id);

      if (itemExists) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );

        const updatedTotalAmount =
          state.totalAmount + action.payload.price;

        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };

        const updatedItems = state.items.concat(newItem);
        const updatedTotalAmount =
          state.totalAmount + newItem.price;

        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
    }

    case "INCREASE_QUANTITY": {
      const updatedItems = state.items.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + state.items.find(item => item.id === action.payload).price,
      };
    }

    case "DECREASE_QUANTITY": {
       const updatedItems = state.items.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
      );

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + state.items.find(item => item.id === action.payload).price,
      };
    }  
      

    case "REMOVE_ITEM":
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const decreasedTotalAmount = state.totalAmount - (itemToRemove.price * itemToRemove.quantity);
      return {
        ...state,
        items: filteredItems,
        totalAmount: decreasedTotalAmount,
      }

    case "CLEAR_CART":
      return{
          items: [],
          totalAmount: 0
      };  

    default:
      return state;
}

}

function ShoppingCart(){
  const [state, dispatch] = useReducer(reducer, initialState);

    const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Headphones", price: 3000 },
    { id: 3, name: "Keyboard", price: 1500 },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h1>Shopping Cart</h1>
      
      <h2>Products</h2>
      <div >
        {products.map((product) => (
          <div key={product.id} className="w-44 product border  p-2 m-2 inline-block">
            <img src="#" alt="" className="p-16 bg-gray-400"/>
            <p>{product.name} - ₹{product.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })} className="border p-1 bg-amber-400 mt-4"> Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Cart</h3>  
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
       <ul>
          {state.items.map(item => (
            <li key={item.id} className="mb-2">
              {item.name} - ₹{item.price} × {item.quantity} = ₹
              {item.price * item.quantity}
              <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })} className="border p-1 ml-2" >+</button>
              <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })} className="border p-1 ml-2">-</button>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })} className="border p-1 ml-2">Remove</button>
            </li>
          ))}
        </ul>
        )}

      <h3>Total: ₹{state.totalAmount}</h3>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })} className="border p-1 bg-red-400 mt-4">
        Clear Cart
      </button>
        
    </div>
  );
}

export default ShoppingCart;