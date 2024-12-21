function Mapreact() {
    const names = ["alias", "mahdi", "ahmadi", "reza"]
  
    // return (
    //   <div>
  
    //     {names.map((value, index) => {
    //       return <div key={index}>{value}</div>
    //     })}
  
    //   </div>
    // )
    return (
      <div>
  
        {names.map((name, index) => {
          return <div key={index}>{name}</div>
        })}
  
      </div>
    )
  }
  
  export default Mapreact