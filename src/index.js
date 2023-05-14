const { readdir } = require('fs/promises')

readdir('./')
  .then((f) => console.info(f))
  .catch((e) => console.error(e))
