import playerData from './playerData.js'
import {useState} from 'react'

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)
  console.log(`ShowPicture value is ${showPicture}`);
  const toggleCard = () => {
    setShowPicture(!showPicture)
  }
  if(showPicture){
    return (
        <div className="card" onClick={toggleCard}>
          <h2>{props.name}</h2>
          <img src={props.imgUrl} alt={props.imgUrl}/>
        </div>
      );
  } else {
    const statsDisplay = []
    for(let stat in props.stats){
      statsDisplay.push(<p>{stat}: {props.stats[stat]}</p>)
    }
  
    return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
    )
  }
}

function App() {
  const cards = playerData.map((player) => (
  <BaseballCard 
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  key={player.cardId}

  />)
  )

  return <>{cards} </>;
}

export default App;
