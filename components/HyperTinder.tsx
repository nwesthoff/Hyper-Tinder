import { useEffect, useState, Fragment } from "react";
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
  const [shuffleHash, setShuffleHash] = useState(undefined);

  function shuffle(array: number[]) {
    var currentIndex = array.length,
      temporaryValue: number,
      randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const onSwipe = (direction: string, user: { id?: number; fields: any }) => {
    if (direction === "right") {
      window.location.href = `mailto:${user?.fields?.email}`;
    }
    console.log("You swiped " + user?.fields?.firstName + ": " + direction);
  };

  if (!shuffleHash && users?.length > 0) {
    setShuffleHash(shuffle(users.map((user) => user.id)));
  }

  return (
    <Fragment>
      {shuffleHash &&
        users?.length > 0 &&
        users
          .sort((a, b) => {
            return shuffleHash.indexOf(a.id) - shuffleHash.indexOf(b.id);
          })
          .map((user) => (
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
    </Fragment>
  );
};

export default HyperTinder;
