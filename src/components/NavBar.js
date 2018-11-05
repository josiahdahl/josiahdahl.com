import React, { Component } from 'react';
import styled from 'styled-components';
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePicture1x from '../img/navbar-profile@1x.jpg';
import profilePicture2x from '../img/navbar-profile@2x.jpg';
import SocialLinks from './SocialLinks';
import { Link } from 'gatsby';
import { sizes } from '../styles/breakpoints';
import { Slider } from './Slider';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primary};
  min-height: 100%;
  color: ${props => props.theme.text};
  width: 100%;
  position: relative;

  @media (min-width: ${sizes.md.min}) {
    width: auto;
    min-width: 10rem;
    flex: 0;
    padding: 4rem 2rem 0;
  }
  @media (min-width: ${sizes.lg.min}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const NavBarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  padding: 0 1.5rem;
  height: 4rem;
  font-size: 1.1rem;
  font-weight: lighter;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  @media (min-width: ${sizes.md.min}) {
    display: none;
  }
`;

const NavBarTitle = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: ${props => props.theme.text};
`;

const SliderToggle = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  color: ${props => props.theme.text};
  @media (min-width: ${sizes.md.min}) {
    display: none;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 5px;
  display: none;
  width: 150px;
  height: auto;
  margin: 0 auto;
  @media (min-width: ${sizes.md.min}) {
    display: block;
  }
`;

const ProfileName = styled.h1`
  text-align: center;
  visibility: hidden;
  font-size: 1.8rem;
  @media (min-width: ${sizes.md.min}) {
    visibility: visible;
  }

  ${NavBarHeader} & {
    visibility: visible;
    margin: 0;
    line-height: 1;
  }
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
    position: relative;

    a {
      color: ${props => props.theme.light};
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: normal;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SiteNavLink = styled(Link).attrs({
  activeClassName: 'is-active',
})`
  display: block;

  &.is-active {
    :before {
      position: absolute;
      left: -1rem;
      content: '';
      border: 1px solid ${props => props.theme.accent};
      height: 100%;
    }
  }
`;

const SkipNavigation = styled.a`
  position: relative;
  height: 0;
  overflow: hidden;
  text-align: center;
  &:focus {
    height: auto;
    overflow: visible;
    margin-bottom: 0.5rem;
  }
`;

const socialLinks = [
  {
    href: 'https://github.com/josiahdahl',
    icon: faGithub,
    label: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/josiah-dahl/',
    icon: faLinkedinIn,
    label: 'Linkedin',
  },
  {
    href: 'https://www.twitter.com/josiahdahl',
    icon: faTwitter,
    label: 'Twitter',
  },
  {
    href: 'https://codepen.io/jodahl/',
    icon: faCodepen,
    label: 'Codepen',
  },
];

const siteLinks = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/portfolio',
    text: 'Portfolio',
  },
  {
    to: '/blog',
    text: 'Blog',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
];

class NavBar extends Component {
  state = {
    sliderClosed: true,
  };

  constructor(props) {
    super(props);
    this.toggleSlider = this.toggleSlider.bind(this);
    this.closeSlider = this.closeSlider.bind(this);
  }

  toggleSlider() {
    this.setState(state => ({
      sliderClosed: !state.sliderClosed,
    }));
  }

  closeSlider() {
    if (!this.state.sliderClosed) {
      this.toggleSlider();
    }
  }

  render() {
    const { className } = this.props;
    const { sliderClosed } = this.state;
    return (
      <NavBarContainer className={className}>
        <SkipNavigation href="#page-content">Skip Navigation</SkipNavigation>
        <NavBarHeader>
          <NavBarTitle>Josiah Dahl</NavBarTitle>
          <SliderToggle
            onClick={this.toggleSlider}
            aria-label="Toggle Navigation"
          >
            <FontAwesomeIcon icon={faBars} aria-hidden="true" />
          </SliderToggle>
        </NavBarHeader>
        <Slider
          isHidden={sliderClosed}
          disabledAtPx={sizes.md.max}
          onBackdropClick={this.closeSlider}
        >
          <ProfilePicture
            src={profilePicture1x}
            srcset={`${profilePicture1x} 1x, ${profilePicture2x} 2x`}
            alt="Josiah Dahl"
          />
          <ProfileName>Josiah Dahl</ProfileName>
          <SocialLinks links={socialLinks} />
          <SiteNav>
            <SiteNavList>
              {siteLinks.map((link, i) => (
                <li key={i}>
                  <SiteNavLink to={link.to}>{link.text}</SiteNavLink>
                </li>
              ))}
            </SiteNavList>
          </SiteNav>
        </Slider>
      </NavBarContainer>
    );
  }
}

export default NavBar;
