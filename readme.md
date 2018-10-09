# egg radishpit plugin

## Install
```bash
$ npm i egg-radishpit --save
```

## Configuration
### Enable egg-radishpit
`{app_root}/config/plugin.js`:
```js
exports.radishpit = {
  enable: true,
  package: 'egg-radishpit',
};
```

### Schema
Schemas need to be put in `{app_root}/app/schema/`.

`{app_root}/app/schema/user.js`:
```js
const types = require('./types'); // this is for custom radishpit type defination
const schema = {
  id: 'int',
  password: 'string',
  name: {
    type: 'string',
    max: 20,
  },
  avatar: {
    type: 'string?',
    max: 255,
  },
  mobile: 'mobile',
  email: {
    type: 'email?',
    max: 50,
  },
  createdAt: {
    type: 'date',
    get default() { return new Date(); },
  },
};

const columnMap = {
  $full: ['id', 'name', 'avatar', 'mobile', 'email', 'createdAt'],
  $default: ['id', 'name', 'avatar'],
  $mini: ['id', 'name'],
};

module.exports = {
  types,
  schema,
  columnMap,
};
```
`{app_root}/app/controller/user.js`:
```js
...
const data = {
  name: 'Echo Chen',
  mobile: '18888888888',
  email: 'qdechochen@gmail.com',
};
this.ctx.validate(this.app.schema.user(Object.keys(data)), data);
// An error with the results and 422 staus will be thrown if valiation fails. You need to resolve the result in your middlware.
```