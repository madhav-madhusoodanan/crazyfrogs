import Rainbow from "../components/rainbow"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import About from "../components/home/About"

export default function Home() {
    return (
        <div className="bg-black min-h-screen w-auto">
            <div className="h-screen min-w-screen bg-bg overflow-x-hidden flex flex-col justify-between overflow-y-scroll">
                <Navbar />
                <Hero />
                {/* <About /> */}
            </div>
        </div>
    )
}
