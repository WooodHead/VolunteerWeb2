import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '2px',
    paddingBottom: '2px'
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    marginRight: '0.7rem'
  },
  ngoName: {
    fontSize: '1rem',
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ueGf3wRHhBTcxl8wkLVTo_O8ehfJcT-ZlK7o__jHd_Q0i30_" className={classes.avatar} />
      <p className={classes.ngoName}>Greenpeace</p>
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
