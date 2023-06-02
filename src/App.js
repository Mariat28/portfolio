import './App.css';
import HeaderContainer from './components/Header';
import HeroSection from './components/Home/HeroSection';
import ContentContainer from './components/experience/ContentContainer';
import Contentwrapper from './components/ContentWrapper';

function App() {
  return (
    <div className="text-3xl  h-screen overflow-hidden bg-blue-50">
      <HeaderContainer></HeaderContainer>
      <Contentwrapper>
        <HeroSection></HeroSection>
        <ContentContainer></ContentContainer>
      </Contentwrapper>
    </div>
  );
}

export default App;
