import client1 from "./assets/images/client1.jpg";
import client2 from "./assets/images/client2.jpg";
import client3 from "./assets/images/client3.jpg";
import { FaStar } from "react-icons/fa";
import lady from "./assets/images/lady.jpg";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

// Our company leads the industry in wealth management. We provide independent RIA and broker services that are powered by over 20 years of industry experience

export const footerLinks = [
  //   { title: "Services", items: [{ item: "" }, { item: "" }, { item: "" }] },

  {
    title: "Quick links",
    id: 1,
    items: [
      { id: 1, item: "Testimonials" },
      { id: 2, item: "Services" },
      { id: 3, item: "Our team" },
    ],
  },
  {
    title: "Features",
    id: 1,
    items: [
      { id: 1, item: "Business Marketing" },
      { id: 2, item: "User Analytics" },
      { id: 3, item: "Unlimited Support" },
      { id: 4, item: "Client Satisfaction" },
    ],
  },
  {
    title: "Get in touch",
    id: 2,
    items: [
      { id: 1, item: "+1 252-756-9956", icon: <FaPhone /> },
      { id: 2, item: "+1 252-756-9956", icon: <MdLocationPin /> },
      {
        id: 3,
        item: "359 Manchester St A Greenville, NC 27834, United States",
        icon: <MdLocationPin />,
      },
    ],
  },
];
export const clients = [
  {
    img: client1,
    id: 1,
    desc: "CCIC-Groups made insurance a breeze, guiding me through the process and ensuring comprehensive coverage for my family",
    rating: <FaStar color="yellow" />,
    name: "Davis L",
  },
  {
    img: client2,
    id: 2,
    desc: "Years with CCIC-Groups, never disappointed. Unmatched dedication to customer satisfaction and finding the perfect insurance solutions",
    rating: <FaStar color="yellow" />,
    name: "John M",
  },
  {
    img: client3,
    id: 3,
    desc: "I recently filed a claim with CCIC-Groups and was impressed by their efficiency and prompt assistance throughout the straightforward process.",
    rating: <FaStar color="yellow" />,
    name: "Sarah T",
  },
  {
    img: lady,
    id: 4,
    desc: "CCIC-Groups truly cares about their clients and goes above and beyond to ensure their satisfaction. I'nothing but positive experiences with them",
    rating: <FaStar color="yellow" />,
    name: "Maria Curia",
  },
];
