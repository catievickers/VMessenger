import React, { Component } from 'react';
import { ListItem, Body, Text } from 'native-base';
import { Button, View, TouchableHighlight } from 'react-native';


class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: []
		};

		this._isMounted = false;
	}

	componentDidUpdate(prevProps) {
		console.log(prevProps);
		let contacts = this.state.contacts;
		let current = this.props.navigation.state.params.contact;
		if (prevProps.navigation.state.params) {
			let previous = prevProps.navigation.state.params.contact;
			if (current !== previous) {
				contacts.push(current);
				this.setState({
					contacts: contacts
				});
			}
		} else {
			contacts.push(current);
			this.setState({
				contacts: contacts
			});
		}
	}

	componentWillMount() {
		this._isMounted = true;
		let rand = require('../data/Contacts.json');
		let contacts = [];
		for (let i = 0; i < rand.length; i++) {
			let placeholder = rand[i];
			contacts.push(placeholder);
		}
		this.setState({
			contacts: contacts
		});
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	static navigationOptions = {
		headerTitle: 'Contact List'
	};

	conditionalRender() {
		if (this.state.contacts) {
			let contacts = this.state.contacts;
			return contacts.map(function (contact) {
				return (
					<View>
						<ListItem key={contact.id} >
							<Body>
								<Text>{contact.first_name + ' ' + contact.last_name}</Text>
								<Text note>{contact.phone_number}</Text>
							</Body>
						</ListItem>
					</View>
				);
			});
		}
	}

	render() {
		return (
			<View>
				{this.conditionalRender()}
				<Button title="Add Contact" onPress={() => this.props.navigation.navigate('AddContact')} />
			</View>
		);
	}

}
export default ContactList;