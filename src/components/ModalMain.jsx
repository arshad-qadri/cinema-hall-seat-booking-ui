import React, { useState } from "react";
import Modal from "./Modal";

const ModalMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen p-2 flex justify-start flex-col items-center">
      <h1 className="text-center">Hello Venu!</h1>

      <button
        className="bg-blue-300 px-4 py-1 rounded text-center"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      <img
        src="https://thumbs.dreamstime.com/b/podium-background-flower-rose-product-pink-d-spring-table-beauty-stand-display-nature-white-garden-floral-summer-cosmetic-370226128.jpg"
        alt="abc"
        className="w-96 my-2 rounded-2xl"
      />
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          title="Welcome to Modal"
          description="This modal shows information about our new products and offers."
          size="lg"
        />
      )}
    </div>
  );
};

export default ModalMain;
