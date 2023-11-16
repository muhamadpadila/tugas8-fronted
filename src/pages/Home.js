// Import Footer, Hero, Movies, Navbar Components
import Hero from "../components/Hero/Hero";
import Movies from '../components/Movies/Movies';



const Home = (props) => {
  const {item, setItem} = props
  
    // state
   
  return (
   <div>
     <Hero />
     <Movies item={item} setItem={setItem}/>
     </div>
  )
}
export default Home

