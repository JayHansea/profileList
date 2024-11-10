import React from "react";

type UserData = {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  profilePhotoUrl: string;
};

interface TableProps {
  data: UserData[];
  onStatusToggle?: (index: number) => void;
  filterActiveStatus: boolean;
  onToggleFilter: () => void;
}

export const Table: React.FC<TableProps> = ({
  data,
  onStatusToggle,
  filterActiveStatus,
  onToggleFilter,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-5 text-left">Name</th>
            <th className="py-3 px-5 text-left">Email</th>
            <th className="py-3 px-5 text-left">Role</th>

            <th className="py-3 px-5 text-center flex items-center justify-center space-x-2">
              <span>Status</span>
              <button
                onClick={onToggleFilter}
                className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full text-sm transition duration-150"
              >
                {filterActiveStatus ? "Show Inactive" : "Show Active"}
              </button>
            </th>

            <th className="py-3 px-5 text-center">Profile Photo</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-10 text-center text-gray-500">
                {filterActiveStatus
                  ? "No active users found."
                  : "No inactive users found."}
              </td>
            </tr>
          ) : (
            data.map((user, index) => (
              <tr
                key={index}
                className="border-b text-gray-500 border-gray-200 hover:bg-gray-100 transition duration-150"
              >
                <td className="py-4 px-5">{user.name}</td>
                <td className="py-4 px-5">{user.email}</td>
                <td className="py-4 px-5">{user.role}</td>

                <td className="py-4 px-5 text-center">
                  {onStatusToggle ? (
                    <button
                      onClick={() => onStatusToggle(user.id)}
                      className={`${
                        user.isActive ? "bg-green-500" : "bg-red-500"
                      } text-white py-1 px-3 rounded-full text-sm transition duration-150`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </button>
                  ) : (
                    <span>
                      {user.isActive ? (
                        <span className="px-2 bg-green-500 rounded-full"></span>
                      ) : (
                        <span className="px-2 bg-red-500 rounded-full"></span>
                      )}
                    </span>
                  )}
                </td>

                <td className="py-4 px-5 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.profilePhotoUrl}
                    alt={`${user.name}'s profile`}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 object-cover"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
