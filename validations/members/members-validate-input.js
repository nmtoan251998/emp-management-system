module.exports.inputValidate = (req,res,next) => {
    let errors = [];
    
    if(!req.body.name)
        errors.push('Name is required');
    if(!req.body.dob)
        errors.push('Date of birth is required');
    if(!req.body.phone)
        errors.push('Phone is required');
    if(!req.body.email)
        errors.push('Mail is required');
    if(!req.body.city)
        errors.push('City is required');

    if(errors.length){
        res.render('../views/members/members-create-view', {
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
};