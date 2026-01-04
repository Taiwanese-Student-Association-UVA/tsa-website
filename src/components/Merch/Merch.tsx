import styles from './Merch.module.css';

const Merch = () => {
  return (
    <div className={styles['merch-page']}>


    {/* HERO SECTION --------------------------------------------------------- */}

    <section className={styles['merch-hero']}> {/* ---- START OF HERO SECTION ---- */}
    <div className={styles['hero-content']}>
        <h1>TSA Merchandise</h1>
        <p>TSA is Cool</p>
    </div>
    </section> {/* ---- END OF HERO SECTION ---- */}



    {/* CAROUSEL SECTION --------------------------------------------------------- */}
      <section className={styles['carousel-viewport']}> {/* ---- START OF CAROUSEL SECTION ---- */}
        <div className={styles['carousel-track']}>
          
          {/* Card 1 */}
          <div className={styles['merch-card']}>
            <div className={styles['card-content']}>
              <span>2023-2024</span>
              <h2>NM Shirt</h2>
              <button className={styles['buy-btn']}>Buy Now</button>
            </div>
            <div className={styles['card-image-wrapper']}>
              <img src="Photos/shirt1.jpg"/>
            </div>
          </div>


          {/* Card 2 */}
          <div className={styles['merch-card']}>
            <div className={styles['card-content']}>
              <span>2024-2025</span>
              <h2>Genbod Shirt</h2>
              <button className={styles['buy-btn']}>Buy Now</button>
            </div>
            <div className={styles['card-image-wrapper']}>
              <img src="Photos/shirt2.jpg"/>
            </div>
          </div>
        </div>


      </section> {/* ---- END OF CAROUSEL SECTION ---- */}




    </div> /* END OF MERCH PAGE */
  );
};
export default Merch;