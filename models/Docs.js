/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 10-10-2021
 * @modify date 11-10-2021
 * @desc [Database model Schema]
 */

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
