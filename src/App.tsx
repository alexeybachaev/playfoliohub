import { useEffect } from "react";
import { fetchGames } from "./api/rawg";

function App() {
  useEffect(() => {
    fetchGames()
      .then((data) => {
        console.log("Данные от RAWG:", data);
        console.log("Первые 5 игр:", data.results.slice(0, 5));
      })
      .catch((err) => {
        console.error("Ошибка:", err.message);
      });
  }, []);

  return (
    <div>
      <h1>Game Vault</h1>
      <p>Открой консоль (F12 → Console), чтобы увидеть данные от API.</p>
    </div>
  );
}

export default App;
