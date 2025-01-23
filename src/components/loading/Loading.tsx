import React from 'react';
import { Spin } from 'antd'; 
import { useAppSelector } from '@/store/hooks';

const LoadingScreen: React.FC = () => {

  const isLoading = useAppSelector(state=> state.local.loading.isLoading)
  
  if(!isLoading){
    return (<></>)
  }
  return (
    <div style={styles.container}>
      <Spin size="large" />
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999999,
  },
};

export default LoadingScreen;
