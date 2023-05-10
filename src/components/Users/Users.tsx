import axios from 'axios';
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';
import { apiFetchUsers } from '../../apiCalls/apiFetchUsers';
import { IUserProps } from './@types';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { apiPostUsers } from '../../apiCalls/apiPostUsers';
import { apiUpdateUser } from '../../apiCalls/apiUpdateUser';

const Users = () => {
  const navigate = useNavigate()
  const defaultUserVal = useMemo(() => {
    return {
      name: '',
      age: '',
      address: ''
    }
  }, []);

  const dispatch = useAppDispatch()

  const [userId, setUserId] = useState(0)

  const [userDetail, setUserDetail] = useState(defaultUserVal);

  const { userlist } = useAppSelector(state => state.userListReducer);

  const handleReset = () =>{
    setUserDetail(defaultUserVal);
    setUserId(0);
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUserDetail({
      ...userDetail,
      [name]: value
    })
  }

  const handleEdit = (id:number) =>{
    setUserId(id);
    const thisUser:any = userlist.find(obj => obj.id === id)
    setUserDetail(thisUser)
  }

  const handleSubmit = async (e:any) => {  
    e.preventDefault();
    const response:any = userId === 0 ? await apiPostUsers(userDetail) : await apiUpdateUser(userId , userDetail);
    if(response?.status === 200 || response?.status === 201){
      apiFetchUsers(dispatch);
      handleReset();
    }else{
      window.alert(response?.message)
    }   
  }

  useEffect(() => {
    apiFetchUsers(dispatch)
  }, [])

    

  return (
    <div>
      <h1>
        Users
      </h1>
      <button onClick={() => navigate('/')}>Go Home</button>
      <button onClick={handleReset}> + Add New</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='name'
          name='name'
          required
          value={userDetail?.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder='age'
          name='age'
          required
          value={userDetail?.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder='address'
          name='address'
          required
          value={userDetail?.address}
          onChange={handleChange}
        />
        <button
          type='submit'
        >
          {userId === 0 ? 'Create' : 'Update'}</button>
      </form>

      <div>
        <h1>
          User List
        </h1>
        {userlist?.length ? (
          <table style={{margin:'auto'}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userlist?.map((user) => (
                <tr key={user?.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>
                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4>No Users</h4>
        )}
      </div>

    </div>
  )
}

export default Users