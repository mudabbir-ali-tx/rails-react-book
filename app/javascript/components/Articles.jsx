import React from "react";
import { Link } from "react-router-dom";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/articles/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ articles: response }))
            .catch(() => this.props.history.push("/"));
    }
    render() {
        const { articles } = this.state;
        const allArticles = articles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">

                    <div className="card-body">
                        <h5 className="card-title">{article.name}</h5>

                        <Link to={`/article/${article.id}`} className="btn custom-button">
                            View Article
                        </Link>
                    </div>
                </div>
            </div>
        ));
        const noArticle = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No articles yet. Why not <Link to="/new_article">create one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center" style={{ backgroundColor: 'white;' }}>
                    <div className="container py-5">
                        <h1 className="display-4">Post your favourite Article</h1>
                        <p className="lead text-muted">

                        </p>
                    </div>
                </section>
                <div className="py-5">
                    <main className="container">
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                        <div className="text-right mb-3">
                            <Link to="/article" className="btn custom-button">
                                Create New Article
                            </Link>
                        </div>
                        <div className="row">
                            {articles.length > 0 ? allArticles : noArticle}
                        </div>
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                    </main>
                </div>
            </>
        );
    }
}
export default Articles;