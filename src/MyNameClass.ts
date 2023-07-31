export default class MyNameClass {
    FirstName: string;
    LastName: string;
  
    constructor(fname: string, lname: string) {
      this.FirstName = fname;
      this.LastName = lname;
    }
  
    getFullName() {
      return this.FirstName + ' ' + this.LastName;
    }
  
    getFirstName() {
      return this.FirstName;
    }
  
    getLastName() {
      return this.LastName;
    }
  }
  