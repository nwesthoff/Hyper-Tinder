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
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { User } from "../interfaces";
import { Carousel } from "react-responsive-carousel";

const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-content: center;
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
    <Dialog open={open} disableBackdropClick>
      <StyledDialogTitle>
        {user?.fields?.firstName + " " + user?.fields?.lastName}
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>

      {user?.fields?.images?.length > 0 ? (
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
      ) : null}

      <List dense>
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
