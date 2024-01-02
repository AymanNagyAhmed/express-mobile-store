const AuthController = {
  register: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  },
  login: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  },
};
module.exports = AuthController;
