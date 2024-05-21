const user = {
  firstName: "Harry",
  lastName: "Maguire",
};

const createUserWithNewsLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewsLastName("Maguire", user);

console.log(newUser);
