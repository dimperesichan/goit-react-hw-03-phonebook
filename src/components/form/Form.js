import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../section';
import Container from '../container';
import Title from '../title';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();

    onSubmit(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Section>
        <Container>
          <Title title="Phonebook" />
          <MainForm autoComplete="off" onSubmit={this.handleFormSubmit}>
            <FormLabel>
              Name
              <FormInput
                type="text"
                name="name"
                value={name}
                placeholder="Enter fullname"
                onChange={this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </FormLabel>

            <FormLabel>
              Number
              <FormInput
                type="tel"
                name="number"
                value={number}
                placeholder="Enter phone number"
                onChange={this.handleInputChange}
                minLength="7"
                maxLength="9"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </FormLabel>

            <FormAddContactButton
              type="submit"
              disabled={name === '' || number === ''}
            >
              Add contact
            </FormAddContactButton>
          </MainForm>
        </Container>
      </Section>
    );
  }
}

export const MainForm = styled.form`
  padding: 5px;
  margin: 0 auto;
  width: 250px;
  font-family: var(--font);
`;

export const FormAddContactButton = styled.button`
  margin: 0;
  width: 100%;
  border: 1px solid rgb(255, 252, 252);
  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);
  border-radius: 10px;
  background-color: rgb(245, 250, 245);
  padding: 5px 20px;

  font-family: var(--font);
  font-size: 14px;
  font-weight: 600;
  transition: all 250ms ease-in;

  :hover {
    cursor: pointer;
    color: var(--white);
    background-color: var(--green);
    border: 1px solid var(--blue);
  }

  :disabled:hover {
    cursor: not-allowed;
    color: var(--red);
    background-color: var(--white);
    border: 1px solid var(--red);
  }
`;

export const FormLabel = styled.label`
  margin: 0 0 2px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;

export default Form;
