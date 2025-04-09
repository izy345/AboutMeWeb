import Card from "../../ui/Card/Card"
import EnsyteExp from "./EnsyteExp"
import HoustonPaintingExp from "./HoustonPainting"
import SterlingSprayExp from "./SterlingSprayExp"
import { useSelector } from "react-redux";


function Experience() {

    const isMobile = useSelector((state) => state.mobile.isMobile);
    
    return (
    <section className="container">

        <Card style={{ padding: "8px", marginTop: "50px",}}>
            <section>
                <div className="gradientBackground">
                    <span className="bold-text">My Experience</span>
                    <span style={{fontSize:'12px'}}> (Click on each for more info)</span>
                </div>
            </section>
        

            <div style={{display:`${isMobile ? '' :'flex'}`}}>    
                <EnsyteExp />
                <SterlingSprayExp />
            </div>
            <div style={{display:`${isMobile ? '' :'flex'}`, alignContent:'center', justifyContent:'center'}}>
                <HoustonPaintingExp />
            </div>
        </Card>

    </section>
    )
}

export default Experience