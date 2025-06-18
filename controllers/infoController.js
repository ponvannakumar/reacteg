const Info = require("../models/infoModel");

exports.addInformation = (req, res) => {
  const { title, content } = req.body;
  Info.addInfo(title, content, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Information added", id: result.insertId });
  });
};

exports.getInformation = (req, res) => {
  Info.getAllInfo((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
