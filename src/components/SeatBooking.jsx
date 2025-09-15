import React, { useEffect, useState, useMemo } from "react";
import SeatComp from "./SeatComp";
import Legend from "./Legend";

const SeatBooking = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // Generate seat layout once
  useEffect(() => {
    const temp = [];
    for (let i = 1; i < 9; i++) {
      const temp2 = [];
      for (let j = 1; j < 13; j++) {
        if (i <= 3) {
          temp2.push({ seatType: "Regular", seatNumber: j, price: 150 });
        } else if (i <= 6) {
          temp2.push({ seatType: "Premium", seatNumber: j, price: 250 });
        } else {
          temp2.push({ seatType: "VIP", seatNumber: j, price: 350 });
        }
      }
      temp.push({ seatRow: String.fromCharCode(64 + i), seats: temp2 });
    }
    setSeats(temp);
  }, []);

  // Toggle seat selection
  const handleSelectSeats = (row, item) => {
    const seatId = `${row}${item.seatNumber}`;
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  // Calculate total dynamically
  const total = useMemo(() => {
    let totalValue = 0;
    seats.forEach((row) => {
      row.seats.forEach((seat) => {
        if (selectedSeats.includes(`${row.seatRow}${seat.seatNumber}`)) {
          totalValue += seat.price;
        }
      });
    });
    return totalValue;
  }, [selectedSeats, seats]);

  // Confirm booking
  const handleBook = () => {
    setBookedSeats((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded p-4 h-full">
        <h1 className="text-center text-2xl font-bold ">
          Cinema Hall Bookings
        </h1>
        <p className="text-center text-xl  my-2 text-gray-600">
          Select your preferred seats
        </p>

        {/* Screen */}
        <div className="h-4 bg-gray-400 w-full rounded-2xl mt-6 mb-2" />
        <h5 className="uppercase text-center  text-gray-600">screen</h5>

        {/* Seats */}
        <div className="flex flex-col justify-center items-center mt-3 ">
          {seats.map((seat) => (
            <SeatComp
              seat={seat}
              key={seat.seatRow}
              onClick={handleSelectSeats}
              selectedSeats={selectedSeats}
              bookedSeats={bookedSeats}
            />
          ))}
        </div>

        <Legend />

        {/* Booking Summary */}
        <div className="bg-gray-200 my-4 rounded-lg p-4 gap-x-4">
          <h1 className="font-semibold">Booking Summary</h1>
          {selectedSeats.length > 0 ? (
            <div>
              <div className="text-sm">
                Selected seats:{" "}
                {selectedSeats.map((s, index) => (
                  <span key={s} className="ml-1">
                    {s}
                    {index === selectedSeats.length - 1 ? "" : ","}
                  </span>
                ))}
              </div>
              <div className="text-sm">Total: ₹{total}</div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No seats selected</p>
          )}
        </div>

        {/* Book Button */}
        <button
          className={`w-full ${
            selectedSeats.length > 0
              ? "bg-green-500 cursor-pointer"
              : "bg-gray-500"
          } p-2 text-white font-bold rounded-lg transition`}
          onClick={handleBook}
          disabled={selectedSeats.length === 0}
        >
          {selectedSeats.length > 0 ? "Book" : "Select seats to book"}
        </button>
      </div>
    </div>
  );
};

export default SeatBooking;
