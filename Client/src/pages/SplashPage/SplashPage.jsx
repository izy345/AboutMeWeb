import AboutMe from "../../components/AboutMe"
import Experience from "../../components/Experience"
import Forecast from "../../components/Forecast"
import Projects from "../../components/Projects"


function SplashPage() {
    return (
            <section className="root">
                <AboutMe />
                <Forecast />
                <Experience />
                <Projects />
            </section>

    )
}

export default SplashPage