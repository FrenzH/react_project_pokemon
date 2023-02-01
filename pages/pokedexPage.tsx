import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, QueryClient,QueryClientProvider, } from "react-query";
import Link from "next/link";

const queryClient = new QueryClient();


export default function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <RenderPokemon />
    </QueryClientProvider>
  )
}







interface Data {
  url: string;
  name: string;
}

const fetchData = async (): Promise<Data[]> => {
  const response = await axios.get<Data[]>("https://pokeapi.co/api/v2/pokemon");
  return response.data;
};

const RenderPokemon: React.FC = () => {
  const { status, data, error } = useQuery<Data[], Error>("data", fetchData);
  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div>
          {data.results.map((item: Data) => (
            <div key={item.url}><Link href={`./pokemon/${item.url.slice(34,35)}`}>{item.name}</Link></div>
          ))}
        </div>
      )}
    </div>
  );
};

