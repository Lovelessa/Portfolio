import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './footerElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Our Company</FooterLinkTitle>
                                <FooterLink to="/signin">Our History</FooterLink>
                                <FooterLink to="/signin">Our Vision</FooterLink>
                                <FooterLink to="/signin">Our Mission</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>News</FooterLinkTitle>
                                <FooterLink to="/signin">Social</FooterLink>
                                <FooterLink to="/signin">Blogs</FooterLink>
                                <FooterLink to="/signin">Media Library</FooterLink>
                                <FooterLink to="/signin">Media Contacts</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Careers</FooterLinkTitle>
                                <FooterLink to="/signin">Community</FooterLink>
                                <FooterLink to="/signin">Message</FooterLink>
                                <FooterLink to="/signin">Values</FooterLink>
                                <FooterLink to="/signin">University Recruiting</FooterLink>
                                <FooterLink to="/signin">Sales and Marketinge</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Investors</FooterLinkTitle>
                                <FooterLink to="/signin">Earnings Release</FooterLink>
                                <FooterLink to="/signin">Earnings Webcast</FooterLink>
                                <FooterLink to="/signin">Financial Tables</FooterLink>
                                <FooterLink to="/signin">Slide Presentation</FooterLink>
                                <FooterLink to="/signin">Latest Events</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/" onClick={toggleHome}>
                           PryzmWare
                       </SocialLogo>
                       <WebsiteRights>PrysmWare © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                               <FaFacebook />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                               <FaInstagram />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                               <FaYoutube />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                               <FaTwitter />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                               <FaLinkedin />
                           </SocialIconLink>
                       </SocialIcons>
                    </SocialMediaWrap> 
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
