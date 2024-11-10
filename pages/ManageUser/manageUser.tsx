"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "~/components/Navbar";
import { Table } from "~/components/Table";
import initialData from "~/constants/data";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  profilePhotoUrl: string;
};

function ManageUser() {
  const [data, setData] = useState<User[]>([]);
  const [filterActiveStatus, setFilterActiveStatus] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("userProfiles");
    if (storedData) {
      setData(JSON.parse(storedData) as User[]);
    } else {
      setData(initialData);
      localStorage.setItem("userProfiles", JSON.stringify(initialData));
    }
  }, []);

  const handleStatusToggle = (id: number) => {
    const updatedData = data.map((user) =>
      user.id === id ? { ...user, isActive: !user.isActive } : user
    );
    setData(updatedData);
    localStorage.setItem("userProfiles", JSON.stringify(updatedData));
  };

  const handleToggleFilter = () => {
    setFilterActiveStatus((prevStatus) => !prevStatus);
  };

  const filteredData = data.filter(
    (user) => user.isActive === filterActiveStatus
  );

  return (
    <>
      <Navbar />
      <div className="p-8">
        <Table
          data={filteredData}
          onStatusToggle={handleStatusToggle}
          filterActiveStatus={filterActiveStatus}
          onToggleFilter={handleToggleFilter}
        />
      </div>
    </>
  );
}

export default ManageUser;
