
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Nồi cơm điện tử Panasonic 1.8L',
      price: 2450000,
      originalPrice: 2890000,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 124,
      badge: 'Bán chạy'
    },
    {
      id: 2,
      name: 'Máy hút bụi Dyson V11 không dây',
      price: 15900000,
      originalPrice: 18500000,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      rating: 4.9,
      reviewCount: 89,
      badge: 'Mới'
    },
    {
      id: 3,
      name: 'Bộ nồi chảo chống dính Tefal 5 món',
      price: 3200000,
      originalPrice: 4100000,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 156,
    },
    {
      id: 4,
      name: 'Lò vi sóng Sharp 25L có nướng',
      price: 3850000,
      originalPrice: 4200000,
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 98,
    },
    {
      id: 5,
      name: 'Máy giặt LG Inverter 9kg',
      price: 8900000,
      originalPrice: 10500000,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 67,
      badge: 'Giảm sốc'
    },
    {
      id: 6,
      name: 'Đèn LED thông minh Xiaomi',
      price: 590000,
      originalPrice: 750000,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      rating: 4.5,
      reviewCount: 203,
    },
    {
      id: 7,
      name: 'Bộ dao làm bếp Zwilling 6 món',
      price: 4200000,
      originalPrice: 5100000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba6fe65?w=400&h=300&fit=crop',
      rating: 4.9,
      reviewCount: 45,
    },
    {
      id: 8,
      name: 'Tủ lạnh Samsung Inverter 236L',
      price: 6850000,
      originalPrice: 7900000,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 132,
      badge: 'Tiết kiệm điện'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Những sản phẩm được yêu thích nhất với chất lượng tốt và giá cả hợp lý
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block bg-gradient-to-r from-blue-500 to-orange-400 hover:from-blue-600 hover:to-orange-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Xem tất cả sản phẩm
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
