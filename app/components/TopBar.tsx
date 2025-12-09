export default function TopBar() {
    return (
    <div className="bg-dark text-light py-1 small fixed-top">
    <div className="container d-flex justify-content-between align-items-center">
    <div>
    <span className="me-3"><i className="bi bi-envelope"></i> saif@example.com</span>
    <span><i className="bi bi-telephone"></i> +880 1234-567890</span>
    </div>
    
    
    <div className="d-flex gap-3">
    <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
    <a href="#" className="text-light"><i className="bi bi-github"></i></a>
    <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
    </div>
    </div>
    </div>
    );
    }