import styled from 'styled-components';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteButtonClick }) => {
  return (
    <ul>
      {contacts.map(person => (
        <ListItem key={person.id}>
          {person.name} : {person.number}
          <ButtonDelete
            type="button"
            onClick={() => onDeleteButtonClick(person.id)}
          >
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: circle;
  align-items: baseline;
  width: 350px;
  padding: 5px;

  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;

  ::before {
    content: '';
    display: block;
    height: 7px;
    width: 7px;
    background-color: var(--yellow);
    border-radius: 50%;
  }
`;

export const ButtonDelete = styled.button`
  margin: 5px 0 5px 10px;
  border: 1px solid rgb(255, 252, 252);
  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);
  border-radius: 6px;
  background-color: rgb(245, 250, 245);
  padding: 3px 10px 3px 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  transition: all 250ms ease-in;

  :hover {
    cursor: pointer;
    color: var(--white);
    background-color: var(--blue);
    border: 1px solid var(--dark);
  }
`;

export default Contacts;
