import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    published: "",
    description: "",
    rating: "",
    copiesSold: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Form validation
  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });
    if (formData.rating && (formData.rating < 1 || formData.rating > 5))
      newErrors.rating = "Rating must be between 1 and 5";
    if (formData.copiesSold && formData.copiesSold < 0)
      newErrors.copiesSold = "Copies sold cannot be negative";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addBook(newBook)); // add to redux
    navigate("/browse-books"); // redirect
  };

  return (
    <div className="px-6 py-10 mt-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Add a New Book
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
      >
        {[
          { name: "title", label: "Title" },
          { name: "author", label: "Author" },
          { name: "category", label: "Category" },
          { name: "published", label: "Published Date" },
          { name: "description", label: "Short Description" },
          { name: "rating", label: "Rating (1–5)" },
          { name: "copiesSold", label: "Copies Sold" },
          { name: "image", label: "Image URL" },
        ].map(({ name, label }) => (
          <div key={name} className="mb-4">
            <label
              htmlFor={name}
              className="block text-gray-700 font-medium mb-1"
            >
              {label}
            </label>
            <input
              type="text"
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg mt-4 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
