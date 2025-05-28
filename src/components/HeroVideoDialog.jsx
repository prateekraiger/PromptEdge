import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const HeroVideoDialog = ({ isOpen, onClose, videoUrl }) => {
  // Close dialog with Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  // Prevent body scrolling when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Determine if we're using a video element or iframe based on URL
  const isCloudinaryVideo = videoUrl && videoUrl.includes("cloudinary");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200 bg-black/40 rounded-full hover:bg-black/60"
          aria-label="Close video"
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Video container */}
        <div className="relative pt-[56.25%] w-full bg-black">
          {isCloudinaryVideo ? (
            <video
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              autoPlay
              controls
              playsInline
              title="Hero Video"
            />
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Hero Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroVideoDialog;
