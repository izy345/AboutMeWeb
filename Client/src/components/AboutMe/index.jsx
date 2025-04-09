import Card from "../../ui/Card/Card"
import ProfileImg from "../../ui/ProfileImg"
import devImg from '../../assets/Developer.jpg'
import Icon from "../../ui/Icon";
import GlowOrb from "../../ui/GlowOrb/GlowOrb";
import { useSelector } from "react-redux";
import AllSkillsButton from "../../ui/AllSkillsButton";

function AboutMe() {

    const isMobile = useSelector((state) => state.mobile.isMobile);

    return (
        <section
                className="container"
                style={{
                display: isMobile ? '' : 'flex',
                justifyContent: isMobile ? '' : 'center',
                alignItems: isMobile ? '' : 'stretch',
            }}>

            <Card style={{
                width: isMobile ? 'auto' : '50%',
            
                }}>
                <section style={{ display: 'flex' }}>
                    <div style={{ padding: "8px" }}>
                        <ProfileImg img={devImg} />
                    </div>
                    <div>
                        <div>
                            <span className="bold-text">
                                Software Developer / Software Engineer
                            </span>
                        </div>
                        { !isMobile &&<div>
                            <div>
                                <Icon type={'LuUniversity'} />
                                <span> University of Houston - Clear Lake</span>
                            </div>
                            <div>
                                <Icon type={'GrCertificate'} />
                                <span> Bachelor of Science, Computer Science</span>
                            </div>
                            <div>
                                <Icon type={'AiOutlineSafetyCertificate'} />
                                <span> AWS Certified Cloud Practitioner.</span>
                            </div>
                        </div>}
                    </div>
                </section>
                <section style={{marginLeft:'12px'}}>
                    { isMobile &&
                        <div>
                            <div>
                                <Icon type={'LuUniversity'} />
                                <span> University of Houston - Clear Lake</span>
                            </div>
                            <div>
                                <Icon type={'GrCertificate'} />
                                <span> Bachelor of Science, Computer Science</span>
                            </div>
                            <div>
                                <Icon type={'AiOutlineSafetyCertificate'} />
                                <span> AWS Certified Cloud Practitioner.</span>
                            </div>
                            <p/>
                        </div>
                    }
                    <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
                        <div>
                            <GlowOrb color={'green'} size={12}/>  <span>Israel is available for hire!</span>
                        </div>
                        <div>
                            <AllSkillsButton />
                        </div>
                    </div>
                </section>
            </Card>

            <Card
                style={{
                    width: isMobile ? '' : '50%',
                    marginBottom: isMobile ? '50px' : '8px',
                    padding: "8px",
                }}
            >
                <div>
                    <span className="bold-text">About Me</span>
                </div>
                <span>
                Full stack developer with
                <span className="bold-text-2"> 2+ years </span>
                of experience engineering scalable web applications, mobile apps, and APIs including .NET, Python, and React. 
                Proven track record of reducing costs by 60% and enhancing application efficiency through innovative solutions. 
                Skilled in cloud services (AWS & Azure), modern front-end frameworks, back-end frameworks and database management (including ORMs). 
                </span>
            </Card>
        </section>

    );
}

export default AboutMe;
