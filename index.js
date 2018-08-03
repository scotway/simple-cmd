const spawn = require('child_process').spawn;

const run = (command, opt1, opt2, opt3) => {
  const options = command.split(' ');
  const type = options.shift();

  const opt1Type = typeof(opt1);
  const opt2Type = typeof(opt2);
  const opt3Type = typeof(opt3);
  let cwd, capture, callback = false;

  switch(opt1Type) {
    case 'string':
      cwd = opt1;
      break;
    case 'function':
      callback = opt1;
      break;
    case 'bool':
      capture = opt1;
      break;
  }

  switch(opt2Type) {
    case 'function':
      callback = opt2;
      break;
    case 'bool':
      capture = opt2;
      break;
  }

  //set cwd if one is not given
  if (!cwd) {
    const fullParentPath = module.parent.filename;
    const pathParts = fullParentPath.split('/');
    pathParts.pop();
    const parentDirname = pathParts.join('/');
    cwd = `${parentDirname}/`;
  }

  const spawnOptions = {
    cwd,
    stdio: capture ? '' : 'inherit'
  };

  if (!capture) {

    const commandSpawn = spawn(type, options, spawnOptions);

    if(callback) {
      commandSpawn.on('close', (code) => {
        return callback();
      });
    }

    return new Promise((resolve, reject) => {
      commandSpawn.on('close', (code) => {
        return resolve();
      });
    });
  }
};

module.exports = {
  run : run
};

