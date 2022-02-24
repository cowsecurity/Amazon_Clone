
**Amazon Clone**
  Amazon clone is a website built on react on frontend and node js on backend, It has full e-commerce functionality along side stripe payments integration
  
  Amazon Clone provides - login/sign up functionality via firebase auth.
  Real time cart update, And orders are stored in firestore
  
  Here is a demo link for the application - https://clone-a79e5.web.app
  
  ***Development Client***
  
  ```
  git clone https://github.com/yashsinghchauhan-formal/Amazon_Clone
  
  cd Amazon_clone
  
  npm install
  
  npm start
  
  ```
  *Note* - Make sure to change firebase config (firebase.js), stripe client key (pages.jsx) and backend endpoint(axios.js) to localhost / key on development phase and to actual url / key while on production.
  
  ***Development Server***
  
  ```
  cd Amazon_clone/backend
  
  npm install
  
  nodemon index.js
  
  ```
  *Note* - Make sure to add your own secret key to stripe secret key
