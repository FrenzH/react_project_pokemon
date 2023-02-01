import { useRouter } from "next/router";
import axios from "axios";
import { useQuery, QueryClient,QueryClientProvider, } from "react-query";
const queryClient = new QueryClient();
function App() {
    return (
      
      <QueryClientProvider client={queryClient}>
        <RenderSpecificPokemon />
      </QueryClientProvider>
    )
  }

interface Data {
    abilities: any[];
    base_experience:number;
    forms:any[];
    game_indices:any[];
    heigth:number;
    held_items:any[];
    id:number;
    its_default:boolean;
    location_area_encounters:string;
    moves:any[];
    name:string;
    order:number;
    past_types:any[];
    species:object;
    sprites:object;
    stats:any[];
    types:any[];
    weigth:number;


  }

const getData = async (): Promise<Data[]> => {
    const router = useRouter()
    const {url} = router.query
    const response = await axios.get<Data[]>(`https://pokeapi.co/api/v2/pokemon/${url}`);
    return response.data;
    
}

const RenderSpecificPokemon: React.FC = () => {
    const { status, data, error } = useQuery<Data[], Error>("dataId", getData);
    return (
      <div>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error: {error.message}</div>}
        {status === "success" && (
          <div>
            {data.map((item: Data) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default App;