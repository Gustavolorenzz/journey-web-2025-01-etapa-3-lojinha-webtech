import React from 'react';
import { Star, StarHalf, StarBorder } from '@mui/icons-material';
import Image from 'next/image';
import styles from '../styles/Product.module.css';

const Product = ({ image, name, rating, price }) => {
    // Function to render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<Star key={i} className={styles.star} />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<StarHalf key={i} className={styles.star} />);
            } else {
                stars.push(<StarBorder key={i} className={styles.star} />);
            }
        }
        
        return stars;
    };

    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <Image 
                    src={image} 
                    alt={name} 
                    width={200} 
                    height={200} 
                    className={styles.image}
                />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.rating}>
                {renderStars(rating)}
                <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
            </div>
            <div className={styles.price}>
                R$ {price.toFixed(2).replace('.', ',')}
            </div>
        </div>
    );
};

export default Product;