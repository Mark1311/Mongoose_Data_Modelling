const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
    },
    addreshLine1: {
      type: String,
      required: ture,
    },
    addreshLine2: {
      type: String,
    },
    addreshLine3: {
      type: String,
    },
    pincode:{
        type:Number,
        required:ture
    },
    specializedIn: [{
        type:String
    }],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", HospitalSchema);
