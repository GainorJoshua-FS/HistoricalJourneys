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
            <h2>Walking Tours</h2>

            <SideBySide
                src1={img4}
                alt1="Gettysburg John Burns House 1863"
                src2={img4new}
                alt2="Gettysburg John Burns House 2023"
            />

            <TourHelper
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
            />

            <article>
                <h2>Private Tour Pricings</h2>
                <SideBySide
                    src1={img5}
                    alt1="Gettysburg South Baltimore St Images 1863"
                    src2={img5new}
                    alt2="Gettysburg South Baltimore St Images 2023"
                />
                <dl>
                    <dt><strong>Adults</strong></dt>
                    <dd>$20</dd>

                    <dt><strong>Children (6-17)</strong></dt>
                    <dd>$13</dd>

                    <dt><strong>Children (5 & younger)</strong></dt>
                    <dd>FREE</dd>
                </dl>
            </article>
            <AdditionalDetails/>
        </section>
    )
}

export default Tours