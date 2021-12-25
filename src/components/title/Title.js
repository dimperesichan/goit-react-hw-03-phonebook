import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ title, className }) => {
  return className ? (
    <TitleH2 className={className}>{title}</TitleH2>
  ) : (
    <TitleH2>{title}</TitleH2>
  );
};

Title.defaultProps = {
  title: 'Section title',
};

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export const TitleH2 = styled.h2`
  color: var(--yellow);
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
`;

export default Title;
