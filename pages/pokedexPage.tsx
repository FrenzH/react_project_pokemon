import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { use } from "react";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery("pokemonData", getPokemonData);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.results.map((poke) => {
        <li key={poke.url}>{poke.name}</li>;
      })}
    </div>
  );
}

async function getPokemonData() {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  return response;
}
