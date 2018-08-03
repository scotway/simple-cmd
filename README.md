# Simple Cmd
Tiny library to run and view cli commands from node

Note: Due to a cwd constaint some commands might written slightly different. For Example: `grep -rn install *' will error, but `grep -rn install .` will work.

#### Async example
```javascript
const {run} = require('simple-cmd');

const runAsync = async () => {
  try {
    await run('grep -rn install .');
    console.log('Grepped!')
  } catch(error) {
    console.error(error)
  }
};

runAsync();
```

#### Promise example
```javascript
const {run} = require('simple-cmd');

run('grep -rn install .').then(() => {
  console.log('Grepped!')
});
```

#### Simple example
```javascript
const {run} = require('simple-cmd');

run('grep -rn install .', () => {
  console.log('Grepped!')
});
```
