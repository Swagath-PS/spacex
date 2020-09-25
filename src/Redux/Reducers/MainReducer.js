import { FETCH_SPACE_INFO, FETCH_SPACE_INFO_FILTERED } from '../../Utility/AppConstants'

const initialState = {
    data: [],
    years: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SPACE_INFO:
            let launchedYears = [];
            if (action.payload.length > 0) {
                launchedYears = action.payload
                    .map(data => (data.launch_year))
                    .filter((value, index, self) => (self.indexOf(value) === index))
            }
            return {
                ...state,
                data: action.payload,
                years: launchedYears
            };

        case FETCH_SPACE_INFO_FILTERED:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
