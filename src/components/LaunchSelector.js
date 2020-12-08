const LaunchSelector = ( {increment, decrement}) => {

    return (
        <>
          <button onClick = {decrement}> Previous Launch</button>
          <button onClick = {increment}>Next Launch</button>
        </>
    )
}

export default LaunchSelector;

// Add a method decrementSelectedLaunch to decrease selectedLaunchId by 1
// Pass the functions in props to LaunchSelector
// Add onClick listeners to the buttons which will call the functions passed down
// There have only been 90 SpaceX launches to date. Add guards to the functions to ensure the user can’t ask for a launch that doesn’t exist.