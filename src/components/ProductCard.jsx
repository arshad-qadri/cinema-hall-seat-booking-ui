import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [qty, setQty] = useState(0);
  // const [par, setPar] = useState(9);
  const par = 9;
  const [onHand, setOnhand] = useState(0);
  const [isQty, setIsqty] = useState("quantity");
  const handleIncrease = () => {
    if (isQty === "quantity") {
      setQty(qty + 1);
    } else if (isQty === "onhold" && onHand < par) {
      setOnhand(onHand + 1);
    }
  };
  const handleDecrease = () => {
    if (isQty === "quantity" && qty === 1) {
      {
        alert("do you wants to remove?");
        setQty(0);
        setOnhand(0);
        return;
      }
    }

    if (qty > 0) {
      if (isQty === "quantity") {
        setQty(qty - 1);
      }
    }
    if (onHand > 0) {
      if (isQty === "onhold") {
        setOnhand(onHand - 1);
      }
    }
  };
  useEffect(() => {
    if (onHand === 0) {
      setQty(0);
    }
    if (onHand) {
      setQty(par - onHand);
    }
  }, [onHand]);
  return (
    <div className="p-6 bg-white">
      {/* Title */}
      <h2 className="text-xl font-bold text-green-700">
        BAGS RECYCLED BROWN #4
      </h2>

      {/* Stock and BD */}
      <div className="flex items-center gap-3 mt-2">
        <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-full">
          In Stock
        </span>
        <span className="font-semibold">5 BD</span>
      </div>

      {/* SKU, SRP, Unit, Profit */}
      <div className="mt-3 space-x-4 text-sm">
        <span>
          SKU <span className="font-semibold">998906</span>
        </span>
        <span>
          SRP <span className="font-semibold">$0.00</span>
        </span>
        <span>
          Unit Size <span className="font-semibold">500</span>
        </span>
        <span>
          Gross Profit <span className="font-semibold">0%</span>
        </span>
      </div>

      {/* Non Guaranteed */}
      <div className="mt-2 flex items-center text-red-600 text-sm">
        <span className="mr-1">🩸</span> Non-Guaranteed
      </div>

      {/* LOQ and LOD */}
      <div className="mt-6 flex justify-between">
        <div className="text-sm">
          <div>
            LOQ <span className="font-semibold">1</span>
          </div>
          <div>
            LOD <span className="font-semibold">07/18</span>
          </div>
        </div>

        <div className="text-right">
          <p className="font-bold">$21.26</p>
          <p className="text-sm">BD</p>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex justify-end mt-6">
        <div className="text-right">
          <div className="flex justify-center mb-2">
            <button
              className={`px-4 py-1 ${
                isQty === "quantity" ? "bg-green-200 " : "bg-green-50"
              } rounded-l-full cursor-pointer`}
              onClick={() => setIsqty("quantity")}
            >
              Quantity
            </button>
            <button
              className={`px-4 py-1 ${
                isQty === "onhold" ? "bg-green-200 " : "bg-green-50"
              } rounded-r-full border border-green-200 cursor-pointer`}
              onClick={() => setIsqty("onhold")}
            >
              On Hand
            </button>
          </div>

          <div className="flex items-center justify-between w-40 border-2 border-green-300 rounded-full px-4 py-2">
            <button
              className="text-gray-500 px-2 cursor-pointer"
              onClick={handleDecrease}
            >
              -
            </button>
            <div className="flex justify-center items-center flex-col">
              <div className="font-bold">
                {" "}
                {isQty === "quantity" ? qty : onHand}
              </div>
              <div className="text-sm text-gray-500">
                PAR <span className="font-semibold">{par}</span>
              </div>
            </div>
            <button
              onClick={handleIncrease}
              className="text-green-600 text-lg px-2 cursor-pointer"
            >
              +
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            PAR <span className="font-semibold">{par}</span>
          </p>
          <p className="text-sm text-gray-600">On Hand {qty}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
