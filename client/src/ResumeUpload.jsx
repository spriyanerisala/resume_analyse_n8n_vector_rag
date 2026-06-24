import React, { useState } from "react";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (
      selectedFile &&
      (selectedFile.type === "application/pdf" ||
        selectedFile.name.endsWith(".doc") ||
        selectedFile.name.endsWith(".docx"))
    ) {
      setFile(selectedFile);
    } else {
      alert("Please upload PDF, DOC, or DOCX file");
    }
  };

const handleUpload = async () => {
  if (!file) {
    alert("Please select a resume");
    return;
  }

  const formData = new FormData();
  formData.append("resume", file);

  try {
    const response = await fetch(
      "https://n8n.srv1771261.hstgr.cloud/webhook/upload-resume",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    alert("Resume uploaded successfully!");
    console.log(result);
  } catch (error) {
    console.error(error);
    alert("Upload failed");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Resume Upload
          </h1>

          <p className="text-gray-500 mt-2">
            Upload your resume for AI analysis
          </p>
        </div>

        <div className="mt-8">
          <label
            htmlFor="resume"
            className="cursor-pointer block border-2 border-dashed border-indigo-400 rounded-2xl p-10 text-center hover:bg-indigo-50 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <h2 className="text-xl font-semibold mt-4 text-gray-700">
                Drag & Drop Resume
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                PDF, DOC, DOCX Supported
              </p>
            </div>

            <input
              type="file"
              id="resume"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {file && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-semibold text-green-700">
              Selected File
            </p>

            <p className="text-gray-700 mt-1">
              {file.name}
            </p>

            <p className="text-sm text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;