import React from "react";

const Legend = () => {
  const legends = [
    {
      label: "Regular",
      price: "₹ 150",
      classes: "border bg-blue-200 border-blue-400",
    },
    {
      label: "Premium",
      price: "₹ 250",
      classes: " border bg-purple-200 border-purple-400",
    },
    {
      label: "VIP",
      price: "₹ 350",
      classes: " border bg-orange-200 border-orange-400",
    },
    {
      label: "Selected",
      classes: "border bg-green-200 border-green-400 ",
    },
    {
      label: "Booked",
      classes: "bg-gray-400 border border-gray-600",
    },
  ];
  return (
    <div className="flex justify-center items-center  bg-gray-200 my-4 rounded-lg p-4 gap-x-4">
      {legends.map((item, ind) => (
        <div
          key={ind}
          className="flex justify-center items-center gap-x-1 text-sm"
        >
          <div className={`${item.classes} w-6 h-6 rounded-t-lg`}></div>
          <span>{item.label}</span>
          {item.price && <span>({item.price})</span>}
        </div>
      ))}
    </div>
  );
};

export default Legend;
