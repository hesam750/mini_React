import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-3">
                    <span className="text-danger">اوووه!</span> صفحه مورد نظر پیدا نشد.
                </p>
                <p className="lead">
                    ممکنه آدرس اشتباه وارد شده باشه یا صفحه حذف شده باشه.
                </p>
                <a href="/" className="btn btn-primary">
                    بازگشت به خانه
                </a>
            </div>
        </div>
    );
};

export default NotFound;
