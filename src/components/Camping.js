import React from 'react'
import Scouts1 from '../images/Scouts1.png'
import Scouts1P2 from '../images/Scouts1P2.png'
import Scouts2 from '../images/Scouts2.png'
import family1 from '../images/FamilyTrip1.png'
import Barn1 from '../images/barn1.jpeg'
import Barn2 from '../images/barn2.jpeg'
import Field1 from '../images/field1.jpeg'

function Camping() {
    return (
        <section>
            <article>
                <h2 style={styles.h2}>Scout &amp; Youth Camping</h2>
                <img
                    style = {styles.imgStyle}
                    src = {Barn1}
                    alt = "Small cabin for camping"
                />
                <img
                    style = {styles.imgStyle}
                    src = {Barn2}
                    alt = "Barn for camping"
                />
                <img
                    style = {styles.imgStyle}
                    src = {Field1}
                    alt = "Small field for camping"
                />
                <p>
                    Youth group camping is available through Historical Journeys. Our beautiful rural campsite is situated on historical property, just south of the Gettysburg Battlefield.
                    <br/><br/>
                    The campsite is a private historic farm just south of the Gettysburg Battlefield.
                    <br/><br/>
                    <strong>Camping amenities:</strong>: potable drinking water on site, unlimited firewood for your use during your stay, freshly cleaned porta pots in proximity to your campsite, stone fire ring for your campfire, trash bags and trash service.
                    <br/><br/>
                    <strong>Costs:</strong> $10.00 per person, per night of the stay. Proof of your liability insurance must be submitted before arriving.
                    <br/><br/>
                    <strong>Reservations:</strong> Can be made by contacting Amanda Collins at (717)880-9589
                    <br/><br/>
                    Camping guests receive a discount on all tours and programs available through Historical Journeys. Please take advantage and create an event weekend for your group by camping and touring with us! Immerse yourself into history for an entire weekend. We can customize the experience you desire for your group.
                </p>
            </article>

            <article>
                <h2 style={styles.h2}>Educational Field Trips</h2>
                <img
                    style = {styles.imgStyle}
                    src = {family1}
                    alt = "FAMILY GROUP FIELD TRIP:  May10, 2023"
                />
                <img
                    style = {styles.imgStyle}
                    src = {Scouts1P2}
                    alt = "SCOUT PACK 3419 (Posing):  May of 2023, from Selinsgrove PA"
                />
                <img
                    style = {styles.imgStyle}
                    src = {Scouts2}
                    alt = "SCOUT PACK 3419 (Walking):  May of 2023, from Selinsgrove PA"
                />
                <p>
                    <strong>Scholastic Credit:</strong> Students will participate in first-person civilian presentations, historic walking tour of <em>“No Mans Land”</em> in downtown Gettysburg and workbooks for all students. We are able to customized an event package for your group with school group pricing to meet your group needs. Please contact us to customize your field day trip, pricing and other details.
                    <br/><br/>
                    <strong>Contact:</strong> Amanda Collins at (717)880-9589.
                </p>
            </article>

{/* Default camping info that might be added back in */}
            {/* Group camping is available through Historical Journeys, to be our camping guest your group must have their own liability insurance and be willing to submit a copy to us.

The campsite is a private historic farm just south of the Gettysburg Battlefield.

Camping amenities are: potable drinking water on site, unlimited firewood for your use during your stay, freshly cleaned porta pots in proximity to your campsite, stone fire ring for your campfire, trash bags and trash service are all provided to you as our guests.

Costs for camping is $10 per person per night of stay.

Reservations can be made by contacting Amanda Collins.

Camping guests receive a discount on all tours and programs available through Historical Journeys. Please take advantage and create an event weekend for your group by camping and touring with us! Immerse yourself into history for an entire weekend. We can customize the experience you desire for your group. */}
        </section>
    )
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
    }
}