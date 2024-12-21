import Mapreact from './components/MapReact.jsx'
import Mapreactprops from './components/MapReactprops.jsx'
import Stateuse from './components/State.jsx'
import Showstate from './components/Showstate.jsx'
import Inputshow from './components/Inputshow.jsx'
import Fetchdata from './components/Fetchdata.jsx'
import Fetchdatasend from './components/Fetchdatasend.jsx'
import './App.css'

function App() {
  return (
    <div>
      {/* map in react */}
      <Mapreact></Mapreact>
      {/* map in react with props */}
      <Mapreactprops></Mapreactprops>
      {/* usestate in react */}
      <Stateuse></Stateuse>
      {/* usestate 2 */}
      <Showstate></Showstate>
      {/* input Show */}
      <Inputshow></Inputshow>
      {/* database Fetching */}
      <Fetchdata></Fetchdata>
      {/* database 2 fetching and sending data */}
      <Fetchdatasend></Fetchdatasend>
    </div>
  )
}

export default App
