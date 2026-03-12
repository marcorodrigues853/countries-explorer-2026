function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src={user.photo}
        alt={user.name}
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
      <span>{user.name}</span>
      <span>{user.currency}</span>
    </div>
  );
}

export default UserInfo;
