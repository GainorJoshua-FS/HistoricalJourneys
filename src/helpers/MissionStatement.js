import React from 'react'
import SideBySide from '../helpers/SideBySide'
import img2 from '../images/GettysburgChristLutheranChurch.jpg'
import img2new from '../images/ChristLutheranChurch2.jpg'

function MissionStatement() {
    return (
        <article>
            <h2 style={styles.h2}>Mission Statement</h2>
            <SideBySide
                    src1={img2}
                    alt1="Gettysburg Christ Lutheran Church 1863"
                    src2={img2new}
                    alt2="Gettysburg Christ Lutheran Church 2023"
                />
            <p>
            Our purpose is to support and help fund youth organizations to learn about our heritage and American History. The goal will be accomplished by our licensed town guides conducting youth outreach programs, private and group tours, and special event presentations to the public. Also, to include and not limit, to provide overnight camping for youth groups on private and secure property. Historical Journeys supporting our belief in our faith, our freedom, and our heritage!
            </p>
        </article>
        
    )
}

export default MissionStatement

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    }
}