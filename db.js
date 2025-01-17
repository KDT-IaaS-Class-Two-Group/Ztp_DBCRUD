const db = require('better-sqlite3');

class DatabaseController{
  constructor() {
    this.db = new db('./db/user_data.db', { verbose: console.log });
  }

  insertUserData(mail, name, pw) {
    let register = this.db.prepare('insert into user (email, name, password) values (?, ?, ?)');
    register.run(mail, name, pw);
    return true;

  }

  checkUserEmail(email) {
    let checkEmail = this.db.prepare(`SELECT * FROM user where email = ?`)
    let result = checkEmail.get(email);

    result !== undefined ?
      result = true :
      result = false;
    return result;
  }


  checkLoginData(email, pw) {
    let checkLogin = this.db.prepare(`SELECT * FROM user where email = ? AND password = ?`);

    let result = checkLogin.get(email, pw);

    return result;
  }

}
module.exports = DatabaseController;