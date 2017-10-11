const API_URL = 'http://localhost:8000';

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Card, Icon, List, ListItem, Button } from 'react-native-elements';
import axios from 'axios';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'CRM Xtra Lite'
  };

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let name = 'Shu Sia Lukito';
    axios.get(`${API_URL}/api/contact/assign/${name}`).then((result) => {
      this.setState(
        {
          users: result.data
        }
      );
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Icon color="white" name="invert-colors" size={62} />
          <Text style={styles.heading}>Clients</Text>
          <Text style={styles.heading}>Assigned to me</Text>
        </View>
        <Card containerStyle={{padding: 0}} >
          {
            this.state.users.map((u, i) => {
              let avatarUrl = u.photourl;
              if (avatarUrl === null) {
                avatarUrl = 'https://s3.us-east-2.amazonaws.com/g54capstone/person-placeholder.png';
              }
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  avatar={{uri:avatarUrl}}
                  onPress={() => navigate('Chat', u)}
                />
              );
            })
          }
        </Card>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#9809F7',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});
