import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function Summer() {
    return (
        <div className="container-fixed">
            <Nav/>
            <Hero
            title="Welcome to Summer"
            photo="Summer.png"
            />
            <Footer/>
        </div>
    )
}