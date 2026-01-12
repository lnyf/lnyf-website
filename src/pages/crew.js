import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Typography from "../components/Typography";
import FadeInOnScroll from "../components/FadeInOnScroll";
import text from "../text";

const Section = styled.div`
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.palette.background};
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  border-radius: 12px;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 40px;
  align-items: stretch;
  
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledHeader = styled(Typography)`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.palette.secondary1};
`;

const InfoText = styled(Typography)`
  line-height: 1.6;
  margin-bottom: 20px;
`;

const InfoTextNoMargin = styled(Typography)`
  line-height: 1.6;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.palette.secondary1};
`;

const FormContainer = styled.div`
  margin: 0;
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.background};
`;

const FormIframe = styled.iframe`
  width: 100%;
  min-height: 800px;
  border: none;
  display: block;
`;

const FormButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CrewPage = () => {
  return (
    <Layout>
      <Seo title="Stage Crew & Ushers Applications" />
      <InnerPage title="Stage Crew & Ushers Applications">
        <Section>
          <FadeInOnScroll direction="up" delay={0} threshold={0.15}>
            <InfoText variant="p" style={{ textAlign: 'center', marginBottom: '30px' }}>
              Interested in being part of LNYF 2026 behind the scenes? We're looking for dedicated volunteers to join our usher or stage crew teams!
            </InfoText>
          </FadeInOnScroll>
        </Section>

        <TwoColumnGrid>
          <FadeInOnScroll direction="up" delay={0} threshold={0.2}>
            <Card>
              <StyledHeader variant="h4">Usher Application</StyledHeader>
              <InfoText variant="p">
                Join our usher team and help create a welcoming experience for our audience. Ushers assist with seating, provide directions, and ensure a smooth show experience for all attendees.
              </InfoText>
              
              <FormButtonContainer style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <StyledLink
                  href={text.links.usherForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Open Usher Form in New Tab</Button>
                </StyledLink>
              </FormButtonContainer>

              <FormContainer style={{ marginTop: '20px' }}>
                <FormIframe
                  src={text.links.usherForm}
                  title="Usher Application Form"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </FormContainer>
            </Card>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={150} threshold={0.2}>
            <Card>
              <StyledHeader variant="h4">Stage Crew Application</StyledHeader>
              <InfoText variant="p">
                Be part of the magic behind the scenes! Stage crew members help with act changes and props during rehearsals and performances.
              </InfoText>
              
              <FormButtonContainer style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <StyledLink
                  href={text.links.stageCrewForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Open Stage Crew Form in New Tab</Button>
                </StyledLink>
              </FormButtonContainer>

              <FormContainer style={{ marginTop: '20px' }}>
                <FormIframe
                  src={text.links.stageCrewForm}
                  title="Stage Crew Application Form"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </FormContainer>
            </Card>
          </FadeInOnScroll>
        </TwoColumnGrid>

        <Section>
          <FadeInOnScroll direction="up" delay={300} threshold={0.15}>
            <Card style={{ maxWidth: '900px', margin: '0 auto' }}>
              <StyledHeader variant="h4">Questions?</StyledHeader>
              <InfoTextNoMargin variant="p">
                If you have any questions about the application process or what's involved in being part of the crew, please reach out to us at{" "}
                <StyledLink href="mailto:wu.lnyf@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  wu.lnyf@gmail.com
                </StyledLink>
              </InfoTextNoMargin>
            </Card>
          </FadeInOnScroll>
        </Section>
      </InnerPage>
    </Layout>
  );
};

export default CrewPage;

