import * as React from "react"
import styled from "styled-components"
import {
  Card,
  List,
  ListItem,
  ListItemText,
  CardHeader,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core"
import { User } from "../interfaces"

const StyledCard = styled(Card)`
  position: relative;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 100%;
`

const StyledImageContainer = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: center center;
`

interface Props {
  user?: User
}

const HyperCard: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <StyledCard>
      <CardHeader
        title={`${user?.fields?.firstName} ${user?.fields?.lastName}`}
        subheader={
          user?.fields?.masterProgramme === "DM"
            ? "Digital Management"
            : user?.fields?.masterProgramme === "DXD"
            ? "Digital Experience Design"
            : "undefined"
        }
      />
      <CardMedia>
        <StyledImageContainer
          src={user?.fields?.images?.[0]?.thumbnails.large.url}
        />
      </CardMedia>

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
              primary="Iwant to be a..."
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
    </StyledCard>
  )
}

export default HyperCard
