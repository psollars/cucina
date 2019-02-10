const testController = {
  param: (req, res) => {
    console.log(req.params);
    console.log(req.query);
    try {
      res.json("params yo");
    } catch (error) {
      res.json(error);
    }
  },

  test: (req, res) => {
    try {
      res.json("yo from the controller");
    } catch (error) {
      res.json(error);
    }
  },

  test2: (req, res) => {
    try {
      res.json("post from the controller");
    } catch (error) {
      res.json(error);
    }
  }
};

module.exports = testController;
