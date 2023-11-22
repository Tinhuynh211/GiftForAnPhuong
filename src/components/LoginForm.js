import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await Axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
      const account = response.data[0];

      if (account) {
        setRole(account.role);
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
      }
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
  }

  return (
    <Form className='text-center padding1'>
      <Form.Group controlId="formUsername">
        <Form.Label>Tên đăng nhập</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        onClick={handleLogin}
      >
        Đăng nhập
      </Button>

      {role === 'admin' && <Navigate  to="/contact" />}
      {role === 'user' && <Navigate  to="/quiz" />}
    </Form>
  );
}

export default LoginForm;
