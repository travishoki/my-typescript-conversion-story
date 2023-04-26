type User = {
  id: string;
  name: string;
};

const apiCall = (): Promise<User> => {
  return new Promise((resolve, _reject) => {
    const user = {
      id: "123",
      name: "joe",
    };
    resolve(user);
  });
};

apiCall()
  .then((user) => {
    console.log(`username: ${user.name}`);
    console.log(`firstname: ${user.firstname}`);
  })
  .catch((err) => {
    console.log("err:");
    console.dir(err);
  });

/*
Response:
Oh! I like promises letting me know what's going to be returned.
*/
