import './App.css';

import React, { useEffect } from 'react';
import CommmonHelpers from './helpers/commonHelpers';
function App() {
    const a = CommmonHelpers.helloWorld;
    useEffect(() => a(), [a]);
    return <div className=""></div>;
}

export default App;
