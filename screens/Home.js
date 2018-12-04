import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    }
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
    }

    static navigationOptions = {
        headerTitle: 'Home'
    };

    render() {
        
        return (
            <View style={styles.container}>
                <Text>Welcome to VMessenger</Text>

                <Button title="VMessenger" onPress={() => this.props.navigation.navigate('VMessenger')} />
                <Button title="Skype" onPress={() => this.props.navigation.navigate('Skype')} />
                <Button title="Contacts" onPress={() => this.props.navigation.navigate('ContactList')} />
            </View>
        );
    }
}
export default Home;