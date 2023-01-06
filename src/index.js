import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//  <Routes>
//                 <Route path="/">
//                   <Route index element={<Home type="random" />} />
//                   <Route path="trends" element={<Home type="trend" />} />
//                   <Route path="subscriptions" element={<Home type="sub" />} />
//                   <Route path="search" element={<Search />} />
//                   <Route
//                     path="signin"
//                     element={currentUser ? <Home /> : <SignIn />}
//                   />
//                   <Route path="video">
//                     <Route path=":id" element={<Video />} />
//                   </Route>
//                 </Route>
//               </Routes>