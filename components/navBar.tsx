import PokemonLogo from '../asset/Pokemon-Logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar(){
    return(
        <nav className="flex justify-around">
            <Image src={PokemonLogo}
                   alt="pokemon logo"
                   className='inline w-60 h-24 '
            />
            <div className='container'>

                <ul className='flex gap-4'>
                    <li>
                        <Link className='' href='/'>Home</Link>
               
                    </li>
                    <li>
                        <Link className='' href='/pokedexPage'>Pokedex</Link>

                    </li>
                    <li>
                        <Link className='' href='/'>Games</Link>

                    </li>
                    <li>
                        <Link className='' href='/'>Cards</Link>

                    </li>

                </ul>
                

            </div>


            <div>
                menu
            </div>


          
            

        </nav>
    )
}