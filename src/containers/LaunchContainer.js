import { useEffect, useState } from "react";
import LaunchDetails from "../components/LaunchDetails";
import LaunchSelector from "../components/LaunchSelector";

const LaunchContainer = () => {

    const [launch, setLaunch] = useState({});
    const [selectedLaunchId, setSelectedLaunchId] = useState(1);


    const getLaunch = () => {
        console.log("getting launch info");
        fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
            .then(res => res.json())
            .then(data => setLaunch(data))
    }

    useEffect(() => {
        getLaunch()
    }, []);

    const incrementSelectedLaunch = () => {
        if( selectedLaunchId < 90) {
            setSelectedLaunchId(selectedLaunchId + 1)
        }
    }

    const decreaseSelectedLaunchId = () => {
        if( selectedLaunchId > 1) {
            setSelectedLaunchId(selectedLaunchId - 1)
        }
    }

    return (
        <>
        <h1>SpaceX Launch Details</h1>
        <LaunchSelector increment = {incrementSelectedLaunch} decrement ={decreaseSelectedLaunchId}/>
        <LaunchDetails  />
        </>
    )
}

export default LaunchContainer;