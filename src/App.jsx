// import Component from "./Components/Component.jsx";
// import Props from "./Props/Props.jsx";
// import prodPic1 from './assets/prod1.webp';
// import prodPic2 from './assets/prod2.jpg';
// import prodPic3 from './assets/prod3.jpeg';
// import ConditionalRendering from "./ConditionalRendering.jsx";
import RenderList from "./RenderList.jsx";

function App() {

    const todo = [{task: 'Complete the Project', status:false},
                {task: 'Practice React', status:true},
                {task: 'Read a book', status:true}];

    return (
        <RenderList items={todo}/>
    );
}

export default App;
