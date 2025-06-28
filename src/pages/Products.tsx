
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allProducts = [
    // Đồ nhà bếp
    {
      id: 1,
      name: 'Nồi cơm điện tử Panasonic 1.8L',
      price: 2450000,
      originalPrice: 2890000,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 124,
      badge: 'Bán chạy',
      category: 'kitchen'
    },
    {
      id: 2,
      name: 'Bộ nồi chảo chống dính Tefal 5 món',
      price: 3200000,
      originalPrice: 4100000,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      category: 'kitchen'
    },
    {
      id: 3,
      name: 'Lò vi sóng Sharp 25L có nướng',
      price: 3850000,
      originalPrice: 4200000,
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 98,
      category: 'kitchen'
    },
    {
      id: 4,
      name: 'Bộ dao làm bếp Zwilling 6 món',
      price: 4200000,
      originalPrice: 5100000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba6fe65?w=400&h=300&fit=crop',
      rating: 4.9,
      reviewCount: 45,
      category: 'kitchen'
    },
    {
      id: 5,
      name: 'Máy xay sinh tố Philips 1000W',
      price: 1850000,
      originalPrice: 2200000,
      image: 'https://images.unsplash.com/photo-1610736020348-5e0e4dd85d23?w=400&h=300&fit=crop',
      rating: 4.5,
      reviewCount: 87,
      category: 'kitchen'
    },

    // Thiết bị điện
    {
      id: 6,
      name: 'Máy hút bụi Dyson V11 không dây',
      price: 15900000,
      originalPrice: 18500000,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      rating: 4.9,
      reviewCount: 89,
      badge: 'Mới',
      category: 'electronics'
    },
    {
      id: 7,
      name: 'Máy giặt LG Inverter 9kg',
      price: 8900000,
      originalPrice: 10500000,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 67,
      badge: 'Giảm sốc',
      category: 'electronics'
    },
    {
      id: 8,
      name: 'Tủ lạnh Samsung Inverter 236L',
      price: 6850000,
      originalPrice: 7900000,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 132,
      badge: 'Tiết kiệm điện',
      category: 'electronics'
    },
    {
      id: 9,
      name: 'Quạt điều hòa Midea 45L',
      price: 3200000,
      originalPrice: 3800000,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      rating: 4.4,
      reviewCount: 76,
      category: 'electronics'
    },
    {
      id: 10,
      name: 'Máy sấy tóc Panasonic ion âm',
      price: 950000,
      originalPrice: 1200000,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 94,
      category: 'electronics'
    },

    // Vệ sinh - Làm sạch
    {
      id: 11,
      name: 'Bộ dụng cụ lau nhà Vileda Premium',
      price: 450000,
      originalPrice: 600000,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
      rating: 4.3,
      reviewCount: 112,
      category: 'cleaning'
    },
    {
      id: 12,
      name: 'Máy hút bụi cầm tay Black+Decker',
      price: 890000,
      originalPrice: 1100000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      rating: 4.2,
      reviewCount: 68,
      category: 'cleaning'
    },
    {
      id: 13,
      name: 'Bộ chổi quét và xẻng rác cao cấp',
      price: 280000,
      originalPrice: 350000,
      image: 'https://images.unsplash.com/photo-1580062012454-b7e5d0637d14?w=400&h=300&fit=crop',
      rating: 4.1,
      reviewCount: 45,
      category: 'cleaning'
    },
    {
      id: 14,
      name: 'Máy lau sàn hơi nước Karcher SC2',
      price: 2650000,
      originalPrice: 3200000,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 38,
      badge: 'Hiệu quả',
      category: 'cleaning'
    },

    // Đèn - Chiếu sáng
    {
      id: 15,
      name: 'Đèn LED thông minh Xiaomi',
      price: 590000,
      originalPrice: 750000,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      rating: 4.5,
      reviewCount: 203,
      category: 'lighting'
    },
    {
      id: 16,
      name: 'Đèn bàn học LED chống cận Comet',
      price: 850000,
      originalPrice: 1050000,
      image: 'https://images.unsplash.com/photo-1544371582-0481fd17f9ad?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 127,
      category: 'lighting'
    },
    {
      id: 17,
      name: 'Đèn chùm pha lê cao cấp 6 cánh',
      price: 3200000,
      originalPrice: 4500000,
      image: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 56,
      badge: 'Sang trọng',
      category: 'lighting'
    },
    {
      id: 18,
      name: 'Đèn LED dây trang trí 10m',
      price: 320000,
      originalPrice: 420000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      rating: 4.4,
      reviewCount: 89,
      category: 'lighting'
    },

    // Nội thất nhỏ
    {
      id: 19,
      name: 'Kệ sách gỗ 5 tầng IBIE',
      price: 1450000,
      originalPrice: 1800000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      rating: 4.3,
      reviewCount: 74,
      category: 'furniture'
    },
    {
      id: 20,
      name: 'Tủ giày 6 ngăn thông minh',
      price: 950000,
      originalPrice: 1200000,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
      rating: 4.2,
      reviewCount: 92,
      category: 'furniture'
    },
    {
      id: 21,
      name: 'Bàn làm việc gỗ có ngăn kéo',
      price: 2100000,
      originalPrice: 2600000,
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop',
      rating: 4.5,
      reviewCount: 65,
      category: 'furniture'
    },
    {
      id: 22,
      name: 'Ghế xoay văn phòng có tựa lưng',
      price: 1650000,
      originalPrice: 2000000,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop',
      rating: 4.4,
      reviewCount: 108,
      category: 'furniture'
    },

    // Dụng cụ sửa chữa
    {
      id: 23,
      name: 'Bộ dụng cụ sửa chữa 108 món',
      price: 890000,
      originalPrice: 1200000,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 143,
      badge: 'Đầy đủ',
      category: 'tools'
    },
    {
      id: 24,
      name: 'Máy khoan pin Bosch 18V',
      price: 2350000,
      originalPrice: 2800000,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 87,
      category: 'tools'
    },
    {
      id: 25,
      name: 'Thang nhôm gấp 4 bậc an toàn',
      price: 1200000,
      originalPrice: 1500000,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      rating: 4.3,
      reviewCount: 56,
      category: 'tools'
    },
    {
      id: 26,
      name: 'Bộ tuốc nơ vít đa năng 32 món',
      price: 450000,
      originalPrice: 600000,
      image: 'https://images.unsplash.com/photo-1609205251770-48b18d3c48b9?w=400&h=300&fit=crop',
      rating: 4.5,
      reviewCount: 94,
      category: 'tools'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'kitchen', name: 'Đồ nhà bếp' },
    { id: 'electronics', name: 'Thiết bị điện' },
    { id: 'cleaning', name: 'Vệ sinh - Làm sạch' },
    { id: 'lighting', name: 'Đèn - Chiếu sáng' },
    { id: 'furniture', name: 'Nội thất nhỏ' },
    { id: 'tools', name: 'Dụng cụ sửa chữa' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Tất cả sản phẩm</h1>
          
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Products Count */}
          <div className="mt-8 text-center text-gray-600">
            Hiển thị {filteredProducts.length} sản phẩm
            {selectedCategory !== 'all' && (
              <span> trong danh mục "{categories.find(c => c.id === selectedCategory)?.name}"</span>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
