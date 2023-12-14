import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import newanimation from '../rawdata/animation.json'

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Page Not Found</h1>
      <p style={styles.text}>
        The page you're looking for doesn't seem to exist.
      </p>
      <p style={styles.text}>
        You can go back to <Link to="/">home</Link> or try searching.
      </p>
      <Lottie style={{ marginTop:'1rem', height:'320px'}} className="innerWidth" animationData={newanimation}/>
    </div>
  );
};

const styles = {
  container: {
    marginTop:'5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
};

export default NotFoundPage;
