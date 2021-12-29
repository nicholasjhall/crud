import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [oldPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Current Password..."
        onChange={(event) => {
          setCurrentPassword(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />

      <button
        onClick={() => {
          updatePassword({
            variables: {
              username: username,
              oldPassword: oldPassword,
              newPassword: newPassword,
            },
          });
        }}
      >
        UPDATE PASSWORD
      </button>
    </div>
  );
}

export default UpdatePassword;
