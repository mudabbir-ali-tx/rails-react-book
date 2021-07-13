
import React from "react";
import { Link } from "react-router-dom";


export default () => (

    <>

        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent" >
                <div className="container secondary-color">
                    <h1 className="display-4">Books & Articles</h1>
                    <p className="lead">
                        A book is a medium for recording information in the form of writing or images, typically composed of many pages. The technical term for this physical arrangement is codex. In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.


                    </p>
                    <hr className="my-4" />
                    <Link
                        to="/books"
                        className="btn btn-lg custom-button"
                        role="button"
                    >
                        View Books
                    </Link>
                    <div>
                        <br />
                        <p className="lead">
                            An article is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order,

                        </p>
                        <hr className="my-4" />
                        <Link
                            to="/articles"
                            className="btn btn-lg custom-button"
                            role="button"
                        >
                            View Articles
                        </Link>


                    </div>


                </div>

            </div>
        </div>


    </>
);


