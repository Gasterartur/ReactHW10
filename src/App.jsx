import React from 'react';
import CatImage from './components/CatImage.jsx';
import styles from './components/App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <CatImage />
    </div>
  );
};

export default App;