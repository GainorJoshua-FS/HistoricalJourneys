import React from 'react'
// import haunt from '../images/haunt.png'
import SideBySide from '../helpers/SideBySide';

import cashtown from '../images/cashtown.jpeg'
import dousing from '../images/dousing.jpg';

function Hauntings() {
    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>Historical Hauntings Paranormal Investigation Experience</h2>
            {/* <img
                style={styles.imgStyle}
                src={haunt}
                alt="School Field Trip:  September, 2023"
            /> */}
            <SideBySide
                src1={cashtown}
                alt1="Gettysburg John Burns House 1863"
                src2={dousing}
                alt2="Gettysburg John Burns House 2023"
            />
            <p>
                This PARANORMAL INVESTIGATION EXPERIENCE at the Historic Cashtown Inn* is a great way to potentially communicate &amp; speak with the spirits there through the use of dousing rods in a safe environment, as well as in a group setting. There is no prior investigative experience needed to attend. We will guide you through all you need to know and do. 
                <br/><br/>
                This interactive experience includes a brief history about the Historic Cashtown Inn and the role it played before, during, and after the Battle of Gettysburg. Also, hear some real-life ghostly encounters from past guests who have stayed at the Inn as well as some encounters from the current owners. You will also briefly learn the proper way to use dousing rods to communicate with the resident spirits before breaking into small groups to investigate on your own. At the end of the investigation, the group will all come back together to share experiences.
                <br/><br/>
                *This event takes place on the grounds of the Historic Cashtown Inn, 1325 Old Rt. 30; Cashtown PA 17310
            </p>
            <article>
                <h3 style={styles.h3}>Dates &amp; Times</h3>
                <p>
                    Available on select evenings throughout the year. To check for specific dates, please visit our booking calendar.
                </p>

                <a href="https://www.calendly.com/historicaljourneys" target="_blank" rel="noreferrer">
                    <button style={styles.button}>
                        Check Availability
                    </button>
                </a>

                {/* <dl>
                    <dt><strong>Friday &amp; Saturday October 20th &amp; 21st</strong></dt>
                    <dd>4pm-6pm</dd>

                    <dt><strong>Thursday &amp; Friday October 26th &amp; 27th</strong></dt>
                    <dd>4pm-6pm</dd>

                    <dt><strong>Saturday &amp; Sunday October 28th &amp; 29th</strong></dt>
                    <dd>4pm-6pm</dd>
                </dl> */}
            </article>

            <article>
                <h3 style={styles.h3}>Pricings</h3>
                <dl>
                    <dt><strong>Ages 16+</strong></dt>
                    <dd>$40 per person</dd>
                </dl>
                <p>
                    Children 16 &amp; 17 must be accompanied by an adult guardian. No Children under the age of 16
                </p>
            </article>

            <article>
                <h3 style={styles.h3}>Reservations</h3>
                <p>
                    Reservations are <strong>REQUIRED</strong>
                    <br/> 
                    <i>(Space is limited to the first 10 participants per date/time)</i>
                    <br/> 
                    <br/> 
                    To reserve your spot today, please visit our booking calendar.
                </p>
                <a href="https://www.calendly.com/historicaljourneys" target="_blank" rel="noreferrer">
                    <button style={styles.button2}>
                        Reserve My Spot
                    </button>
                </a>
            </article>
        </section>
    );
}

export default Hauntings

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    },
    imgStyle:{
        width: "50%",
        height: "50%",
    },
    section:{
        padding: "5px 20%",
        textAlign: "left"
    },
    h3:{
        color: "#002868",
        borderBottom: "1px solid #002868"
    },
    button:{
        color: 'white',
        backgroundColor: '#002868',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        letterSpacing: '1px'
    },
    button2:{
        color: 'white',
        backgroundColor: '#002868',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        letterSpacing: '1px',
        marginBottom: '25px'
    },
}