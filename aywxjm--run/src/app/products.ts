export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating:number;
  link:string;
}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-large',
    name: 'iPhone 14 128Gb черный',
    description: 'технология NFC: Да',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
    name: 'iPhone 13 128Gb Midnight черный',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 4.3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000'
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-large',
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    description: 'технология NFC: Нет',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000'
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large',
    name: 'iPhone 15 Pro Max 256Gb серый',
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-large',
    name: 'Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    description: 'тип экрана: Super AMOLED, сенсорный',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000'
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large',
    name: 'iPhone 13 128Gb белый',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-large',
    name: 'Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    description: 'тип экрана: IPS LCD',
    rating: 2,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000'
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hcf/84991826722846.png?format=gallery-large',
    name: 'Realme Note 50 4 ГБ/128 ГБ черный',
    description: 'процессор: 8-ядерный Unisoc Tiger T612',
    rating: 1,
    link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000'
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h5a/84734932516894.jpg?format=gallery-medium',
    name: 'Poco C65 8 ГБ/256 ГБ синий',
    description: 'тип экрана: IPS, сенсорный, Corning Gorilla Glass',
    rating: 2,
    link: 'https://kaspi.kz/shop/p/poco-c65-8-gb-256-gb-sinii-115412663/?c=750000000'
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
    name: ' Apple iPhone 13 128Gb розовый',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/