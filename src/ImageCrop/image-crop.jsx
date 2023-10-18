import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageUploader() {
  const [src, setSrc] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 728 / 360 });
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSrc(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleCropComplete = (crop, pixelCrop) => {
    if (src) {
      // Crop the image and create a new cropped image
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleX = img.naturalWidth / img.width;
        const scaleY = img.naturalHeight / img.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          img,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        const croppedImageUrl = canvas.toDataURL("image/jpeg");
        setCroppedImage(croppedImageUrl);
        setImage(img);
      };
    }
  };

  useEffect(() => {
    // Check if the cropped image dimensions match 728x360
    if (croppedImage) {
      const img = new Image();
      img.src = croppedImage;
      img.onload = () => {
        if (img.width !== 728 || img.height !== 360) {
          alert("Cropped image dimensions should be 728x360.");
          setCroppedImage(null);
        }
      };
    }
  }, [croppedImage]);
  //   console.log(URL.createObjectURL(src));
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          onChange={handleCropChange}
          onComplete={handleCropComplete}
        />
      )}
      {image && (
        <div>
          <h2>Original Image</h2>
          <img src={URL.createObjectURL(src)} alt="Original" />
        </div>
      )}
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
