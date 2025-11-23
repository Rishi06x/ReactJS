// import Component from "./Components/Component.jsx";
// import Props from "./Props/Props.jsx";
// import prodPic1 from './assets/prod1.webp';
// import prodPic2 from './assets/prod2.jpg';
// import prodPic3 from './assets/prod3.jpeg';
// import ConditionalRendering from "./ConditionalRendering.jsx";
// import RenderList from "./RenderList.jsx";
// import Counter from "./UseState/Counter.jsx";
// import Form from "./OnChange/Form.jsx"
// import ColorPicker from "./OnChange/ColorPicker";
// import Demo from "./UseEffect/Demo.jsx";
// import Theme from "./useContext/Theme.jsx"
// import ThemeProvider from "./useContext/Theme.jsx";
// import Timer from "./useRef/Timer.jsx"
// import Todo from "./ToDo/Todo.jsx";
// import Counter from "./useMemo/Counter.jsx"
// import Demo from "./useCallback/Demo.jsx"
// import Counter from "./CustomHooks/Counter.jsx"
// import ImgGallery from "./ImageGallery/ImgGallery";
// import ShoppingCart  from "./useReducer/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Cart from "./Routing/Cart";
import Feature from "./Routing/NestedRoute/feature";
import New from "./Routing/NestedRoute/New";
import Products from "./Routing/DynamicRoutes/Products";
import ProductDetails from "./Routing/DynamicRoutes/ProductDetails";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />}>
            <Route index element={<Feature/>}/>
              <Route path="/Feature" element={<Feature/>}/>
              <Route path="/New" element={<New/>}/>
            </Route>
            <Route path="Products" element={<Products/>}>
              <Route path=":ProductId" element={<ProductDetails/>}/>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;