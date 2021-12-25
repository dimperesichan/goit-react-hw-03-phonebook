import React, { Component, Fragment } from 'react';
import Section from './components/section';
import Container from './components/container';
import Title from './components/title';
import Form from './components/form';
import Filter from './components/filter';
import Contacts from './components/contacts';
import dataGenerator from './helpers/dataGenerator';
import contactsData from './data/contacts.json';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: dataGenerator(contactsData),
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts)
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const isContactValid = this.validateContact(data, contacts);

    if (isContactValid) {
      data.id = nanoid();

      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  validateContact = (data, contacts) => {
    if (contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return false;
    } else if (contacts.some(({ number }) => number === data.number)) {
      alert(`${data.number} is already in contacts!`);
      return false;
    } else return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSearch = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFiltredContacts() {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(person =>
      person.name.toLowerCase().includes(lowerCaseFilter),
    );
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();

    return (
      <Fragment>
        <Form onSubmit={this.formSubmitHandler} />

        <Section>
          <Container>
            <Title title="Contacts" />
            <Filter value={filter} onChange={this.handleSearch} />
            <Contacts
              contacts={filteredContacts}
              onDeleteButtonClick={this.deleteContact}
            />
          </Container>
        </Section>
      </Fragment>
    );
  }
}

export default App;
