const Volunteer = require("../models/volunteer");

// Get all volunteers
const getVolunteers = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const volunteers = await Volunteer.find(query).sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteers", error: error.message });
  }
};

// Get a single volunteer
const getVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json(volunteer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteer", error: error.message });
  }
};

// Add a volunteer
const addVolunteer = async (req, res) => {
  try {
    const { name, email, phone, events, status } = req.body;

    // Check if volunteer with email already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: "A volunteer with this email already exists" });
    }

    const volunteer = await Volunteer.create({
      name,
      email,
      phone,
      events,
      status: status || "active"
    });

    res.status(201).json(volunteer);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Validation Error", errors: Object.values(error.errors).map(err => err.message) });
    }
    res.status(500).json({ message: "Error creating volunteer", error: error.message });
  }
};

// Update volunteer details
const updateVolunteer = async (req, res) => {
  try {
    const { name, email, phone, events, status } = req.body;
    const volunteer = await Volunteer.findById(req.params.id);

    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }

    // Check if email is being changed and if it's already taken
    if (email && email !== volunteer.email) {
      const existingVolunteer = await Volunteer.findOne({ email });
      if (existingVolunteer) {
        return res.status(400).json({ message: "A volunteer with this email already exists" });
      }
    }

    // Update fields if provided
    if (name) volunteer.name = name;
    if (email) volunteer.email = email;
    if (phone) volunteer.phone = phone;
    if (events) volunteer.events = events;
    if (status) volunteer.status = status;

    const updatedVolunteer = await volunteer.save();
    res.json(updatedVolunteer);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Validation Error", errors: Object.values(error.errors).map(err => err.message) });
    }
    res.status(500).json({ message: "Error updating volunteer", error: error.message });
  }
};

// Delete a volunteer
const deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }

    await volunteer.deleteOne();
    res.json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting volunteer", error: error.message });
  }
};

module.exports = {
  getVolunteers,
  getVolunteer,
  addVolunteer,
  updateVolunteer,
  deleteVolunteer
};
