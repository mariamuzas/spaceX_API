const LaunchDetails = ({launch, loaded}) => {

    if (!loaded) {
        return <p>loading...</p>
    }
    return (
        <>
            <h3>Mission: {launch.mission_name}</h3>
            <p>Rocket: {launch.rocket.rocket_name}</p>
        </>
    )
}

export default LaunchDetails;