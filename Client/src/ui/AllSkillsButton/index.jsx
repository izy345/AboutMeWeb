import ReusableModal from "../ReusableModal"
import { useState } from "react";
import BulletPoint from "../BulletPoint";
import DevIconTag from "../Icon/DevIconTag";
import { useSelector } from "react-redux";


function AllSkillsButton() {


    const [show, setShow] = useState(false);
    return (
        <>
            <button
                className="commonButton"
                onClick={() => {setShow(true)}}
            >
                All Skills
            </button>

            <ReusableModal
            show={show}
            handleClose={() => {setShow(false)}}
            size="lg"
            >
                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Software Development -</span>
                    </div>
                    <DevIconTag type='ReactOriginal' text={'Web & Mobile Applications'} className="small-margin" />
                    <DevIconTag type='BashOriginal' text={'API Development'} className="small-margin" />
                    <DevIconTag type='ThealgorithmsOriginal' text={'Algorithm Creation'} className="small-margin" />
                    <DevIconTag type='BashOriginal' text={'Neural Networks'} className="small-margin" />
                    <DevIconTag type='SeleniumOriginal' text={'Selenium + BS4'} className="small-margin" />
                    <DevIconTag type='TensorflowLine' text={'Tensorflow'} className="small-margin" />
                    <DevIconTag type='PythonOriginal' text={'NLTK'} className="small-margin" />
                    <DevIconTag type='PythonOriginal' text={'Langchain'} className="small-margin" />
                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Frontend Technologies -</span>
                    </div>
                    <DevIconTag type='ReactOriginal' text={'React'} className="small-margin" />
                    <DevIconTag type='ReactOriginal' text={'React Native'} className="small-margin" />
                    <DevIconTag type='ReduxOriginal' text={'Redux'} className="small-margin" />
                    <DevIconTag type='Html5Original' text={'HTML'} className="small-margin" />
                    <DevIconTag type='Css3Original' text={'CSS'} className="small-margin" />
                    <DevIconTag type='JavascriptOriginal' text={'Javascript'} className="small-margin" />
                    <DevIconTag type='TypescriptOriginal' text={'Typescript'} className="small-margin" />
                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Backend Technologiest -</span>
                    </div>
                    <DevIconTag type='DotnetcoreOriginal' text={'.NET'} className="small-margin" />
                    <DevIconTag type='NhibernatePlain' text={'Nhibernate'} className="small-margin" />
                    <DevIconTag type='DotnetcorePlain' text={'EF Core'} className="small-margin" />
                    <DevIconTag type='CsharpOriginal' text={'C#'} className="small-margin" />
                    <DevIconTag type='DjangoPlain' text={'Django'} className="small-margin" />
                    <DevIconTag type='FlaskOriginal' text={'Flask'} className="small-margin" />
                    <DevIconTag type='PythonOriginal' text={'Python'} className="small-margin" />
                    
                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Database Management -</span>
                    </div>
                    <DevIconTag type='PostgresqlOriginal' text={'Postgresql'} className="small-margin" />
                    <DevIconTag type='AzuresqldatabaseOriginal' text={'Microsoft SQL'} className="small-margin" />
                    <DevIconTag type='OracleOriginal' text={'Oracle DB'} className="small-margin" />
                    <DevIconTag type='MysqlOriginal' text={'MySQL'} className="small-margin" />
                    <DevIconTag type='RedisOriginal' text={'Redis'} className="small-margin" />
                    <DevIconTag type='AmazonwebservicesOriginalWordmark' text={'AWS RDS'} className="small-margin" />
                    <DevIconTag type='MariadbOriginalWordmark' text={'Maria DB'} className="small-margin" />

                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Cloud Services -</span>
                    </div>
                    <DevIconTag type='AmazonwebservicesOriginalWordmark' text={'Amazon Web Services'} className="small-margin" />
                    <DevIconTag type='AzureOriginal' text={'DevOps'} className="small-margin" />
                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Software Lifecycles -</span>
                    </div>
                    <DevIconTag type='BashPlain' text={'Agile'} className="small-margin" />
                    <DevIconTag type='BashPlain' text={'Scrum'} className="small-margin" />
                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Version Control & Tools -</span>
                    </div>
                    <DevIconTag type='GitOriginal' text={'Git'} className="small-margin" />
                    <DevIconTag type='GithubOriginal' text={'GitHub'} className="small-margin" />
                    <DevIconTag type='DockerPlain' text={'Docker'} className="small-margin" />
                    <DevIconTag type='BashPlain' text={'Visual Studio'} className="small-margin" />
                    <DevIconTag type='BashPlain' text={'Visual Studio Code'} className="small-margin" />
                    <DevIconTag type='BashPlain' text={'NetBeans'} className="small-margin" />
                    <DevIconTag type='BashPlain' text={'LM Studio'} className="small-margin" />
                    <DevIconTag type='BashPlain' text={'Eclipse'} className="small-margin" />

                </BulletPoint>

                <BulletPoint>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className="bold-text">- Operating Systems -</span>
                    </div>
                    <DevIconTag type='Windows11Original' text={'Windows'} className="small-margin" />
                    <DevIconTag type='LinuxOriginal' text={'Linux'} className="small-margin" />
                    <DevIconTag type='AppleOriginal' text={'MacOS'} className="small-margin" />

                </BulletPoint>


            </ReusableModal>
        </>
    )
}

export default AllSkillsButton