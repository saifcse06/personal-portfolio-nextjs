export default function TopBar() {
    return (
        <div className="bg-secondary text-light py-1 small fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <span className="me-3"><i className="bi bi-envelope"></i> contact@saif-uddin.com</span>
                    <span><i className="bi bi-telephone"></i> +8801827230806</span>
                </div>
                <div className="d-flex gap-3">
                    <a href="https://www.facebook.com/saif06" className="text-light" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://github.com/saifcse06" className="text-light" target="_blank"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/saifuddin1992/" target="_blank" className="text-light"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}