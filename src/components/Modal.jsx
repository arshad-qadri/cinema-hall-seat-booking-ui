import React from "react";

const Modal = ({ setIsOpen, title, description, size = "md" }) => {
  // Define size classes
  const sizeClasses = {
    sm: "w-[300px] h-[180px]",
    md: "w-[360px] h-[240px]",
    lg: "w-[480px] h-[320px]",
    xl: "w-[580px] h-[420px]",
  };

  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        className={`${sizeClasses[size]} shadow-lg  bg-gray-200 rounded-2xl p-6 relative`}
      >
        <button
          className="absolute top-4 right-4 text-2xl font-bold cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
