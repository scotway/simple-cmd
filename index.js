const spawn = require('child_process').spawn;

const run = (command, callback) => {
  const options = command.split(' ');
  const type = options.shift();

  const fullParentPath = module.parent.filename;
  const pathParts = fullParentPath.split('/');
  pathParts.pop();
  const parentDirname = pathParts.join('/');

  //console.log(parentDirname);

  const spawnOptions = {
    cwd: `${parentDirname}/`,
    stdio: 'inherit'
  };

  const commandSpawn = spawn(type, options, spawnOptions);

  if(callback) {
    commandSpawn.on('close', (code) => {
      console.log('callback');
      return callback();
    });
  }

  return new Promise((resolve, reject) => {
    commandSpawn.on('close', (code) => {
      return resolve();
    });
  });
};

module.exports = {
  run : run
};

