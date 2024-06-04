# skrapp
JavaScript library for skrapp.io
# main
```js
const {skrapp} = require('./skrapp');

const email = new skrapp();
email.verify_email("fffccg@niga.com").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
