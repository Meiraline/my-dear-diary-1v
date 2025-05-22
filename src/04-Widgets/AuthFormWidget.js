import { useState } from "react";

export default function AuthFormWidget() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Здесь можно добавить обработку регистрации/входа

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: логика входа/регистрации
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Войти / Зарегистрироваться</button>
    </form>
  );
}