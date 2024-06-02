import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredData, setRegisteredData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setRegisteredData(storedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registeredData && email === registeredData.email && password === registeredData.password) {
      // Authentication successful
      alert('Authentication successful');
      navigate('/');
    } else {
      // Authentication failed
      alert('Invalid email or password');
    }
  };

  return (
    <div className="h-[400px] w-[400px]  ml-[600px] mt-[100px] flex justify-center content-center">
      <div className=" h-full w-full bg-red border-4 border-black rounded-xl ">
        <form onSubmit={handleSubmit} className="flex flex-col text-center m-4">
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <button type="submit" className="btn btn-primary">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
