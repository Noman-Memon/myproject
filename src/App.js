import './App.css'
import FunctionEvent from './components/FunctionEvent'
// import Counter from './components/Counter'
// import Profile from './components/Profile'
// import Hello from './components/Hello'
// import Message from './components/Message'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <Message messageContent="This is ClassBase Component" /> */}
      {/* <Profile name="Danish" lastName="Malik" /> */}
      {/* saame components with different attributes */}
      {/* <Profile name="Faheem" lastName="Malik">
        {/* we can pass an attributes as well as children  */}
      {/* <h3>This is Person Profile</h3> */}
      {/* </Profile> */}
      {/* <Profile name="Naseem" lastName="Malik" /> */}
      {/* <Counter></Counter> */}
      <Resume name="Sunny" />
      <FunctionEvent />
    </div>
  )
}

export default App
