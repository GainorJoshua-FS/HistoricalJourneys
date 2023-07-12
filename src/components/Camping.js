import React from 'react'
import Scouts1 from '../images/Scouts1.png'
import Barn1 from '../images/barn1.jpeg'
import Barn2 from '../images/barn2.jpeg'
import Field1 from '../images/field1.jpeg'

function Camping() {
    return (
        <article style={styles.article}>
            <h2 style={styles.h2}>Scout &amp; Youth Camping</h2>
            <img
                style={styles.imgStyle}
                src={Barn1}
                alt="Small cabin for camping"
            />
            <img 
                style={styles.imgStyle} 
                src={Barn2} 
                alt="Barn for camping" />
            <img
                style={styles.imgStyle}
                src={Field1}
                alt="Small field for camping"
            />
            <p>
                Youth group camping is available through Historical Journeys. This
                beautiful private rural campsite is located on historical property,
                just south of the Gettysburg battlefield.
                <br />
                <br />
                <strong>Camping amenities:</strong>: potable drinking water on site,
                unlimited firewood for your use during your stay, freshly cleaned
                porta pots in proximity to your campsite, stone fire ring for your
                campfire, trash bags and trash service.
                <br />
                <br />
                <strong>Costs:</strong> $10.00 per person, per night of the stay.
                Proof of your liability insurance must be submitted before arriving.
                <br />
                <br />
                <strong>Reservations:</strong> Can be made by contacting Amanda
                Collins at (717)880-9589
                <br />
                <br />
                Camping guests receive a discount on all tours and programs available
                through Historical Journeys. Please take advantage and create an event
                weekend for your group by camping and touring with us! Immerse
                yourself into history for an entire weekend. We can customize the
                experience you desire for your group.
            </p>
        </article>
    );
}

export default Camping

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    },
    imgStyle:{
        width: "30%",
        height: "30%",
        marginRight: "5px"
    },
    article:{
        padding: "5px 20%",
        textAlign: "left"
    }
}