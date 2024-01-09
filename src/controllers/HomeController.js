import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      first_name: "John",
      last_name: "Doe",
      email: "kenaa@example.com",
      age: 20,
      weight: 77.5,
      height: 2.5,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
