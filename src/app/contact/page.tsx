import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <form className="flex flex-col w-full max-w-sm mx-auto my-10">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <div className="flex flex-row">
          <div className="w-50">
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="firstName" className="text-lg font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="lastName" className="text-lg font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="text-lg font-semibold">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
          <div className="w-50">
            <div className="flex flex-col mb-4">
              <label htmlFor="city" className="text-lg font-semibold">
                City
              </label>
              <input
                type="text"
                id="city"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="state" className="text-lg font-semibold">
                State
              </label>
              <select
                id="state"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="zip" className="text-lg font-semibold">
                Zip Code
              </label>
              <input
                type="number"
                id="zip"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="phone" className="text-lg font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                type="submit"
                value="Register"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
