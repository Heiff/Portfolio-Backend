const Blog = require('./BlogModel');
const Cotegory = require('./Cotegory');

const Relations = () => {
  Blog.belongsTo(Cotegory, {foreignKey: "cotegoryId"});
};

module.exports = Relations;