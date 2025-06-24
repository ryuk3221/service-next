import React from 'react';
import { useLocation } from 'react-router-dom';

const SEOHelmet: React.FC = () => {
  const location = useLocation();

  const getPageData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Сервисный центр Bosch Сочи - Ремонт бытовой техники',
          description: 'Авторизованный сервисный центр Bosch в Сочи. Профессиональный ремонт стиральных машин, холодильников, посудомоечных машин. Оригинальные запчасти, гарантия качества.',
          keywords: 'Bosch сервис Сочи, ремонт техники Bosch, сервисный центр Сочи'
        };
      case '/contacts':
        return {
          title: 'Контакты - Сервисный центр Bosch Сочи',
          description: 'Контактная информация сервисного центра Bosch в Сочи. Адрес, телефон, режим работы, карта проезда.',
          keywords: 'контакты Bosch Сочи, адрес сервисного центра Bosch, телефон Bosch Сочи'
        };
      case '/remont-stiralnyh-mashin-bosch':
        return {
          title: 'Ремонт стиральных машин Bosch в Сочи - Сервисный центр',
          description: 'Профессиональный ремонт стиральных машин Bosch в Сочи. Диагностика, замена запчастей, устранение неисправностей. Выезд мастера на дом, гарантия на работы.',
          keywords: 'ремонт стиральных машин Bosch Сочи, мастер по ремонту стиральных машин, запчасти Bosch'
        };
      case '/remont-sushilnyh-mashin-bosch':
        return {
          title: 'Ремонт сушильных машин Bosch в Сочи - Сервисный центр',
          description: 'Качественный ремонт сушильных машин Bosch в Сочи. Устранение неисправностей, замена запчастей, профессиональная диагностика. Выезд мастера на дом.',
          keywords: 'ремонт сушильных машин Bosch Сочи, сушильная машина не работает, запчасти для сушильных машин'
        };
      case '/remont-kofemashin-bosch':
        return {
          title: 'Ремонт кофемашин Bosch в Сочи - Сервисный центр',
          description: 'Профессиональный ремонт кофемашин Bosch в Сочи. Чистка, декальцинация, замена запчастей. Восстановление работоспособности кофемашин любой сложности.',
          keywords: 'ремонт кофемашин Bosch Сочи, чистка кофемашины, декальцинация кофемашины Bosch'
        };
      case '/remont-posudomoechnyh-mashin-bosch':
        return {
          title: 'Ремонт посудомоечных машин Bosch в Сочи - Сервисный центр',
          description: 'Ремонт посудомоечных машин Bosch в Сочи. Устранение протечек, замена насосов, ремонт электроники. Быстрая диагностика и качественный ремонт.',
          keywords: 'ремонт посудомоечных машин Bosch Сочи, посудомойка не работает, протечка посудомоечной машины'
        };
      default:
        return {
          title: 'Сервисный центр Bosch Сочи',
          description: 'Сервисный центр Bosch в Сочи',
          keywords: 'Bosch, сервис, Сочи'
        };
    }
  };

  const pageData = getPageData();

  React.useEffect(() => {
    document.title = pageData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageData.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', pageData.keywords);
    }

    // Update OpenGraph data
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageData.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', pageData.description);
    }
  }, [pageData]);

  return null;
};

export default SEOHelmet;