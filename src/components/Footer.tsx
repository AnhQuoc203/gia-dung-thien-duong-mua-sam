
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GD</span>
              </div>
              <span className="font-bold text-lg">Gia Dụng Thiên Đường</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Cửa hàng đồ gia dụng uy tín với hơn 10 năm kinh nghiệm, 
              cung cấp các sản phẩm chất lượng cao với giá cả hợp lý.
            </p>
            <div className="text-sm text-gray-300">
              <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
              <p>📞 0123 456 789</p>
              <p>✉️ info@giadungthienduong.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Sản phẩm</Link></li>
              <li><Link to="/promotions" className="text-gray-300 hover:text-white transition-colors">Ưu đãi</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Giới thiệu</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Hướng dẫn mua hàng</Link></li>
              <li><Link to="/warranty" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo hành</Link></li>
              <li><Link to="/return-policy" className="text-gray-300 hover:text-white transition-colors">Đổi trả hàng</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo mật</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nhận tin khuyến mãi</h3>
            <p className="text-gray-300 text-sm mb-4">
              Đăng ký để nhận thông tin về các chương trình ưu đãi mới nhất
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-3 py-2 text-sm text-gray-800 bg-white rounded-l-lg focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg transition-colors">
                Đăng ký
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Zalo</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Gia Dụng Thiên Đường. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
