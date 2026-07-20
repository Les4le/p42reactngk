import ApiBase from "../../_api_base/ApiBase";
import type IGroup from "../model/IGroup";
import type IGroupProduct from "../model/IGroupProduct";

const groups: Array<IGroup> = [
  {
    id: "1",
    name: "Shop gaming",
    description: "Get your game on",
    slug: "game",
    imageUrl: "/img/group1.jpg",
  },
  {
    id: "2",
    name: "Jeans",
    description: "Shop Fashion for less",
    slug: "jeans",
    imageUrl: "/img/group2.jpg",
  },
  {
    id: "3",
    name: "Watches",
    description: "Wireless Tech",
    slug: "watches",
    imageUrl: "/img/group3.jpg",
  },
  {
    id: "4",
    name: "Smartphones",
    description: "Wireless Tech",
    slug: "smartphones",
    imageUrl: "/img/group4.jpg",
  },
  {
    id: "5",
    name: "Tablets",
    description: "Wireless Tech",
    slug: "tablets",
    imageUrl: "/img/group5.jpg",
  },
  {
    id: "6",
    name: "Headphones",
    description: "Wireless Tech",
    slug: "headphones",
    imageUrl: "/img/group6.jpg",
  },
  {
    id: "7",
    name: "PC",
    description: "Deals on top categories",
    slug: "pc",
    imageUrl: "/img/group7.jpg",
  },
  {
    id: "8",
    name: "Men",
    description: "Most-loved watches",
    slug: "men-watches",
    imageUrl: "/img/group8.jpg",
  },
  {
    id: "9",
    name: "Laptops",
    description: "Level up your PC here",
    slug: "laptops",
    imageUrl: "/img/group9.jpg",
  },
  {
    id: "10",
    name: "Equipment",
    description: "Gear up to get fit",
    slug: "equipment",
    imageUrl: "/img/group10.jpg",
  },
  {
    id: "11",
    name: "Kitchen & dining",
    description: "New home arrivals under $50",
    slug: "kitchen_dining",
    imageUrl: "/img/group11.jpg",
  },
];
const groupProducts: Record<string, IGroupProduct> = {
  game: {
    group: groups[0],
    products: [
      {
        id: "1-1",
        name: "Fortnite",
        description: "Fortnite: Battle Royale",
        price: 1.0,
        imageUrl: "/img/Gemini_Generated_Image_Fortnite.png",
        stock: -1,
        slug: "fortnite",
      },
      {
        id: "1-2",
        name: "Goat Simulator", // description: "Fortnite: Battle Royale",
        price: 49.99,
        imageUrl: "/img/Gemini_Generated_Image_Goat_Simulator_3.png",
        actionPrice: 29.99,
        stock: -1,
      },
    ],
  },
  watches: {
    group: groups[2],
    products: [
      {
        id: "3-1",
        name: "Smart Watches for Women",
        description:
          '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
        price: 129.99,
        imageUrl: "/img/81al6p-pKuL._AC_UY218_.jpg",
      },
      {
        id: "3-2",
        name: "SAMSUNG Galaxy FIT 3 [2024]",
        description:
          '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
        price: 45,
        imageUrl: "/img/41KyLKvro-L._AC_UY218_.jpg",
      },
      {
        id: "3-3",
        name: "Samsung Galaxy Watch 8 (2025)",
        description:
          "40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]",
        price: 223.01,
        imageUrl: "/img/61IpkAmVjwL._AC_UY218_.jpg",
      },
      {
        id: "3-4",
        name: "Garmin vívoactive 5",
        description:
          "Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory",
        price: 169.95,
        imageUrl: "/img/610Jl4dUB7L._AC_UY218_.jpg",
      },
      {
        id: "3-5",
        name: "Smart Watch for Men Women",
        description:
          '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
        price: 13.99,
        imageUrl: "/img/71y74-RugbL._AC_UY218_.jpg",
      },
    ],
  },
  laptops: {
    group: groups[8],
    products: [
      {
        id: "9-1",
        name: "Lenovo IdeaPad Slim 3",
        description:
          "15.6'' Full HD IPS, Intel Core i5-12450H, 16GB RAM, 512GB SSD, Windows 11",
        price: 27999,
        actionPrice: 25999,
        stock: 8,
        slug: "lenovo-ideapad-slim-3",
        imageUrl: "/img/laptop1.jpg",
      },
      {
        id: "9-2",
        name: "ASUS VivoBook 15",
        description: "Intel Core i5, 16GB RAM, 512GB SSD, Full HD display",
        price: 29999,
        stock: 4,
        imageUrl: "/img/laptop2.jpg",
      },
      {
        id: "9-3",
        name: "Acer Aspire 5",
        price: 24999,
        stock: 10,
        slug: "acer-aspire-5",
        imageUrl: "/img/laptop3.jpg",
      },
      {
        id: "9-4",
        name: "HP Pavilion 15",
        description: "AMD Ryzen 7, 16GB RAM, 512GB SSD, Radeon Graphics",
        price: 31999,
        actionPrice: 29999,
        imageUrl: "/img/laptop4.jpg",
      },
      {
        id: "9-5",
        name: "Dell Inspiron 15",
        description: "Intel Core i7, 16GB RAM, 1TB SSD, Windows 11",
        price: 35999,
        stock: 2,
        slug: "dell-inspiron-15",
        imageUrl: "/img/laptop5.jpg",
      },
      {
        id: "9-6",
        name: "MSI Thin 15 Gaming Laptop",
        description: "Intel Core i7, RTX 4050, 16GB RAM, 512GB SSD",
        price: 45999,
        actionPrice: 42999,
        stock: 5,
        slug: "msi-thin-15",
        imageUrl: "/img/laptop6.jpg",
      },
      {
        id: "9-7",
        name: "Apple MacBook Air M3",
        description: "13.6'' Retina, Apple M3, 16GB Unified Memory, 512GB SSD",
        price: 62999,
        imageUrl: "/img/laptop7.jpg",
      },
      {
        id: "9-8",
        name: "Huawei MateBook D16",
        price: 38999,
        actionPrice: 36999,
        stock: 6,
        imageUrl: "/img/laptop8.jpg",
      },
      {
        id: "9-9",
        name: "Gigabyte G5 Gaming",
        description: "Intel Core i5, RTX 4060, 16GB RAM, 512GB SSD",
        price: 48999,
        slug: "gigabyte-g5",
        imageUrl: "/img/laptop9.jpg",
      },
      {
        id: "9-10",
        name: "Lenovo Legion Pro 5",
        description: "AMD Ryzen 9, RTX 4070, 32GB RAM, 1TB SSD",
        price: 76999,
        actionPrice: 71999,
        stock: 3,
        slug: "lenovo-legion-pro-5",
        imageUrl: "/img/laptop10.jpg",
      },
    ],
  },
};

export default class GroupApi {
  static allGroups(): Promise<Array<IGroup>> {
    return ApiBase.getCached("/groups", undefined, groups) as Promise<
      Array<IGroup>
    >;
  }

  static groupDetails(slug: string): Promise<IGroupProduct> {
    return ApiBase.getCached(`/groups/${slug}`, undefined, {
      group: groups.find((g) => g.slug == slug),
      products:
        typeof groupProducts[slug] == "undefined"
          ? []
          : groupProducts[slug].products,
    }) as Promise<IGroupProduct>;
  }
}
/*
Д.З. Створити сторінку "Політика конфіденційності (Privacy)"
Наповнити її стандартною інформацією (дозволяється ШІ)
Розмістити посилання на неї в шаблоні сторінок для доступності
з усіх сторінок сайту
*/
