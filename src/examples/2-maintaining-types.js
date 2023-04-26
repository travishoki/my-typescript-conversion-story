// Example 1:

export let num = 1;

num = "1";
num = {};
num = true;

// Example 2:

const user = {
  id: "123",
  name: "joe",
};

export const updateUser = () => {
  user.potato = "foo";

  return user;
};
