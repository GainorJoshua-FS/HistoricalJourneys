import React from 'react'
import haunt from '../images/haunt.png'

function Hauntings() {
    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>Historical Hauntings Event</h2>
            <img
                style={styles.imgStyle}
                src={haunt}
                alt="School Field Trip:  September, 2023"
            />
            <p>
            Have you ever visited a haunted location and thought it would be nice to interact with the spirits? Or have you ever been at a haunted location and had an encounter, but weren’t sure how to respond? Have you ever wondered what it would be like to conduct a simple but effective paranormal investigation without all the high-tech equipment?
            <br/>
            <br/>
            If you answered YES to any of the above questions then…
            <br/>
            <br/>
            Historical Journeys of Gettysburg has just the interactive experience for you!
            <br/>
            <br/>
            Our HISTORICAL HAUNTINGS INTERACTIVE EXPERIENCE at the Historic Cashtown Inn* is a great way to potentially communicate &amp; speak with the spirits there through the use of dousing rods in a safe, non-scary environment, as well as in a group setting. There is no prior investigative experience needed to attend. We will guide you through all you need to know and do!
            <br/>
            <br/>
            This interactive experience includes a brief history about the Historic Cashtown Inn and the role it played before, during, and after the Battle of Gettysburg. Also, hear some real-life ghostly encounters from actual past guests of the Inn as well as some encounters from the current owners. You will also briefly learn the proper way to use dousing rods to communicate with the resident spirits before breaking into small groups to investigate on your own. At the end of the investigation, the group will all come back together to share experiences.
            <br/>
            <br/>
            *this event takes place on the grounds of the Historic Cashtown Inn, 1325 Old Rt. 30; Cashtown PA 17310
            <br/>
            <br/>
            INTERESTED IN ATTENDING? Great! ALL dates, times, cost &amp; how to register are listed below!
            </p>
            <article>
                <h3 style={styles.h3}>Dates &amp; Times</h3>
                <dl>
                    <dt><strong>Friday &amp; Saturday October 20th &amp; 21st</strong></dt>
                    <dd>4pm-6pm</dd>

                    <dt><strong>Thursday &amp; Friday October 26th &amp; 27th</strong></dt>
                    <dd>4pm-6pm</dd>

                    <dt><strong>Saturday &amp; Sunday October 28th &amp; 29th</strong></dt>
                    <dd>4pm-6pm</dd>
                </dl>
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
                <br/> 
                <strong>Please call Bruce at:</strong> 920-639-7505
                <br/> 
                <br/> 
                (Space is limited to the first 10 participants per date/time)
                </p>
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
    }
}