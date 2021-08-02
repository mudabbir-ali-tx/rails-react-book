import React from "react";
import { Link } from "react-router-dom";
// import Image from "../images/harry.jpg"
import Image from "../images/harry.jpg"
class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = { book: { author: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
        this.deleteBook = this.deleteBook.bind(this);

    }

    componentDidMount() {

        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = `/api/v1/show/${id}`;

        fetch(url)
            .then(response => {

                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ book: response }))
            .catch(() => this.props.history.push("/books"));
    }

    addHtmlEntities(str) {
        return String(str)
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
    }
    deleteBook() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const url = `/api/v1/book/destroy/${id}`;
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
            .then(() => this.props.history.push("/books"))
            .catch(error => console.log(error.message));
    }
    render() {
        const { book } = this.state;
        let authorList = "No author available";

        if (book.author.length > 0) {
            authorList = book.author
                .split(",")
                .map((author, index) => (
                    <li key={index} className="list-group-item">
                        {author}
                    </li>
                ));
        }
        const bookDescription = this.addHtmlEntities(book.description);



        return (
            <div className="">
                <div className="hero position-relative d-flex align-items-center justify-content-center">
                    <img
                        src={Image}
                        alt={`${book.name} image`}
                        className="img-fluid position-absolute"
                    />
                    <div className="overlay bg-dark position-absolute" />
                    <h1 className="display-4 position-relative text-white">
                        {book.name}
                    </h1>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3">
                            <ul className="list-group">
                                <h5 className="mb-2">Author</h5>
                                {authorList}
                            </ul>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                            <h5 className="mb-2">Book Description</h5>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `${bookDescription}`
                                }}
                            />
                        </div>
                        <div className="col-sm-12 col-lg-2">
                            <button type="button" className="btn btn-danger" onClick={this.deleteBook}>
                                Delete Book
                            </button>
                        </div>
                    </div>
                    <Link to="/books" className="btn btn-link">
                        Back to Books
                    </Link>
                </div>
            </div>
        );
    }

}

export default Book;


