// // import React, { Component } from 'react'
// // import { Link } from 'react-router-dom'
// // import './SignUp.css'

// // export default class SignUp extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.state = { user: { username: '' } }

// //     this.addHtmlEntities = this.addHtmlEntities.bind(this)
// //     this.deleteUser = this.deleteUser.bind(this)
// //   }

// //   componentDidMount() {
// //     const {
// //       match: {
// //         params: { id },
// //       },
// //     } = this.props

// //     const url = `/api/v1/users/show/${id}`

// //     fetch(url)
// //       .then((response) => {
// //         if (response.ok) {
// //           return response.json()
// //         }
// //         throw new Error('Network response was not ok.')
// //       })
// //       .then((response) => this.setState({ user: response }))
// //       .catch(() => this.props.history.push('/users'))
// //   }

// //   addHtmlEntities(str) {
// //     return String(str).replace(/&lt;/g, '<').replace(/&gt;/g, '>')
// //   }

// //   render() {}
// //   // const userEmail = this.addHtmlEntities(user.email);
// //   render() {
// //     return (
// //       <div className="signofom">
// //         <form>
// //           <h3>Register</h3>

// //           <div className="form-group">
// //             <label>First name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="First name"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Last name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Last name"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               placeholder="Enter email"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               placeholder="Enter password"
// //             />
// //           </div>

// //           <button type="submit" className="btn btn-dark btn-lg ">
// //             <Link to="/">Register</Link>
// //           </button>
// //           <p className="forgot-password">
// //             Already Registered <Link to="/login">log in?</Link>
// //           </p>
// //         </form>
// //       </div>
// //     )
// //   }
// // }

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import '../components/SignUp.css'
// export default class SignUp extends Component {
//   signUp = (user) => {
//     fetch('api/v1/users', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         user: {
//           usrname: user.username,
//           password_disgest: user.password,
//           first_name: user.firstName,
//           last_name: user.lastName,
//         },
//       }),
//     })
//       .then((response) => response.json())
//       .then((user) => this.setState({ user }))
//   }

//   state = {
//     username: '',
//     password: '',
//     email: '',
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
//       <form className="kuch" onSubmit={this.handleSubmit}>
//         <h1>Sign Up Form</h1>
//         <label>Username:</label>
//         <input
//           name="username"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />

//         <label>Email:</label>
//         <input
//           name="email"
//           type="email"
//           value={this.state.firstName}
//           onChange={this.handleChange}
//         />
//         <label>Password:</label>
//         <input
//           name="password"
//           type="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//         />

//         <button type="submit" className="btn btn-dark  ">
//           <Link to="/">Register</Link>
//         </button>
//         <p className="forgot-password">
//           Already Registered <Link to="/login">log in?</Link>
//         </p>
//       </form>
//     )
//   }
// }

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
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
