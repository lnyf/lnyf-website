import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({theme}) => theme.palette.background};
  color: ${({theme}) => theme.palette.font};
  cursor: pointer;
  padding: 0 20px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  border-radius: 30px;
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 16px;
  border: 4px solid ${({theme}) => theme.palette.secondarybackground};
  box-sizing: border-box;
  &:hover {
    background: ${({theme}) => theme.palette.secondarybackground};
    color: ${({theme}) => theme.palette.secondaryfont};
  }
  > :last-child {
    margin-left: 10px;
  }
  @media (min-width: 800px) {
    border: 5px solid ${({theme}) => theme.palette.secondarybackground};
    line-height: 20px;
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  @media (min-width: 800px) {
    line-height: 20px;
    font-size: 20px;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  z-index: 300;
  max-height: 60vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  @media (min-width: 800px) {
    line-height: 20px;
    font-size: 20px;
  }
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  border: 5px solid ${({theme}) => theme.palette.secondarybackground};
  background-color: ${({theme}) => theme.palette.background};
  margin-bottom: -5px;
  cursor: pointer;
  color: ${({theme}) => theme.palette.font};
  &:hover {
    background: ${({theme}) => theme.palette.secondarybackground};
    color: ${({theme}) => theme.palette.secondaryfont};
  }
`;

const ButtonDropdown = ({ value, setValue, options, active, ...rest }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const updateCoords = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom, left: rect.left });
    }
  };

  const handleSelect = (value) => {
    setValue(value);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen((prevOpen) => {
      if (!prevOpen) updateCoords();
      return !prevOpen;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    updateCoords();
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords, true);
    return () => {
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords, true);
    };
  }, [open]);

  return (
    <Wrapper ref={wrapperRef}>
      <Button
        ref={buttonRef}
        active={active}
        onClick={toggleOpen}
        {...rest}
      >
        {value}
        <i className="fas fa-angle-down"></i>
      </Button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <Dropdown
            ref={dropdownRef}
            style={{ top: coords.top, left: coords.left }}
          >
            {options.map((o, i) => (
              <DropdownItem
                onClick={() => {
                  handleSelect(o.value);
                }}
                key={i}
              >
                {o.label}
              </DropdownItem>
            ))}
          </Dropdown>,
          document.body
        )}
    </Wrapper>
  );
};

export default ButtonDropdown;
