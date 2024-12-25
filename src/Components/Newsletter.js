import React, { useState } from "react";
import Button from "../UI/Button";

const Newsletter = () => {
  const [file, setfile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setfile(selectedFile);

    // Show preview for images only
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return alert("Please select image first");
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      alert(`Image uploaded successfully: ${data.url}`);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h1>Upload Image or PDF</h1>
      <div>
        <input
          type="file"
          //   accept=".jpg,.jpeg,.pdf"
          onChange={handleFileChange}
        />
        {preview && <img src={preview} alt="preview" className="w-full" />}
        {file && file.type === "application/pdf" && <p>{file.name}</p>}
        <Button classes="bg-primary" onClick={handleUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
