import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Resources/Assets/Blogs_images/sql vs no sql.png';
import img2 from '../../Resources/Assets/Blogs_images/JWT.jpg';
import img3 from '../../Resources/Assets/Blogs_images/js vs nodejs.jpg';
import img4 from '../../Resources/Assets/Blogs_images/multiple_request.png';
const Blogs = () => {
    return (
      <div className="py-2 md:py-4 lg:py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-screen-md mx-auto gap-40">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Blogs_Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="sql-vs-no-sql-details" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Blogs_Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="jwt-details" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Blogs_Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="js-vs-nodeJs-details" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img4} alt="Blogs_Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link
                to="nodejs-multiple-request-details"
                className="btn btn-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;