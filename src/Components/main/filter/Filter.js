import React from 'react'
import classes from './Filter.css'
import FilterBtn from './FilterBtn/FilterBtn'
import PropTypes from 'prop-types'

const Filter = (props) => (
    <div className={`${classes.Filter} col-xs-offset-1 col-xs-10 col-sm-3 col-sm-offset-0 col-md-2 col-lg-2`}>
        <div className={classes.FilterHeader}> Filters</div>
        <div className={`${classes.FilterContent} col-xs-12col-sm-2 text-center`}>
            <div className={`row ${classes.filterset}`}>
                Launch Year
                    <hr className={classes.hr} />
                {props.years.map((year, index) => (
                    <div className="col-xs-6" key={index}>
                        <FilterBtn
                            isSelected={year === props.selectedYear}
                            content={year}
                            btnclick={props.onFilterYearBtnClick}
                        />
                    </div>
                ))}
            </div>

            <div className={`row ${classes.filterset}`}>
                Successful Launch
                        <hr className={classes.hr} />
                {props.launching.map((launch, index) => (
                    <div className="col-xs-6" key={index}>
                        <FilterBtn
                            isSelected={launch === props.successLaunch}
                            content={launch}
                            btnclick={props.onFilterLaunchBtnClick}
                        />
                    </div>
                ))}
            </div>
            <div className={`row ${classes.filterset}`}>
                Successful Landing
                        <hr className={classes.hr} />
                {props.landing.map((landing, index) => (
                    <div className="col-xs-6" key={index}>
                        <FilterBtn
                            isSelected={landing === props.successLanding}
                            content={landing}
                            btnclick={props.onFilterLandingBtnClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
)

Filter.propTypes = {

    years: PropTypes.array.isRequired,
    selectedYear: PropTypes.number.isRequired,
    landing: PropTypes.array.isRequired,
    launching: PropTypes.array.isRequired,
    successLaunch: PropTypes.string.isRequired,
    successLanding: PropTypes.string.isRequired,
    onFilterYearBtnClick: PropTypes.func.isRequired,
    onFilterLaunchBtnClick: PropTypes.func.isRequired,
    onFilterLandingBtnClick: PropTypes.func.isRequired

}

export default Filter;