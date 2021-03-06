import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/harry.jpg"
class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/books/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ books: response }))
            .catch(() => this.props.history.push("/"));
    }
    render() {
        const { books } = this.state;
        const allBooks = books.map((book, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                    <img
                        src={Image1}
                        className="card-img-top"
                        alt={`${book.name} image`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{book.name}</h5>
                        <Link to={`/book/${book.id}`} className="btn custom-button">
                            View Book
                        </Link>
                    </div>
                </div>
            </div>
        ));
        const noBook = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No books yet. Why not <Link to="/new_book">create one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">Books for your choice</h1>
                        <p className="lead text-muted">
                            We’ve collected  most popular books, our latest
                            additions, and our editor’s picks, so there’s sure to be something
                            tempting for you to try.
                        </p>
                    </div>
                </section>
                <div className="py-5">
                    <main className="container">
                        <div className="text-right mb-3">
                            <Link to="/" className="btn btn-link">
                                Home
                            </Link>
                            <Link to="/book" className="btn custom-button">
                                Create New Book
                            </Link>
                        </div>
                        <div className="row">
                            {books.length > 0 ? allBooks : noBook}
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
export default Books;