import { useState } from "react"

export default function AddFriend ({isOpen, setIsOpen, friendsList, setFriendList}) {
    console.log("in AddFriend")
    const [friendName, setFriendName] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    function submitForm () {
        if (friendName != '' && imgUrl != '') {
            let friendsListCopy = structuredClone(friendsList)
            friendsListCopy.push({
                name: friendName,
                img: imgUrl,
                balance: 0,
                isSelected: false,
                id: friendsList.length
            })
            setFriendList(friendsListCopy)
        }
        setImgUrl("")
        setFriendName("")
        setIsOpen(false)
    }

    function handleURLValue (e) {
        e.preventDefault()
        setImgUrl(e.target.value)

    }
    function handleNameValue (e) {
        e.preventDefault()
        setFriendName(e.target.value)
    }

    function handleAddFriend (e) {
        setIsOpen(true)
    }

    let JSX
    if (isOpen) {
        JSX = 
        (
        <div className="AddFriend"><form>
            <label htmlFor ="friend-name">👫 Friend name</label>
            <input id="friend-name" value={friendName} onChange={handleNameValue} ></input>
            <label htmlFor ="img-url">🌄 Image URL</label>
            <input id="img-url" value={imgUrl} onChange={handleURLValue}></input>
        </form>
        <button onClick={submitForm}> Close & Submit  </button>
        </div>)
    }
    else {
        JSX = (
        <div className="AddFriend">
            <button onClick={handleAddFriend}> Add Friend </button>
        </div>
        )
    }
    return JSX
}