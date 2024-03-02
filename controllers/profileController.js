const getProfile = (req, res) => {
    // #swagger.tags = ['Profile']
  res.send(JSON.stringify(req.oidc.user));
};

module.exports = { getProfile };
