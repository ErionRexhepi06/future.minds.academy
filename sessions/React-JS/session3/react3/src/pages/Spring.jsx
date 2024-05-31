import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function Spring() {
    return (
        <div className="container-fixed">
            <Nav/>
            <Hero
            title="Welcome to Spring"
            photo="spring.png"
            />
            <Footer/>
        </div>
    )
}