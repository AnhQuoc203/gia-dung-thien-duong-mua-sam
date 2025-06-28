
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Đồ nhà bếp',
      description: 'Nồi, chảo, lò vi sóng',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
      productCount: 150,
      link: '/products?category=kitchen'
    },
    {
      id: 2,
      name: 'Thiết bị điện',
      description: 'Máy hút bụi, máy giặt',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
      productCount: 89,
      link: '/products?category=electronics'
    },
    {
      id: 3,
      name: 'Vệ sinh - Làm sạch',
      description: 'Dụng cụ vệ sinh nhà cửa',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop',
      productCount: 67,
      link: '/products?category=cleaning'
    },
    {
      id: 4,
      name: 'Đèn - Chiếu sáng',
      description: 'Đèn LED, đèn trang trí',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      productCount: 43,
      link: '/products?category=lighting'
    },
    {
      id: 5,
      name: 'Nội thất nhỏ',
      description: 'Kệ, tủ, bàn ghế',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
      productCount: 92,
      link: '/products?category=furniture'
    },
    {
      id: 6,
      name: 'Dụng cụ sửa chữa',
      description: 'Bộ dụng cụ, máy khoan',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=300&h=200&fit=crop',
      productCount: 35,
      link: '/products?category=tools'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Danh Mục Sản Phẩm
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá các danh mục đồ gia dụng đa dạng với hàng nghìn sản phẩm chất lượng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category.productCount} sản phẩm
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-blue-500 font-medium">
                  <span className="text-sm">Xem tất cả</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
