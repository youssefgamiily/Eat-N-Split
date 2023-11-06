import { useState } from 'react'
import FriendPicker from './components/FriendPicker.jsx'
import BillSplitter from './components/BillSplitter.jsx'
import './App.css'

function App() {
  const [Friends, setFriends] = useState([{
    name: "Joe",
    img: "https://www.realsimple.com/thmb/yyC8GLOHqlRDyQNURFcKcCnh_NM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/haircuts-for-round-face-2000-dbc9189937e84a028d3ca7be79f072a5.jpg",
    balance: 0,
    isSelected: false,
    id:0
  }])
  const [selectedPerson, setSelectedPerson] = useState(null)
  return (
    <>
      <div className='friends-main'>
        <FriendPicker list={Friends} setList={setFriends}/>
      </div>
      <div className='split-bill' >
        <BillSplitter selectedPerson={selectedPerson} setSelectedPerso={setSelectedPerson}/>
      </div>
    </>
  )
}

export default App
