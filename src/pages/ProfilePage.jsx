
import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Tamilselvi",
    email: "tamilselvi@example.com",
    phone: "",
    address: "",
  });

  const [editedProfile, setEditedProfile] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleEdit = () => {
    setEditedProfile({ ...profile });
    setMessage("");
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...editedProfile });
    setIsEditing(false);
    setMessage("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
    setMessage("");
  };

  return (
    <div className="profile-page">
      <h2>👤 My Profile</h2>

      <div className="profile-card">
        <img
          src="https://via.placeholder.com/120"
          alt="User Avatar"
          className="profile-img"
        />

        <div className="profile-info">
          {isEditing ? (
            <form onSubmit={handleSave}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={editedProfile.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={editedProfile.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={editedProfile.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={editedProfile.address}
                onChange={handleChange}
                placeholder="Enter delivery address"
                rows="3"
              />

              <div className="profile-actions">
                <button type="submit" className="save-btn">
                  Save Changes
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone || "Not added"}</p>
              <p><strong>Address:</strong> {profile.address || "Not added"}</p>
              <p><strong>Past Orders:</strong> 12</p>

              <button className="edit-btn" onClick={handleEdit}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {message && (
        <p className="profile-message" role="status">
          ✓ {message}
        </p>
      )}
    </div>
  );
};

export default ProfilePage;

