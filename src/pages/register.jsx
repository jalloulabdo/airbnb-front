import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64 ">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form onSubmit={registerUser} className="max-w-md mx-auto ">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="your@email.com"
          />
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="password"
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
