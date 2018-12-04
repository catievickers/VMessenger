import React, { Component } from 'react';
import { View, TouchableHighlight, TextInput, StyleSheet, Text } from 'react-native';

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

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            phone_number: '',
            id: 5
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="First Name"
                        onChangeText={(text) => this.setState({ first_name: text })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Last Name"
                        onChangeText={(text) => this.setState({ last_name: text })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Phone Number"
                        onChangeText={(text) => this.setState({ phone_number: text })}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={
                    () => this.props.navigation.navigate('ContactList', {
                        contact: this.state
                    })}>
                    <Text style={styles.loginText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default AddContact;
