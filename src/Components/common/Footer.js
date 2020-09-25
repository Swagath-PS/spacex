import React from 'react'
import classes from './Common.css'

const Footer = (props) => (
    <footer className={classes.Footer}>
        <span className={classes.FooterText}>Developed by: </span> {props.developer}
    </footer>
)
export default Footer;