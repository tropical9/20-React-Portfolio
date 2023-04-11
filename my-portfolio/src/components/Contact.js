import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === "email") {
      const isValid = validateEmail(value);
      setErrors({ ...errors, email: isValid ? "" : "Invalid email" });
    } else {
      setErrors({ ...errors, [name]: value ? "" : `${name} is required` });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm(errors)) {
      console.log("Valid form data:", formState);
      setFormState({ name: "", email: "", message: "" });
    } else {
      console.log("Invalid form data:", errors);
    }
  }

  function validateForm(errors) {
    return Object.values(errors).every((e) => e === "");
  }

  return (
    <section className="bg-gray-200 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-bold mb-2 block">
              Name:
            </label>
            <textarea
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              outline="none"
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-bold mb-2 block">
              Email address:
            </label>
            <textarea
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-bold mb-2 block">
              Message:
            </label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 border rounded"
            />
            {errors.message && (
              <p className="text-red-500 mt-2">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


