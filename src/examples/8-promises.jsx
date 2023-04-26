const apiCall = () => {
  return new Promise((resolve, reject) => {
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
