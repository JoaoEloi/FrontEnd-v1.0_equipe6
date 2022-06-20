import "./style.scss";

import { Avatar } from "@mui/material";

export default function UserAvatar() {
  return (
    <>
      <div className="user-avatar-container">
        <Avatar>J</Avatar>
      </div>
      <h1 className="user-avatar-title">Olá, João</h1>
    </>
  );
}
