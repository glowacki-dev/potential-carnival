import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import PropTypes from 'prop-types';

class ItemsList extends Component {
  render() {
    return (
      <div>
        <Typography variant="h6">{this.props.title}</Typography>
        <List dense={true}>
          {this.props.items.length > 0 ? (
            this.props.items.map(item => (
              <ListItem key={item}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          ) : (
            <ListItem key="Nothing found">
              <ListItemIcon>
                <SentimentDissatisfiedIcon />
              </ListItemIcon>
              <ListItemText primary="Nothing found" />
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}

ItemsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default ItemsList;
