import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }



    render() {
        // const messagingService = this.props.navigation.getParam('messagingService', 'default'); //messagingService will determine which adaptee we are coming from
        // const iconURL = this.props.navigation.getParam('image', 'default'); //iconURL will determine the file path of the image depending on the messagingService


        return (
            <View style={styles.container}>
                <Text>{this.props.loginType}</Text>
                <Image
                    source={this.props.iconURL}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        autoCorrect={false}
                        textContentType='username'
                        placeholder='Username'
                        onChange={(username) => this.setState({ username })}
                        value={this.state.username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        autoCorrect={false}
                        type='password'
                        textContentType='password'
                        placeholder='Password'
                        onChange={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.navigation.navigate('HomePage')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
export default LoginScreen;