"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import avatarImg from "../../../src/media/avatar.png"; // Default avatar path

const ProfilePage = () => {
  const [avatar, setAvatar] = useState(avatarImg.src);
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  const handleProfilePicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      // Optional: Upload to server or save to localStorage
    }
  };

  // const handleThemeChange = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme === "dark");
  //   localStorage.setItem("theme", newTheme);
  // };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // or clear session
    router.push("/login");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Avatar</h2>
        <img
          src={avatar}
          alt="User Avatar"
          className="mx-auto h-28 w-28 rounded-full object-cover border border-gray-300"
        />
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Theme</h2>
        <button
          // onClick={handleThemeChange}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Account</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Log Out
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
