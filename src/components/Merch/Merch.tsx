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
                  <h2>Night Market Shirts</h2>
                  <button className={styles['buy-btn']}>Buy Now</button>
              </div>
              <div className={styles['card-image-wrapper']}>
                  <img src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" alt="Product"/>
              </div>
            </div>
            
            {/* YINGHUA SHIRT */}
            <div className={styles['merch-card']} style={{ backgroundColor: '#6746C1' }}>
              <img 
                  src="/MerchPhotos/Yinghua/2024-2025/yinghua_back.PNG" 
                  className={styles['yinghua-background']} 
                  alt="Background"
              />
              <div className={styles['card-content']}>
                <img 
                  src="/MerchPhotos/Yinghua/2024-2025/PurpleLogo.png" 
                  className={styles.logo} 
                  alt="logo"
                />
                <h2 style={{ color: '#282828' }}>Yinghua Shirts</h2>
                <button 
                  className={styles['buy-btn']} 
                  style={{ backgroundColor: '#414141' }}
                >
                  Buy Now
                </button>
              </div>

              {/* Wrap the image so it anchors to the right correctly */}
              <div 
                className={styles['card-image-wrapper']} 
                style={{ 
                  background: 'linear-gradient(to bottom, #E7DEFF 0%, #CAB6FF 50%, #9578E6 100%)' 
                }}
              >
                <img src="Mer.jpg" alt="Merch" />
              </div>
            </div>




            {/* GENBOD SHIRT */}
            <div className={styles['merch-card']} style ={{backgroundColor: '#FEFCC5'} }>
              <img 
                  src="\MerchPhotos\GenBod\2024-2025\Background.png" 
                  className={styles['genbod-background']} 
                  alt="Background"
              />
              <div className={styles['card-content']}>
                <img src="/MerchPhotos/GenBod/2024-2025/GoldLogo.png" className={styles.logo} alt="logo"/>
                <h2 style={{ color: '#444343ff' }}>Genbod Shirts</h2>
                <button className={styles['buy-btn']} style={{backgroundColor: '#444343ff' }}>Buy Now</button>
              </div>
              <div className={styles['card-image-wrapper']} style={{backgroundColor: '#FFFEEC'}}>
                <img src="Mer.jpg" alt="Merch" />
              </div>
            </div>



          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Merch;