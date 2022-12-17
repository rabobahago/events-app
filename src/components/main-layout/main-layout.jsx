import Header from "../header/Header";
import Footer from "../footer/Footer";
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
