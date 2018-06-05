import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ImageAvatars from './Avatar';


//Icons
import MessageIcon from '@material-ui/icons/MailOutline';
import AccountIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import CTAIcon from '@material-ui/icons/RecordVoiceOver';
import DashboardIcon from '@material-ui/icons/Dashboard';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});

class MenuList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div">
                <ImageAvatars />
            </ListSubheader>
          }
        >
          <Divider />
          <ListItem button>
            <ListItemIcon><DashboardIcon/></ListItemIcon>
            <ListItemText inset primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemIcon><CTAIcon/></ListItemIcon>
            <ListItemText inset primary="Calls to Action" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={4} color="primary">
                <MessageIcon/>
              </Badge>
              </ListItemIcon>
            <ListItemText inset primary="Messages" />
          </ListItem>

          <ListItem button>
            <ListItemIcon><AccountIcon /></ListItemIcon>
            <ListItemText inset primary="Profile" />
          </ListItem>

          <ListItem button>
            <ListItemIcon><HelpIcon/></ListItemIcon>
            <ListItemText inset primary="Help" />
          </ListItem>

        </List>
      </div>
    );
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);
