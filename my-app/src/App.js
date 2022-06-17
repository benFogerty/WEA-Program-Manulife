import WorkoutPlanMaker from './Components/WorkoutPlanMaker';
import DisplayWorkout from './Components/DisplayWorkout';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import './App.css'

function App() {

  //state for selected equipment
  const[equip, setEquip] = useState([])
  //state for selected days of week
  const[daysOfWeek, setDays] = useState([])
  //state for goal for what they want
  const[goal, setGoal] = useState('')
  //state for database of excersizes
  const[database, setDatabase] = useState([])

  useEffect(() => {
    fetch("https://api.airtable.com/v0/apphWFw7ZFVtrFDU1/Excersize?api_key=keyq9zwQFUhapGR9W")
      .then((res) => res.json())
      .then((data) => {
        setDatabase(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<WorkoutPlanMaker equip={equip} setEquip={setEquip} daysOfWeek={daysOfWeek} setDays={setDays} setGoal={setGoal} goal={goal} database={database}/>}/>
        <Route path="/myWorkout" element={<DisplayWorkout equip={equip} setEquip={setEquip} daysOfWeek={daysOfWeek} setDays={setDays} setGoal={setGoal} goal={goal} database={database}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;