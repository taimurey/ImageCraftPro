import React, { useState } from 'react';
import upscale from '../assets/dashboard/scale-up.png';
import badge from '../assets/dashboard/badge.png';
import imageIcon from '../assets/dashboard/image-.png';
import magicWand from '../assets/dashboard/magic-wand.png';
import styles from "../style";
import Navbar from '../components/Navbar';


const Index = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(file);
      setImageUrl(url);
    }
  };

  return (
    <div className='bg-custom w-full' style={{ minHeight: '100vh' }}> {/* Removed overflow-hidden */}
    <div className='bg-primary'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'flex-start', padding: '20px', gap: '20px' }}>
        {/* Sidebar for Buttons */}
        <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Button label="Upscale Image" imageSrc={upscale} />
          <Button label="Enhance AI" imageSrc={badge} />
          <Button label="Image Colorizer" imageSrc={imageIcon} />
          <Button label="Magic Eraser" imageSrc={magicWand} />
        </div>

        {/* Image Upload Section */}
        <div style={{ position: 'relative', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', minHeight: '400px' }}>
          {/* Gradient Background */}
          {/* <div className="absolute z-0 w-full h-full top-0 left-0 pink__gradient" style={{ borderRadius: '10px' }}></div> */}
          {/* <p>Drag or upload your image</p> */}
          <input type="file" accept="image/png, image/webp, image/jpeg" onChange={handleImageChange} />
          {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '500px', height: 'auto' }} />}
        </div>
      </div>
    </div>
  );
};

const Button = ({ label, imageSrc }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '5px', textAlign: 'left', width: '100%' }}>
    <img src={imageSrc} alt={label} style={{ height: '50px' }} />
    <p>{label}</p>
  </div>
);

export default Index;
