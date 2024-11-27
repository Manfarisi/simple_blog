import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function register(ev) {
        ev.preventDefault();

        if (username.length < 3) {
            setError('Username must be at least 3 characters long.');
            return;
        }

        if (password.length < 3) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                alert('Registration successful');
                navigate('/login');
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    }
    
    return (
        <div className="container" onSubmit={register}>
        <form className="form">
          <h1 className="title">Register</h1>
          <input type="text" className="input" placeholder="Username" value={username}
            onChange={ev => setUsername(ev.target.value)} />
          <input type="password" className="input" placeholder="Password" value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button className="btn-reg">Register</button>
          <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
        </form>       
      </div>
      
    );
}


