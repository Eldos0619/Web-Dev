import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Набор автомобильный 46 в 1 TORNADO',
      description:
        'Набор инструментов TORNADO 46 в 1 — незаменимый помощник для автолюбителей и профессионалов, обеспечивающий высокую функциональность и компактность.',
      price: 1528,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h87/84180460830750.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p9c/71103063.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p9c/71103064.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/p9b/71103065.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/johnson-s-baby-detskoe-maslo-200-ml-100943910/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1IFXWa7xrD2pyZ8PX5I8RN8iiQxYbRbwFM3p7IsQPEAmf_CmKZ7MgRoC910QAvD_BwE',
    },
    {
      id: 2,
      name: 'Масло Johnson & Johnson 200 мл',
      description:
        'Общайтесь с малышом с помощью прикосновений! Используйте детское масло, чтобы насладиться минутами совместного общения и создать расслабляющую обстановку для вас и вашей крохи.  ',
      price: 2351,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h71/84709352669214.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h71/84709352669214.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hfd/84709352701982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h43/hea/84709352767518.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/johnson-s-baby-detskoe-maslo-200-ml-100943910/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1IFXWa7xrD2pyZ8PX5I8RN8iiQxYbRbwFM3p7IsQPEAmf_CmKZ7MgRoC910QAvD_BwE',
    },
    {
      id: 3,
      name: 'Вентилятор Азия Бренд Азия FS-45 черный',
      description:
        'Emelzhan Azimberdiev',
      price: 9600,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h3d/64363872747550.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h3d/64363872747550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h0b/64363875270686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h09/64363878121502.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/azija-brend-azija-fs-45-chernyi-101880802/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1IFXWa7xrD2pyZ8PX5I8RN8iiQxYbRbwFM3p7IsQPEAmf_CmKZ7MgRoC910QAvD_BwE',
    },
    {
      id: 4,
      name: 'Аэрогриль AISI GR-1 4 л черный',
      description:
        'эрогриль AISI — вкус без масла и забот! Хрустящая корочка, сочное мясо и аромат свежей выпечки — всё это теперь можно приготовить дома, быстро и без капли лишнего жира!',
      price: 35000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p09/95309639.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe7/p65/95309645.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/pbe/95309650.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe0/pc8/95309653.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/aisi-gr-1-chernyi-147897402/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1IFXWa7xrD2pyZ8PX5I8RN8iiQxYbRbwFM3p7IsQPEAmf_CmKZ7MgRoC910QAvD_BwE',
    },
    {
      id: 5,
      name: 'Ручка шариковая Obama 2810 12 шт, 1 мм, цвет чернил синий',
      description:
        'Ручка шариковая Obama с синими чернилами — это надежный инструмент для чёткого и аккуратного письма.',
      price: 300,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p22/25041852.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p23/25041854.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb3/p8d/64241258.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p22/25041852.png?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-2810-12-sht-1-mm-tsvet-chernil-sinii-107217516/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1IFXWa7xrD2pyZ8PX5I8RN8iiQxYbRbwFM3p7IsQPEAmf_CmKZ7MgRoC910QAvD_BwE',
    },
    {
      id: 6,
      name: 'Конструктор Лего техник автомобиль , деталей 1280 шт',
      description:
        'Лего машина качества хорошего, всё двигаться, можно и играть и в коллекции, хорошего размера много деталей ,если докупить аккумуляторный набор то можно сделать на пульт',
      price: 12960,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa5/p90/92189104.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/p8d/92189105.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p89/92189106.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/paa/pc3/13788124.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lego-tehnik-avtomobil-7602-detalei-1280-sht-131601826/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1MW8zUC0uJd-HsiduEoLubrTXBDXblaBm7EpS5F-38fK-DONJF54fhoCdqEQAvD_BwE',
    },
    {
      id: 7,
      name: 'MED TECH Кресло-коляска BLK WheelChair 120 черный',
      description:
        'Кресло-коляска MED TECH BLK WheelChair 120 - удобное и практичное решение для активной жизни. Складная конструкция и лёгкость в эксплуатации делают её идеальным выбором для повседневного использования.',
      price: 4990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p57/pb6/52920472.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p67/pc7/52920477.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p46/pe3/52920481.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcb/pce/52920487.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/med-tech-kreslo-koljaska-blk-wheelchair-120-chernyi-142495210/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1MW8zUC0uJd-HsiduEoLubrTXBDXblaBm7EpS5F-38fK-DONJF54fhoCdqEQAvD_BwE',
    },
    {
      id: 8,
      name: 'Салам надаел',
      description:
        'почему бро спит',
      price: 27440,
      rating: 10000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/h7b/64045543653406.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h18/h4a/64045546864670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h41/64045550207006.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h86/64045555417118.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/mashinka-ekskavator-na-radioupravlenii-hui-na-toys-die-cast-100544238/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1MW8zUC0uJd-HsiduEoLubrTXBDXblaBm7EpS5F-38fK-DONJF54fhoCdqEQAvD_BwE',
    },
    {
      id: 9,
      name: 'Sony PlayStation 5 Slim',
      description:
        'Компактная версия PS5 с SSD и поддержкой современных игр. Отличный вариант для домашней игровой зоны.',
      price: 307776,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium',
      ],
      link: 'http://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    },
    {
      id: 10,
      name: 'Карты игральные картон 52 шт',
      description:
        'Качество материала: Эти карты изготовлены из высококачественных материалов, что делает их долговечными и пригодными для долгих игровых сессий.',
      price: 198,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha1/hbd/64515052961822.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hbd/64515052961822.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/pff/97929558.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/pff/97929558.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/karty-igral-nye-karton-52-sht-105257109/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_automnotive_equipments_v2&gbraid=0AAAAAC7-v7jiYy1KeeXws5EX0YrQymcsk&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1MW8zUC0uJd-HsiduEoLubrTXBDXblaBm7EpS5F-38fK-DONJF54fhoCdqEQAvD_BwE',
    },
  ];

  stars = Array.from({ length: 5 }, (_, i) => i + 1);

  isStarFilled(starIndex: number, rating: number): boolean {
    return rating >= starIndex;
  }

  shareWhatsApp(p: Product): void {
  const text = `Check out this product: ${p.link}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
}

shareTelegram(p: Product): void {
  const url =
    `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
  window.open(url, '_blank', 'noopener');
}

}
