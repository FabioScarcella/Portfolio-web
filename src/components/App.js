import Header from './header'
import Introduction from './Introduction'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from './Footer'


export default function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Introduction />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
