const mongoose = require("mongoose");

const lightbinSchema = mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("docs", lightbinSchema);
