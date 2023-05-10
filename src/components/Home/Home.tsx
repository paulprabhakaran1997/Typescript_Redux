import { useNavigate } from "react-router-dom"
import { IHomeProps } from "./@types"
import { useEffect } from "react";


const Home = (props : IHomeProps) => {
  const { name , age , friendsList } = props
  const navigate = useNavigate();

  return (
    <div>
      {name} is {age} Years Old
      <div>
        <h2>Your Friends List</h2>
        <ul>
          {friendsList?.map((obj , idx) =>(
            <li key={obj.id}>{obj.name} is {obj.age} Years Old</li>
          ))}
        </ul>
      </div>
      
      <button onClick={() => navigate('/users')}>See Users</button>

    </div>
  )
}

export default Home