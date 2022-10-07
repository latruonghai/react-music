import './App.css';

import routes from './pages/routes';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Sidebar from './layout/side-bar/index';
import { sideBarItem } from './layout/side-bar/sidebar-item';
import Navbar from './components/ui/navigation/navbar/navbar';
import BottomBar from './components/ui/navigation/audioPlayer/bottomBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { navigation } from "./components/ui/navigation/navigation-item"
// import sideBarItem
// import Sidebar
// console.log(routes);
console.log('🚀 ~ file: App.tsx ~ line 7 ~ routes', routes);
console.log(typeof import('./components/icons/album-icon'));
function App() {
  const [id, setId] = useState<string>('');
  const [isFull, setIsFull] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  return (
    <Fragment>
      {/* <Navigation {...ItemNavigatorProps} /> */}
      <div className="h-[calc(100%+6rem)] flex">
        <Navbar />
        <Sidebar data={sideBarItem}></Sidebar>
      </div>
      <BottomBar />
    </Fragment>
  );
}

export default App;
