const mongoose = require("mongoose");

const DocterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
    },
    salery: {
      type: Number,
      required: ture,
    },
    qualification: {
      type: String,
      required: ture,
    },
    experienceInYears:{
        type:Number,
        default:0,
        required:ture
    },
    workInHospitals:[{
        type: mongoose.Schema.type.ObjectId,
        ref:'Hospital'
    }]
  },
  { timestamps: true }
);

export const Docter = mongoose.model("Docter", DocterSchema);
