import ProjectCard from "../../ui/Card/ProjectCard"
import ExpenseAppAE from "../../assets/ExpenseApp-AE.png"
import ExpenseAppEdit from "../../assets/ExpenseApp-Edit.png"
import ExpenseAppRecent from "../../assets/ExpenseApp-Recent.png"
import BulletPoint from "../../ui/BulletPoint"
import styles from "./Projects.module.css"

function ExpenseApp() {

    return (
        <ProjectCard
            prjoectName='Expenses Tracker App'
            projectTimespan='Mar 2025 - Mar 2025'
            projectImg={ExpenseAppAE}
            objectFit="cover"
            objectPosition="top"
            repoLink="https://github.com/izy345/ExpenseTrackerApp"
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={ExpenseAppAE} className={styles.mobileImageStyling} />
            </div>
            <BulletPoint><span>
                Simple expense tracking app that allows you to view, create, edit, and delete expenses to keep track of your economy.
                The app uses the popular frameworks React-Native and Django as well as popular libraries such as Axios and Redux (including Redux-Toolkit). 
                The app runs on both IOS and Android and has built in validations using the Yup library.
            </span></BulletPoint>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={ExpenseAppEdit} className={styles.mobileImageStyling} />
            </div>
            <BulletPoint><span>
                The screenshot above shows the edit screen of the app, which allows you to edit the expenses you have created.
                The app is designed to be user-friendly and intuitive, making it easy for anyone to use.
                I also have validations via the Yup library to ensure that the data entered is valid and meets the required criteria.
            </span></BulletPoint>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={ExpenseAppRecent} className={styles.mobileImageStyling} />
            </div>
            <BulletPoint><span>
                The screenshot above shows the recent expenss screen of the app, which allows you to view your expenses from the last 7 days.
            </span></BulletPoint>
            
        </ProjectCard>
    )
}

export default ExpenseApp