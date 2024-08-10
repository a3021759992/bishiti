import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './types';

export  const UserInfo: React.FC = () => {
  const username = useSelector((state: { auth: AuthState }) => state.auth.username);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate('/login'); 
  };

  return (
    <div style={{width:'40%',margin:'0 auto',  background: 'rgb(0, 0, 0,0.6)',color:'#fff',padding:'30px'}}>
      <h1>用户信息页面</h1>
      <p>用户名: {username}</p>
      <button onClick={handleLogout}>注销</button>
    </div>
  );
};