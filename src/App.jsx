import Component from "./Components/Component.jsx";
import Props from "./Props/Props.jsx";
import prodPic1 from './assets/prod1.webp';
import prodPic2 from './assets/prod2.jpg';
import prodPic3 from './assets/prod3.jpeg';

function App() {
    return (
        <div className="App min-h-screen flex items-center justify-center gap-14 bg-gray-100">
        <Props ProductImage = {prodPic1} ProductName = "Shoes" ProductDescription = "Shoes description" ProductPrice = {999}/>
        <Props ProductImage = {prodPic2} ProductName = "T-Shirt" ProductDescription = "T-shirt description" ProductPrice = {466}/>
        <Props ProductImage = {prodPic3} ProductName = "Watch" ProductDescription = "Watch description" ProductPrice = {2249}/>
        </div>
    );
}

export default App;
