import multer from "multer";
import multerConfig from "../config/multerConfig";
import Photo from "../models/Photo";

const upload = multer(multerConfig).single("photo");

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      const { originalname: original_name, filename } = req.file;
      const { student_id } = req.body;

      const NewPhoto = await Photo.create({
        original_name,
        filename,
        student_id,
      });

      return res.json(NewPhoto);
    });
  }
}

export default new PhotoController();
