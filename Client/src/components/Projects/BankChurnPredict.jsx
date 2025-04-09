import ProjectCard from "../../ui/Card/ProjectCard"
import BankChurnPredictImg from "../../assets/BankChurnPredict.png"
import BulletPoint from "../../ui/BulletPoint"
import styles from "./Projects.module.css"

function BankChurnPredict() {

    return (
        <ProjectCard
            prjoectName='Bank Churn Predictor'
            projectTimespan='Feb 2025 - Feb 2025'
            projectImg={BankChurnPredictImg}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={BankChurnPredictImg} className={styles.imageStyling} />
            </div>
            <BulletPoint><span>
            This project leverages an Artificial Neural Network (ANN) model to predict customer churn for a banking institution.
            The model uses key customer features such as demographics, financial data, and activity status to estimate the likelihood of a customer leaving the bank.
            By integrating data preprocessing techniques like one-hot encoding and feature scaling, along with real-time input handling via the web app, this solution provides a user-friendly interface for bank managers to assess churn probabilities.
            The system offers valuable insights, helping businesses identify at-risk customers and take proactive retention measures.    
            </span></BulletPoint>
                    
        </ProjectCard>
    )
}

export default BankChurnPredict