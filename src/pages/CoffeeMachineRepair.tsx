import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Star,
  Droplets,
  Zap,
  Settings
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';


const CoffeeMachineRepair: React.FC = () => {
  const [activeTab, setActiveTab] = useState('problems');

  const commonProblems = [
    {
      icon: Droplets,
      title: 'Не подает воду',
      description: 'Кофемашина не набирает воду или подает ее слишком медленно',
      price: 'от 2000 ₽'
    },
    {
      icon: Coffee,
      title: 'Слабый кофе',
      description: 'Кофе получается водянистым, нет пенки, слабый аромат',
      price: 'от 1500 ₽'
    },
    {
      icon: AlertTriangle,
      title: 'Протечки',
      description: 'Вода вытекает из корпуса, под кофемашиной лужи',
      price: 'от 2500 ₽'
    },
    {
      icon: Settings,
      title: 'Ошибки на дисплее',
      description: 'Появляются коды ошибок, машина блокируется',
      price: 'от 1800 ₽'
    }
  ];

  const repairSteps = [
    {
      step: '01',
      title: 'Заявка',
      description: 'Вы оставляете заявку по телефону или через сайт'
    },
    {
      step: '02',
      title: 'Выезд мастера',
      description: 'Мастер приезжает к вам домой в удобное время'
    },
    {
      step: '03',
      title: 'Диагностика',
      description: 'Бесплатная диагностика и определение причины поломки'
    },
    {
      step: '04',
      title: 'Ремонт',
      description: 'Устранение неисправности с использованием оригинальных запчастей'
    },
    {
      step: '05',
      title: 'Гарантия',
      description: 'Предоставление гарантии на выполненные работы'
    }
  ];

  const advantages = [
    'Выезд мастера в день обращения',
    'Бесплатная диагностика при ремонте',
    'Оригинальные запчасти Bosch',
    'Профессиональная чистка и декальцинация',
    'Опыт работы более 10 лет',
    'Гарантия на работы до 2 лет'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ремонт кофемашин <span className="text-red-600">Bosch</span> в Сочи
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный ремонт кофемашин Bosch на дому. 
                Чистка, декальцинация, замена запчастей, настройка.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+78625550123"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Вызвать мастера
                </a>
                <Link
                  to="/contacts"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center"
                >
                  Оставить заявку
                </Link>
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
                  src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Ремонт кофемашин Bosch"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">24/7</div>
                    <div className="text-sm text-gray-600">Прием заявок</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">30 мин</div>
                    <div className="text-sm text-gray-600">Диагностика</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">2 года</div>
                    <div className="text-sm text-gray-600">Гарантия</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">100%</div>
                    <div className="text-sm text-gray-600">Качество</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('problems')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'problems'
                        ? 'border-red-500 text-red-600 bg-red-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Частые неисправности
                  </button>
                  <button
                    onClick={() => setActiveTab('process')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'process'
                        ? 'border-red-500 text-red-600 bg-red-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Процесс ремонта
                  </button>
                  <button
                    onClick={() => setActiveTab('advantages')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'advantages'
                        ? 'border-red-500 text-red-600 bg-red-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Наши преимущества
                  </button>
                </nav>
              </div>

              <div className="p-8">
                {activeTab === 'problems' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      Частые неисправности кофемашин Bosch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {commonProblems.map((problem, index) => {
                        const IconComponent = problem.icon;
                        return (
                          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start">
                              <div className="bg-red-100 p-3 rounded-lg mr-4">
                                <IconComponent className="h-6 w-6 text-red-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  {problem.title}
                                </h3>
                                <p className="text-gray-600 mb-3">
                                  {problem.description}
                                </p>
                                <div className="flex justify-between items-center">
                                  <span className="text-red-600 font-semibold">
                                    {problem.price}
                                  </span>
                                  <button className="text-sm text-red-600 hover:text-red-700 transition-colors">
                                    Заказать ремонт
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      Как проходит ремонт
                    </h2>
                    <div className="space-y-8">
                      {repairSteps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'advantages' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      Почему выбирают наш сервис
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полное обслуживание вашей кофемашины
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Декальцинация</h3>
                <p className="text-gray-600 mb-4">
                  Профессиональная очистка от накипи с использованием специальных средств
                </p>
                <div className="text-2xl font-bold text-red-600 mb-2">от 1200 ₽</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Профилактика</h3>
                <p className="text-gray-600 mb-4">
                  Комплексное обслуживание: чистка, смазка, настройка параметров
                </p>
                <div className="text-2xl font-bold text-red-600 mb-2">от 1800 ₽</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Настройка вкуса</h3>
                <p className="text-gray-600 mb-4">
                  Калибровка помола, температуры и давления для идеального кофе
                </p>
                <div className="text-2xl font-bold text-red-600 mb-2">от 800 ₽</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Кофемашина Bosch требует ремонта?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Верните своей кофемашине идеальный вкус! Профессиональный ремонт и обслуживание
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
                Заказать звонок
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default CoffeeMachineRepair;