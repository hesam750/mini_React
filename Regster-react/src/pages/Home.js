import { Link,useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const redirectToPostsPage = () => {
        navigate("/posts")
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-10">
                    <h1 className="mb-4">WebProg.io</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, quaerat incidunt aliquid ipsa laboriosam fugiat voluptatem nam assumenda consectetur! Impedit, ea placeat inventore unde vel corporis quos harum? Ex, provident.</p>
                    <Link to="/posts" className="btn btn-dark">Posts</Link>
                    <button onClick={redirectToPostsPage}>Posts</button>
                </div>
            </div>
        </div>
    )
}

export default Home;