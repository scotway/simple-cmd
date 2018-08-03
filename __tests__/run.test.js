const {run} = require('../index');

test('run npm install', async () => {
  await run('npm i');
  expect(true).toBe(true);
});

test('run ls with callback', (done) => {
  const callback = () => {
    expect(true).toBe(true);
    done();
  };
  run("ls -al", callback);
});

test('run ls with callback', (done) => {
  const callback = () => {
    expect(true).toBe(true);
    done();
  };
  run("ls -al", `${__dirname}/tmp`, callback);
});

//test('run ls with capture output', async (done) => {
  //const lsOutput = await run("ls");
  //expect(lsOutput.indexOf('run') > -1).toBe(true);
  //expect(lsOutput.indexOf('run') > -1).toBe(true);
//});

