import { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc); // Set the selected image source
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImage(""); // Clear the selected image
  };

  return (
    <>
      <div className="pt-44 text-center my-6">
        <h1 className="text-3xl md:text-5xl uppercase font-bold pb-6">
          conatct section
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <div className="h-1 w-24 bg-sec"></div>
          <i className="fa-solid fa-star"></i>
          <div className="h-1 w-24 bg-sec"></div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap container mx-auto pb-44">
        {[img1, img2, img3, img1, img2, img3].map((img, index) => (
          <div key={index} className="w-screen md:w-1/2 lg:w-1/3 p-4 group">
            <div className="relative">
              <img
                src={img}
                className="rounded-2xl cursor-pointer"
                onClick={() => handleImageClick(img)}
                alt={`Portfolio ${index + 1}`}
              />
              <div
                className="absolute inset-0 bg-main bg-opacity-80 opacity-0 group-hover:opacity-100 rounded-2xl flex items-center justify-center transition-opacity duration-300"
                onClick={() => handleImageClick(img)}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative  rounded-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <img src={selectedImage} className="rounded-2xl" alt="Selected" />
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
