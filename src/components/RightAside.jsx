import React, { useState } from "react";

const RightAside = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First Name is required.";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email Address is required.";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be more than 6 characters.";
    } else if (formData.password.length >= 16) {
      validationErrors.password =
        "Password should not be more than 16 characters.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted");
    }
  };

  return (
    <div className="lg:w-1/2 font-[600] flex flex-col lg:pr-28 justify-center px-8">
      <button className="bg-[#6054a4] text-white px-16 lg:px-0 py-5 rounded-lg my-8 shadow-lg shadow-gray-900/50 focus:scale-105 hover:scale-105 duration-300 outline-none">
        Try it free 7 days{" "}
        <span className="font-[400] text-gray-300">
          then $20/mo. thereafter
        </span>
      </button>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col py-8 px-6 mb-12 lg:mb-0 lg:p-10 rounded-xl shadow-lg shadow-gray-900/50"
      >
        <div class="relative">
          {errors.firstName && (
            <p className="absolute -bottom-6 left-4 z-20 mb-8 text-red-500 text-xs ">
              {errors.firstName}
            </p>
          )}
          <input
            type="text"
            className="w-full px-8 py-4 border border-gray-300 rounded-md mb-8 peer-focus:mb-0 duration-300 outline-none peer placeholder-transparent"
            id="firstName"
            name="firstName"
            autoComplete="off"
            onChange={handleChange}
            placeholder="First Name"
          />

          <label
            htmlFor="firstName"
            className=" select-none absolute transition-all -top-3 left-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 px-3 bg-white cursor-text text-sm text-gray-500 peer-focus:bg-white peer-focus:-top-3 peer-focus:left-1 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            First Name <span className="text-red-500">*</span>
          </label>
        </div>

        <div class="relative">
          <p className="absolute -bottom-6 left-4 z-20 mb-8 text-red-500 text-xs ">
            {errors.lastName}
          </p>

          <input
            type="text"
            className="w-full px-8 py-4 border border-gray-300 rounded-md mb-8 peer-focus:mb-0 duration-300 outline-none peer placeholder-transparent"
            id="lastName"
            name="lastName"
            autoComplete="off"
            onChange={handleChange}
            placeholder="Last Name"
          />
          <label
            htmlFor="lastName"
            className=" select-none absolute transition-all -top-3 left-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 px-3 bg-white cursor-text text-sm text-gray-500 peer-focus:bg-white peer-focus:-top-3 peer-focus:left-1 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
        </div>

        <div class="relative">
          <p className="absolute -bottom-6 left-4 z-20 mb-8 text-red-500 text-xs ">
            {errors.email}
          </p>
          <input
            type="email"
            className="w-full px-8 py-4 border border-gray-300 rounded-md mb-8 peer-focus:mb-0 duration-300 outline-none peer placeholder-transparent"
            id="email"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            placeholder="email"
          />
          <label
            htmlFor="email"
            className=" select-none absolute transition-all -top-3 left-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 px-3 bg-white cursor-text text-sm text-gray-500 peer-focus:bg-white peer-focus:-top-3 peer-focus:left-1 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
        </div>

        <div class="relative">
          <p className="absolute -bottom-6 left-4 z-20 mb-8 text-red-500 text-xs ">
            {errors.password}
          </p>
          <input
            type="password"
            className="w-full px-8 py-4 border border-gray-300 rounded-md mb-8 peer-focus:mb-0 duration-300 outline-none peer placeholder-transparent"
            id="password"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            placeholder="password"
          />
          <label
            htmlFor="password"
            className=" select-none absolute transition-all -top-3 left-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 px-3 bg-white cursor-text text-sm text-gray-500 peer-focus:bg-white peer-focus:-top-3 peer-focus:left-1 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Password <span className="text-red-500">*</span>
          </label>
        </div>

        <button className="p-4 text-white bg-[#38cc8c] rounded-lg hover:scale-105 focus:scale-105 duration-300 outline-none">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-center text-xs mt-6 text-gray-300">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-[#ff8a46] cursor-pointer">
            Terms and Services
          </span>
        </p>
      </form>
    </div>
  );
};

export default RightAside;
