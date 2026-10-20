import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import FadeInOnScroll from "../components/FadeInOnScroll";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Typography from "../components/Typography";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_MS = 24 * 60 * 60 * 1000;

// Parse "YYYY-MM-DD" as a local date (new Date("YYYY-MM-DD") is UTC and can land on the previous day).
const parseDate = (str) => {
  if (!str) return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const formatRange = (start, end) => {
  const sameMonth = start.getMonth() === end.getMonth();
  return {
    month: sameMonth
      ? MONTHS[start.getMonth()]
      : `${MONTHS[start.getMonth()]} – ${MONTHS[end.getMonth()]}`,
    days:
      start.getTime() === end.getTime()
        ? `${start.getDate()}`
        : `${start.getDate()}–${end.getDate()}`,
    weekdays:
      start.getTime() === end.getTime()
        ? WEEKDAYS[start.getDay()]
        : `${WEEKDAYS[start.getDay()]} – ${WEEKDAYS[end.getDay()]}`,
  };
};

const mapsLink = (name, address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}`)}`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(244, 226, 123, 0.7); }
  70% { box-shadow: 0 0 0 14px rgba(244, 226, 123, 0); }
  100% { box-shadow: 0 0 0 0 rgba(244, 226, 123, 0); }
`;

/* ---------- Sidebar ---------- */

const Intro = styled.p`
  margin: 0 0 20px;
  font-family: "Open Sans", "Open Sans Fallback", sans-serif;
  line-height: 1.55;
`;

const NextUpCard = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.primary2};
  border-radius: 14px;
  padding: 14px 16px;
  background: rgba(244, 226, 123, 0.08);
`;

const NextUpLabel = styled.div`
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.primary2};
`;

const NextUpName = styled.div`
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 1.2;
  margin: 4px 0 2px;
`;

const NextUpCountdown = styled.div`
  font-size: 14px;
  opacity: 0.85;
`;

/* ---------- Timeline ---------- */

const Timeline = styled.div`
  position: relative;

  /* the vertical line */
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 11px;
    width: 4px;
    border-radius: 999px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.palette.primary1} 0%,
      ${({ theme }) => theme.palette.primary2} 50%,
      ${({ theme }) => theme.palette.accent1} 100%
    );
  }
`;

const Stop = styled.div`
  position: relative;
  padding-left: 44px;
  margin-bottom: 36px;

  @media (min-width: 600px) {
    display: flex;
    gap: 24px;
  }
`;

const Node = styled.span`
  position: absolute;
  left: 2px;
  top: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.palette.background};
  background: ${({ theme }) => theme.palette.primary2};
  box-sizing: border-box;

  ${({ status, theme }) =>
    status === "past" &&
    css`
      background: ${theme.palette.accent3};
    `}
  ${({ status }) =>
    (status === "next" || status === "now") &&
    css`
      animation: ${pulse} 2s infinite;
    `}
  ${({ status, theme }) =>
    status === "tba" &&
    css`
      background: ${theme.palette.background};
      border: 3px dashed ${theme.palette.secondary1};
    `}
`;

const DateBlock = styled.div`
  flex-shrink: 0;
  width: 110px;
  margin-bottom: 10px;
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  text-transform: uppercase;
  opacity: ${({ status }) => (status === "past" ? 0.5 : 1)};

  @media (min-width: 600px) {
    text-align: right;
    margin-bottom: 0;
  }
`;

const DateMonth = styled.div`
  font-size: 16px;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.palette.primary2};
`;

const DateDays = styled.div`
  font-size: 40px;
  line-height: 1;
  font-weight: 600;
`;

const DateWeekdays = styled.div`
  font-size: 13px;
  letter-spacing: 0.08em;
  opacity: 0.8;
  margin-top: 4px;
`;

const Card = styled.article`
  flex: 1;
  min-width: 0;
  position: relative;
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  padding: 18px;
  transition: transform 0.2s ease, opacity 0.2s ease;

  ${({ status }) =>
    status === "past" &&
    css`
      opacity: 0.55;
      filter: grayscale(0.7);
    `}
  ${({ status, theme }) =>
    status === "tba" &&
    css`
      border-style: dashed;
      border-width: 3px;
      box-shadow: none;
      border-color: ${theme.palette.secondary1}99;
    `}

  &:hover {
    transform: translateY(-3px);
  }
`;

const StatusChip = styled.span`
  position: absolute;
  top: -14px;
  right: 14px;
  padding: 4px 12px;
  border-radius: 999px;
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.secondaryfont};
  background: ${({ status, theme }) =>
    status === "now"
      ? theme.palette.accent1
      : status === "next"
      ? theme.palette.primary2
      : theme.palette.secondary1};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
`;

const Logo = styled.div`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.palette.secondary1};
  background: ${({ theme }) => theme.palette.header};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  font-size: 22px;
`;

const Name = styled.h3`
  margin: 0;
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.1;
  text-transform: uppercase;
`;

const Cuisine = styled.div`
  font-size: 14px;
  opacity: 0.8;
  margin-top: 2px;
`;

const Details = styled.ul`
  list-style: none;
  margin: 0 0 14px;
  padding: 0;
  display: grid;
  gap: 8px;
`;

const Detail = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: "Open Sans", "Open Sans Fallback", sans-serif;
  font-size: 15px;
  line-height: 1.4;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${({ theme }) => theme.palette.primary2};
  }

  a {
    color: inherit;
    text-decoration-color: ${({ theme }) => theme.palette.primary2};
    text-underline-offset: 3px;
  }
`;

const Muted = styled.span`
  opacity: 0.65;
  font-style: italic;
`;

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const Photo = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 6px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
  }

  &:hover .gatsby-image-wrapper {
    transform: scale(1.08);
  }
`;

const SectionLabel = styled.div`
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 18px;
  margin: 8px 0 24px 44px;
  color: ${({ theme }) => theme.palette.primary2};
`;

const PastToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 4px 0 32px 44px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Oswald", "Oswald Fallback", sans-serif;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.font};
  background: transparent;
  border: 3px solid ${({ theme }) => theme.palette.secondary1};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.palette.secondary1};
    color: ${({ theme }) => theme.palette.secondaryfont};
  }

  &::after {
    content: "▾";
    transition: transform 0.2s ease;
    transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  }
`;

/* ---------- Icons ---------- */

const Icon = ({ children }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const CalendarIcon = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);

const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

const PinIcon = () => (
  <Icon>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

/* ---------- Page ---------- */

const STATUS_LABEL = { now: "Happening now", next: "Up next", past: "Thank you!" };

const getStatus = (night, today, nextIndex, index) => {
  if (!night.startDate) return "tba";
  if (!today) return "upcoming";
  if (today > night.endDate) return "past";
  if (today >= night.startDate) return "now";
  return index === nextIndex ? "next" : "upcoming";
};

const BenefitNightCard = ({ night, status, imgDataMap }) => {
  const range = night.startDate && formatRange(night.startDate, night.endDate);
  const logo = imgDataMap[night.logo];
  const photos = night.photos.map((p) => imgDataMap[p]).filter(Boolean);
  const initials = night.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <Stop>
      <Node status={status} />
      <DateBlock status={status}>
        {range ? (
          <>
            <DateMonth>{range.month}</DateMonth>
            <DateDays>{range.days}</DateDays>
            <DateWeekdays>{range.weekdays}</DateWeekdays>
          </>
        ) : (
          <>
            <DateMonth>Date</DateMonth>
            <DateDays>TBA</DateDays>
          </>
        )}
      </DateBlock>
      <Card status={status}>
        {STATUS_LABEL[status] && <StatusChip status={status}>{STATUS_LABEL[status]}</StatusChip>}
        <CardHeader>
          <Logo>
            {logo ? (
              <GatsbyImage image={getImage(logo)} alt={`${night.name} logo`} />
            ) : (
              initials
            )}
          </Logo>
          <div>
            <Name>{night.name}</Name>
            {night.cuisine && <Cuisine>{night.cuisine}</Cuisine>}
          </div>
        </CardHeader>
        <Details>
          <Detail>
            <CalendarIcon />
            {range ? (
              <span>
                {range.weekdays}, {range.month} {range.days}
              </span>
            ) : (
              <Muted>Dates coming soon</Muted>
            )}
          </Detail>
          <Detail>
            <ClockIcon />
            {night.time ? <span>{night.time}</span> : <Muted>Time TBA</Muted>}
          </Detail>
          <Detail>
            <PinIcon />
            {night.address ? (
              <a href={mapsLink(night.name, night.address)} target="_blank" rel="noopener noreferrer">
                {night.address}
              </a>
            ) : (
              <Muted>Location coming soon</Muted>
            )}
          </Detail>
        </Details>
        {photos.length > 0 && (
          <Photos>
            {photos.map((p, i) => (
              <Photo key={i}>
                <GatsbyImage image={getImage(p)} alt={`Food from ${night.name}`} />
              </Photo>
            ))}
          </Photos>
        )}
      </Card>
    </Stop>
  );
};

const BenefitNightsPage = ({ data }) => {
  const imgDataMap = convertImgArrToMap(data.imgData.nodes);

  // Status depends on today's date, so compute it after hydration to keep the static HTML stable.
  const [today, setToday] = useState(null);
  const [showPast, setShowPast] = useState(false);
  useEffect(() => {
    const now = new Date();
    setToday(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  }, []);

  const nights = text.benefitNights.nights.map((n) => ({
    ...n,
    startDate: parseDate(n.start),
    endDate: parseDate(n.end || n.start),
  }));
  const scheduled = nights
    .filter((n) => n.startDate)
    .sort((a, b) => a.startDate - b.startDate);
  const tba = nights.filter((n) => !n.startDate);

  const nextIndex = today ? scheduled.findIndex((n) => today <= n.endDate) : -1;
  const nextNight = nextIndex >= 0 ? scheduled[nextIndex] : null;
  const daysUntil = nextNight ? Math.round((nextNight.startDate - today) / DAY_MS) : null;

  const withStatus = scheduled.map((night, i) => ({
    night,
    status: getStatus(night, today, nextIndex, i),
  }));
  const upcoming = withStatus.filter((n) => n.status !== "past");
  // Most recent first, so the night that just happened sits at the top.
  const past = withStatus.filter((n) => n.status === "past").reverse();

  const sidebar = (
    <>
      <Intro>{text.benefitNights.intro}</Intro>
      {nextNight && (
        <NextUpCard>
          <NextUpLabel>{daysUntil <= 0 ? "Happening now" : "Next benefit night"}</NextUpLabel>
          <NextUpName>{nextNight.name}</NextUpName>
          <NextUpCountdown>
            {daysUntil <= 0
              ? "Go eat!"
              : daysUntil === 1
              ? "Starts tomorrow"
              : `Starts in ${daysUntil} days`}
          </NextUpCountdown>
        </NextUpCard>
      )}
    </>
  );

  return (
    <Layout>
      <Seo title="Benefit Nights" />
      <InnerPage title="Benefit Nights" buttons={sidebar}>
        <Timeline>
          {upcoming.map(({ night, status }, i) => (
            <FadeInOnScroll key={night.name} direction="up" delay={i * 20}>
              <BenefitNightCard night={night} status={status} imgDataMap={imgDataMap} />
            </FadeInOnScroll>
          ))}
          {tba.length > 0 && <SectionLabel>More benefit nights coming soon</SectionLabel>}
          {tba.map((n, i) => (
            <FadeInOnScroll key={n.name} direction="up" delay={i * 20}>
              <BenefitNightCard night={n} status="tba" imgDataMap={imgDataMap} />
            </FadeInOnScroll>
          ))}
        </Timeline>
        {past.length > 0 && (
          <PastToggle
            type="button"
            open={showPast}
            aria-expanded={showPast}
            aria-controls="past-benefit-nights"
            onClick={() => setShowPast((v) => !v)}
          >
            {showPast ? "Hide past events" : `Check past events (${past.length})`}
          </PastToggle>
        )}
        {showPast && (
          <Timeline id="past-benefit-nights">
            <SectionLabel>Past benefit nights</SectionLabel>
            {past.map(({ night, status }) => (
              <BenefitNightCard
                key={night.name}
                night={night}
                status={status}
                imgDataMap={imgDataMap}
              />
            ))}
          </Timeline>
        )}
      </InnerPage>
    </Layout>
  );
};

export const query = graphql`
  query BenefitNightsPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { regex: "/^benefit_night_2027/" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 400, placeholder: BLURRED, aspectRatio: 1)
        }
      }
    }
  }
`;

export default BenefitNightsPage;
