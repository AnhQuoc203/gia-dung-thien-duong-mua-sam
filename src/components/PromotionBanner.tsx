
import React, { useState, useEffect } from 'react';
import { Clock, Zap, Gift } from 'lucide-react';

const PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promotions = [
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Flash Sale",
      description: "Giảm đến 70% các sản phẩm hot",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Gift className="text-green-400" size={24} />,
      title: "Mua 2 Tặng 1",
      description: "Áp dụng cho đồ nhà bếp",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="text-blue-400" size={24} />,
      title: "Miễn phí ship",
      description: "Đơn hàng từ 500K",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Flash Sale Countdown */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            ⚡ FLASH SALE ĐANG DIỄN RA
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ưu Đãi & Khuyến Mãi Khủng
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Đừng bỏ lỡ cơ hội sở hữu những sản phẩm yêu thích với giá tốt nhất
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-300">Thời gian còn lại</p>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-300">Giờ</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-300">Phút</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-300">Giây</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${promo.color} rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
            >
              <div className="flex justify-center mb-4">
                {promo.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
              <p className="text-white text-opacity-90">{promo.description}</p>
              <button className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/promotions"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Khám phá tất cả ưu đãi
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
