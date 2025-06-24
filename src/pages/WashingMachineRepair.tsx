import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  WashingMachine, 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';

const WashingMachineRepair: React.FC = () => {
  const [activeTab, setActiveTab] = useState('problems');

  const commonProblems = [
    {
      icon: AlertTriangle,
      title: 'Не включается',
      description: 'Машина не реагирует на нажатие кнопок, нет индикации',
      price: 'от 1500 ₽'
    },
    {
      icon: WashingMachine,
      title: 'Не сливает воду',
      description: 'Вода остается в баке после стирки, ошибка слива',
      price: 'от 2000 ₽'
    },
    {
      icon: Zap,
      title: 'Не греет воду',
      description: 'Стирка происходит в холодной воде, не работает нагрев',
      price: 'от 2500 ₽'
    },
    {
      icon: TrendingUp,
      title: 'Сильная вибрация',
      description: 'Машина сильно трясется и шумит при отжиме',
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
    'Гарантия на работы до 2 лет',
    'Опыт работы более 10 лет',
    'Фиксированные цены без переплат'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ремонт стиральных машин <span className="text-red-600">Bosch</span> в Сочи
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный ремонт стиральных машин Bosch на дому. 
                Быстрая диагностика, качественный ремонт, оригинальные запчасти.
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
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Ремонт стиральных машин Bosch"
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
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    Частые неисправности стиральных машин Bosch
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
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Стоимость ремонта
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачные цены без скрытых доплат
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Диагностика</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">Бесплатно</div>
                <p className="text-gray-600 mb-6">при заказе ремонта</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Выезд мастера</li>
                  <li>✓ Полная диагностика</li>
                  <li>✓ Определение причин</li>
                  <li>✓ Консультация</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-500">
              <div className="text-center">
                <div className="bg-red-100 inline-block px-3 py-1 rounded-full text-red-600 text-sm font-medium mb-4">
                  Популярно
                </div>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Стандартный ремонт</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">от 2500 ₽</div>
                <p className="text-gray-600 mb-6">включая работу</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Замена насоса</li>
                  <li>✓ Ремонт электроники</li>
                  <li>✓ Замена ТЭНа</li>
                  <li>✓ Гарантия 1 год</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Сложный ремонт</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">от 4500 ₽</div>
                <p className="text-gray-600 mb-6">включая запчасти</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Замена подшипников</li>
                  <li>✓ Ремонт двигателя</li>
                  <li>✓ Замена барабана</li>
                  <li>✓ Гарантия 2 года</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Стиральная машина Bosch сломалась?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Не откладывайте ремонт! Чем быстрее обратитесь, тем дешевле обойдется устранение неисправности
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
        </div>
      </section>
    </>
  );
};

export default WashingMachineRepair;