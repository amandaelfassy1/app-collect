import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
const {width} = Dimensions.get('window');
const columnWidth = (width - 10) / 2 - 10;
import Masonry from 'react-native-masonry-layout';
import {SafeAreaView} from 'react-native-safe-area-context';

export class Search extends Component {
  componentDidMount() {
    this.load();
  }

  load() {
    let data = [
      {
        image:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        text: 'Test',
        key: 1,
      },
      {
        image:
          'https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg',
        text: 'Image1',
        key: 1,
      },
      {
        image: 'https://cdn.eso.org/images/thumb300y/eso1907a.jpg',
        text: 'Image1',
        key: 1,
      },
      {
        image:
          'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
        text: 'Image3',
        key: 1,
      },
      {
        image:
          'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg',
        text: 'Image1',
        key: 1,
      },
      {
        image:
          'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
        text: 'Image3',
        key: 1,
      },
      {
        image:
          'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg',
        text: 'Image1',
        key: 1,
      },
      {
        image:
          'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
        text: 'Image3',
        key: 1,
      },
      {
        image:
          'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg',
        text: 'Image1',
        key: 1,
      },
      {
        image:
          'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
        text: 'Image3',
        key: 1,
      },
      {
        image:
          'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg',
        text: 'Image1',
        key: 1,
      },
    ];

    let last = data.length;
    let new_data = [];
    data.map((item, index) => {
      let height = 100;
      if (index === 0) {
        console.log(index, ':', 150);
      } else if (index === last - 1 && last % 2 == 0) {
        console.log(index, ':', 150);
      } else {
        console.log(index, ':', 250);
        height = 200;
      }

      new_data.push({
        image: item.image,
        height: height,
        text: item.text,
      });

      if (index === last - 1 && last % 2 !== 0) {
        new_data.push({
          image:
            'https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png',
          height: 100,
          text: 'No data ',
        });
      }
    });

    this.refs.list.addItems(new_data);
  }

  render() {
    return (
      <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor: '#EEE'}}>
        <Masonry
          style={{flex: 1}}
          columns={2}
          ref="list"
          containerStyle={{padding: 5}}
          renderItem={item => (
            <View
              style={{
                margin: 5,
                backgroundColor: '#fff',
                borderRadius: 5,
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#dedede',
              }}>
              <Image source={{uri: item.image}} style={{height: item.height}} />

              <Text style={{padding: 5, color: '#444'}}>{item.text}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default Search;
