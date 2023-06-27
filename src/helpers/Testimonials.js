import React from 'react'

function Testimonials(props) {
    return (
        <article>
            <p>
                {props.quote}
                <br/>
                <em>{props.who}</em>
            </p>
        </article>
    )
}

export default Testimonials