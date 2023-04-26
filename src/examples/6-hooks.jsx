export const getUser = () => ({
  name: "Joe",
  id: "123",
});

export const UserComponent = () => {
  const user = getUser();

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.firstName}</p>
    </div>
  );
};
