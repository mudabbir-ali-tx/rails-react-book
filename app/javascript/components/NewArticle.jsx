import React from 'react'
import { Link } from 'react-router-dom'

class NewArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            comment: "",
            description: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/articles/create";
        const { name, comment, description } = this.state;

        if (name.length == 0 || comment.length == 0 || description.length == 0)
            return;

        const body = {
            name,
            comment,
            description: description.replace(/\n/g, "<br> <br>")
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.props.history.push(`/article/${response.id}`))
            .catch(error => console.log(error.message));
    }
    render() {
        return (
            <div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 offset-lg-3">
                            <h1 className="font-weight-normal mb-5">
                                Add a new article to our collection.
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="articleName">Article name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="articleName"
                                        className="form-control"
                                        required
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="articleAuhtors">Comment</label>
                                    <input
                                        type="text"
                                        name="comment"
                                        id="articleComments"
                                        className="form-control"
                                        required
                                        onChange={this.onChange}
                                    />
                                    <small id="CommentsHelp" className="form-text text-muted">

                                    </small>
                                </div>
                                <label htmlFor="description">Article Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows="5"
                                    required
                                    onChange={this.onChange}
                                />
                                <button type="submit" className="btn custom-button mt-3">
                                    Create Article
                                </button>
                                <Link to="/articles" className="btn btn-link mt-3">
                                    Back to Articles
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        );
    }

}

export default NewArticle;