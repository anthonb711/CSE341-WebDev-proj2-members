const getProfile = (req, res) => {
    // #swagger.tags = ['Profile']
    /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  res.send(JSON.stringify(req.oidc.user));
};

module.exports = { getProfile };
