const multer = require("multer");
const { extname, resolve } = require("path");

// generate random number between 10 000 and 20 000
const random = () => Math.floor(Math.random() * 10000 + 10000);

multer({});
module.exports = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      return cb(new multer.MulterError("File must be png or jpeg"));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`); // setting filename to date in ms and file extension
    },
  }),
};
