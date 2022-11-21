import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleForm = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, email, pass);

    }
    return (
      <div className="hero py-10 bg-slate-100">
        <div className="hero-content w-full flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                />
                <label className="label">
                  <Link to='/login' className="label-text-alt link link-hover">
                    Already, have an account? Please Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn headerBtn-color">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;