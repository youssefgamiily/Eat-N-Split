
export default function Friend ( {name, owes, pic, isSelected}) {
    return (
        <div className="friend">
            <img className="friend-pic" src={pic} alt="profile pic"/>
            <div className="friend-details">
                <h3>{name}</h3>
                <h3>{owes >0? `${name} owes $${owes}`: owes<0 ? `You owe ${name} $${owes}`: `You and ${name} are even`}</h3>
            </div>
            <button>{isSelected? 'close': 'select'}</button>
        </div>
    )
}