const { login } = require('../../PersistenceLayer/LoginDAO');

const LoginState = async (req, res) => {
    let id = req.body.id;
    let pass = req.body.pass;
    let role = req.body.role;
    let data = await login(id, pass, role);
    return res.status(200).json(data[0]);
};

module.exports = { LoginState };
