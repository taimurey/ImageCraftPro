// ImageUploader.js
import React from 'react';

const ImageUploader = ({ imageFile, imageSrc }) => {
  const handleUpload = () => {
    if (!imageFile) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('upscale_factor', 'x2');
    formData.append('image_file', imageFile); // Append the file

    fetch("https://api.picsart.io/tools/1.0/upscale", {
      method: "POST",
      headers: {
        "x-picsart-api-key": "dFfj8RsPnHgdPL7oFn4wonvbRRlU9LMp"
      },
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong.");
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.error(error));
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Add more styles as needed
  };

  return (
    <div>
      <button onClick={handleUpload} style={buttonStyle}>
        {imageSrc && <img src={imageSrc} alt="Upscale" style={{ height: '50px', marginRight: '10px' }} />}
        Upscale
      </button>
    </div>
  );
};

export default ImageUploader;
