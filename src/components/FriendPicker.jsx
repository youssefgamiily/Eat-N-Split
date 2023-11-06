import { useState } from 'react'
import Friend from './Friend.jsx'
import AddFriend from './AddFriend.jsx'
import styles from '../assets/friends.css'

export default function FriendPicker ({list, setList}) {
    const [isAddFriend, setIsAddFriend] = useState(false)
    return (
        <div className='friendsList'>
            <div className='friends'>
                {list.map(friend => {
                    console.log(friend)
                    return (<Friend name={friend.name} owes={friend.balance} pic={friend.img} isSelected={friend.isSelected} />)
            
                })}
            </div>
            <AddFriend isOpen={isAddFriend} setIsOpen={setIsAddFriend} friendsList={list} setFriendList={setList} />
        </div>
    )
}