import React from 'react'
import Scouts1P2 from '../images/Scouts1P2.png'
import Scouts2 from '../images/Scouts2.png'
import BruceMap from '../images/FamilyTrip1.png'
import schoolTrip from '../images/SchoolGroup2.png'

function FieldTrips() {
    return (
        <article style={styles.article}>
            <h2 style={styles.h2}>Educational Field Trips</h2>
            <img
                style={styles.imgStyle}
                src={schoolTrip}
                alt="School Field Trip:  September, 2023"
            />
            <img
                style={styles.imgStyle}
                src={Scouts1P2}
                alt="SCOUT PACK 3419 (Posing):  May of 2023, from Selinsgrove PA"
            />
            <img
                style={styles.imgStyle}
                src={Scouts2}
                alt="SCOUT PACK 3419 (Walking):  May of 2023, from Selinsgrove PA"
            />
            <p>
                <strong>Scholastic Credit:</strong> Students will participate in
                first-person civilian presentations, historic walking tour of{" "}
                <em>“No Mans Land”</em> in downtown Gettysburg and workbooks for all
                students. We are able to customized an event package for your group
                with school group pricing to meet your group needs. Please contact us
                to customize your field day trip, pricing and other details.
                <br />
                <br />
                <strong>Contact:</strong> Bruce Kottke at (920)-639-7505.
            </p>
        </article>
    );
}

export default FieldTrips

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