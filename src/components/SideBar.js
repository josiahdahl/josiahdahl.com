import React from 'react';
import styled from 'styled-components';
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import profilePicture from '../img/navbar-profile.png';
import { pxToRem } from '../styles/util';
import SocialLinks from './SocialLinks';
import { Link } from 'gatsby';

const SideBarContainer = styled.div`
  background-color: ${props => props.theme.primary};
  padding-top: ${pxToRem(64)};
  min-height: 100%;
  color: ${props => props.theme.text};
`;

const ProfilePicture = styled.img`
  border-radius: 9999px;
  display: block;
  width: 150px;
  height: auto;
  margin: 0 auto;
`;

const ProfileName = styled.h1`
  text-align: center;
`;

const ProfileNameInner = styled.span`
  font-size: 0.8em;
`;

const SiteNav = styled.div`
  display: flex;
  justify-content: center;
`;

const SiteNavList = styled.ul`
  list-style: none;
  margin: 1.5rem auto;
  padding: 0;
  flex: 0;
  li {
    margin-bottom: 1rem;
    font-size: 1.4rem;

    a {
      color: ${props => props.theme.light};
      text-decoration: none;
      font-size: 1.5rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SiteNavLink = ({ to, text, exists }) => (
  <li>{exists ? <Link to={to}>{text}</Link> : <a href={to}>{text}</a>}</li>
);

const socialLinks = [
  {
    href: 'https://github.com/josiahdahl',
    icon: faGithub,
  },
  {
    href: 'https://www.linkedin.com/in/josiah-dahl/',
    icon: faLinkedinIn,
  },
  {
    href: 'https://www.twitter.com/josiahdahl',
    icon: faTwitter,
  },
  {
    href: 'https://codepen.io/jodahl/',
    icon: faCodepen,
  },
];

const siteLinks = [
  {
    to: '/',
    text: 'Home',
    exists: true,
  },
  {
    to: '/portfolio',
    text: 'Portfolio',
    exists: true,
  },
  {
    to: '/blog',
    text: 'Blog',
    exists: false,
  },
  {
    to: '/about',
    text: 'About',
    exists: false,
  },
  {
    to: '/contact',
    text: 'Contact',
    exists: false,
  },
];

const SideBar = ({ className, children }) => {
  return (
    <SideBarContainer className={className}>
      <ProfilePicture src={profilePicture} alt="Josiah Dahl" />
      <ProfileName>
        <ProfileNameInner>Josiah Dahl</ProfileNameInner>
      </ProfileName>
      <SocialLinks links={socialLinks} />
      <SiteNav>
        <SiteNavList>
          {siteLinks.map((link, i) => (
            <SiteNavLink key={i} {...link} />
          ))}
        </SiteNavList>
      </SiteNav>
    </SideBarContainer>
  );
};

SideBar.propTypes = {};

export default SideBar;
