const newPerson = {
  id: Math.random(), // not really unique but good enough here!
  name: "Max",
  age: Math.floor(Math.random() * 40),
};

const personReducer = (state = newPerson, action) => {
  const newState = [...state];

  if (action.type === "ADD_PERSON") {
    newState.push(action.payload.newPerson);
  }
};
