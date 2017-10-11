import React, { Component } from 'react';
import { View, StyleSheet, TexView, Text } from 'react-native';
import { Header, Card, List, ListItem, Button } from 'react-native-elements';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    user: `${navigation.state.params.user}`,
    photourl: `${navigation.state.params.photourl}`
  });
  render() {
    let { name, email, phone, source, photourl, comments } = this.props.navigation.state.params;
    return (
      <View>
        <Card
          title={name}
          image={{uri:photourl}}
          imageStyle={{height:250, width:343}}>
          <List containerStyle={{marginBottom: 20}}>
            <ListItem
              title={'Source:  ' + source}
              hideChevron={true}
            />
            <ListItem
              title={'Email:  ' + email}
              hideChevron={true}
            />
            <ListItem
              title={'Phone:  ' + phone}
              hideChevron={true}
            />
            <ListItem
              title={'Comments:  ' + comments}
              hideChevron={true}
            />
          </List>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Edit' />
        </Card>
      </View>
    );
  }
}

export default DetailScreen;
