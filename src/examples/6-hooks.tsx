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

/*
Response:
Ok, that's useful.
You will know the shape of the hook's returned value.
Helps when passing variables around.
*/
