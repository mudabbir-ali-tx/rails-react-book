// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import './SignUp.css'

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { user: { username: '' } }

//     this.addHtmlEntities = this.addHtmlEntities.bind(this)
//     this.deleteUser = this.deleteUser.bind(this)
//   }

//   componentDidMount() {
//     const {
//       match: {
//         params: { id },
//       },
//     } = this.props

//     const url = `/api/v1/users/show/${id}`

//     fetch(url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json()
//         }
//         throw new Error('Network response was not ok.')
//       })
//       .then((response) => this.setState({ user: response }))
//       .catch(() => this.props.history.push('/users'))
//   }

//   addHtmlEntities(str) {
//     return String(str).replace(/&lt;/g, '<').replace(/&gt;/g, '>')
//   }

//   render() {}
//   // const userEmail = this.addHtmlEntities(user.email);
//   render() {
//     return (
//       <div className="signofom">
//         <form>
//           <h3>Register</h3>

//           <div className="form-group">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//             />
//           </div>

//           <div className="form-group">
//             <label>Last name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last name"
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//             />
//           </div>

//           <button type="submit" className="btn btn-dark btn-lg ">
//             <Link to="/">Register</Link>
//           </button>
//           <p className="forgot-password">
//             Already Registered <Link to="/login">log in?</Link>
//           </p>
//         </form>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/SignUp.css'
export default class SignUp extends Component {
  signUp = (user) => {
    fetch('api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          usrname: user.username,
          password_disgest: user.password,
          first_name: user.firstName,
          last_name: user.lastName,
        },
      }),
    })
      .then((response) => response.json())
      .then((user) => this.setState({ user }))
  }

  state = {
    username: '',
    password: '',
    email: '',
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state)
  }
  render() {
    return (
      <form className="kuch" onSubmit={this.handleSubmit}>
        <h1>Sign Up Form</h1>
        <label>Username:</label>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type="submit" className="btn btn-dark  ">
          <Link to="/">Register</Link>
        </button>
        <p className="forgot-password">
          Already Registered <Link to="/login">log in?</Link>
        </p>
      </form>
    )
  }
}
