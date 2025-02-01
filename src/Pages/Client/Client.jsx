import React, { useState } from "react";

const Client = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });
  const [editIndex, setEditIndex] = useState(null); // Tracks the client being edited

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClient = () => {
    if (formData.name && formData.age && formData.phone && formData.email) {
      if (editIndex !== null) {
        // Update existing client
        const updatedClients = [...clients];
        updatedClients[editIndex] = formData;
        setClients(updatedClients);
        setEditIndex(null); // Exit edit mode
      } else {
        // Add new client
        setClients([...clients, { ...formData }]);
      }
      setFormData({ name: "", age: "", phone: "", email: "" });
    }
  };

  const handleEditClient = (index) => {
    setEditIndex(index); // Enter edit mode
    setFormData(clients[index]); // Populate form with client data
  };

  const handleDeleteClient = (index) => {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
    if (editIndex === index) {
      setEditIndex(null); // Exit edit mode if the deleted client was being edited
      setFormData({ name: "", age: "", phone: "", email: "" });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client Informatin Center</h1>

      {/* Form Section */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={handleAddClient}
          className={`btn ${
            editIndex !== null
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          {editIndex !== null ? "Update Client" : "Add Client"}
        </button>
      </div>

      {/* Table Section */}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{client.name}</td>
                <td className="border border-gray-300 px-4 py-2">{client.age}</td>
                <td className="border border-gray-300 px-4 py-2">{client.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{client.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEditClient(index)}
                    className="btn bg-yellow-500 text-white hover:bg-yellow-600 px-3 py-1 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClient(index)}
                    className="btn bg-red-500 text-white hover:bg-red-600 px-3 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="border border-gray-300 px-4 py-2 text-center text-red-500"
              >
                No clients available. Add some!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Client;
