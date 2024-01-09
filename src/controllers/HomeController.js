class HomeController {
  index(req, res) {
    res.json({ allGood: true });
  }
}

export default new HomeController();
