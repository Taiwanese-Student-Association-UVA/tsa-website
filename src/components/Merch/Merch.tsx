import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Merch.module.css';

const Merch = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //left right scrolling on carousel
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      const isAtStart = scrollLeft <= 10;

      let targetScroll;

      if (direction === 'right') {
        targetScroll = isAtEnd ? 0 : scrollLeft + clientWidth;
      } else {
        targetScroll = isAtStart ? scrollWidth - clientWidth : scrollLeft - clientWidth;
      }

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className={styles['merch-container']}>
      {/* HERO SECTION */}
      <section className={styles['merch-hero']}>
        <div className={styles['hero-content']}>
          <h1>TSA Merchandise</h1>
          <p>TSA is Cool</p>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className={styles['carousel-wrapper']}>
        
        {/* 3. Navigation Arrows */}
        <button className={`${styles['nav-btn']} ${styles.left}`} onClick={() => scroll('left')}>
          &#10094;
        </button>
        <button className={`${styles['nav-btn']} ${styles.right}`} onClick={() => scroll('right')}>
          &#10095;
        </button>

        <div className={styles['carousel-viewport']} ref={scrollRef}>
          <motion.div 
            className={styles['carousel-track']}
            initial={{ y: "10vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* NIGHT MARKET SHIRT */}
            <div className={styles['merch-card']} style={{ backgroundColor: '#FFF5D4' }}>
              <img 
                  src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" 
                  className={styles['nm-background']} 
                  alt="Background"
              />
              <div className={styles['card-content']}>
                  <img src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_FRONT.PNG" className={styles.logo} alt="logo"/>
                  <h2>Night Market</h2>
                  <button className={styles['buy-btn']}>Buy Now</button>
              </div>
              <div className={styles['card-image-wrapper']}>
                  <img src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" alt="Product"/>
              </div>
            </div>
            
            {/* GENERAL BODY SHIRT */}
            <div className={styles['merch-card']} style ={{backgroundColor: '#6746C1'}}>
              <div className={styles['card-content']}>
                <span></span>
                <h2> Yinghua</h2>
                <button className={styles['buy-btn']}>Buy Now</button>
              </div>
              <div className={styles['card-image-wrapper']}>
                <img src="Mer.jpg" alt="Merch" />
              </div>
            </div>


            {/* YINGHUA SHIRT */}
            <div className={styles['merch-card']}>
              <div className={styles['card-content']}>
                <span>2023-2024</span>
                <h2>NM Hoodie</h2>
                <button className={styles['buy-btn']}>Buy Now</button>
              </div>
              <div className={styles['card-image-wrapper']}>
                <img src="Photos/hoodie1.jpg" alt="Merch" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Merch;