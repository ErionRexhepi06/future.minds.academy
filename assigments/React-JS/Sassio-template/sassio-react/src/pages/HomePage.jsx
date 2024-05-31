import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Trusted from "../components/Trusted"
import Safety from "../components/Safety"
import Path from "../components/Path"
import Features from "../components/Features"

export default function Home() {
    return (
        <div className="container-fixed">
            <Nav/>
            <Hero/>
            <Trusted/>
            <Safety/>
            <Path/>
            <Features/>
        </div>
    )
}