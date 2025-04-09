import Card from "./Card";
import ReusableModal from "../ReusableModal";
import { useState } from "react";
import GithubButton from "../GithubButton";

function ProjectCard({ repoLink='', objectFit='cover', objectPosition='center', children, prjoectName, projectTimespan, projectImg, style={width:'380px', backgroundColor:'rgba(213, 214, 163, 0.7)', margin: '8px', marginTop:'30px'}}) {

    const [show, setShow] = useState(false);

    return (
        <>
        <Card style={style} onClick={() => {setShow(true)}}>
            <section>
                <div style={{ padding: "0px", position: "relative" }}>
                    <img src={projectImg}
                        alt="Project"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "250px",
                            borderRadius: "8px",
                            objectFit: objectFit,
                            objectPosition: objectPosition,
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    {/* Overlay for the project name */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '-6px',
                            backgroundColor: 'rgba(213, 214, 163, 0.8)',
                            padding: '4px 12px',
                            borderRadius: '4px 4px 0 0',
                            color: '#737373',
                            fontWeight: '600',
                            fontSize: '14px',
                            //boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)"
                        }}
                        >
                        <span>{prjoectName}</span>
                    </div>
                </div>

                <div style={{ padding: "4px", display: "flex", justifyContent: `${repoLink === '' ? 'center' : 'space-between'}`, alignItems: "center", textAlign: "center" }}>
                    <span>
                        {projectTimespan} 
                    </span>
                    { repoLink !== '' && (
                    <div>
                        <GithubButton
                            url={repoLink}
                            style={{
                                marginLeft:'5px',
                                backgroundColor: '#94d1ce',
                                padding: '4px',
                                borderRadius: '4px',
                            }}
                        />
                    </div>
                )}
                </div>
            </section>
        </Card>
        <ReusableModal
            show={show}
            handleClose={() => {setShow(false)}}
            size="lg"
        >
            {children}
        </ReusableModal>
        </>
    );
}

export default ProjectCard;
