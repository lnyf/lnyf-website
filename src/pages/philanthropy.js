import React, { useState } from "react";
import Layout from "../components/Layout";
import InnerPage from "../components/InnerPage";
import Button from "../components/Button";
import Typography from "../components/Typography";
import StyledImage from "../components/StyledImage";
import TwoColumn from "../components/TwoColumn";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import ButtonDropdown from "../components/ButtonDropdown";
import text from "../text";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

/* Keeps the content off the page edges and caps how wide the
   image/text pair is allowed to stretch. */
const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 1000px) {
    padding: 0 32px;
  }
`;

const MediaColumn = styled.div`
  max-width: 520px;
  @media (min-width: 1000px) {
    flex: 0 0 40%;
    max-width: 400px;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  min-width: 0;
  @media (min-width: 1000px) {
    padding-left: 40px;
  }
`;

const StyledCaption = styled(Typography)`
  margin-bottom: 16px;
  font-size: 13px;
  line-height: 18px;
  @media (min-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const StyledHeader = styled(Typography)`
  margin-top: 24px;
  margin-bottom: 8px;
  @media (min-width: 1000px) {
    margin-top: 0;
  }
  font-size: 22px;
  line-height: 26px;
  @media (min-width: 800px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const StyledDescription = styled(Typography)`
  font-size: 15px;
  line-height: 1.6;
  @media (min-width: 800px) {
    font-size: 16px;
  }
`;

const StyledLabel = styled(Typography)`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  @media (min-width: 800px) {
    font-size: 17px;
    line-height: 22px;
  }
`;

const StyledAnchor = styled.a`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
`;

const SmallButton = styled(Button)`
  height: 34px;
  padding: 0 26px;
  font-size: 13px;
  line-height: 13px;
  @media (min-width: 800px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
`;

const Video = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const PhilanthropyPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const [year, setYear] = useState(
    Object.keys(text.philanthropy).sort((a, b) => b - a)[0]
  );
  const img = getImage(imgDataMap[text.philanthropy[year].image]);
  return (
    <Layout>
      <Seo title="Philanthropy" />
      <InnerPage
        title="Philanthropy"
        buttons={
          <>
            <StyledLabel variant="subtitle">Year</StyledLabel>
            <ButtonDropdown
              value={year}
              setValue={setYear}
              options={Object.keys(text.philanthropy)
                .sort((a, b) => b - a)
                .map((p) => ({
                  value: p,
                  label: p,
                }))}
              active
            />
          </>
        }
      >
        <ContentWrapper>
          <TwoColumn spacing={0}>
            <MediaColumn>
              {text.philanthropy[year].image && (
                <StyledImage
                  image={img}
                  alt={text.philanthropy[year].title}
                ></StyledImage>
              )}
              {text.philanthropy[year].video && (
                <VideoContainer>
                  <Video
                    src={text.philanthropy[year].video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></Video>
                </VideoContainer>
              )}
            </MediaColumn>
            <TextColumn>
              <StyledHeader variant="h4">
                {text.philanthropy[year].title}
              </StyledHeader>
              {text.philanthropy[year].money && (
                <StyledCaption variant="caption">
                  Money Raised: {text.philanthropy[year].money}
                </StyledCaption>
              )}
              <StyledDescription>
                {text.philanthropy[year].description}
              </StyledDescription>
              <StyledAnchor
                target="_blank"
                href={text.philanthropy[year].link}
                rel="noopener noreferrer"
              >
                <SmallButton white>See More</SmallButton>
              </StyledAnchor>
            </TextColumn>
          </TwoColumn>
        </ContentWrapper>
      </InnerPage>
    </Layout>
  );
};

export default PhilanthropyPage;

export const query = graphql`
  query PhilanthropyPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "philanthropy" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        name
      }
    }
  }
`;
