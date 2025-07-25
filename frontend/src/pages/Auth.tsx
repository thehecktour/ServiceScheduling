import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { login, register } from "../features/auth/authSlice";
import styled from "styled-components";

const SwitchButton = styled.button`
  background: transparent;
  color: #007bff;
  margin-top: 10px;
  border: none;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

export default function Auth() {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login({ username: form.username, password: form.password }));
    } else {
      dispatch(register(form));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? "Login" : "Cadastro"}</h2>
      <input
        placeholder="Usuário"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Senha"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      {!isLogin && (
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      )}
      <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
      <SwitchButton type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Criar Conta" : "Já tenho conta"}
      </SwitchButton>
    </form>
  );
}
