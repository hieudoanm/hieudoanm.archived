import styles from './Flipism.module.css';

export const Flipism = () => {
  const flip = () => {
    document.getElementById('coin')?.classList.remove('classToBeRemoved');
    const flipResult = Math.random();
    setTimeout(function () {
      if (flipResult <= 0.5) {
        document.getElementById('coin')?.classList.add('heads');
      } else {
        document.getElementById('coin')?.classList.add('heads');
      }
    }, 100);
  };

  return (
    <div id='coin' className={styles.coin} onClick={flip}>
      <div className={styles.sideA}></div>
      <div className={styles.sideB}></div>
    </div>
  );
};
