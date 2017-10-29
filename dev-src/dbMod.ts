import * as pouchdb from "pouchdb";
let db = new pouchdb("./db");

export class dbMod {
  constructor() {}

  async get(val: string) {
    let data;
    try {
      let doc = await db.get(val).then(val => {
        return (data = doc);
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
    return data;
  }

  async put(index: string, obj: object) {
    let value = await Object.create(null);
    value._id = index;
    for (let i in obj) {
      value[i] = obj[i];
    }
    try {
      let res = await db.put(value);
      console.log(res);
      console.log("document inserted");
    } catch (error) {
      console.log(error);
    }
  }

  async update(index: string, obj: object) {
    try {
      let doc = await db.get(index);
      let value = await Object.create(null);
      value._id = doc._id;
      value._rev = doc._rev;
      for (let i in obj) {
        value[i] = obj[i];
      }
      let res = await db.put(value);
    } catch (err) {
      console.log(err);
    }
  }
}

// let test = new dbMod();

// let me = {
//   name: "laryry",
//   age: 30,
//   loc: "nigeria"
// };

// test.get("person");
// test.update("person", me);
// test.get("person");