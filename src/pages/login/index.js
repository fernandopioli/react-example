import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';
import Logo from '../../assets/images/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onHandlerSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Preencha todos os campos!');
    } else {
      setError('');
    }
  };

  return (
    <Container>
      <Form onSubmit={onHandlerSubmit}>
        <img src={Logo} alt="Logo" />
        {error && <span>{error}</span>}
        <input
          type="email"
          placeholder="E-mail"
          name="login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Senha"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <Link to="/esqueceu-senha">Esqueci minha senha</Link>
      </Form>
    </Container>
  );
}

export default Login;
