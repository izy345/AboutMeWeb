import ProjectCard from "../../ui/Card/ProjectCard"
import NextWordExample from "../../assets/NextWordExample.png"
import BulletPoint from "../../ui/BulletPoint"
import styles from "./Projects.module.css"

function NextWordPredictor() {

    return (
        <ProjectCard
            prjoectName='Predict Next Word'
            projectTimespan='Feb 2025 - Feb 2025'
            projectImg={NextWordExample}
            objectFit="cover"
            objectPosition="top"
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={NextWordExample} className={styles.imageStyling} />
            </div>
            <BulletPoint><span>
                Developed an end-to-end word prediction model using LSTM-based Recurrent Neural Networks (RNN) with TensorFlow.
                Leveraged NLTK for text preprocessing and tokenization.
                Trained the model using literature from classics such as Holmes and Shakespeare to predict the next word in a sequence, achieving reasonable accuracy with a training time of 35m-4 hours (depending on data), while optimizing performance with deep learning techniques. 
            </span></BulletPoint>
                    
        </ProjectCard>
    )
}

export default NextWordPredictor