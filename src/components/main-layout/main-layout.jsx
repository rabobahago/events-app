import Header from "../header/Header";
import Footer from "../footer/Footer";
const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>

    <Footer />
  </>
);

export default MainLayout;
