import { useEffect, useState } from "react";
import Style from "./Contact.module.css";
import { useFormik } from "formik";
function Contact() {
  function handelContact(values) {
    console.log("Msg sent");
  }
  let formik = useFormik({
    initialValues: {
      userName: "",
      age: "",
      email: "",
      password: "",
    },
    onSubmit: handelContact,
  });
  return (
    <>
      <div className="min-h-screen  w-screen flex items-center justify-center flex-col gap-6 text-sec">
        <h1 className="text-3xl md:text-5xl uppercase font-bold">
          conatct section
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <div className="h-1 w-24 bg-sec"></div>
          <i className="fa-solid fa-star"></i>
          <div className="h-1 w-24 bg-sec"></div>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-3/6 mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userName}
              type="text"
              name="userName"
              id="userName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-b-main focus:outline-none focus:ring-0 mb-20 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userName"
              className="text-xl peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userName
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
              type="text"
              name="age"
              id="age"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-b-main focus:outline-none focus:ring-0 mb-20 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="age"
              className="text-xl peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userAge
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-b-main focus:outline-none focus:ring-0 mb-20 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="text-xl peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userEmail
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-b-main focus:outline-none focus:ring-0 mb-20 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="text-xl peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userPassword
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-main  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-8 py-3 text-center text-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
