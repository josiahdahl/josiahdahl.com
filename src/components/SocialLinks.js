import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Link = ({ href, icon, label }) => (
  <li>
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} aria-hidden={true} />
    </a>
  </li>
);

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  li {
    display: inline-block;
    margin: 0 0.25rem;

    a {
      padding: 0.25rem;
      color: ${props => props.theme.accent};
    }
  }
`;

const SocialLinks = ({ className, links }) => (
  <LinksList>
    {links.map((link, i) => (
      <Link key={i} {...link} />
    ))}
  </LinksList>
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SocialLinks;
