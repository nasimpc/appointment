const Company = require('../models/company');

exports.addCompany = async (req, res, next) => {
    try {

        console.log('controller,add');
        const name = req.body.name;
        const pros = req.body.pros;
        const cons = req.body.cons;
        const rating = req.body.rating;

        const data = await Company.create({ name: name, pros: pros, cons: cons, rating: rating });
        res.status(201).json({ newCompanyDetail: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}
exports.getCompany = async (req, res, next) => {
    try {

        const name = req.params.companyName;
        console.log(name);
        const companies = await Company.findAll({ where: { name: name } });
        res.status(200).json({ allCompanies: companies });
    }
    catch (error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({ error: error });
    }
}

