// Index.js
import React, { useState } from 'react';
import upscale from '../assets/dashboard/scale-up.png';
import badge from '../assets/dashboard/badge.png';
import imageIcon from '../assets/dashboard/image-.png';
import magicWand from '../assets/dashboard/magic-wand.png';
import styles from "../style";
import Navbar from '../components/Navbar';
import ImageUploader from './upscale';

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
    <div className='bg-custom w-full' style={{ minHeight: '100vh' }}>
      <div className='bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'flex-start', padding: '20px', gap: '20px' }}>
        <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          {/* Pass the image to ImageUploader */}
          <ImageUploader imageFile={image} imageSrc={upscale} />
          <Button label="Enhance AI" imageSrc={badge} />
          <Button label="Image Colorizer" imageSrc={imageIcon} />
          <Button label="Magic Eraser" imageSrc={magicWand} />
        </div>

        <div style={{ position: 'relative', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', minHeight: '400px' }}>
          <input type="file" accept="image/png, image/webp, image/jpeg" onChange={handleImageChange} />
          {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '500px', height: 'auto' }} />}
        </div>
      </div>
    </div>
  );
};

const Button = ({ label, imageSrc }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 5px',
    textAlign: 'left',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: hover ? '#f0f0f0' : 'transparent', 
  };

  return (
    <div 
      role="button" 
      tabIndex="0" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={buttonStyle}
    >
      <img src={imageSrc} alt={label} style={{ height: '50px' }} />
      <p>{label}</p>
    </div>
  );
};

export default Index;
