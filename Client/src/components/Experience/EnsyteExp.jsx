import ExperienceCard from "../../ui/Card/ExpCard"
import BulletPoint from "../../ui/BulletPoint"
import DevIconTag from "../../ui/Icon/DevIconTag"
import EnsyteLogo from '../../assets/EnsyteLogo.png'


function EnsyteExp() {
    return (
        <ExperienceCard
            profesion="Junior Software Developer"
            companyIcon={EnsyteLogo}
            companyName="Ensyte Energy Software International"
            location="Houston, TX (Full-Time, Hybrid)"
            timePeriod="Jan 2024 - Jan 2025"
        >
            <p/>
            <BulletPoint><span>
                Rectified 700+ bugs, introduced enhancements, and delivered ongoing support for desktop (WPF) and web
                (React) legacy applications, ensuring smooth operations within the oil and gas sector.
            </span></BulletPoint>
            <BulletPoint><span>
                Revamped legacy React components, increasing code reusability by 40% and slashing lines of code by 25%,
                enabling the most junior member to resolve critical bugs faster.
            </span></BulletPoint>
            <BulletPoint><span>
                Innovated a library with over 10+ reusable React components, decreasing front-end development time by 25%
                and ensuring consistent UI elements across all legacy and new energy projects.
            </span></BulletPoint>
            <BulletPoint><span>
                Recognized by company leaders for contributions in speed, and code readability.
            </span></BulletPoint>
            <p/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="bold-text">- Technologies Used -</span>
            </div>
            <section>
                <DevIconTag type='DotnetcoreOriginal' text={'.NET'} className="small-margin" />
                <DevIconTag type='Windows11Original' text={'Windows Presentation Form'} className="small-margin" />
                <DevIconTag type='ReactOriginal' text={'React'} className="small-margin" />
                <DevIconTag type='DjangoPlain' text={'Django'} className="small-margin" />
                <DevIconTag type='NhibernatePlain' text={'Nhibernate'} className="small-margin" />
                <DevIconTag type='DotnetcorePlain' text={'EF Core'} className="small-margin" />
                <DevIconTag type='AzureOriginal' text={'DevOps'} className="small-margin" />
                <DevIconTag type='ReduxOriginal' text={'Redux'} className="small-margin" />
                <DevIconTag type='BootstrapOriginal' text={'Bootstrap'} className="small-margin" />
                <DevIconTag type='OracleOriginal' text={'Oracle DB'} className="small-margin" />
                <DevIconTag type='AzuresqldatabaseOriginal' text={'Microsoft SQL'} className="small-margin" />
                <DevIconTag type='CsharpOriginal' text={'C#'} className="small-margin" />
                <DevIconTag type='JavascriptOriginal' text={'Javascript'} className="small-margin" />
                <DevIconTag type='TypescriptOriginal' text={'Typescript'} className="small-margin" />
            </section>
        </ExperienceCard>
    )
}

export default EnsyteExp