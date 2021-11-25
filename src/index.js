import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import Loader from './pages/Loader'
//import 'bootstrap/dist/css/bootstrap.min.css';

// import './assets/css/animate.css';
// import './assets/css/bootsnav.css';
// import './assets/css/cubeportfolio.css';
// import './assets/css/custom-icons.min.css';
// import './assets/css/ionicons.min.css';
//import './assets/css/bootstrap.min.css';
import './assets/css/master.css';
import './assets/css/responsive.css';
// import './assets/css/slick.css';

ReactDOM.render(<App>
    <Loader />
</App>, document.getElementById('app'));

