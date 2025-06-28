
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Tất cả sản phẩm</h1>
          <p className="text-gray-600">Trang sản phẩm đang được phát triển...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
