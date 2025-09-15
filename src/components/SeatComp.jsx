import React from "react";

const SeatComp = ({ seat, onClick, selectedSeats, bookedSeats }) => {
  const getSeatClasses = (item) => {
    const seatId = `${seat.seatRow + item.seatNumber}`;

    if (bookedSeats.includes(seatId)) {
      return "bg-gray-400 border-gray-600 text-gray-700 cursor-not-allowed";
    }

    if (selectedSeats.includes(seatId)) {
      return "bg-green-200 border-green-400 text-green-600 cursor-pointer";
    }

    switch (item?.seatType) {
      case "Regular":
        return "bg-blue-200 border-blue-400 text-blue-700 cursor-pointer hover:bg-green-200 hover:border-green-400 hover:text-green-700";
      case "Premium":
        return "bg-purple-200 border-purple-400 text-purple-700 cursor-pointer hover:bg-green-200 hover:border-green-400 hover:text-green-700";
      case "VIP":
        return "bg-orange-200 border-orange-400 text-orange-700 cursor-pointer hover:bg-green-200 hover:border-green-400 hover:text-green-700";
      default:
        return "cursor-pointer";
    }
  };

  return (
    <div className="flex justify-start items-center gap-x-4 my-1.5">
      <span>{seat.seatRow}</span>
      <div className="flex justify-start items-center">
        {seat.seats.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              !bookedSeats.includes(`${seat.seatRow + item.seatNumber}`) &&
              onClick(seat.seatRow, item)
            }
            className={`w-8 h-8 border m-1 flex justify-center items-center rounded-t-lg
              ${item.seatNumber === 7 ? "ml-8" : ""}
              ${getSeatClasses(item)}
            `}
          >
            {item.seatNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatComp;
