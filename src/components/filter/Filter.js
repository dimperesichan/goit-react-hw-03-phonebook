import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const Filter = ({ value, onChange }) => (
  <Fragment>
    <Label>
      <Title>
        Find contacts by <Span>name</Span>
      </Title>
      <Input type="search" name="search" value={value} onChange={onChange} />
    </Label>
  </Fragment>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin: 5px 0;
  color: var(--white);
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: var(--yellow);
`;

export const Input = styled.input`
  color: var(--blue);
`;

export default Filter;
