class HomeController {
  index(req, res) {
    res.send({
      statusText: 'OK',
    });
  }
}

export default new HomeController();
