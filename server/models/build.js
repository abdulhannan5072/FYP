const mongoose = require("mongoose");

const buildschema = mongoose.Schema(
  {
    build: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
    createdDate: {
      type: String,
      require: true,
    },
    createdBy: {
      type: String,
      require: true,
    },
    project: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Build = mongoose.model("Build", buildschema);
module.exports = { Build };
