import React, { useState } from "react";

// You can either use a dedicated file for API functions, or import Axios if you need it.
import axios from "axios";  // or your API handling module if you have one.

const VolunteerForm = ({ addVolunteer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      try {
        setLoading(true);
        // If you are sending data to an API, like so:
        // Make sure the endpoint is correct and the backend API is working
        const response = await axios.post("http://localhost:5000/api/volunteers", {
          name,
          email,
        });

        // If the response is successful, you can add it to the state
        addVolunteer(response.data);

        // Reset form fields after submitting
        setName("");
        setEmail("");
      } catch (error) {
        console.error("Error adding volunteer:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Volunteer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Volunteer Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Volunteer"}
      </button>
    </form>
  );
};

export default VolunteerForm;
