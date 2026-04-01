import { useRef } from "react";

export default function Upload() {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <div className="min-h-screen">
    <h1 className="text-3xl font-bold text-center p-2 m-2">Lego Mosaic</h1>
    <div className="flex items-center justify-center">
      
      {/* Card */}
      <div className="bg-gray-100 p-10 rounded-2xl shadow-md">
        
        {/* Upload Box */}
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-12 text-center">
          
          {/* Icon */}
          <div className="text-blue-600 text-5xl mb-4">
            📁
          </div>

          {/* Text */}
          <p className="text-gray-700 text-lg mb-4">
            Click the button below to upload your files.
          </p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-gray-400"></span>
            <span className="text-gray-500">OR</span>
            <span className="h-px w-16 bg-gray-400"></span>
          </div>

          {/* Button */}
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Choose File
          </button>

          {/* Hidden input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
    </div>
  );
}