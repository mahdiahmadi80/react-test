import User from './User.jsx'

function Mapreactprops() {
  const users =[
    {name: "ali",age : 12},
    {name: "reza", age : 33},
    {name: "mahdi", age : 23}

  ]
  return (
    <div>
    {users.map((user,index) => {
      return <User key={index} name={user.name} age={user.age}></User>
    
    
      })}
    </div>
  )
}

export default Mapreactprops