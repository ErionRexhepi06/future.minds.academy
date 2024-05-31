import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function Fall() {
    return (
        <div className="container-fixed">
            <Nav/>
            <Hero
            title="Welcome to Fall"
            photo="fall.png"
            />
            <Footer/>
        </div>
    )
}