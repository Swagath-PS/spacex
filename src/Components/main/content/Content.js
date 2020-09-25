import React from 'react'
import classes from './Content.css'
import PropTypes from 'prop-types'

const Content = (props) => (
    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-10">

        {props.spaceXdata.map((data, index) => (
            <div className={`col-xs-12 col-xs-6 col-md-3 `} key={index}>
                {console.log(data)}

                <div className={`${classes.ContentMain} col-xs-12`}>

                    <div className={classes.ImageBox} style={{ backgroundImage: ` url(${data.links.mission_patch_small}) ` }}></div>

                    <div className={classes.ItemName}>{data.mission_name} #{data.flight_number}</div>

                    <span className={classes.ContentKey}>Mission Ids:</span>
                    <span className={classes.ContentValue}>
                        <ul>
                            {data.mission_id.map(id => (
                                <li key={id}>{id}</li>
                            ))}
                        </ul>
                    </span>

                    <span className={`${classes.ContentKey} col-xs-7`}>Launch Year:</span>
                    <span className={`${classes.ContentValue} col-xs-4`}> {data.launch_year}</span>

                    <span className={`${classes.ContentKey} col-xs-7`}>Successful Launch:</span>
                    <span className={`${classes.ContentValue} col-xs-4`}> {data.launch_success ? "true" : "false"}</span>

                    <span className={`${classes.ContentKey} col-xs-7`}>Successful Landing:</span>
                    <span className={`${classes.ContentValue} col-xs-4`}> {data.rocket.first_stage.cores[0].land_success ? "true" : "false"}</span>


                </div>
            </div>


        ))}

    </div>
)

Content.propTypes = {
    spaceXdata: PropTypes.array.isRequired
}

export default Content;