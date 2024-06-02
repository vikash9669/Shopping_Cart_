import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert("Signup Successfull");
    console.log("data saved on local storage", formData);
    setFormData({
      name: '',
      email: '',
      password: ''
    });
    navigate('/signin')
  }

  return (
    <div className="h-[400px] w-[400px]  ml-[600px] mt-[100px] flex justify-center content-center">
      <div className=" h-full w-full bg-red border-4 border-black rounded-xl ">
        <form onSubmit={handleSubmit} className="flex flex-col text-center m-4">
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="FullName"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                id="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <button type="submit" className="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
