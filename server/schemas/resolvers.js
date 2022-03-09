const { Project  } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    projects: async ()=>{
      return await Project.find()
    },
    project: async (parent,{id})=>{
      return await Project.findById(id)
    }
    // users: async () => {
    //   return await User.find().populate("recipes");
    // },
    // user: async (parent, { id }) => {
    //   return await User.findById(id).populate("recipes");
    // },

    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate("recipes");
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
  Mutation: {

  addProject: async (parent, { title,image,description,repoLink,deployLink }) => {
        const project = await Project.create({ title,image,description,repoLink,deployLink });

        return { project };
      },

  },
};
module.exports = resolvers;
