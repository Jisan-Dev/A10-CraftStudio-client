import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import signup from '../assets/signup.svg';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SocialLogin from '../components/SocialLogin';

const Register = () => {
  const { loading } = useContext(AuthContext);
  const [isPassVisible, setIsPassVisible] = useState(false);

  const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    photo: z.string().optional(),
    password: z
      .string()
      .min(6)
      .refine((value) => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value), {
        message: 'Password must contain at least 1 lowercase and 1 uppercase letter',
      }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center font-gsans max-sm:px-3 pb-14 max-sm:py-5 max-sm:flex-col overflow-x-hidden pt-10">
        <div data-aos="fade-right" data-aos-duration="1000" className="w-1/2 max-sm:w-full px-20">
          <div className="w-full max-w-md p-6 m-auto mx-auto bg-base-100 rounded-xl shadow-sm shadow-primary border-t border-t-primary">
            <div className="flex justify-center items-center mx-auto">
              <h1 className="text-3xl sm:text-4xl text-transparent bg-gradient-to-br from-indigo-600 via-blue-600 to-secondary bg-clip-text font-black font-gsans tracking-wider">
                REGISTER
              </h1>
            </div>

            <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
              <div>
                <label htmlFor="username" className="font-medium block text-sm text-base-content ">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register('name')}
                  className="block w-full px-4 py-2 mt-2 text-neutral bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && <div className="text-red-500 text-xs">{errors.name.message}</div>}
              </div>

              <div className="mt-2">
                <label htmlFor="email" className="font-medium block text-sm text-base-content">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="block w-full px-4 py-2 mt-2 text-neutral bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                {errors.email && <div className="text-red-500 text-xs">{errors.email.message}</div>}
              </div>

              <div className="mt-2">
                <label htmlFor="photo" className="font-medium block text-sm text-base-content">
                  Photo URL
                </label>
                <input
                  type="photo"
                  id="photo"
                  {...register('photo')}
                  className="block w-full px-4 py-2 mt-2 text-neutral bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-medium block text-sm text-base-content">
                    Password
                  </label>
                  <a href="#" className="text-xs text-base-content hover:underline">
                    Forget Password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    type={isPassVisible ? 'text' : 'password'}
                    id="password"
                    {...register('password')}
                    className="block w-full px-4 py-2 mt-2 text-neutral bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                  {isPassVisible ? (
                    <FaEyeSlash onClick={() => setIsPassVisible(!isPassVisible)} className="absolute top-3 right-3 text-xl cursor-pointer" />
                  ) : (
                    <FaEye onClick={() => setIsPassVisible(!isPassVisible)} className="absolute top-3 right-3 text-xl cursor-pointer" />
                  )}
                </div>
                {errors.password && <div className="text-red-500 text-xs">{errors.password.message}</div>}
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-2.5 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  {loading ? <span className="loading loading-infinity loading-sm p-0 h-4 -mb-1"></span> : 'Sign Up'}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

              <a className="text-xs text-center text-base-content uppercase dark:text-gray-400 cursor-default font-medium">or sign up with Social Media</a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <SocialLogin />

            <p className="mt-8 text-sm font-medium text-center text-base-content">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000" className=" w-1/2 max-sm:w-full max-sm:mt-2">
          <img src={signup} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Register;
