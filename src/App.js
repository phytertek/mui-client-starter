import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const style = theme => ({
  title: {
    padding: theme.spacing.unit * 3
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0}>
        <Typography variant="display4" className={classes.title}>
          Hello.
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(style)(App);
