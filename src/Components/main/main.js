import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";

import Filter from './filter/Filter'
import Content from './content/Content'
import { URL__FILTER } from '../../Utility/UrlConstants'

import { fetchSpaceData, fetchSpaceDataFIlter, getErrors } from '../../Redux/actions'

class Main extends PureComponent {

    state = {
        data: [],
        years: [],
        landing: ["true", "false"],
        launching: ["true", "false"],
        selectedYear: 0,
        successLaunch: "",
        successLanding: "",
        errorMsg: ""
    }


    componentDidMount() {
        this.props.fetchSpaceData();
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data
            && prevState.data.length !== nextProps.data.length) {
            if (nextProps.years) {
                return {
                    data: nextProps.data,
                    years: nextProps.years
                };
            } else {
                return {
                    data: nextProps.data
                };
            }

        } else
            return null
    }


    onFilterYearBtnClick = (year) => {
        const FILTER_LANDING = this.state.successLanding !== "" ? this.state.successLanding : null;
        const FILTER_LAUNCH = this.state.successLaunch !== "" ? this.state.successLaunch : null;

        const FILTER_URL = URL__FILTER(FILTER_LAUNCH, FILTER_LANDING, year);
        this.props.fetchSpaceDataFIlter(FILTER_URL);

        this.setState({
            selectedYear: year

        })
    }

    onFilterLaunchBtnClick = (filter) => {
        const FILTER_YEAR = this.state.selectedYear > 0 ? this.state.selectedYear : null;
        const FILTER_LANDING = this.state.successLanding !== "" ? this.state.successLanding : null;

        const FILTER_URL = URL__FILTER(filter, FILTER_LANDING, FILTER_YEAR);
        this.props.fetchSpaceDataFIlter(FILTER_URL);

        this.setState({
            successLaunch: filter
        })
    }
    onFilterLandingBtnClick = (filter) => {
        const FILTER_YEAR = this.state.selectedYear > 0 ? this.state.selectedYear : null;
        const FILTER_LAUNCH = this.state.successLaunch !== "" ? this.state.successLaunch : null;

        const FILTER_URL = URL__FILTER(FILTER_LAUNCH, filter, FILTER_YEAR);
        this.props.fetchSpaceDataFIlter(FILTER_URL);

        this.setState({
            successLanding: filter
        })
    }

    render() {
        const { years, selectedYear, landing, launching, successLaunch, successLanding, data } = this.state;
        return (

            this.state.years.length > 0 ?
                (
                    <div className="container-fluid">
                        <Filter
                            years={years}
                            selectedYear={selectedYear}
                            landing={landing}
                            launching={launching}
                            successLaunch={successLaunch}
                            successLanding={successLanding}
                            onFilterYearBtnClick={this.onFilterYearBtnClick}
                            onFilterLaunchBtnClick={this.onFilterLaunchBtnClick}
                            onFilterLandingBtnClick={this.onFilterLandingBtnClick}
                        />
                        {this.state.data.length > 0 ?
                            (
                                <Content spaceXdata={data} />
                            )
                            :
                            (<h3 className="text-red col-xs-10">No Data found!!!</h3>)
                        }
                    </div>
                )
                :
                (<h3 className="text-red text-center">Network Error. Reload again !!!</h3>)

        )
    }
}

Main.propTypes = {
    fetchSpaceData: PropTypes.func,
    fetchSpaceDataFIlter: PropTypes.func,
    getErrors: PropTypes.func
}
const mapStateToProps = state => ({
    data: state.MainReducer.data,
    years: state.MainReducer.years,
    errorMsg: state.ErrorReducer.errorText
});
export default connect(mapStateToProps, { fetchSpaceData, fetchSpaceDataFIlter, getErrors })(Main);