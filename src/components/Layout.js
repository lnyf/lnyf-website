import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Typography from "../components/Typography";
import text from "../text";
import theme from "../theme";
import Menu from "./Menu";
import { AnimateState } from "./Menu.js";
import Waves from "./Waves";

const LogoSection = styled.div`
  margin-left: 15px;
`;

const LinkSection = styled.div`
  display: none;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-right: 30px;
  @media (min-width: 800px) {
    display: flex;
  }
`;

const NavBarLink = styled(Typography)`
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-shadow: 1px 1px 3px ${({ theme }) => theme.palette.background}85;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    transform: translateY(-2px);
  }
`;

const NavOverlay = styled.div`
  position: fixed;
  z-index: 200;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 24px 48px;
  background: radial-gradient(circle at top, rgba(19, 32, 44, 0.92), rgba(8, 13, 19, 0.88));
  backdrop-filter: blur(18px) saturate(130%);
`;

const NavOverlayContent = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const NavOverlayItem = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 18px 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #f7f7f5;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: clamp(1.45rem, 4.2vw, 2.25rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  position: relative;
  overflow: hidden;
  padding-right: 60px;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  box-shadow: 0 18px 45px rgba(8, 13, 19, 0.28);

  &::after {
    content: "→";
    position: absolute;
    right: 26px;
    top: 50%;
    transform: translateY(-50%) translateX(-10px);
    font-size: 1.2rem;
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateX(6px);
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.palette.primary2};
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translateY(-50%) translateX(3px);
  }

  @media (max-width: 480px) {
    padding: 16px 20px;
    padding-right: 56px;
  }
`;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 2;
`;

const Footer = styled.div`
  padding-left: 15vw;
  padding-right: 15vw;
  height: auto;
  min-height: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  background: ${({ theme }) => theme.palette.background};
  background: linear-gradient(180deg, ${({ theme }) => theme.palette.background}00 0%, ${({ theme }) => theme.palette.background}88 61%, ${({ theme }) => theme.palette.background} 100%);
  
  @media (max-width: 1200px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    padding-left: 8vw;
    padding-right: 8vw;
    padding-bottom: 30px;
  }
  
  @media (max-width: 600px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
  
  @media (max-width: 1200px) {
    margin-right: 40px;
  }
  
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;
  }
  
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  font-family: "Oswald", sans-serif;
  gap: 12px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledWaves = styled(Waves)`
  margin-top: 40px;
`;

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevPos, setPrevPos] = useState(0);

  const handleScroll = debounce(() => {
    const scrollY = window.pageYOffset;
    setVisible(scrollY < 20 || scrollY < prevPos);
    setPrevPos(scrollY);
  }, 10);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevPos, visible, handleScroll]);

  const { redIconData } =
    useStaticQuery(graphql`
      query LayoutQuery {
        redIconData: file(
          name: { eq: "lnyf_white_favicon" }
          sourceInstanceName: { eq: "images" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 40
              width: 40
              placeholder: BLURRED
              layout: FIXED
            )
          }
        }
      }
    `);

  const redIconImg = getImage(redIconData);
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(AnimateState.INITIAL);
  const onMenuClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setAnimate(
      animate === AnimateState.INITIAL || animate === AnimateState.CLOSED
        ? AnimateState.OPEN
        : AnimateState.CLOSED
    );
  };
  const navbarStyles = {
    display: 'flex',
    height: '60px',
    width: '100%',
    position: 'fixed',
    zIndex: '100',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.header,
    'background-color': theme.palette.header,
    transition: 'top 0.6s',
  }

  return (
    <div>
      {open && (
        <NavOverlay>
          <NavOverlayContent>
            <NavOverlayItem to="/" onClick={onMenuClick}>
              Home
            </NavOverlayItem>
            {text.schedule.active && (
              <NavOverlayItem to="/auditions" onClick={onMenuClick}>
                Auditions
              </NavOverlayItem>
            )}
            {/* <NavOverlayItem to="https://ci.ovationtix.com/35674/production/1257574" onClick={onMenuClick}>
              BUY TICKETS
            </NavOverlayItem> */}
            {/* <NavOverlayItem to="/crew" onClick={onMenuClick}>
              Stage Crew & Ushers
            </NavOverlayItem> */}
            <NavOverlayItem to="/performances" onClick={onMenuClick}>
              Performances
            </NavOverlayItem>
            <NavOverlayItem to="/gallery" onClick={onMenuClick}>
              Gallery
            </NavOverlayItem>
            <NavOverlayItem to="/people" onClick={onMenuClick}>
              Exec
            </NavOverlayItem>
            <NavOverlayItem to="/philanthropy" onClick={onMenuClick}>
              Philanthropy
            </NavOverlayItem>
            <NavOverlayItem to="/events" onClick={onMenuClick}>
              Events
            </NavOverlayItem>
            <NavOverlayItem to="/external-performances" onClick={onMenuClick}>
              External Performances
            </NavOverlayItem>
            <NavOverlayItem to="/history" onClick={onMenuClick}>
              History
            </NavOverlayItem>
            {/* <NavOverlayItem to="/store" onClick={onMenuClick}>
              Donate
            </NavOverlayItem> */}
            <NavOverlayItem to="/store" onClick={onMenuClick}>
              Store
            </NavOverlayItem>
          </NavOverlayContent>
        </NavOverlay>
      )}
      <div style={{ ...navbarStyles, top: visible ? '0px' : '-60px' }}>
        <LogoSection>
          <Link to="/">
            <GatsbyImage
              image={redIconImg}
              alt="icon"
            />
          </Link>
        </LogoSection>
        <Menu
          onClick={onMenuClick}
          animate={animate}
          setAnimate={setAnimate}
        />
        <LinkSection>
          {text.schedule.active && (
            <NavBarLink variant="linkfont">
              <StyledLink to="/auditions">
                Auditions
              </StyledLink>
            </NavBarLink>
          )}
          {/* <NavBarLink variant="linkfont">
            <StyledLink to="https://ci.ovationtix.com/35674/production/1257574">
              BUY TICKETS NOW
            </StyledLink>
          </NavBarLink> */}
          {/* <NavBarLink variant="linkfont">
            <StyledLink to="/crew">
            Stage Crew & Ushers
            </StyledLink>
          </NavBarLink> */}
          <NavBarLink variant="linkfont">
            <StyledLink to="/performances">
              Performances
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/gallery">
              Gallery
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/people">
              Exec
            </StyledLink>
          </NavBarLink>
          {/* <NavBarLink variant="linkfont">
            <StyledLink to="/store">
              Donate
            </StyledLink>
          </NavBarLink> */}
          <NavBarLink variant="linkfont">
            <StyledLink to="/external-performances">
              External Performances
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/history">
              History
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/store">
              Store
            </StyledLink>
          </NavBarLink>
        </LinkSection>
      </div>
    </div>
  );
};

const Layout = ({ children, transparent, noWaves }) => {
  return (
    <Page>
      <Header />
      <Content>{children}</Content>
      <Footer>
        <FooterDiv>
          <Typography variant="footertitle" style={{ marginBottom: '10px', fontSize: '1.4rem', fontWeight: '500', color: 'white'}}>Pages</Typography>
          <Link to="/events" style={{ color: 'white', textDecoration: 'none'}}>
            <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Events</Typography>
          </Link>
          <Link to="/performances" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Performances</Typography>
          </Link>
          <Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Gallery</Typography>
          </Link>
          <Link to="/people" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Exec</Typography>
          </Link>
          {/* <Link to="/store" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="footerlink">Donate</Typography>
          </Link> */}
          <Link to="/store" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Store</Typography>
          </Link>
          <Link to="/philanthropy" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Philanthropy</Typography>
          </Link>
        </FooterDiv>
        <FooterDiv>
          <Typography variant="footertitle" style={{ marginBottom: '10px', fontSize: '1.4rem', fontWeight: '500', color: 'white'}}>Contact Us</Typography>
          <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '10px'}}>wu.lnyf@gmail.com</Typography>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href={text.links.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href={text.links.youtube} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <i className="fab fa-youtube fa-2x"></i>
            </a>
            <a href={text.links.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
        </FooterDiv>
        <FooterDiv>
          <Typography variant="footertitle" style={{ marginBottom: '10px', fontSize: '1.4rem', fontWeight: '500', color: 'white'}}>Sign Up For Our Newsletter</Typography>
          <Typography variant="footerlink" style={{ fontSize: '1.1rem', marginBottom: '1px'}}>Stay up to date with LNYF!</Typography>
          <NewsletterForm name='submit-to-google-sheet'>
            <input type="email" name="Email" placeholder="Email Address" style={{flex: 1, padding: '14px 16px', s: '10px', borderRadius: '5px', border: 'none', fontSize: '1rem', outline: 'none', marginTop: '10px'}}></input>
            <button type="submit"
              style={{
                height: '48px',
                padding: '0px 24px',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: '"Oswald", sans-serif',
                marginTop: '10px',
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Subscribe</button>
          </NewsletterForm>
          <span id="msg"></span>
        </FooterDiv>
      </Footer>
    </Page>
  );
};

export default Layout;
