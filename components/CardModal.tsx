import * as React from "react";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  CardActions,
  Button,
  IconButton,
  DialogTitle,
  Dialog,
  Grid,
  CardContent,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { User } from "../interfaces";
import { Carousel } from "react-responsive-carousel";

const QuoteBy = styled(Typography)`
  font-style: normal;
  text-align: end;
  display: block;
  font-size: 1.2rem;
  color: black;

  &:before {
    content: "— ";
  }
`;

const StyledQuote = styled.blockquote`
  font-style: italic;
  font-size: 2rem;
  line-height: 1.3em;
  color: #ff7854;

  &:before {
    content: "“";
  }

  &:after {
    content: "”";
  }

  @media (max-width: 420px) {
    font-size: 1.6rem;
    margin: 2rem 1.2rem;
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
  open?: boolean;
  handleClose: VoidFunction;
}

const CardModal: React.FunctionComponent<Props> = ({
  user,
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            {user?.fields?.firstName + " " + user?.fields?.lastName}
          </Grid>
          <Grid>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>

      {user?.fields?.images?.length > 1 ? (
        <Carousel
          showArrows={true}
          showThumbs={false}
          swipeable={true}
          showStatus={false}
        >
          {user?.fields?.images?.map((image) => (
            <StyledImageContainer
              key={image.id}
              src={image.thumbnails.large.url}
            />
          ))}
        </Carousel>
      ) : user?.fields?.images?.length > 0 ? (
        <StyledImageContainer
          key={user?.fields?.images[0].id}
          src={user?.fields?.images[0].thumbnails.large.url}
        />
      ) : null}

      <List dense>
        {user?.fields?.bio ? (
          <ListItem dense={false}>
            <ListItemText primary="Bio" secondary={user?.fields?.bio} />
          </ListItem>
        ) : null}
        {user?.fields?.interestedIn ? (
          <ListItem>
            <ListItemText
              primary="I am interested in..."
              secondary={user?.fields?.interestedIn}
            />
          </ListItem>
        ) : null}
        {user?.fields?.companyPosition ? (
          <ListItem>
            <ListItemText
              primary="I want to be a..."
              secondary={user?.fields?.companyPosition}
            />
          </ListItem>
        ) : null}
        {user?.fields?.researchThis ? (
          <ListItem>
            <ListItemText
              primary="I want to research..."
              secondary={user?.fields?.researchThis}
            />
          </ListItem>
        ) : null}
      </List>

      <CardContent>
        {user?.fields?.peersSayText && user.fields.peersSayPerson ? (
          <div>
            <StyledQuote>{user?.fields?.peersSayText}</StyledQuote>
            <QuoteBy variant="body1">{user.fields.peersSayPerson}</QuoteBy>
          </div>
        ) : null}
      </CardContent>

      <CardActions>
        {user?.fields?.urlLinkedin ? (
          <Button href={`${user?.fields?.urlLinkedin}`} target="blank">
            LinkedIn
          </Button>
        ) : null}
        {user?.fields?.urlPortfolio ? (
          <Button href={`${user?.fields?.urlPortfolio}`} target="blank">
            Portfolio
          </Button>
        ) : null}
      </CardActions>
    </Dialog>
  );
};

export default CardModal;
