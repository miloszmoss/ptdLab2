const plotly = require('plotly')('miloszmoss', 'EE0dfj7Tn5h5KgqlebTw');
const fs = require('fs');

module.exports = class Base {
  constructor() {
    this.imgOpts = {
      format: 'png',
      width: 1000,
      height: 500
    };
  }
  trace(index, data) {
    return {
      x: index,
      y: data,
      type: 'scatter'
    };
  }
  figure(trace) {
    return {
      data: [trace]
    };
  }
  X(k, dataFromFile, indexGen, dataGen) {
    for (let i = 0; i < k; i++) {
      let ak = 0;
      let bk = 0;
      for (let j = 0; j < k; j++) {
        ak += Number(dataFromFile[j]) * Math.cos(-(2 * Math.PI * j * i) / k);
        bk += Number(dataFromFile[j]) * Math.sin(-(2 * Math.PI * j * i) / k);
      }
      let m = Math.sqrt(Math.pow(ak, 2) + Math.pow(bk, 2));
      if (i < k / 2) {
        indexGen.push(i);
        dataGen.push(m);
      }
    }
  }

  printPNG(figure, imgOpts, path) {
    plotly.getImage(figure, imgOpts, (error, imageStream) => {
      if (error) return console.log(error);
      const fileStream = fs.createWriteStream(path);
      imageStream.pipe(fileStream);
    });
  }
  printData(path, data) {
    fs.writeFileSync(path, data);
  }
};
