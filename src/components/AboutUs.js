import React from 'react'
import ImgSlider from '../helpers/ImgSlider'
import MissionStatement from '../helpers/MissionStatement'
import Testimonials from '../helpers/Testimonials'
import Map from '../images/map.png'
// import Camping from './Camping'

function AboutUs() {
    return (
        <section>
            <div style={styles.flex}>
                <ImgSlider />
                <img style={styles.map} src={Map} alt="Map of town" />
            </div>
            <h2 style={styles.h2}>About Us</h2>
            <p>
                When visiting Gettysburg, remembering what the people in town experienced between June through December of 1863. Your licensed town guide will interpret the eye-witness experiences of the civilians before, during and the aftermath of the battle. Along the tour route, you will see historic photographs depicting the featured civilians and places in town. See the many existing historical buildings and some with battle damage. Find out the
                significance and stories behind these structures during this time period. Historical Journeys, we make learning history FUN!
            </p>
            <MissionStatement/>
            {/* <Camping/> */}
            <h2 style={styles.h2}>Testimonials</h2>
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
        width: "400px",
        height: "400px",
        marginTop: "20px"
    },
    flex:{
        display: "flex"
    }
}