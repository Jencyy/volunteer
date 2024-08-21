    const generateUniqueId = require("generate-unique-id");

    let volunteers = [];

    const defaultCon = (req, res) => {
   
        res.render('index', { volunteers });
    };
   const addFormCon = (req, res) => {
   
    res.render('addForm');
}
    const addVolunteerCon = (req, res) => {
 
        const newVolunteer = {
            id: generateUniqueId({
                length: 12,
                useLetters: false
            }), 
            ...req.body
        };
        volunteers = [...volunteers, newVolunteer]
    
        res.redirect('/');
    };

    const singleRecordCon = (req, res) => {
  
        const volunteer = volunteers.find(v => v.id === req.params.id);
        res.render('editForm', { volunteer });
    }

    const updatedRecCon = (req, res) => {

        volunteers = volunteers.map(v => v.id === req.params.id ? { id: v.id, ...req.body } : v);
        res.redirect('/');
    };

    const deleteRecCon = (req, res) => {
    
        volunteers = volunteers.filter(v => v.id !== req.params.id);
        res.redirect('/');
    }

    module.exports = { 
        defaultCon, 
        addVolunteerCon, 
        singleRecordCon, 
        updatedRecCon, 
        deleteRecCon ,
        addFormCon
    };
