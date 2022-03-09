const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        image:String,
        description:String,
        repoLink:String,
        deployLink:String,
    }
)
const Project = model('Project',projectSchema)
module.exports = Project