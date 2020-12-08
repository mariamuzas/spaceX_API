import LaunchDetails from "../components/LaunchDetails";
import LaunchSelector from "../components/LaunchSelector";

const LaunchContainer = () => {

    return (
        <>
        <h1>SpaceX Launch Details</h1>
        <LaunchSelector/>
        <LaunchDetails />
        </>
    )
}

export default LaunchContainer;