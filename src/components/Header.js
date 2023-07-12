import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={styles.header}>
            <Link id="link" to="/" style={styles.linkLogo} 
            onClick={() => {
                window.scroll(0, 0);
            }}
            >
            </Link>
            <div style={styles.flex}>
                <h1 style={styles.h1}>Historical Journeys</h1>
                <img style={styles.logo} src={Logo} alt="Historical Journeys Compass Rose logo" />
            </div>
            <div className='navLink' style={styles.div}>
                <Link style={styles.links} to="/"
                onClick={() => {
                    window.scroll(0, 0);
                }}
                >
                    Home
                </Link>

                <Link style={styles.links} to="/guides"
                onClick={() => {
                    window.scroll(0, 0);
                }}
                >
                    Meet Your Guides
                </Link>

                <Link style={styles.links} to="/tours"
                onClick={() => {
                    window.scroll(0, 0);
                }}
                >
                    Details
                </Link>

                <Link style={styles.links} to="/camping"
                onClick={() => {
                    window.scroll(0, 0);
                }}
                >
                    Camping
                </Link>

                <Link style={styles.links} to="/field-trips"
                onClick={() => {
                    window.scroll(0, 0);
                }}
                >
                    Field Trips
                </Link>
            </div>
        </header>
    )
}

export default Header

const styles = {
    header:{
        backgroundColor: "#002868",
        color: "white",
        padding: "5px 0 10px 0",
    },
    links:{
        color: "white",
        textDecoration: "none",
        display: "inline",
        textAlign: "left",
        marginRight: "20px",
        borderBottom: "3px solid #BF0A30",
        fontWeight: "bold",
        fontSize: "20px",
    },
    div:{
        margin: "0px 20%"
    },
    logo:{
        width: "60px",
        height: "60px",
        // position: "fixed",
    },
    flex:{
        display: "flex",
        alignItems: "center"
    },
    h1:{
        paddingRight: "10px"
    }
}