const addPersonToGroup = (acc, currentPerson, groupKey) => {
  const currentArray = acc[groupKey] || [];
  currentArray.push(currentPerson);
  acc[groupKey] = currentArray;
  return acc;
};

module.exports.groupAdultsByAgeRange = function(people) {
  return people
    .filter(person => person.age >= 18)
    .reduce((acc, cur) => {
      if (cur.age <= 20) {
        return addPersonToGroup(acc, cur, `20 and younger`);
      }
      if (cur.age >= 21 && cur.age <= 30) {
        return addPersonToGroup(acc, cur, "21-30");
      }
      if (cur.age >= 31 && cur.age <= 40) {
        return addPersonToGroup(acc, cur, "31-40");
      }
      if (cur.age >= 41 && cur.age <= 50) {
        return addPersonToGroup(acc, cur, "41-50");
      }
      if (cur.age >= 51) {
        return addPersonToGroup(acc, cur, "51 and older");
      }
      return acc;
    }, {});
};
//console.log(groupAdultsByAgeRange(people))
