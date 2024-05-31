import Nav from "../components/Nav"
import Footer from

export default function Allseasons() {
    return (
        <Nav/>
        <main class="row">
            <div class="col">
                <h1 class="text-center">Welcome to all seasons!</h1>
                <div>
                    <img class="img-xxl" src="assets/images/spring.png" alt="Summer" />
                </div>
                <div>
                    <img class="img-xxl" src="assets/images/summer.png" alt="Summer" />
                </div>
                <div>
                    <img class="img-xxl" src="assets/images/fall.png" alt="Summer" />
                </div>
                <div>
                    <img class="img-xxl" src="assets/images/winter.png" alt="Summer" />
                </div>

            </div>
        </main>
        <Footer/>
    )
}