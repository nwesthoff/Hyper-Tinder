import * as React from "react";
import TinderCard from "react-tinder-card";
import HyperCard from "./HyperCard";
import { User } from "../interfaces";
import styled from "styled-components";

const StyledTinderCard = styled(TinderCard)`
  position: absolute;
  cursor: pointer;
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
            key={user.id}
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
