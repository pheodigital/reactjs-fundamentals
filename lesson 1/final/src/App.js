import "./App.css";
import Header from "./Header";

function App() {
  const btnClick = () => console.log("button");

  return (
    <div className="App">
      <Header txtColor={"red"} btnClick={btnClick} />
      <Header txtColor={"blue"} btnClick={btnClick} />
    </div>
  );
}

export default App;
