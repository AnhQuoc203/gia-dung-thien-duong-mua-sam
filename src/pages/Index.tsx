
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import PromotionBanner from '../components/PromotionBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="container mx-auto px-4 py-8">
          <Banner />
        </section>

        {/* Category Grid */}
        <CategoryGrid />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Promotion Banner */}
        <PromotionBanner />

        {/* Newsletter & Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Tại sao chọn chúng tôi?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Chất lượng đảm bảo</h3>
                      <p className="text-gray-600">Tất cả sản phẩm được kiểm tra chất lượng nghiêm ngặt trước khi đến tay khách hàng</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Giá cả hợp lý</h3>
                      <p className="text-gray-600">Cam kết giá tốt nhất thị trường với nhiều chương trình khuyến mãi hấp dẫn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Giao hàng nhanh</h3>
                      <p className="text-gray-600">Giao hàng nhanh chóng trong 1-2 ngày với đội ngũ vận chuyển chuyên nghiệp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Đăng ký nhận tin khuyến mãi
                </h3>
                <p className="text-gray-600 mb-6">
                  Nhận thông tin về các chương trình ưu đãi, sản phẩm mới và tips hữu ích cho gia đình bạn
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-500 to-orange-400 hover:from-blue-600 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Đăng ký ngay
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Bằng việc đăng ký, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật của chúng tôi
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
