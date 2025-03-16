
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
