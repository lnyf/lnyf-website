import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";
import FadeInOnScroll from "../components/FadeInOnScroll";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  
  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: ${({ theme }) => theme.palette.secondary1};
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0.9;
  
  @media (max-width: 767px) {
    left: 30px;
    width: 2px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 120px;
  min-height: 150px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 767px) {
    padding-left: 60px;
    margin-bottom: 100px;
    min-height: 120px;
  }
  
  @media (min-width: 1200px) {
    margin-bottom: 140px;
    min-height: 180px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.secondary1};
  z-index: 3;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.background}, 0 0 0 6px ${({ theme }) => theme.palette.secondary1}33;
  
  @media (max-width: 767px) {
    left: 30px;
    width: 14px;
    height: 14px;
  }
  
  @media (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }
`;

const HorizontalConnector = styled.div`
  position: absolute;
  ${({ isEven, toYear }) => {
    if (toYear) {
      // Connector to year (left side when isEven, right side when not)
      return isEven 
        ? "left: calc(50% + 9px); right: auto;"
        : "right: calc(50% + 9px); left: auto;";
    } else {
      // Connector to content (right side when isEven, left side when not)
      return isEven
        ? "right: calc(50% + 9px); left: auto;"
        : "left: calc(50% + 9px); right: auto;";
    }
  }}
  top: 50%;
  width: 50px;
  height: 3px;
  background: ${({ theme }) => theme.palette.secondary1};
  transform: translateY(-50%);
  z-index: 2;
  
  @media (max-width: 767px) {
    left: 44px;
    right: auto;
    width: 25px;
    height: 2px;
  }
  
  @media (min-width: 1200px) {
    width: 60px;
  }
`;

const YearContainer = styled.div`
  position: absolute;
  ${({ isEven }) => (isEven ? "left: calc(50% + 70px);" : "right: calc(50% + 70px);")}
  top: 50%;
  transform: translateY(-50%);
  width: calc(50% - 120px);
  padding: 0;
  text-align: ${({ isEven }) => (isEven ? "left" : "right")};
  
  @media (max-width: 767px) {
    position: relative;
    left: auto;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
  }
  
  @media (min-width: 1200px) {
    ${({ isEven }) => (isEven ? "left: calc(50% + 80px);" : "right: calc(50% + 80px);")}
    width: calc(50% - 140px);
  }
`;

const TimelineContent = styled.div`
  position: absolute;
  ${({ isEven }) => (isEven ? "right: calc(50% + 70px);" : "left: calc(50% + 70px);")}
  top: 50%;
  transform: translateY(-50%);
  width: calc(50% - 120px);
  padding: 0;
  text-align: ${({ isEven }) => (isEven ? "right" : "left")};
  display: ${({ hasImage }) => (hasImage ? "flex" : "block")};
  flex-direction: ${({ isEven, hasImage }) => (hasImage && isEven ? "row-reverse" : "row")};
  gap: ${({ hasImage }) => (hasImage ? "25px" : "0")};
  align-items: flex-start;
  
  @media (max-width: 767px) {
    position: relative;
    left: auto;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    margin-top: 20px;
    text-align: left;
    flex-direction: column;
    gap: 15px;
  }
  
  @media (min-width: 1200px) {
    ${({ isEven }) => (isEven ? "right: calc(50% + 80px);" : "left: calc(50% + 80px);")}
    width: calc(50% - 140px);
    gap: ${({ hasImage }) => (hasImage ? "30px" : "0")};
  }
`;

const YearLabel = styled(Typography)`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.palette.secondary1};
  margin-bottom: 0;
  letter-spacing: 0.02em;
  line-height: 1.2;
  
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
  
  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const ChapterTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.palette.secondary1};
  margin-bottom: 10px;
  margin-top: 0;
  line-height: 1.2;
  letter-spacing: 0.01em;
  
  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
  
  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(Typography)`
  line-height: 1.7;
  color: ${({ theme }) => theme.palette.secondary1};
  margin-top: 6px;
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.95;
  
  @media (max-width: 767px) {
    font-size: 1.05rem;
  }
  
  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const TimelineImageWrapper = styled.div`
  flex-shrink: 0;
  width: ${({ hasText }) => (hasText ? "45%" : "100%")};
  min-width: ${({ hasText }) => (hasText ? "250px" : "auto")};
  max-width: ${({ hasText }) => (hasText ? "400px" : "100%")};
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.palette.secondary1};
  padding: 4px;
  background: ${({ theme }) => theme.palette.background};
  
  @media (max-width: 767px) {
    width: 100%;
    min-width: auto;
    max-width: 100%;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  
  @media (min-width: 1200px) {
    width: ${({ hasText }) => (hasText ? "50%" : "100%")};
    max-width: ${({ hasText }) => (hasText ? "450px" : "100%")};
  }
`;

const TimelineImage = styled(StyledImage)`
  width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
  object-fit: cover;
`;

const ImageCaption = styled(Typography)`
  margin-top: 10px;
  font-style: italic;
  color: ${({ theme }) => theme.palette.secondary1};
  opacity: 0.95;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const HistoryPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const timeline = text.history.timeline || [];

  return (
    <Layout>
      <Seo title="History" />
      <InnerPage title="Our History">
        <TimelineContainer>
          <TimelineLine />
          {timeline.map((item, index) => {
            const isEven = index % 2 === 1;
            const hasImage = item.image && imgDataMap[item.image];
            const imageData = hasImage ? getImage(imgDataMap[item.image]) : null;

            return (
              <FadeInOnScroll
                key={index}
                direction="up"
                delay={index * 100}
                threshold={0.2}
              >
                <TimelineItem isEven={isEven}>
                  <TimelineDot />
                  {(item.year || item.period) && (
                    <>
                      <HorizontalConnector isEven={isEven} toYear />
                      <YearContainer isEven={isEven}>
                        <YearLabel variant="h5">
                          {item.year || item.period}
                        </YearLabel>
                      </YearContainer>
                    </>
                  )}
                  {(item.title || item.description || hasImage) && (
                    <>
                      <TimelineContent isEven={isEven} hasImage={hasImage && imageData}>
                        <TextContent>
                          {item.title && (
                            <ChapterTitle variant="h3">{item.title}</ChapterTitle>
                          )}
                          {item.description && (
                            <Description variant="p">{item.description}</Description>
                          )}
                        </TextContent>
                        {hasImage && imageData && (
                          <TimelineImageWrapper hasText={item.title || item.description}>
                            <TimelineImage
                              image={imageData}
                              alt={item.imageCaption || item.title}
                            />
                            {item.imageCaption && (
                              <ImageCaption variant="caption">
                                {item.imageCaption}
                              </ImageCaption>
                            )}
                          </TimelineImageWrapper>
                        )}
                      </TimelineContent>
                    </>
                  )}
                </TimelineItem>
              </FadeInOnScroll>
            );
          })}
        </TimelineContainer>
      </InnerPage>
    </Layout>
  );
};

export const query = graphql`
  query HistoryQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "history" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
          )
        }
      }
    }
  }
`;

export default HistoryPage;

