const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export async function fetchGames(page = 1, pageSize = 20) {
  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`,
  );
  if (!res.ok) throw new Error("Ошибка загрузки");
  return res.json();
}
