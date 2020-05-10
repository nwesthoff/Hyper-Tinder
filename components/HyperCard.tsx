import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Card, CardHeader } from "@material-ui/core";
import { User } from "../interfaces";
import CardModal from "./CardModal";

const StyledCard = styled(Card)`
  position: relative;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 100%;
  height: 100vh;
  max-height: 500px;
  position: relative;
`;

const StyledCardHeader = styled(CardHeader)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  color: white;

  span {
    color: white;
  }
`;

const StyledImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: center center;
`;

interface Props {
  user?: User;
}

const HyperCard: React.FunctionComponent<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startXY, setStartXY] = useState([0, 0]);

  const upHandler = () => {
    if (!dragging) {
      setOpen(true);
    }
    setDragging(false);
  };

  return (
    <StyledCard>
      <StyledImageContainer
        onMouseDown={(e) => {
          setDragging(false);
          setStartXY([e.clientX, e.clientY]);
        }}
        onMouseMove={(e) => {
          if (
            Math.abs(e.clientX - startXY[0]) > 10 ||
            Math.abs(e.clientY - startXY[1]) > 10
          )
            setDragging(true);
        }}
        onMouseUp={upHandler}
        onTouchMove={() => setDragging(true)}
        onTouchEnd={upHandler}
        src={user?.fields?.images?.[0]?.thumbnails.large.url}
      />
      <StyledCardHeader
        onClick={() => setOpen(true)}
        title={`${user?.fields?.firstName} ${user?.fields?.lastName}`}
        subheader={
          user?.fields?.masterProgramme === "DM"
            ? "Digital Management"
            : user?.fields?.masterProgramme === "DXD"
            ? "Digital Experience Design"
            : "undefined"
        }
      />

      <CardModal user={user} open={open} handleClose={() => setOpen(false)} />
    </StyledCard>
  );
};

export default HyperCard;
