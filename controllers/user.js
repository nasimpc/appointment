const User = require('../models/user');

exports.addUser = async (req, res, next) => {
    try {

        if (!req.body.phonenumber) {
            throw new Error('Phone number is madatory')
        }
        console.log(req.body);
        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;

        const data = await User.create({ name: name, email: email, phonenumber: phonenumber });
        res.status(201).json({ newUserDetail: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ allUsers: users });
    }
    catch (error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({ error: error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const uId = req.params.id;
        await User.destroy({ where: { id: uId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
