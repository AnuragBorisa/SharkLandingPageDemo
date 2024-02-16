import FormData from "../models/formdata.js";

const postFormData = async (req, res) => {
  const { fullName, email, phoneNumber } = req.body;
  try {
    const newUser = new FormData({
      fullName,
      email,
      phoneNumber,
    });
    await newUser.save();
    return res.json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
export default postFormData;
