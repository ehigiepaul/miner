import * as request from 'request';

export class api {
  protected myvar: NodeJS.Timer;
  protected apiStats: any;
  constructor() {
    this.stats();
    setTimeout(() => {
      console.log(this.apiStats);
    }, 1000);
    this.myvar = setInterval(() => {
      console.log(this.apiStats);
    }, 60000);
  }
  protected stats() {
    request.get("http://127.0.0.1:42000/getstat", (err, data, body) => {
      return (this.apiStats = JSON.parse(body));
    });
  }

  resetReq() {
    clearTimeout(this.myvar);
    this.myvar;
  }
}

let start = new api();
