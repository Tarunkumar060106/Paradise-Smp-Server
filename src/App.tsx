import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { ServerLinks } from './components/ServerLinks';
import { JoinServer } from './components/JoinServer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <ServerLinks />
      <JoinServer />
      <Footer />
    </div>
  );
}