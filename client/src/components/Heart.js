import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles({
  heart: {
    stroke: red[400],
    strokeWidth: '1px',
    strokeOpacity: 0.7,
    position: 'relative',
    width: '100px',
    transitionProperty: 'fill',
    transitionDuration: '1s',
    opacity: 0.8
  }
});

export default function Heart({ heart: { isLoved } }) {
  const classes = useStyles();

  return (
    <div>
      <svg
        className={classes.heart}
        fill={isLoved ? red[400] : 'rgba(255, 255, 255, 0.25)'}
        viewBox="-1 -1 34 32"
      >
        <path
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
        />
      </svg>
    </div>
  );
}

Heart.propTypes = {
  heart: PropTypes.shape({
    isLoved: PropTypes.bool.isRequired
  })
};
