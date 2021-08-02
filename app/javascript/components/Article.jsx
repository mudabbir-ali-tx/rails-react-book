import React from "react";
import { Link } from "react-router-dom";
// import Image from "../images/harry.jpg"
// import Image from "../images/harry.jpg"
class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { article: { comment: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);

    }

    componentDidMount() {

        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = `/api/v1/article/show/${id}`;

        fetch(url)
            .then(response => {

                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ article: response }))
            .catch(() => this.props.history.push("/articles"));
    }

    addHtmlEntities(str) {
        return String(str)
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
    }
    deleteArticle() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const url = `/api/v1/destroy/${id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(() => this.props.history.push("/articles"))
            .catch(error => console.log(error.message));
    }
    render() {
        const { article } = this.state;
        let commentList = "No comment available";

        if (article.comment.length > 0) {
            commentList = article.comment
                .split(",")
                .map((comment, index) => (
                    <li key={index} className="list-group-item">
                        {comment}
                    </li>
                ));
        }
        const articleDescription = this.addHtmlEntities(article.description);



        return (
            <div className="">
                <div className="hero position-relative d-flex align-items-center justify-content-center">
                    <img
                        src={Image}
                        alt={`${article.name} image`}
                        className="img-fluid position-absolute"
                    />
                    <div className="overlay bg-dark position-absolute" />
                    <h1 className="display-4 position-relative text-white">
                        {article.name}
                    </h1>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3">
                            <ul className="list-group">
                                <h5 className="mb-2">Comment</h5>
                                {commentList}
                            </ul>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                            <h5 className="mb-2">Article Description</h5>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `${articleDescription}`
                                }}
                            />
                        </div>
                        <div className="col-sm-12 col-lg-2">
                            <button type="button" className="btn btn-danger" onClick={this.deleteArticle}>
                                Delete Article
                            </button>
                        </div>
                    </div>
                    <Link to="/articles" className="btn btn-link">
                        Back to Articles
                    </Link>
                </div>
            </div>
        );
    }

}

export default Article;


