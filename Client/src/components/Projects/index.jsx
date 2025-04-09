import Card from "../../ui/Card/Card"
import BankChurnPredict from "./BankChurnPredict"
import ExpenseApp from "./ExpenseApp"
import NextWordPredictor from "./NextWordPredictor"


function Projects() {
  return (
    <section className="container">

        <Card style={{ padding: "8px", marginTop: "50px" }}>
            <section>
                <div className="gradientBackground">
                    <span className="bold-text">My Projects</span>
                    <span style={{fontSize:'12px'}}> (Click on each for more info)</span>
                </div>
            </section>

            <div style={{ display: 'flex', justifyContent: "space-evenly", flexWrap: "wrap"}}>
                <ExpenseApp />
                <BankChurnPredict />
                <NextWordPredictor />
                
            </div>
            
        </Card>

    </section>
  )
}

export default Projects