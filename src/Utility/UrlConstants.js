export const BASE_API_URL = "https://api.spacexdata.com/v3/launches?limit=100";

export const URL__FILTER = (launch, landing, year) => {
    let filter_URL = BASE_API_URL;
    if (year) {
        filter_URL += `&launch_year=${year}`;
    }
    if (launch) {
        filter_URL += `&launch_success=${launch}`;
    }
    if (landing) {
        filter_URL += `&land_success=${landing}`;
    }
    console.log("FIlter_URL " + filter_URL)
    return filter_URL;

}
