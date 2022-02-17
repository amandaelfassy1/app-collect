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
    <ScrollView>
      <View style={styles.contentFlex}>
        <Image
          style={styles.imageProfil}
          source={require('../assets/img/post.png')}
        />
        <Text>Amanda</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Post')}>
        <Image
          onPress={() => navigation.push('Post')}
          style={styles.imagePost}
          source={require('../assets/img/post.png')}
        />
      </TouchableOpacity>

      <View style={styles.contentFlex}>
        <Icon reverse name="ios-heart" type="ionicon" size={20} />
        <Text>128 j'aime</Text>
      </View>
      <View style={styles.contentFlex}>
        <Image
          style={styles.imageProfil}
          source={require('../assets/img/post.png')}
        />
        <Text>Amanda</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Post')}>
        <Image
          onPress={() => navigation.push('Post')}
          style={styles.imagePost}
          source={require('../assets/img/post.png')}
        />
      </TouchableOpacity>

      <View style={styles.contentFlex}>
        <Icon reverse name="ios-heart" type="ionicon" size={20} />
        <Text>128 j'aime</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagePost: {
    height: 400,
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
  iconHeart: {
    color: 'red',
  },
});

export default Home;
