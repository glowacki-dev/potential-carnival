import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles({
  heart: {
    position: 'relative',
    width: '100px'
  },
  heartPath: {
    strokeWidth: '1px',
    strokeOpacity: 0.5,
    transitionProperty: 'fill fill-opacity',
    transitionDuration: '0.3s',
    fillOpacity: 0.7,
    '&:hover': {
      fill: red[600],
      fillOpacity: 0.4
    }
  }
});

function Heart({ heart: { isLoved } }) {
  const classes = useStyles();

  return (
    <div>
      <svg className={classes.heart} viewBox="-1 -1 34 32">
        <path
          className={classes.heartPath}
          stroke={isLoved ? red[600] : 'rgba(255, 255, 255, 0.65)'}
          fill={isLoved ? red[600] : 'rgba(255, 255, 255, 0.35)'}
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

export default Heart;
