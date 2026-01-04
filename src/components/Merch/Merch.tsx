import styles from './Merch.module.css';

const Merch = () => {
  return (
    <div className={styles['merch-container']}> 
      {/* Note: Use brackets styles['merch-hero'] if your CSS class has a hyphen */}
      <section className={styles['merch-hero']}>
        <div className={styles['hero-content']}>
          <h1>TSA Merchandise</h1>
          <p>TSA is Cool </p>
        </div>
      </section>

      {/* Grid for your cards starts here */}
      <div className={styles['merch-grid']}>
        {/* We can add the cards here next */}
      </div>
    </div>
  );
};

export default Merch;