import notFound from '../assets/pikachu_not_found.png'
import Header from '../components/Header'
import { Container, H1 } from '../styles/StylePokemonList'

export default function NotFound() {
    
    return (
        <>
        <Header></Header>
        <H1>Oh no!</H1>
        <H1>Page not found.</H1>
        <Container>
            <img src={notFound} alt='Not found page' style={{margin:'50px auto', width:'200px', height:'50%'}}/>
        </Container>
        </>
    )
}