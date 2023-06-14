import React from 'react'

function AlertBanner() {
    return (
        <div style={styles.div}>
            <p style={styles.inner}>
                Welcome to Historical Journeys! Combined, our historical research team had decades of experience studying and educating our American heritage.
            </p>
        </div>
    )
}

export default AlertBanner

const styles = {
    div:{
        backgroundColor: "#BF0A30",
        color: "white",

    },
    inner:{
        margin: "0 20%",
        padding: "5px 0"
    }
}