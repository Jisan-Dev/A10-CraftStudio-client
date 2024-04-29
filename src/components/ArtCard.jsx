import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ArtCard = ({ product, isDelete }) => {
  return (
    <div>
      {/* <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={index * 100} data-aos-duration="1000"> */}
      <div className="block rounded-lg p-4 shadow-sm shadow-primary border-t border-t-primary font-gsans">
        <img alt="" src={product?.image} className="h-56 w-full rounded-md object-cover" />

        <div className="mt-2">
          <dl>
            <div className="flex items-center justify-between pt-1">
              <div>
                <dt className="sr-only">Price</dt>
                <dd className="text-xl text-primary font-semibold">{product.price} $</dd>
              </div>
              <div>
                <dt className="sr-only">Status</dt>
                <dd>
                  <span className="text-sm bg-primary rounded-md py-2 px-4 capitalize text-white font-medium">{product.stock_status}</span>
                </dd>
              </div>
            </div>

            <div className="mt-2">
              <dt className="sr-only">Title</dt>
              <dd className="text-xl font-bold">{product.item_name}</dd>
            </div>

            <div>
              <dt className="sr-only">Description</dt>
              <dd className="text-neutral-500 text-base font-medium flex items-center gap-1">
                {/* <span><IoLocation /></span> */}
                {product.feedbackText}
              </dd>
            </div>

            <div>
              <dt className="sr-only">Author name</dt>
              <dd className="text-neutral-500 text-sm font-medium flex items-center gap-1 mt-3">
                {/* <span><IoLocation /></span> */}
                Added by: <strong>{product.user_name}</strong>
              </dd>
            </div>
          </dl>

          <div className={`flex ${isDelete ? 'justify-between items-center' : 'justify-end'} `}>
            {/* <div className={`flex justify-end`}> */}
            <button className="group flex items-center bg-transparent p-2 text-sm font-medium text-gray-600 mt-4">
              <Link
                to={``}
                // to={`/property-details/${id}`}
                className="relative pr-4 text-primary font-semibold after:transition-transform after:duration-500 after:ease-out after:absolute after:-bottom-1 after:-left-1 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
                View Details
              </Link>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="24"
                xmlns="http://www.w3.org/2000s/svg"
                id="arrow-horizontal"
                className="-translate-x-2 fill-primary transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-primary">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>

            {isDelete && (
              <div className="flex gap-4 items-center justify-center leading-none pt-3">
                <div className="tooltip tooltip-left" data-tip="remove">
                  <MdDelete className="text-2xl cursor-pointer text-primary" />
                </div>
                <div className="tooltip tooltip-left" data-tip="remove">
                  <BsPencilSquare className="text-xl text-primary cursor-pointer" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;

ArtCard.propTypes = {
  product: PropTypes.object.isRequired,
  isDelete: PropTypes.bool,
};
