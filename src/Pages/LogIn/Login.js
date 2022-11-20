import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }
  return (
    <div className="hero py-10 bg-slate-100 ">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/sign-up" className="label-text-alt link link-hover">
                  No Registration Yet? Sign-Up
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn headerBtn-color">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
