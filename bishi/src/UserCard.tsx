// UserCard.tsx
import React from 'react';
import { User } from './types';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { street, suite, city, zipcode } = user.address;

  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
      <div>用户名: {user.name}</div>
      <div>邮箱: {user.email}</div>
      <div>地址: {street}, {suite}, {city}, {zipcode}</div>
    </div>
  );
};

export default UserCard;