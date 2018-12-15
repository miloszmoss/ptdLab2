const fs = require('fs');
const zad1Array = fs.readFileSync('../lab_1/data/zad1.txt');
const zad2_A_Array = fs.readFileSync('../lab_1/data/zad2-a.txt');
const zad2_B_Array = fs.readFileSync('../lab_1/data/zad2-b.txt');
const zad3Array = fs.readFileSync('../lab_1/data/zad3.txt');
const zad4_A_Array = fs.readFileSync('../lab_1/data/zad4_a.txt');
const zad4_B_Array = fs.readFileSync('../lab_1/data/zad4_b.txt');
const zad4_C_Array = fs.readFileSync('../lab_1/data/zad4_c.txt');

const Base = require('./BaseLog');

class DFT extends Base {
  constructor() {
    super();
    // zad1 initial
    this.dataFromZad1 = JSON.parse(zad1Array);
    this.zad1K = this.dataFromZad1.length;
    this.zad1Index = [];
    this.zad1Data = [];
    // zad2_a initial
    this.dataFromZad2_A = JSON.parse(zad2_A_Array);
    this.zad2_A_K = this.dataFromZad2_A.length;
    this.zad2_A_Index = [];
    this.zad2_A_Data = [];
    // zad2_b initial
    this.dataFromZad2_B = JSON.parse(zad2_B_Array);
    this.zad2_B_K = this.dataFromZad2_B.length;
    this.zad2_B_Index = [];
    this.zad2_B_Data = [];
    // zad3 initial
    this.dataFromZad3 = JSON.parse(zad3Array);
    this.zad3K = this.dataFromZad3.length;
    this.zad3Index = [];
    this.zad3Data = [];
    // zad4_a initial
    this.dataFromZad4_A = JSON.parse(zad4_A_Array);
    this.zad4_A_K = this.dataFromZad4_A.length;
    this.zad4_A_Index = [];
    this.zad4_A_Data = [];
    // zad4_b
    this.dataFromZad4_B = JSON.parse(zad4_B_Array);
    this.zad4_B_K = this.dataFromZad4_B.length;
    this.zad4_B_Index = [];
    this.zad4_B_Data = [];
    // zad4_c
    this.dataFromZad4_C = JSON.parse(zad4_C_Array);
    this.zad4_C_K = this.dataFromZad4_C.length;
    this.zad4_C_Index = [];
    this.zad4_C_Data = [];
  }

  init() {
    const { zad1K, zad1Data, imgOpts, zad1Index, dataFromZad1 } = this;
    const { zad2_A_K, dataFromZad2_A, zad2_A_Index, zad2_A_Data } = this;
    const { zad2_B_K, dataFromZad2_B, zad2_B_Index, zad2_B_Data } = this;
    const { zad3K, dataFromZad3, zad3Index, zad3Data } = this;
    const { zad4_A_K, dataFromZad4_A, zad4_A_Index, zad4_A_Data } = this;
    const { zad4_B_K, dataFromZad4_B, zad4_B_Index, zad4_B_Data } = this;
    const { zad4_C_K, dataFromZad4_C, zad4_C_Index, zad4_C_Data } = this;

    // zad1
    this.X(zad1K, dataFromZad1, zad1Index, zad1Data);
    const traceZad1 = this.trace(zad1Index, zad1Data);
    const figZad1 = this.figure(traceZad1);
    this.printData('dataLog/zad1.txt', JSON.stringify(zad1Data));
    this.printPNG(figZad1, imgOpts, 'chartsLog/zad1.png');
    // zad2_a
    this.X(zad2_A_K, dataFromZad2_A, zad2_A_Index, zad2_A_Data);
    const traceZad2A = this.trace(zad2_A_Index, zad2_A_Data);
    const figZad2A = this.figure(traceZad2A);
    this.printData('dataLog/zad2-a.txt', JSON.stringify(zad2_A_Data));
    this.printPNG(figZad2A, imgOpts, 'chartsLog/zad2-a.png');
    // zad2_b
    this.X(zad2_B_K, dataFromZad2_B, zad2_B_Index, zad2_B_Data);
    const traceZad2B = this.trace(zad2_B_Index, zad2_B_Data);
    const figZad2B = this.figure(traceZad2B);
    this.printData('dataLog/zad2-b.txt', JSON.stringify(zad2_B_Data));
    this.printPNG(figZad2B, imgOpts, 'chartsLog/zad2-b.png');
    // zad3
    this.X(zad3K, dataFromZad3, zad3Index, zad3Data);
    const traceZad3 = this.trace(zad3Index, zad3Data);
    const figZad3 = this.figure(traceZad3);
    this.printData('dataLog/zad3.txt', JSON.stringify(zad3Data));
    this.printPNG(figZad3, imgOpts, 'chartsLog/zad3.png');
    //zad4_a
    this.X(zad4_A_K, dataFromZad4_A, zad4_A_Index, zad4_A_Data);
    const traceZad4A = this.trace(zad4_A_Index, zad4_A_Data);
    const figZad4A = this.figure(traceZad4A);
    this.printData('dataLog/zad4-a.txt', JSON.stringify(zad4_A_Data));
    this.printPNG(figZad4A, imgOpts, 'chartsLog/zad4-a.png');
    // zad4_b
    this.X(zad4_B_K, dataFromZad4_B, zad4_B_Index, zad4_B_Data);
    const traceZad4B = this.trace(zad4_B_Index, zad4_B_Data);
    const figZad4B = this.figure(traceZad4B);
    this.printData('dataLog/zad4-b.txt', JSON.stringify(zad4_B_Data));
    this.printPNG(figZad4B, imgOpts, 'chartsLog/zad4-b.png');
    // zad4_c
    this.X(zad4_C_K, dataFromZad4_C, zad4_C_Index, zad4_C_Data);
    const traceZad4C = this.trace(zad4_C_Index, zad4_C_Data);
    const figZad4C = this.figure(traceZad4C);
    this.printData('dataLog/zad4-c.txt', JSON.stringify(zad4_C_Data));
    this.printPNG(figZad4C, imgOpts, 'chartsLog/zad4-c.png');
  }
}

const zad1 = new DFT();
zad1.init();
