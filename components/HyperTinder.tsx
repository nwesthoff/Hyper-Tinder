import * as React from "react";
import TinderCard from "react-tinder-card";
import HyperCard from "./HyperCard";
import { User } from "../interfaces";
import styled from "styled-components";

const StyledTinderCard = styled(TinderCard)`
  position: absolute;
  cursor: grab;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transform: rotate(
      ${(props: { rotate: string; translateX: string; translateY: string }) =>
        props.rotate}deg
    )
    translate(${(props) => props.translateX + "px, " + props.translateY}px);
`;

type Props = {
  users?: User[];
};

const HyperTinder = ({ users }: Props) => {
  const onSwipe = (direction, user) => {
    if (direction === "right") {
      window.location.href = `mailto:${user?.fields?.email}`;
    }
    console.log("You swiped " + user?.fields?.firstName + ": " + direction);
  };

  return (
    <React.Fragment>
      {users?.length > 0 &&
        users.map((user) => (
          <StyledTinderCard
            rotate={(Math.random() * 5 - 2.5).toFixed(0)}
            translateX={(Math.random() * 20 - 10).toFixed(0)}
            translateY={(Math.random() * 20 - 10).toFixed(0)}
            key={user.id}
            onCardLeftScreen={() => {}}
            onSwipe={(dir) => onSwipe(dir, user)}
            preventSwipe={["up", "down"]}
          >
            <HyperCard user={user} />
          </StyledTinderCard>
        ))}
    </React.Fragment>
  );
};

export default HyperTinder;
