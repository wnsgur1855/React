
    const User = ({item, removeFunction}) => {
        return (
          <div key = {item.id} className = "component-Style">
          {item.age}+{item.name}
          <button onClick={()=>removeFunction(item.id)}>삭제</button>
          </div>
        )
      }
      

export default User;