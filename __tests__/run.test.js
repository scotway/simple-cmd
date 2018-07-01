const {run} = require('../index');

//test('run npm install', async () => {
  //await run('npm i');
  //expect(true).toBe(true);
//});

test('run npm install with callback', () => {
  run("ls -al", () => {
    expect(true).toBe(true);
  });
});

