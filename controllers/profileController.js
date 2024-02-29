const getProfile = (req, res) => {
   // console.log(JOSN.stringify(req.oidc.user));
 res.send(JOSN.stringify(req.oidc.user));
};

module.exports = { getProfile };
