import ProjectCard from "../../ui/Card/ProjectCard"
import FrogeTV from "../../assets/FrogeTV.png"
import ExpenseAppEdit from "../../assets/ExpenseApp-Edit.png"
import ExpenseAppRecent from "../../assets/ExpenseApp-Recent.png"
import BulletPoint from "../../ui/BulletPoint"
import styles from "./Projects.module.css"

function FrogeTVTwitchAPI() {

    return (
        <ProjectCard
            prjoectName='FrogeTV: Twitch & 3rd Party APIs App'
            projectTimespan='Apr 2025 - Present'
            projectImg={FrogeTV}
            objectFit="cover"
            objectPosition="top"
            //repoLink="https://github.com/izy345/ExpenseTrackerApp"
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={FrogeTV} className={styles.mobileImageStyling} />
            </div>

            <BulletPoint><span>
                📱 While Twitch’s mobile app is functional, it lacks support for these extensions, which are essential to the platform’s culture.
                Emotes from 7TV, BTTV, and FFZ aren’t just fun extras — they’re core to how millions of Twitch users communicate, interact, and build community.
            </span></BulletPoint>

            <BulletPoint><span>
                ✨ What makes FrogeTV special?
                Native support for animated and static emotes from all three platforms.
                <p/>
                - Real-time Twitch chat rendering with custom styling and emotes.
                <p/>
                - A unified, enhanced experience that mobile users previously only had on desktop. autcompletion of emotes.
                <p/>
                - Ability to use the same the name of the emote by simply clicking on it!
            </span></BulletPoint>

            <BulletPoint><span>
                🔧 On the technical side:
                <p/>
                - Built on the Twitch API for live streams, chat, and user data.
                <p/>
                - Integrated with multiple third-party APIs (7TV, BTTV, FFZ).
                <p/>
                - Optimized for performance on mobile while managing real-time data flow from live chats.
            </span></BulletPoint>

            <BulletPoint><span>
                💡 This project closes the gap between desktop and mobile Twitch, making community-first features available anywhere.
            </span></BulletPoint>

            <BulletPoint><span>
                - Interested? Check below for the full demo! The first half shows a phone UI, while the second half shows a tablet UI.
            </span></BulletPoint>

            <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/MgvPfFEubTA" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
            
        </ProjectCard>
    )
}

export default FrogeTVTwitchAPI