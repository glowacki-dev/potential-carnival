import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';

class ItemsList extends Component {
  render() {
    if (this.props.items.length === 0) {
      return <div>Empty :(</div>;
    }

    return (
      <div>
        <Typography variant="h6">{this.props.title}</Typography>
        <List>
          {this.props.items.map(item => (
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.description} />
            </ListItem>
          ))}
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
