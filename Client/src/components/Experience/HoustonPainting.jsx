import ExperienceCard from "../../ui/Card/ExpCard"
import BulletPoint from "../../ui/BulletPoint"
import DevIconTag from "../../ui/Icon/DevIconTag"
import HoustonPaintingLogo from '../../assets/HoustonPaintingLogo.jpg'


function HoustonPaintingExp() {
    return (
    <ExperienceCard
        profesion="Full Stack Developer"
        companyIcon={HoustonPaintingLogo}
        companyName="Houston Painting S & S LLC."
        location="Houston, TX (Contract Work)"
        timePeriod="Sep 2023 - May 2024"
    >
        <p/>
            <BulletPoint><span>
                Architected a scalable inventory tracking application featuring role-based access controls and real-time logging to
                enhance security and operational transparency, leading to zero security breaches during tenure.
            </span></BulletPoint>
            <BulletPoint><span>
                Developed a web application using React and Flask, integrating with AWS services to automate inventory management.
            </span></BulletPoint>
            <BulletPoint><span>
                Implemented a CI/CD pipeline using AWS CodePipeline and Git, reducing deployment time and ensuring
                consistent application performance and seamless updates.
            </span></BulletPoint>
            
            <p/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="bold-text">- Technologies Used -</span>
            </div>
        <section>
            <DevIconTag type='ReactOriginal' text={'React'} className="small-margin" />
            <DevIconTag type='FlaskOriginal' text={'Flask'} className="small-margin" />
            <DevIconTag type='PostgresqlOriginal' text={'Postgresql'} className="small-margin" />
            <DevIconTag type='JavascriptOriginal' text={'Javascript'} className="small-margin" />
            <DevIconTag type='PythonOriginal' text={'Python'} className="small-margin" />
            <DevIconTag type='AmazonwebservicesOriginalWordmark' text={'Amazon Web Services'} className="small-margin" />
        </section>

    </ExperienceCard>
    )
}

export default HoustonPaintingExp