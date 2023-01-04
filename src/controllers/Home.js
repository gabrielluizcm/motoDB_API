class HomeController {
  index(req, res) {
    res.json({
      statusText: 'OK',
    });
  }
}

export default new HomeController();
