import React from 'react'
import MissionStatement from '../helpers/MissionStatement'
import SideBySide from '../helpers/SideBySide'
import Testimonials from '../helpers/Testimonials'

import img1 from '../images/GettysburgEagleHotel.jpg'
import img1new from '../images/EagleHotel1.jpg'
import img3 from '../images/GettysburgGatehouse.jpg'
import img3new from '../images/GateHouse3.jpg'

function AboutUs() {
    return (
        <section>
            <div style={styles.flex}>
            </div>
            <h2 style={styles.h2}>Welcome</h2>
            <SideBySide
                    src1={img1}
                    alt1="Eagle Hotel 1863"
                    src2={img1new}
                    alt2="Eagle Hotel 2023"
                />
            <p>
                When visiting Gettysburg, remembering what the people in town experienced between June through December of 1863. Your licensed town guide will interpret the eye-witness experiences of the civilians before, during and the aftermath of the battle. Along the tour route, you will see historic photographs depicting the featured civilians and places in town. See the many existing historical buildings and some with battle damage. Find out the
                significance and stories behind these structures during this time period. Historical Journeys, we make learning history FUN!
            </p>
            <MissionStatement/>
            {/* <Camping/> */}
            <h2 style={styles.h2}>Testimonials</h2>
            <SideBySide
                    src1={img3}
                    alt1="Gettysburg Gatehouse 1863"
                    src2={img3new}
                    alt2="Gettysburg Gatehouse 2023"
                />
            <Testimonials
                quote = '"Historical Journeys and Bruce Kottke thank you so much for the informative and fascinating tour of downtown Gettysburg! Our group was so impressed with your knowledge of the former citizens of Gettysburg. who were so dramatically impacted by the Civil War. Your enthusiasm for this history came through in your presentation and we thoroughly enjoyed our time with you. Thank you."'
                who = "-Jofa M Kauffman"
            />
            <Testimonials
                quote = '"I really enjoyed our time on your tour! Will recommend you to anyone coming to Gettysburg."'
                who = "-Lois Boling"
            />
            <Testimonials
                quote = '"Thank you so much for the awesome tour today, Bruce!!! You were so knowledgeable and passionate about Gettysburg. I learned so much and would recommend your tour and give you 5 stars! Will definitely be back for another!"'
                who = "-Carol McNeil Willard"
            />
        </section>
    )
}

export default AboutUs

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    },
    map:{
        width: "600px",
        height: "400px",
        marginTop: "20px",
        border: "1px solid #002868",
    },
    flex:{
        display: "flex"
    }
}