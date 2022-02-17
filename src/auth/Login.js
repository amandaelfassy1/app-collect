import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

function Login() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/img/login.png')}
      style={styles.main}>
      <TextInput style={styles.input1} placeholder="Adresse mail" />
      <TextInput style={styles.input} placeholder="Mot de passe" />
      <TouchableOpacity style={styles.connexion}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
      <Text>Ou</Text>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.TextGoogle}>Continuer avec Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.TextFacebook}>Continuer avec Facebook</Text>
      </TouchableOpacity>
      <Text>Ou</Text>
      <TouchableOpacity style={styles.connexion}>
        <Text
          style={styles.textButton}
          onPress={() => navigation.push('Register')}>
          S'inscrire gratuitement
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    height: height,
    width,
    alignItems: 'center',
  },
  logo: {
    //alignSelf:'flex-start',
    width: 44,
    height: 44,
    marginTop: height * 0.46,
  },
  titre: {
    marginTop: 15,
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  boutton1: {
    backgroundColor: '#2cf262',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  textButton1: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  button2: {
    width: '90%',
    height: 30,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  TextGoogle: {
    color: 'red',
    fontFamily: 'Montserrat-Bold',
  },
  TextFacebook: {
    color: 'blue',
    fontFamily: 'Montserrat-Bold',
  },

  connexion: {
    marginTop: 10,
    backgroundColor: '#4671FF',
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10,
    //marginLeft: 20
  },
  textButton: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  input: {
    borderRadius: 10,
    borderColor: '#4671FF',
    color: 'black',
    height: 50,
    margin: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input1: {
    backgroundColor: 'white',
    marginTop: '72%',
    borderRadius: 10,
    borderColor: '#4671FF',
    color: 'black',
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Login;
