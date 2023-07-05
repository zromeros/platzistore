import { useState } from 'react';
import Image from 'next/image';
import defaultImg from '@images/defaultImg.jpeg';

const ImageProcessor = ({ src, alt, ...props }) => {
  const [img, setImage] = useState(src);
  const onError = (e) => {
    e.preventDefault();
    setImage(defaultImg);
  };

  return <Image src={img} alt={alt} width={240} height={240} onError={onError} {...props} />;
};

export default ImageProcessor;
