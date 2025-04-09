import ExperienceCard from "../../ui/Card/ExpCard"
import BulletPoint from "../../ui/BulletPoint"
import DevIconTag from "../../ui/Icon/DevIconTag"
import SterlingSprayLogo from '../../assets/STERLING-SPRAY.png'


function SterlingSprayExp() {
    return (
    <ExperienceCard
        profesion="Full Syack Developer"
        companyIcon={SterlingSprayLogo}
        companyName="Sterling Spray LLC."
        location="Houston, TX (Contract Work)"
        timePeriod="Aug 2023 - Present"
    >
        <p/>
            <BulletPoint><span>
                Developed and deployed the e-commerce website sterlingspray.com using React, following requirements, managing domain, work
                accounts and encryption to ensure a secure and functional online presence, with 99.9% uptime.
            </span></BulletPoint>
            <BulletPoint><span>
                Overhauled website security protocols through SSL encryption implementation and routine vulnerability
                assessments; fortified the platform and achieved zero incidents during tenure
            </span></BulletPoint>
            <BulletPoint><span>
                Engineered a new company website using React and cloud infrastructure that slashed website hosting expenses by
                60%, freeing up capital for marketing initiatives and expansion.
            </span></BulletPoint>
            <BulletPoint><span>
                Implemented a UI/UX overhaul based on the principles of user-centric design, which became the new standard for
                all customer-facing web pages and led to zero reported usability issues in production.
            </span></BulletPoint>
            <BulletPoint><span>
                Recognized for contributions to website security, user interface design, and cost efficiency.
            </span></BulletPoint>
            <BulletPoint><span>
                Website URL: <a href="https://sterlingspray.com" target="_blank" rel="noopener noreferrer">sterlingspray.com</a>
            </span></BulletPoint>

            <p/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="bold-text">- Technologies Used -</span>
            </div>
        <section>
            <DevIconTag type='ReactOriginal' text={'React'} className="small-margin" />
            <DevIconTag type='NodejsOriginal' text={'Node.js'} className="small-margin" />
            <DevIconTag type='JavascriptOriginal' text={'Javascript'} className="small-margin" />
            <DevIconTag type='AmazonwebservicesOriginalWordmark' text={'Amazon Web Services'} className="small-margin" />
        </section>

    </ExperienceCard>
    )
}

export default SterlingSprayExp