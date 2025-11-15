import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ImageOverlay from "../components/ImageOverlay";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";
import FadeInOnScroll from "../components/FadeInOnScroll";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";

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

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 40px;
  
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
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

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.background};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60%;
  overflow: hidden;
`;

const CarouselImage = styled(StyledImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  z-index: 10;
`;

const ArrowIcon = styled.div`
  pointer-events: all;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  
  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

const StyledArrowIcon = styled.i`
  color: white;
  font-size: 20px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CaptionOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: white;
  padding: 30px 20px 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 5;
`;

const ImageWrapperWithHover = styled(ImageWrapper)`
  &:hover ${CaptionOverlay} {
    opacity: 1;
  }
`;

const CaptionText = styled(Typography)`
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  margin: 0;
`;

const OverlayImage = styled(GatsbyImage)`
  align-self: center;
  margin-bottom: 20px;
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

const ExternalPerformancesPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = text.externalPerformances.photos;
  
  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
  
  const handlePrev = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  return (
    <Layout>
      <Seo title="External Performances" />
      <InnerPage title="External Performances">
        <TwoColumnGrid>
          <FadeInOnScroll direction="up" delay={0} threshold={0.2}>
            <Card>
              <IconContainer>
                <i className="fas fa-info-circle"></i>
              </IconContainer>
              <StyledHeader variant="h4">About External Performances</StyledHeader>
              <InfoText variant="p">
                {text.externalPerformances.info}
              </InfoText>
            </Card>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={150} threshold={0.2}>
            <Card>
              <IconContainer>
                <i className="fab fa-youtube"></i>
              </IconContainer>
              <StyledHeader variant="h4">Watch Our Performances</StyledHeader>
              <InfoText variant="p">
                Check out our YouTube channel to see recordings of our past performances.
              </InfoText>
              <LinkContainer>
                <StyledLink
                  href={text.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Visit Our YouTube Channel</Button>
                </StyledLink>
              </LinkContainer>
            </Card>
          </FadeInOnScroll>
        </TwoColumnGrid>

          {photos.length > 0 && (
            <Section>
              <FadeInOnScroll direction="up" delay={0} threshold={0.15}>
                <StyledHeader variant="h3" style={{ marginBottom: '30px', textAlign: 'center' }}>
                  Past External Performances
                </StyledHeader>
              </FadeInOnScroll>
              <FadeInOnScroll direction="up" delay={200} threshold={0.15}>
                <CarouselContainer>
                  <ImageWrapperWithHover
                    onClick={() => handlePhotoClick(photos[currentPhotoIndex])}
                  >
                    <CarouselImage
                      image={getImage(imgDataMap[photos[currentPhotoIndex].image])}
                      alt={photos[currentPhotoIndex].caption || "External Performance"}
                      clickable="true"
                    />
                    {photos[currentPhotoIndex].caption && (
                      <CaptionOverlay>
                        <CaptionText variant="p">
                          {photos[currentPhotoIndex].caption}
                        </CaptionText>
                      </CaptionOverlay>
                    )}
                  </ImageWrapperWithHover>
                  {photos.length > 1 && (
                    <IconWrapper>
                      <ArrowIcon onClick={handlePrev}>
                        <StyledArrowIcon className="fas fa-chevron-left"></StyledArrowIcon>
                      </ArrowIcon>
                      <ArrowIcon onClick={handleNext}>
                        <StyledArrowIcon className="fas fa-chevron-right"></StyledArrowIcon>
                      </ArrowIcon>
                    </IconWrapper>
                  )}
                </CarouselContainer>
              </FadeInOnScroll>
            </Section>
          )}

          <Section>
            <FadeInOnScroll direction="up" delay={100} threshold={0.15}>
              <Card style={{ maxWidth: '900px', margin: '0 auto' }}>
                <StyledHeader variant="h4">Request an External Performance</StyledHeader>
                <InfoText variant="p" style={{ marginBottom: '0' }}>
                  Interested in having LNYF perform at your event? Fill out the form (linked) below.
                </InfoText>
                
                <InfoText variant="p" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <strong>Questions?</strong> Reach out to us at{" "}
                  <StyledLink href="mailto:perfcomm.lnyf@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    perfcomm.lnyf@gmail.com
                  </StyledLink>
                </InfoText>
                
                <FormButtonContainer style={{ marginBottom: '25px' }}>
                  <StyledLink
                    href={text.links.externalPerformancesForm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Open Form in New Tab</Button>
                  </StyledLink>
                </FormButtonContainer>

                <FormContainer>
                  <FormIframe
                    src={text.links.externalPerformancesForm}
                    title="External Performance Request Form"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </FormContainer>
              </Card>
            </FadeInOnScroll>
          </Section>
      </InnerPage>

      <ImageOverlay open={open} setOpen={setOpen}>
        {selectedPhoto && (
          <>
            <OverlayImage
              image={getImage(imgDataMap[selectedPhoto.image])}
              alt={selectedPhoto.caption}
              objectFit="contain"
            />
            {selectedPhoto.caption && (
              <Typography variant="p">{selectedPhoto.caption}</Typography>
            )}
          </>
        )}
      </ImageOverlay>
    </Layout>
  );
};

export default ExternalPerformancesPage;

export const query = graphql`
  query ExternalPerformancesPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "external-performances" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        name
      }
    }
  }
`;