// import React, { Component } from 'react'

// import { Link } from 'react-router-dom'


// import './Login.css'

// export default class Login extends Component {
//   render() {
//     return (
//       <form>
//         <h3 className="heading">Log in</h3>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <button type="submit" className="btn btn-dark btn-lg ">
//           <Link to="/">Sign-In</Link>
//         </button>
//         <p className="forgot-password">
//           <Link to="/forgetPswd">Forget Password?</Link>
//         </p>
//       </form>
//     )
//   }
// }


import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { Link } from 'react-router-dom'
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 10,
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Password" type="password" fullWidth required />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel control={
                <Checkbox
                  color="primary"
                />
              } label="Remember me" />
            </Grid>
            <Grid item>
              <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary"> <Link to="/forgetPswd">Forget Password?</Link></Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button variant="outlined" color="primary" style={{ textTransform: "none" }}><Link to="/">Login</Link></Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);