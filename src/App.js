import './App.css'
// import Profile from './components/Profile'
// import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      <Message messageContent="This is ClassBase Component" />
      {/* <Profile name="Danish" lastName="Malik" /> */}
      {/* saame components with different attributes */}
      {/* <Profile name="Faheem" lastName="Malik"> */}
      {/* we can pass an attributes as well as children  */}
      {/* <h3>This is Person Profile</h3> */}
      {/* </Profile> */}
      {/* <Profile name="Naseem" lastName="Malik" /> */}
    </div>
  )
}

export default App
