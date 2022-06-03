import "./App.css";
import Coins from "./components/Coins";
import Cards from "./components/Cards";
import HorizontalLine from "./components/HorizontalLine";
import Relative from "./components/Relative";

function App() {
  const coins = ["BTC", "DOGE", "BCH", "CHD"];
  const cards = [
    { name: "WTF - USD", value: "1.11" },
    { name: "VUE - RUB", value: "80000.00" },
    { name: "BTC - USD", value: "99999.99" },
    { name: "DOGE - USD", value: "0.0014" },
  ];
  return (
    <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      <div class="container">
        <Coins coins={coins} />
        <HorizontalLine />
        <Cards cards={cards} />
        <HorizontalLine />
        <Relative />
      </div>
    </div>
  );
}

export default App;
