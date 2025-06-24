import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Phone,
  WashingMachine,
  Refrigerator,
  Coffee,
  ChefHat,
  Quote
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Home: React.FC = () => {
  const services = [
    {
      icon: WashingMachine,
      title: 'Ремонт стиральных машин',
      description: 'Профессиональный ремонт всех моделей стиральных машин Bosch',
      link: '/remont-stiralnyh-mashin-bosch',
      image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Refrigerator,
      title: 'Ремонт сушильных машин',
      description: 'Диагностика и ремонт сушильных машин любой сложности',
      link: '/remont-sushilnyh-mashin-bosch',
      image: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Coffee,
      title: 'Ремонт кофемашин',
      description: 'Чистка, декальцинация и ремонт кофемашин Bosch',
      link: '/remont-kofemashin-bosch',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: ChefHat,
      title: 'Ремонт посудомоечных машин',
      description: 'Устранение неисправностей посудомоечных машин любой сложности',
      link: '/remont-posudomoechnyh-mashin-bosch',
      image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Авторизованный сервис',
      description: 'Официальный партнер Bosch с сертифицированными мастерами'
    },
    {
      icon: Wrench,
      title: 'Оригинальные запчасти',
      description: 'Используем только оригинальные запчасти от производителя'
    },
    {
      icon: Clock,
      title: 'Быстрый ремонт',
      description: 'Выезд мастера в день обращения, ремонт в кратчайшие сроки'
    },
    {
      icon: Star,
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды выполненных работ'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличный сервис! Стиральная машина сломалась в самый неподходящий момент. Мастер приехал в тот же день, быстро определил проблему и починил. Работает как новая!',
      date: '15 декабря 2024'
    },
    {
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Ремонтировали кофемашину Bosch. Мастер очень профессиональный, объяснил что было не так, заменил детали. Теперь кофе снова вкусный! Рекомендую.',
      date: '8 декабря 2024'
    },
    {
      name: 'Елена Козлова',
      rating: 5,
      text: 'Посудомоечная машина перестала сливать воду. Обратились в этот сервис - все сделали быстро и качественно. Цены адекватные, гарантия на работу.',
      date: '2 декабря 2024'
    },
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличный сервис! Стиральная машина сломалась в самый неподходящий момент. Мастер приехал в тот же день, быстро определил проблему и починил. Работает как новая!',
      date: '15 декабря 2024'
    },
    {
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Ремонтировали кофемашину Bosch. Мастер очень профессиональный, объяснил что было не так, заменил детали. Теперь кофе снова вкусный! Рекомендую.',
      date: '8 декабря 2024'
    },
    {
      name: 'Елена Козлова',
      rating: 5,
      text: 'Посудомоечная машина перестала сливать воду. Обратились в этот сервис - все сделали быстро и качественно. Цены адекватные, гарантия на работу.',
      date: '2 декабря 2024'
    }
  ];

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Сервисный центр <span className="text-red-600">Bosch</span> в Сочи
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный ремонт бытовой техники Bosch с использованием оригинальных запчастей. 
                Более 10 лет на рынке, тысячи довольных клиентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacts"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                >
                  Заказать ремонт
                </Link>
                <a
                  href="tel:+78625550123"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +7 (862) 555-0123
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img
                  src="images/bosch-items.png"
                  alt="Ремонт техники Bosch"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 font-medium">Выезд мастера бесплатно</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 font-medium">Диагностика за 30 минут</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 font-medium">Гарантия до 2 лет</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию бытовой техники Bosch
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollAnimation 
                  key={index}
                  delay={index * 0.1}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="text-red-600 font-medium hover:text-red-700 transition-colors"
                      >
                        Подробнее →
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем качественный сервис и гарантируем результат
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <ScrollAnimation 
                  key={index}
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 1000 довольных клиентов доверяют нам свою технику
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ScrollAnimation 
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 relative">
                  <Quote className="h-8 w-8 text-red-200 absolute top-4 right-4" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="text-center mt-12">
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Средняя оценка наших услуг
              </h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-red-600 mr-2">4.9</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                На основе 847 отзывов за последний год
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Нужен ремонт техники Bosch?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас! Наши мастера готовы выехать к вам уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+78625550123"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                +7 (862) 555-0123
              </a>
              <Link
                to="/contacts"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Оставить заявку
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Home;