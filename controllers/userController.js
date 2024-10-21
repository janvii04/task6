const Models = require("../models/index");
const postMultipleData = require("../models/postMultipleData");


Models.postModel.belongsTo(Models.userModel,{
  foreignKey:"userId",
  as: "userPost"
})
Models.userModel.hasMany(Models.postModel,{
  foreignKey:"userId",
  as: "postUser"
})
Models.postMultipleData.hasMany(Models.postMultipleData,{
  foreignKey:"userId",
  as:"userPostMultipleData"
}
)
module.exports = {
  insert: async (req, res) => {
    try {
    
      let objToSave = {
        name: req.body.name
      };
      let response = await Models.userModel.create(objToSave);
      return res.status(201).send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
 
  getRecord: async (req, res) => {
    try {
      let result = await Models.userModel.findAll();
      return res.send(result);
    } catch (error) {
      console.log(error); 
      throw error;
    }
  },

  insertPost: async (req, res) => {
    try {
      let objToSave = {
        post: req.body.post,
        userId:req.body.userId
      };
      let response = await Models.postModel.create(objToSave);
      return res.status(201).send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  findPostByUser: async (req, res)=> {
    try {
      let response = await Models.userModel.findAll({
        include: [
          {
            model: Models.postModel,
            required: false,
            as: "postUser"
          }
        ]
      })
      
      res.send(response);
    } catch (error) {
      console.log(error)
      throw error
    }
  },


  postMultipleData: async (req, res) => {
    try {
      const response = await Models.userModel.findAll({
        include: [
          {
            model: Models.postMultipleData,
            required: false,
            as: "userPostMultipleData",
          },
        ],
      });
  
      res.send(response)
      
    } catch (error) {
      console.log(error)
      throw error
      
      }
   }
  };
  
  
  
  
  

 
  
  
