import { useState } from "react";
import { supabase } from "../config/superbases.js";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section
      className=" dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300
    bg-gray-50 py-16 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="dark:text-emerald-600
          text-3xl sm:text-4xl font-bold text-gray-800"
          >
            Contact Me
          </h2>
          <p
            className="dark:text-white
          mt-4 text-gray-600"
          >
            Feel free to reach out. I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="dark:bg-gray-600/30
          bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label
              className="dark:text-white
            block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none
              dark:focus:ring-2 dark:focus:ring-emerald-800
              "
            />
          </div>

          <div>
            <label className="dark:text-white block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none
               dark:focus:ring-2 dark:focus:ring-emerald-800"
            />
          </div>

          <div>
            <label className=" dark:text-white block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none
               dark:focus:ring-2 dark:focus:ring-emerald-800"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="dark:bg-emerald-600 dark:hover:bg-emerald-700
            w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Messages */}
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
