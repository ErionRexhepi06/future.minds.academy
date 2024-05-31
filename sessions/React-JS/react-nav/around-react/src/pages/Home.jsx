
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Fotter from "../components/Footer"

export default function Home() {
    return (
        <div>
            <Nav
                active="active"
            />
            <Hero
                title="The effective solutions for your business"
                subtitle="We are a team who creates marketing strategies for B2B and B2C companies"
            />
            <Stats
                happy="540"
                completed="1240"
                ftspecial="30+"
                awardsWon="15"
            />
            <Fotter/>
        </div>
    )
}