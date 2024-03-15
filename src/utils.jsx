import client1 from "./assets/images/client1.jpg";
import client2 from "./assets/images/client2.jpg";
import client3 from "./assets/images/client3.jpg";
import { FaStar } from "react-icons/fa";
import lady from "./assets/images/lady.jpg";
import { MdLocationPin } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

/* eslint-disable */

export const footerLinks = [
  {
    title: "Quick links",
    id: 1,
    items: [
      { id: 1, item: "Testimonials", url: "testimonial" },
      { id: 2, item: "Services", url: "services" },
      { id: 3, item: "Plan", url: "plan" },
    ],
  },
  {
    title: "Features",
    id: 2,
    items: [
      { id: 1, item: "Assured legal reimbursement" },
      { id: 2, item: "User Analytics" },
      { id: 3, item: "Unlimited Support" },
      { id: 4, item: "Client Satisfaction" },
    ],
  },
  {
    title: "Get in touch",
    id: 3,
    items: [
      // {
      //   id: 1,
      //   item: "+1 252-756-9956 ( currently unavailable )",
      //   icon: <FaPhone size={25} />,
      // },
      { id: 2, item: "ccis-groups@hotmail.com", icon: <MdEmail size={25} /> },
      {
        id: 3,
        item: "359 Manchester St A Greenville, NC 27834, United States",
        icon: <MdLocationPin size={25} />,
      },
    ],
  },
];
export const clients = [
  {
    img: client1,
    id: 1,
    desc: "CCIC-Groups made insurance a breeze, guiding me through the process and ensuring comprehensive coverage for my family",
    rating: [
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
    ],
    name: "Davis L",
  },
  {
    img: client2,
    id: 2,
    desc: "Years with CCIC-Groups, never disappointed. Unmatched dedication to customer satisfaction and finding the perfect insurance solutions",
    rating: [
      ,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
    ],
    name: "John M",
  },
  {
    img: client3,
    id: 3,
    desc: "I recently filed a claim with CCIC-Groups and was impressed by their efficiency and prompt assistance throughout the straightforward process.",
    rating: [
      ,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar />,
      <FaStar />,
    ],
    name: "Sarah T",
  },
  {
    img: lady,
    id: 4,
    desc: "CCIC-Groups truly cares about their clients and goes above and beyond to ensure their satisfaction. I'nothing but positive experiences with them",
    rating: [
      ,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar color="#F1592A" />,
      <FaStar />,
    ],
    name: "Maria Curia",
  },
];
