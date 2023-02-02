import "./App.css";
import CardContainer from "./components/Card/CardContainer";
import NavBar from "./components/NavBar";

function App() {
  const genres = [
    "action",
    "comedy",
    "adventure",
    "Children",
    "Anime",
    "Crime",
    "Drama",
    "Family",
    "Horror",
    "History",
  ];
  const container = genres.map((genre, index) => (
    <CardContainer genre={genre} key={index} />
  ));
  return (
    <div className="App">
      <NavBar />
      {container}
    </div>
  );
}

export default App;
