import React, { useContext } from 'react';
import Image from 'next/image';
import ImageProcessor from './ImageProcessor';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  if (!product) return null;
  return (
    <div className={styles.OrderItem}>
      <figure>
        <ImageProcessor src={product?.images[0]} alt={product?.title} priority unoptimized />
      </figure>
      <p>{product?.title || ''}</p>
      <p>${product?.price || ''}</p>
      <Image className={(styles.pointer, styles['more-clickable-area'])} src={close} alt="close" onClick={() => handleRemove(product)} unoptimized priority />
    </div>
  );
};

export default OrderItem;
