import React from 'react'

function SideBySide(props) {
    return (
        <div style={styles.imgDiv}>
            <img
                style={styles.img}
                src={props.src1}
                alt={props.alt1}
            />
            <img
                style={styles.img}
                src={props.src2}
                alt={props.alt2}
            />
        </div>
    )
}

export default SideBySide

const styles = {
    imgDiv:{
        display: "flex",
        alignItems: "center",
    },
    img:{
        width: "250px",
        height: "250px",
        marginRight: "5px"
    }
}