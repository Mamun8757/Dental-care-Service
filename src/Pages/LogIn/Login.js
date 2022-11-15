import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero max-h-screen bg-base-200 py-10">
            <div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                            <Link to='/sign-up' className="label-text-alt link link-hover">Don't have account? Sign-Up Now</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Link to='/' className="btn headerBtn-color">LogIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;