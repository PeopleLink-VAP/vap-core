
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-navy">404</h1>
        <p className="text-xl text-gray-600 mb-4">Trang không tìm thấy</p>
        <p className="text-gray-500 mb-6">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link to="/" className="btn-primary inline-block px-6 py-2 rounded-md transition-all hover:scale-105">
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
