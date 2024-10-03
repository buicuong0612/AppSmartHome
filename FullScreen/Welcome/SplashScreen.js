import { StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <ImageBackground 
      source={require('../../img/backGround.png')} // Thay thế bằng đường dẫn đến hình nền của bạn
      style={styles.container}
      resizeMode="cover" // Đảm bảo hình ảnh lấp đầy toàn bộ khu vực
    >
      <Image source={require('../../img/LogoSMH.png')} style={styles.logo} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
