import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUp() {
  const classes = useStyles()
  const history = useHistory();
  function handleClick() {
    history.push("/login");
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={handleClick} variant="body2">
                Already have an account? Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  )
}

// import React, { Component } from 'react'
// import './SignUp.css'
// export default class SignUp extends Component {
//   state = {
//     username: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//   }
//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }
//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.signUp(this.state)
//   }
//   render() {
//     return (
//       <form class="sign" onSubmit={this.handleSubmit}>
//         <h1>Sign Up Form</h1>
//         <label>Username:</label>
//         <input
//           name="username"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <label>Password:</label>
//         <input
//           name="password"
//           type="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//         />
//         <label>First Name:</label>
//         <input
//           name="firstName"
//           value={this.state.firstName}
//           onChange={this.handleChange}
//         />
//         <label>Last Name:</label>
//         <input
//           name="lastName"
//           value={this.state.lastName}
//           onChange={this.handleChange}
//         />
//         <input type="submit" value="Register" />
//       </form>
//     )
//   }
// }
