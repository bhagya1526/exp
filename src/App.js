import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas/Canvas.js'
import Component from './Component/Component.js'
function App() {
  return (
    <div className="main flex h-screen">
      <div className="bg-cover w-1/2" style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/020/987/651/original/light-gray-diagonal-stripes-medium-lines-seamless-pattern-background-illustration-vector.jpg')",}}>
        <div className="flex justify-center items-center h-screen"><Canvas height="1080px" width="1080px" style={{height:400, width:400}}/></div>
      </div>
      <div className=" w-1/2">
        <Component />
      </div>
    </div>
        
  );
}

export default App;
