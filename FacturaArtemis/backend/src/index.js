import app from './app.js';
const main = () => {
   app.listen(app.get("port")) 
   console.log(`Server's running on port ${app.get("port")}`);
};
main()