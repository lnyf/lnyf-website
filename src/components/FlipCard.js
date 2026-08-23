import React from "react";
import styled from "styled-components";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";

const CardContainer = styled.div`
  height: 0px;
  padding-bottom: 125%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  box-sizing: border-box;
  &.flipped {
      .front {
          transform: rotateY(180deg);
      }
      .back {
          transform: rotateY(0deg);
      }
  }
`;

const Back = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: $new-white;
  position: absolute !important;
  border-radius: 10px;
  border: ${({ theme }) => theme.decoration.borderHover};
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: -webkit-transform ease 500ms;
  transition: transform ease 500ms;
  background: $new-white;
  transform: rotateY(-180deg);
  padding: 5px;
  font-size: 10vw;
  background-color: ${({ theme }) => theme.palette.primarybackground};
  color: ${({ theme }) => theme.palette.primaryfont};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  ${({ clickable, theme }) => {
    return (
      (clickable === true || clickable === "true") &&
      `
      cursor: pointer;
      
      &:hover {
        border: ${theme.decoration.borderHover};
      }`
    );
  }}
`;

const ImageThumbnail = styled(StyledImage)`
    height: 0px;
    padding-bottom: 125%;
    width: 100%;
    box-sizing: border-box;
    display: block !important;
    background: $new-white;
    position: absolute !important;
    border-radius: 10px;
    overflow: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: -webkit-transform ease 500ms;
    transition: transform ease 500ms;
    z-index: 2;
    transform: rotateY(0deg);

    /*
     * gatsby-plugin-image's "constrained" layout injects a spacer element whose
     * height comes from the SOURCE aspect ratio. For a landscape portrait that
     * spacer is shorter than the 4:5 card frame, so the photo sat in the top of
     * the card with dead space beneath it. Drop the spacer and pin the images to
     * the frame so every card crops identically regardless of source aspect.
     */
    > div:first-child {
      display: none !important;
    }

    picture,
    img,
    [data-placeholder-image],
    [data-main-image] {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
      object-position: center center;
    }
`;

/* && doubles the class specificity so these beat the base Typography variant */
const SecTitle = styled(Typography)`
  && {
    padding-top: 5%;
    padding-bottom: 1.5%;
    /* keep the original Oswald display face, just dialled down a step */
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.04em;
    @media (min-width: 800px) {
      font-size: 15px;
      line-height: 17px;
    }
  }
`;

const Answer = styled(Typography)`
  && {
    font-family: "Open Sans", sans-serif;
    font-size: 11px;
    line-height: 15px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0.01em;
    @media (min-width: 800px) {
      font-size: 12.5px;
      line-height: 17px;
    }
  }
`;

class FlipCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { flipped: false };
      this.flip = this.flip.bind(this);
    }
  
    flip = () => {
      this.setState({ flipped: !this.state.flipped });
    }
    render() {
      return (
        <CardContainer onClick={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
            <ImageThumbnail
                image={this.props.image}
                clickable="true" 
                alt={this.props.alt}
                className="front"
            />
            <Back className="back" clickable="true">
                <div>
                    <SecTitle variant="subtitle">Majors</SecTitle>
                    <Answer variant="caption2">{this.props.major}</Answer>
                </div>
                {this.props.zodiac && (
                    <div>
                        <SecTitle variant="subtitle">Zodiac</SecTitle>
                        <Answer variant="caption2">{this.props.zodiac}</Answer>
                    </div>
                )}
                {this.props.talent && (
                    <div>
                        <SecTitle variant="subtitle">Hidden talent</SecTitle>
                        <Answer variant="caption2">{this.props.talent}</Answer>
                    </div>
                )}
                {this.props.character && (
                    <div>
                        <SecTitle variant="subtitle">Favorite character</SecTitle>
                        <Answer variant="caption2">{this.props.character}</Answer>
                    </div>
                )}
                <div>
                    <SecTitle variant="subtitle">What LNYF means to me:</SecTitle>
                    <Answer variant="caption2">{this.props.facts}</Answer>
                </div>
            </Back>
        </CardContainer>
      )
    }
  }

  export default FlipCard