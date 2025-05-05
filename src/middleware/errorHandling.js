const errorHandle = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { errorHandle };
