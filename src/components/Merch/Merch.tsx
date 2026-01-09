import { useEffect, useRef, useState } from 'react'; // Added useState
import { motion } from 'framer-motion';
import styles from './Merch.module.css';

const Merch = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false); // New state to pause on hover

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Left right scrolling logic
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

  // AUTO-SCROLL EFFECT
  useEffect(() => {
    if (isPaused) return; // Stop timer if user is hovering

    const interval = setInterval(() => {
      scroll('right');
    }, 5000); // Scrolls every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isPaused]);

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
      <section 
        className={styles['carousel-wrapper']}
        onMouseEnter={() => setIsPaused(true)} // Pause when mouse enters
        onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
      >
        
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
            {/* NIGHT MARKET SHIRT -----------------------------------------------------------------*/}
            <div className={styles['merch-card']} style={{ backgroundColor: '#FFF5D4' }}>

              {/* MASK */}
              <img 
                  src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" 
                  className={styles['nm-background']} 
                  alt="Background"
              />

              {/* HEADERS */}
              <div className={styles['card-content']}>
                  <img src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_FRONT.PNG" className={styles.logo} alt="logo" style={{width: 'clamp(120px, 20vw, 400px)'}}/>
                  <h2>Night Market Shirts</h2>
                  <button className={styles['buy-btn']}>Buy Now</button>
              </div>

              {/* IMAGE */}
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
                  style={{opacity: .7}}
                  src="/MerchPhotos/Yinghua/2024-2025/yinghua_front.png" 
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

              {/* IMAGE */}
              <div 
                className={styles['card-image-wrapper']} 
                style={{ 
                  background: 'linear-gradient(to bottom, #E7DEFF 0%, #CAB6FF 50%, #9578E6 100%)' 
                }}
              >
                <img src="/MerchPhotos/Yinghua/2024-2025/yinghua_back.png" alt="Merch" />
              </div>
            </div>




            {/* GENBOD SHIRT */}
            <div className={styles['merch-card']} style ={{backgroundColor: '#A8BFFF'} }>
              <img 
                  src="\MerchPhotos\GenBod\2024-2025\Background.png" 
                  className={styles['genbod-background']} 
                  alt="Background"
              />

              <div className={styles['card-content']}>
                <img src="/MerchPhotos/GenBod/2024-2025/Logo.png" className={styles.logo} alt="logo" style={{ width: 'clamp(120px, 20vw, 250px)'}}/>
                <h2 style={{ color: '#444343ff' }}>Genbod Shirts</h2>
                <button className={styles['buy-btn']} style={{backgroundColor: '#444343ff' }}>Buy Now</button>
              </div>
              <div className={styles['card-image-wrapper']} style={
                  {
                    backgroundColor: '#c6d4ffe1', 
                    backgroundImage: `
                      repeating-linear-gradient(0deg, #cddbff21, #cddbff21 35px, transparent 35px, transparent 70px),
                      repeating-linear-gradient(90deg, #cddbff25, #cddbff25 35px, transparent 35px, transparent 70px)
                    `,
                    backgroundBlendMode: 'screen'
                    
                  }
                }>
                <img src="\MerchPhotos\GenBod\2024-2025\Genbod_Back.png" alt="Merch" style={{filter: 'brightness(0) invert(1)', zIndex: 2}} />
              </div>
            </div>

          </motion.div>
        </div>
      </section>







      {/* GALLERY GRID SECTION */}
      <section className={styles['gallery-section']}>
        <div className={styles['gallery-header']}>
          <span>Our Collection</span>
          <h2>All Merchandise</h2>
        </div>
        <div className={styles['gallery-grid']}>

          {/* 2025-2026 Genbod Shirt*/}
          <div className={styles['gallery-item']}>
            <div className={styles['item-image-box']} style={{ backgroundColor: '#faf8c0ff' }}>
              <img src="/MerchPhotos/GenBod/2025-2026/Genbod_Back.png" alt="GenBod" />
            </div>
            <h3>Yellow General Body Tee</h3> 
            <p>$25.00</p>
          </div>

          {/* 2024-2025 Genbod Shirt*/}
          <div className={styles['gallery-item']}>
            <div className={styles['item-image-box']} style={{ backgroundColor: '#A8BFFF' }}>
              <img src="/MerchPhotos/GenBod/2024-2025/Genbod_Back.png" alt="2024-2025 General Body Tee" />
            </div>
            <h3>Blue General Body Tee</h3>
            <p>$25.00</p>
          </div>

          {/* 2024-2025 NM Tote Bag*/}
          <div className={styles['gallery-item']}>
            <div className={styles['item-image-box']} style={{ backgroundColor: '#FFF5D4' }}>
              <img style={{right: '7%'}}src="/MerchPhotos/NightMarket/2025-2026/Tote.png" alt="2025-2026 General Body Tee" />
            </div>
            <h3> Bear Tote Bag </h3>
            <p>$25.00</p>
          </div>

          {/* 2024-2025 Yinghua Shirt */}
          <div className={styles['gallery-item']}>
            <div className={styles['item-image-box']} style={{ backgroundColor: '#6746C1'}}>
              <img style={{width: '90%'}} src="/MerchPhotos/Yinghua/2024-2025/yinghua_back.png" alt=" 2024-2025 Yinghua" />
            </div>
            <h3>Purple Yinghua Tee</h3>
            <p>$25.00</p>
          </div>

          {/* 2023-2024 Night Market Shirt*/}
          <div className={styles['gallery-item']}>
            <div className={styles['item-image-box']} style={{ backgroundColor: '#FFF5D4' }}>
              <img src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" alt="2023-2024 Night Market Tee" />
            </div>
            <h3>Beige Night Market Tee</h3>
            <p>$25.00</p>
          </div>









      </div>






      </section>      
    </div>
  );
};

export default Merch;