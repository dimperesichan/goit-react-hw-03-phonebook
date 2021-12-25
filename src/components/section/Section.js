import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ children, className }) => {
  return className ? (
    <SectionWrapper className={className}> {children}</SectionWrapper>
  ) : (
    <SectionWrapper>{children}</SectionWrapper>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const SectionWrapper = styled.section`
  padding: 0 20px;
  margin: 0;
`;

export default Section;
