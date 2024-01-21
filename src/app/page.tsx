import About from "./About";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import TopBlog from "./TopBlog";

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
