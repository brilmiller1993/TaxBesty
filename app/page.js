"use client";


import styled from "styled-components";

const colors = {
  navy: "#19224D",
  gold: "#D4AF37",
  white: "#fff",
  lightBg: "#F6F8FA",
};

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  background: ${colors.lightBg};
`;

const Header = styled.header`
  background: ${colors.navy};
  color: ${colors.white};
  padding: 32px 0 0 0;
`;

const Logo = styled.img`
  height: 48px;
  margin-left: 32px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  a {
    color: ${colors.gold};
    font-weight: 600;
    text-decoration: none;
    font-family: 'Lora', serif;
    font-size: 1.1rem;
  }
`;

const Hero = styled.section`
  text-align: center;
  padding: 48px 16px 32px 16px;
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    color: ${colors.gold};
    margin-bottom: 12px;
  }
  p {
    font-size: 1.2rem;
    color: ${colors.white};
    margin-bottom: 24px;
  }
`;

const DemoButton = styled.button`
  background: ${colors.gold};
  color: ${colors.navy};
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  padding: 16px 40px;
  border-radius: 30px;
  font-weight: bold;
  border: none;
  box-shadow: 0 2px 8px rgba(25,34,77,0.08);
  margin-bottom: 32px;
  cursor: pointer;
`;

const Section = styled.section`
  padding: 32px 16px;
  background: ${props => props.alt ? colors.white : colors.lightBg};
  h2 {
    font-family: 'Playfair Display', serif;
    color: ${colors.navy};
    font-size: 2rem;
    margin-bottom: 18px;
  }
  .desc {
    font-size: 1.1rem;
    color: ${colors.navy};
  }
  img {
    border-radius: 12px;
    width: 100%;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const Footer = styled.footer`
  background: ${colors.navy};
  color: ${colors.white};
  padding: 36px 32px;
  text-align: center;
  font-family: 'Lora', serif;
  .footer-logo {
    height: 40px;
    margin-bottom: 12px;
  }
`;

export default function Home() {
  return (
    <Header>
      <Logo src="/logo.png" alt="TaxBesty Logo" />
      <NavLinks>
        <a href="#features">Features</a>
        <a href="#support">Support</a>
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </NavLinks>
    </Header>
  );
}

      {/* Capture Leads */}
      <Section id="features">
        <img
          src="https://images.unsplash.com/photo-1629198734668-01895fd2efad?auto=format&fit=crop&w=800&q=80"
          alt="Financial Growth Graph"
        />
        <h2>Capture New Leads</h2>
        <div className="desc">
          Create elegant landing pages and lead forms with TaxBesty’s royal touch.<br />
          <strong>ENROLL NOW</strong>
        </div>
      </Section>

      {/* Nurture Contacts */}
      <Section alt>
        <img
          src="https://images.unsplash.com/photo-1554224155-3a589c4b00fb?auto=format&fit=crop&w=800&q=80"
          alt="Contacts Dashboard"
        />
        <h2>Nurture Your Contacts</h2>
        <div className="desc">
          Stay connected with your clients using built-in SMS, phone, and email integrations.<br />
          <strong>ENROLL NOW</strong>
        </div>
      </Section>

      {/* Close Deals */}
      <Section>
        <img
          src="https://images.unsplash.com/photo-1612197527762-9ce2f4f4c8f6?auto=format&fit=crop&w=800&q=80"
          alt="Deals Pipeline"
        />
        <h2>Close More Deals</h2>
        <div className="desc">
          Organize, track, and convert leads faster with TaxBesty’s regal pipeline tools.<br />
          <strong>ENROLL NOW</strong>
        </div>
      </Section>

      {/* Support & Training */}
      <Section alt id="support">
        <img
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
          alt="Support and Training"
        />
        <h2>Support & Training</h2>
        <div className="desc">
          Get royal support and onboarding from the TaxBesty team.<br />
          <strong>ENROLL NOW</strong>
        </div>
      </Section>

      {/* Footer */}
      <Footer>
        <img src="/logo.png" alt="TaxBesty Logo" className="footer-logo" />
        <div>© 2025 TaxBesty | All Rights Reserved</div>
      </Footer>
    </Container>
  );
}
