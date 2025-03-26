import React, { useState } from "react";
import VolunteerList from "../components/VolunteerList";
import VolunteerForm from "../components/VolunteerForm";

const Volunteers = () => {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  return (
    <div>
      <h1>Volunteer Management</h1>
      <VolunteerForm volunteer={selectedVolunteer} onSuccess={() => setSelectedVolunteer(null)} />
      <VolunteerList onEdit={setSelectedVolunteer} />
    </div>
  );
};

export default Volunteers;
