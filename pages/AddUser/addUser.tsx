"use client";
import { useState } from "react";
import { Navbar } from "~/components/Navbar";

type UserFormData = {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  profilePhotoUrl: File | null;
};

type FormErrors = {
  name?: string;
  email?: string;
  role?: string;
  profilePhotoUrl?: string;
};

const AddUser = () => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    role: "",
    isActive: true,
    profilePhotoUrl: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" || type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "radio" ? value : checked,
      }));
    } else if (type === "file") {
      const file = e.target.files ? e.target.files[0] : null;
      setFormData((prevData) => ({
        ...prevData,
        profilePhotoUrl: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email || !emailRegex.test(formData.email.toLowerCase())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.role) {
      newErrors.role = "Role is required.";
    }

    if (!formData.profilePhotoUrl) {
      newErrors.profilePhotoUrl = "Profile photo is required.";
    } else if (
      formData.profilePhotoUrl &&
      !["image/jpeg", "image/png"].includes(formData.profilePhotoUrl.type)
    ) {
      newErrors.profilePhotoUrl = "Only JPG and PNG files are allowed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Here, you can implement the logic for adding the user to the backend or state
      // For now, we'll just log the form data
      console.log(formData);
      // After successful submission, you can redirect the user or reset the form
      // router.push('/users'); // Redirect to another page after success
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-8 m-8 bg-white shadow-lg rounded-lg text-gray-500">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-8">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Role Field (Radio Buttons for Admin, User, Guest) */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={formData.role === "Admin"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="User"
                  checked={formData.role === "User"}
                  onChange={handleChange}
                  className="mr-2"
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Guest"
                  checked={formData.role === "Guest"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Guest
              </label>
            </div>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>

          {/* Status Field (Toggle) */}
          <div className="mb-8 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Status:{" "}
              <p>
                User is set to{" "}
                {formData.isActive ? (
                  <span className="text-green-700 bg-green-100 py-2 px-4 rounded-md">
                    Active
                  </span>
                ) : (
                  <span className="text-red-700 bg-red-100 py-2 px-4 rounded-md">
                    Inactive
                  </span>
                )}
              </p>
            </label>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:left-[4px] after:top-[4px] after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
            </label>
          </div>

          {/* Profile Photo Field */}
          <div className="mb-8">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="profilePhoto"
            >
              Profile Photo (JPG, PNG)
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.profilePhotoUrl && (
              <p className="text-red-500 text-sm">{errors.profilePhotoUrl}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
              } text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isSubmitting ? "Submitting..." : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
