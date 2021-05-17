const db = require('../config/db.config.js');
const Tutorial = db.Tutorial;




exports.create = (req, res) => {
    let tutorial = {};

    try{
        // Building tutorials object from upoading request's body
        tutorial.title = req.body.title;
        tutorial.description = req.body.description;
        tutorial.published = req.body.published;
        tutorial.published = req.body.published;
        tutorial.createdAt = new Date();
        tutorial.updatedAt = new Date();
   
    
        // Save to MySQL database
        Tutorial.create(tutorial).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a tutorial with id = " + result.id,
                tutorial: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Retrieve all tutorials from the database.
exports.findAll = (req, res) => {

    Tutorial.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving turials."
      });
    });
};




// Update a tutorials by the id in the request
exports.update = (req, res) => {
  
    console.log("req "+ JSON.stringify(req.body));
    const id = req.params.id;
    console.log("id "+ id);
    req.body.updatedAt = new Date();

    Tutorial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Delete a tutorials with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  
  
};

// Delete all a tutorials 
exports.deleteall = (req, res) => {



    Tutorial.destroy({
      where: {},
      truncate: true
    })
      .then(() =>{
        res.status(200).send({
          message: "Successfully deleted all record"
        });
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete all Tutorial"
        });
      });
  
  
};