import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import TableFrame from "./components/TableFrame";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <TableFrame />
    </div>
  );
}

export default App;
