import Student from "../models/Student";

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ error: ["Student not found"] });
      }

      return res.json(student);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.json(newStudent);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ error: ["Student not found"] });
      }

      const newStudentData = await student.update(req.body);

      return res.json(newStudentData);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ error: ["Student not found"] });
      }
      await student.destroy();
      return res.json({ msg: "Student deleted" });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new StudentController();
