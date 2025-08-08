import ExperienceCard from "../../ui/Card/ExpCard"
import BulletPoint from "../../ui/BulletPoint"
import DevIconTag from "../../ui/Icon/DevIconTag"
import IntuitiveMachinesLogo from '../../assets/intuitive_machines_logo.jpg'


function IntuitiveMachinesExp() {
    return (
    <ExperienceCard
        profesion="Ground Software Front End Engineer"
        companyIcon={IntuitiveMachinesLogo}
        companyName="Intuitive Machines"
        location="Houston, TX (Full-Time, Onsite)"
        timePeriod="Aug 2025 - Present"
    >
        <p/>
            <BulletPoint><span>
                Help develop and maintain the front end of Intuitive Machines Software.
            </span></BulletPoint>
            <BulletPoint><span>
                For more information, please visit the <a href="https://intuitivemachines.com" target="_blank" rel="noopener noreferrer">Intuitive Machines website</a>.
            </span></BulletPoint>

            <p/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="bold-text">- Technologies Used -</span>
            </div>
        <section>
            <DevIconTag type='ReactOriginal' text={'React'} className="small-margin" />
            <DevIconTag type='JavascriptOriginal' text={'Javascript'} className="small-margin" />
            <DevIconTag type='GithubOriginal' text={'and more...'} className="small-margin" />
        </section>

    </ExperienceCard>
    )
}

export default IntuitiveMachinesExp