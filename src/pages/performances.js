import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import FadeInOnScroll from "../components/FadeInOnScroll";

const StyledHeader = styled(Typography)`
  /* text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center; */

  margin-top: 20px;
  margin-bottom: 5px;
`;

const ImageThumbnail = styled(StyledImage)`
  height: 0px;
  padding-bottom: 60%;
  margin-bottom: 10px;
  @media (min-width: 600px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
  @media (min-width: 800px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media (min-width: 100px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const ImagePlaceholder = styled.div`
  border: ${({ theme }) => theme.decoration.border};
  height: 0px;
  padding-bottom: 60%;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: 600px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
  @media (min-width: 800px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media (min-width: 100px) {
    margin-right: 20px;
    margin-bottom: 0;
  }

  & > * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Choreographers = styled(Typography)`
  margin-top: 0;
  margin-bottom: 5px;
  opacity: 0.9;
`;

const Performers = styled.p`
  margin: 0;
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.75;
  line-height: 18px;
  font-size: 13px;
  @media (min-width: 800px) {
    line-height: 22px;
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

const PerformanceContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const PerformanceContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 100px;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  @media (min-width: 800px) {
    flex-direction: column;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const PerformancesPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);

  return (
    <Layout>
      <Seo title="Performances" />
      <InnerPage title="PERFORMANCES">
        {text.performances.map((p, i) => (
          <FadeInOnScroll key={i} direction="up" delay={i * 15}>
            <PerformanceContainer>
              <ImageContainer>
                {imgDataMap[p.image] ? (
                  <ImageThumbnail
                    image={getImage(imgDataMap[p.image])}
                    alt={p.title}
                  />
                ) : (
                  <ImagePlaceholder>
                    <Typography>Photo coming soon</Typography>
                  </ImagePlaceholder>
                )}
              </ImageContainer>
              <PerformanceContent>
                <StyledHeader variant="h6">{p.title}</StyledHeader>
                {p.choreographers && (
                  <Choreographers variant="caption">
                    Choreographed by {p.choreographers}
                  </Choreographers>
                )}
                {p.performers && p.performers.length > 0 && (
                  <Performers>{p.performers.join(" · ")}</Performers>
                )}
              </PerformanceContent>
            </PerformanceContainer>
          </FadeInOnScroll>
        ))}
      </InnerPage>
    </Layout>
  );
};

export default PerformancesPage;

export const query = graphql`
  query PerformancesPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "performances" }
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
