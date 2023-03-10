import Route from './components/Route';

import SideBar from './components/SideBar';

import DropDownPage from './pages/DropDownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonsPage from './pages/ButtonsPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonsPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
