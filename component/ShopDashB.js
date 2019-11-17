import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H1} from 'native-base';
import {MyList} from './misc/CustomItem';

export default class NoteDashboard extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const list = [
      {
        title: 'Buat file baru ...',
        click: () => this.props.navigation.navigate('Form'),
      },
      {
        title: 'Dokumen',
        click: () => this.props.navigation.navigate('Document'),
      },
    ];
    return (
      <Container>
        <H1 style={styles.title}>Notepad mobile app</H1>
        <Content padder>
          <MyList list={list} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
