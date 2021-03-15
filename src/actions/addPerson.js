const addPerson = (operator, index) => {
  return {
    type: "ADD_PERSON",
    payload: { newPerson, index },
  };
};

export default addPerson;
