const db = require("../config/db");

const addInfo = (title, content, callback) => {
  const sql = "INSERT INTO information (title, content) VALUES (?, ?)";
  db.query(sql, [title, content], callback);
};

const getAllInfo = (callback) => {
  const sql = "SELECT * FROM information";
  db.query(sql, callback);
};
    
module.exports = { addInfo, getAllInfo };
