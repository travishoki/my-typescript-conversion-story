// Example 1:

export let num: number = 1;

num = "1";
num = {};
num = true;

// Example 2:

type User = {
  id: string;
  name: string;
};

const user: User = {
  id: "123",
  name: "joe",
};

export const updateUser = () => {
  user.potato = "foo";

  return user;
};

/*
Response:
Ooh! Protects you from changing the shape of a defined type.
You are forced to defined variables with more intent.
*/
