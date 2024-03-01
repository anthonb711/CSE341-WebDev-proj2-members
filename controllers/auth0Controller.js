const getAuth = ('/', ( req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


module.exports = { getAuth };

