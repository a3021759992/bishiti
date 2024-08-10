import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./authSlice";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 使用 useNavigate 钩子

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const login = async (username: string, password: string) => {
        const response = await fetch("https://example.com/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error("登录失败");
        }

        const data = await response.json();
        return data.token; // 返回的数据中包含 token
      };
      const token = await login(username, password); // 这是登录API调用

      dispatch(loginSuccess({ token, username }));
      navigate("/user"); // 使用 navigate
    } catch (error) {
      console.error("登录失败:", error);
    }
  };

  return (
    <div style={{width:'40%',margin:'0 auto',  background: 'rgb(0, 0, 0,0.6)',color:'#fff',padding:'30px'}}> 
      <h1>登录页面</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          style={{
            width: "calc(100% - 20px)",
            padding: "10px",
            marginBottom: "10px",
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="用户名"
        />
        <input
          style={{
            width: "calc(100% - 20px)",
            padding: "10px",
            marginBottom: "10px",
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="密码"
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
};
export default Login;
