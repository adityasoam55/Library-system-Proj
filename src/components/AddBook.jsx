import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Image,
  Star,
  Calendar,
  User,
  FileText,
  Hash,
  Tag,
} from "lucide-react";

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
    copies_sold: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });
    if (formData.rating && (formData.rating < 1 || formData.rating > 5))
      newErrors.rating = "Rating must be between 1 and 5";
    if (formData.copies_sold && formData.copies_sold < 0)
      newErrors.copies_sold = "Copies sold cannot be negative";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = { id: Date.now(), ...formData };
    dispatch(addBook(newBook));
    navigate("/browse-books");
  };

  const inputFields = [
    { name: "title", label: "Title", icon: BookOpen },
    { name: "author", label: "Author", icon: User },
    { name: "published", label: "Published Year", icon: Calendar },
    { name: "description", label: "Short Description", icon: FileText },
    { name: "rating", label: "Rating (1–5)", icon: Star },
    { name: "copies_sold", label: "Copies Sold", icon: Hash },
    { name: "image", label: "Image URL", icon: Image },
  ];

  const categories = [
    "Fiction",
    "Thriller",
    "Sci-Fi",
    "Mystery",
    "Romance",
    "History",
    "Fantasy",
    "Adventure",
  ];

  return (
    <div className="flex justify-center items-center py-16 min-h-screen animate-fadeIn">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Add a New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-gray-700 font-medium mb-1"
            >
              Category
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full border ${
                  errors.category ? "border-red-400" : "border-gray-300"
                } pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white`}
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Other Input Fields */}
          {inputFields.map(({ name, label, icon: Icon }) => (
            <div key={name} className="flex flex-col">
              <label htmlFor={name} className="text-gray-700 font-medium mb-1">
                {label}
              </label>
              <div className="relative">
                <Icon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors[name] ? "border-red-400" : "border-gray-300"
                  } pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                />
              </div>
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Image Preview */}
          {formData.image && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-2 text-sm font-medium">
                Image Preview
              </p>
              <img
                src={formData.image}
                alt="Book Preview"
                className="w-40 h-56 object-cover rounded-lg shadow-md mx-auto border"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md mt-6 transition-all"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
