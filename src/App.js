import "./App.css";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <AddItem />
      <List />
    </div>
  );
}

export default App;
