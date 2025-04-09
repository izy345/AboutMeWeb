import Card from "./Card";
import ProfileImg from "../ProfileImg";
import Icon from "../Icon";
import ReusableModal from "../ReusableModal";
import { useState } from "react";
import { useSelector } from "react-redux";

function ExperienceCard({children, profesion, companyIcon, companyName, location, timePeriod, style=null}) {

    const isMobile = useSelector((state) => state.mobile.isMobile);
    const [show, setShow] = useState(false);

    const cardStyle = style === null ? {width:`${ isMobile ? '96.0%' : '50%'}`, backgroundColor:'rgba(178, 202, 223, 0.7)', margin: '8px'} : style

    return (
        <>
        <Card style={cardStyle} onClick={() => {setShow(true)}}>
            <section style={{ display: "flex" }}>
                <div style={{ padding: "8px" }}>
                    <ProfileImg img={companyIcon} objectFit="contain" />
                </div>
                <div>
                    <div>
                        <span className="bold-text">
                            {profesion}
                        </span>
                    </div>
                    { !isMobile &&
                        <div>
                            <div>
                                <Icon type={"FaRegBuilding"} style={{marginBottom:'1px'}} />
                                <span> {companyName}</span>
                            </div>
                            <div>
                                <Icon type={"FaBusinessTime"} style={{marginBottom:'1px'}} />
                                <span> {location}</span>
                            </div>
                            <div>
                                <Icon type={"WiTime1"} style={{marginBottom:'1px'}} />
                                <span> {timePeriod}</span>
                            </div>
                        </div>
                    }
                </div>
            </section>
            { isMobile &&
                <div>
                    <div>
                        <Icon type={"FaRegBuilding"} style={{marginBottom:'1px'}} />
                        <span> {companyName}</span>
                    </div>
                    <div>
                        <Icon type={"FaBusinessTime"} style={{marginBottom:'1px'}} />
                        <span> {location}</span>
                    </div>
                    <div>
                        <Icon type={"WiTime1"} style={{marginBottom:'1px'}} />
                        <span> {timePeriod}</span>
                    </div>
                </div>
            }
        </Card>
        <ReusableModal
            show={show}
            handleClose={() => {setShow(false)}}
            size="lg"
            >
                <div 
                    style={{
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ProfileImg img={companyIcon} objectFit="contain" />
                </div>
                {children}
            </ReusableModal>
        </>
    );
}

export default ExperienceCard;
