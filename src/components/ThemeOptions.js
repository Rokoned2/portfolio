import React, { useEffect } from "react";
// import { BiWindows } from "react-icons/bi";

const ThemeOptions = () => {
  const root = document.querySelector(":root");

  const handleChange = (theme) => {
    if (theme === "blue") {
      localStorage.setItem("Theme", "blue");
      root.classList.remove("purple-mode");
      root.classList.remove("blue-mode");
      root.classList.add("blue-mode");
    } else if (theme === "purple") {
      localStorage.setItem("Theme", "purple");
      root.classList.remove("purple-mode");
      root.classList.remove("blue-mode");
      root.classList.add("purple-mode");
    } else {
      localStorage.setItem("Theme", "light");
      root.classList.remove("blue-mode");
      root.classList.remove("purple-mode");
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "blue") return root.classList.add("blue-mode");

    if (getTheme === "purple") return root.classList.add("purple-mode");
  });

  return (
    <>
      <div className="navbar__theme-options">
        <div
          onClick={() => handleChange("blue")}
          className="navbar__theme-option navbar__theme-option--blue"
        >
          -
        </div>
        <div
          onClick={() => handleChange("purple")}
          className="navbar__theme-option navbar__theme-option--purple"
        >
          &#10066;
          {/* <BiWindows /> */}
        </div>
        <div onClick={handleChange} className="navbar__theme-option">
          x
        </div>
      </div>
    </>
  );
};

export default ThemeOptions;
