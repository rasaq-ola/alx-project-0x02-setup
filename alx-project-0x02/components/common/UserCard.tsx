import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
