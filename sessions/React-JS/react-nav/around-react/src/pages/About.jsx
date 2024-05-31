import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Stats from "../components/Stats"

export default function About() {
    return (
        <div>
            <Nav
                active="active"
            />
            <Hero
                title="The effective solutions for your business"
                subtitle="yayyyyyy About page"
            />
            <Stats
                happy="540"
                completed="1240"
                ftspecial="30+"
                awardsWon="15"
            />
        </div>
    )
}