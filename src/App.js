import { CustomFetchHook } from "./utils/fetchHook";

function App() {
  const url = "https://moviesdatabase.p.rapidapi.com/actors";
  const { data } = CustomFetchHook(url);
  return (
    <div>
      {data.results?.map((s, index) => (
        <div key={index}>
          <p>{s?.primaryName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
