import client1 from "./assets/images/client1.jpg";
import client2 from "./assets/images/client2.jpg";
import client3 from "./assets/images/client3.jpg";
import { IoStarOutline } from "react-icons/io5";

export const clients = [
  {
    img: client1,
    id: 1,
    desc: "CCIC-Groups made getting insurance easy and stress-free. Their team was incredibly helpful and guided me through the entire process. I feel confident knowing that my family and I are protected with their comprehensive coverage",
    rating: <IoStarOutline />,
    name: "Sarah T",
  },
  {
    img: client2,
    id: 2,
    desc: "I've been a customer of CCIC-Groups for years, and they've never disappointed. Their commitment to customer satisfaction is unmatched, and I appreciate their dedication to finding the best insurance solutions for my needs.",
    rating: <IoStarOutline />,
    name: "John M",
  },
  {
    img: client3,
    id: 3,
    desc: "I recently had to file a claim with CCIC-Groups, and I was impressed by how quickly and efficiently they handled everything. Their claims process was straightforward, and I received prompt assistance every step of the way. Thank you, CCIC-Groups, for your exceptional service!",
    rating: <IoStarOutline />,
    name: "Davis L",
  },
];
