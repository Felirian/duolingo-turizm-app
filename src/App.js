import React, {useEffect} from 'react';
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";

function App() {
  const tgApp = Telegram.WebApp
  console.log(tgApp);

  const click = () => {
    tgApp.requestFullscreen()
  }
  return (
    <div className="App">
      <Header />
      <main>
        <h2>About Us ggg gfgf</h2>
        <h2>Кто любит огурцы </h2>
        <button onClick={click}>ggg</button>
        <p>This is an example landing page created with React.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;