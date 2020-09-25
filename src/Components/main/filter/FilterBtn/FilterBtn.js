import React from 'react'
import classes from './FilterBtn.css'
import PropTypes from 'prop-types'

const FilterBtn = (props) => (
    <div className={`${classes.Btn} ${props.isSelected ? classes.BtnSelected : classes.Btnselect}`}
        onClick={() => props.btnclick(props.content)}
    >
        {props.content}
    </div>
)

FilterBtn.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    btnclick: PropTypes.func.isRequired
}

export default FilterBtn;