import React from 'react'
import { Card } from 'react-bootstrap'
import BulletPoint from '../../ui/BulletPoint'
import { useNavigate } from 'react-router-dom'

function SpecialThanks() {

    const navigate = useNavigate()

    return (
        <section className="root">
            <Card style={{ padding: "8px"}}>
                <div className="gradientBackground">
                    <span className="bold-text">Citations</span>
                </div>
                <BulletPoint>
                    <span>
                        Background Image by <span className='bold-text-2'>aftabsiddiqi99</span>
                    </span>
                    <p/>
                    <span>
                        https://www.vecteezy.com/photo/49855391-nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view
                    </span>
                </BulletPoint>

                <BulletPoint>
                    <span>
                        API provided by <span className='bold-text-2'>National Weather Service</span>
                    </span>
                    <p/>
                    <span>
                        https://www.weather.gov/
                    </span>
                </BulletPoint>
                <div style={{ display: 'flex', justifyContent: 'end', marginRight: '12px'}}>
                    <button
                        className="commonButton"
                        onClick={() => {navigate('/')}}
                    >
                        Go back
                    </button>
                </div>
            </Card>
        </section>
    )
}

export default SpecialThanks