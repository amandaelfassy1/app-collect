import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Image
        onPress={() => navigation.push('Post')}
        style={styles.imagePost}
        source={require('../assets/img/post.png')}
      />
      <View style={styles.contentBottom}>
        <Text style={styles.textPost}>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Envoyer un message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.textButton}>Acheter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textPost: {
    bottom: 0,
    textAlign: 'center',
    padding: 30,
    top: 30,
    marginBottom: 30,
  },
  contentBottom: {
    border: 100,
    bottom: 100,
    height: '100%',
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: '#EBF5FF',
  },
  imagePost: {
    height: 430,
    width: '100%',
  },
  contentFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  imageProfil: {
    marginRight: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  buttonBuy: {
    backgroundColor: '#4671FF',
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '4671FF',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default Home;
