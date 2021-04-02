import Header from './header'
import Introduction from './Introduction'
import Projects from './Projects'


export default function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Introduction />
        <Projects />
      </div>
    </div>
  );
}
