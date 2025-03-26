const express = require("express");
const { getVolunteers, getVolunteer, addVolunteer, updateVolunteer, deleteVolunteer } = require("../controllers/volunteerController");

const router = express.Router();

// Volunteer routes
router.get("/volunteers", getVolunteers);
router.get("/volunteers/:id", getVolunteer);
router.post("/volunteers", addVolunteer);
router.put("/volunteers/:id", updateVolunteer);
router.delete("/volunteers/:id", deleteVolunteer);

module.exports = router;
