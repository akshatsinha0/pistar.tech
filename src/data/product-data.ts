import { IProduct } from "@/types/product-d-t";
// images
import img_1 from "@/assets/images/pistar/1.png";
import img_2 from "@/assets/images/pistar/2.png";
import img_3 from "@/assets/images/pistar/3.png";
import img_4 from "@/assets/images/pistar/4.png";
import img_5 from "@/assets/images/pistar/5.png";
import chair from "@/assets/images/pistar/chair.png";
// user
import user_1 from "@/assets/images/blog/avatar_01.jpg";
import user_2 from "@/assets/images/blog/avatar_02.jpg";

const product_data:IProduct[] = [
  {
    id: 1,
    img: img_1,
    title: "Podiascanner Mat",
    price: 49999,
    discount: 0,
    category:'books',
    quantity: 38,
    old_price: 100000,
    sm_desc:
      "Podiascanner Mat is a portable plantar pressure analysis system that helps assess foot pressure and gait with high accuracy. Ideal for clinics, sports centers, and orthotic labs.",
    related_images:[img_1,img_2,img_3,img_4,img_5],
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "High-resolution mat with 1024 sensors for precise foot mapping",
        "Lightweight, USB-powered, and easy to set up",
        "Real-time pressure and gait analysis with intuitive software",
      ],
    },
    reviews: [
      {
        id: 1,
        user: user_2,
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: user_1,
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 2,
    img: img_2,
    title: "Smart Chair",
    price: 49999,
    discount: 0,
    category:'visiting-card',
    quantity: 25,
    old_price: 70000,
    related_images:[chair],
    sm_desc:
      "​The Smart Chair by PiStarTech is an AI-powered seating solution designed to monitor and improve posture in real-time. Ideal for home, office, and healthcare settings, it helps prevent back pain and promotes healthier sitting habits.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: user_2,
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: user_1,
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
];

export default product_data;
