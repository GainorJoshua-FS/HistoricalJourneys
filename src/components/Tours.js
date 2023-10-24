import React from 'react'
import SideBySide from '../helpers/SideBySide';
import TourHelper from '../helpers/TourHelper'
import AdditionalDetails from './AdditionalDetails';

import img4 from '../images/GettysburgJohnBurnsHouse.jpg'
import img4new from '../images/NewHome4.jpg'
import img5 from '../images/GettysburgSouthBaltimoreStImages.jpg'
import img5new from '../images/StreetScene5.jpg'

function Tours() {
    return (
        <section>
            <h2>Historic Town Walking Tours</h2>

            <SideBySide
                src1={img4}
                alt1="Gettysburg John Burns House 1863"
                src2={img4new}
                alt2="Gettysburg John Burns House 2023"
            />

            <TourHelper
                tour="Stories of the Townspeople from the Past"
                time="30 minute tour: "
                desc="Ride through the streets of Historic Downtown Gettysburg. Hear stories from the townspeople before, during, and after the battle; enhanced with “old-time” historic photographs."
            />

{/* =============================================================================== */}

            <article>
                <h3 style={styles.h3}>Historic Town Tours Pricings</h3>
                <SideBySide
                    src1={img5}
                    alt1="Gettysburg South Baltimore St Images 1863"
                    src2={img5new}
                    alt2="Gettysburg South Baltimore St Images 2023"
                />
                <dl>
                    <dt><strong>12+</strong></dt>
                    <dd>$25</dd>

                    <dt><strong>Children 11 and under</strong></dt>
                    <dd>Free</dd>
                </dl>
            </article>
            <article style={styles.lastArticle}>
                <h3 style={styles.h3}>Reservations</h3>
                <p>
                    <strong>Bruce: </strong>920-639-7505
                    <br />
                    <strong>Amanda: </strong>717-880-9589
                </p>
            </article>

{/* =============================================================================== */}

            <h2>Historic Town Carriage Tours</h2>

            <TourHelper
                tour="Stories of the Townspeople from the Past"
                time="90 minute tour: "
                desc="A leisurely walk through the historic town of Gettysburg. You’ll hear what life was like in Gettysburg before the battle. In addition, what the towns people endured and the compassion they shared to the soldiers as well as their neighbors."
            />

            <article>
                <h3 style={styles.h3}>Carriage Tour Pricings</h3>

                <dl>
                    <dt><strong>Riders (12+)</strong></dt>
                    <dd>$35</dd>

                    <dt><strong>Children (5-11)</strong></dt>
                    <dd>$10</dd>
                </dl>
            </article>
            <article style={styles.article}>
                <h3 style={styles.h3}>Days &amp; Times</h3>
                <p>
                    <strong>Thursdays &amp; Fridays:</strong> 4pm - 8pm <br /> <strong>Saturdays:</strong> 12pm - 8pm
                </p>
            </article>
            <article style={styles.lastArticle}>
                <h3 style={styles.h3}>Reservations &amp; Location</h3>
                <p>
                    <strong>For Reservations Call Amanda: </strong>717-880-9589
                    <br />
                    <strong>Location: </strong>South Baltimore Street, across from Mr. G’s Ice-cream Shoppe
                </p>
            </article>


{/* =============================================================================== */}
            {/* <TourHelper
                tour="Not the Same Old Town Tour"
                time="90-minute tour: "
                desc="Civilian stories of compassion, love, and humor during and after the battle. Stories as: little Charles asks for his candy back, the “safest place” in town, polite and courteous rebels, her “Sweetheart” is found, and more eye-witness stories."
            />

            <TourHelper
                tour="No Man's Land Tour"
                time="90-minute tour: "
                desc="Why was this area in Gettysburg called No Man's Land? Where was No Man's Land? What significance was the area to the battle and who lived in that part of town?"
            />

            <TourHelper
                tour="If the Walls Could Talk Tour"
                time="120-minute tour: "
                desc="Hear true stories of the eye-witness accounts of the civilians and their struggles. As we walk the streets and the “Square,” listen carefully as the walls of the historic buildings on the tour “talk to us!"
            />

            <TourHelper
                tour="Rebels have Arrived Tour"
                time="120-minute tour: "
                desc="Gettysburg civilians from 1863 quotes, “There they were in flesh in blood!” Experience what the arrival of the Confederate army through the civilian perspective."
            /> */}


{/* --------------------------------------------------------------------------------------------------- */}

            {/* <article>
                <h2>Private Tour Pricings</h2>
                <dl>
                    <dt><strong>Adults</strong></dt>
                    <dd>$20</dd>

                    <dt><strong>Children (6-17)</strong></dt>
                    <dd>$13</dd>

                    <dt><strong>Children (5 & younger)</strong></dt>
                    <dd>FREE</dd>
                </dl>
            </article> */}

{/* --------------------------------------------------------------------------------------------------- */}

            {/* <h2>Historical Hauntings Paranormal Investigation</h2>

            <TourHelper
                tour="A Personal Paranormal Experience"
                time="2-Hour Investigation: "
                desc="This is your opportunity for a chance to communicate with the spirits around the Cashtown Inn property, through the use of dousing rods (which will be provided). Included in this experience, is a short history of the Cashtown Inn, stories of paranormal experiences of past guests at the Inn, instructions on how to properly use the dousing rods, a paranormal investigation of the Cashtown Inn grounds, and a group sharing of results after the investigation. (Conducted on the grounds of the Historic Cashtown Inn, 1325 Old Rt. 30; Cashtown PA 17310)"
            />

            <article>
                <h3 style={styles.h3}>Paranormal Investigation Pricings</h3>

                <dl>
                    <dt><strong>Adults 16+</strong></dt>
                    <dd>$40 per person</dd>
                </dl>
            </article>
            <article style={styles.article}>
                <h3 style={styles.h3}>Days &amp; Times</h3>
                <p>
                    <strong>Fridays &amp; Saturdays:</strong> 4pm
                </p>
            </article>
            <article style={styles.lastArticle}>
                <h3 style={styles.h3}>Reservations (Required)</h3>
                <p>
                    (Limited to the first 10 guests per day. This is a Rain or Shine Event) <br />
                    <strong>Bruce: </strong>920-639-7505
                </p>
            </article> */}

            <AdditionalDetails/>
        </section>
    )
}

export default Tours

const styles = {
    article:{
        textAlign: "left",
    }, 
    h3:{
        color: "#002868",
        borderBottom: "1px solid #002868"
    },
    lastArticle:{
        paddingBottom: '5px'
    }
}