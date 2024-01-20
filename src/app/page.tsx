import Image from "next/image";
import Logo from "./components/Logo";
import { VscMenu } from "react-icons/vsc";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Faq from "./Faq";
import Banner from "./Banner";
import Header from "./Header";
import About from "./About";
import TopBlog from "./TopBlog";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <TopBlog />
      <Faq />

      <Footer />
    </div>
  );
}
