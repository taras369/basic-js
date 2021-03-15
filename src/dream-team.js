
module.exports = function createDreamTeam(members) {
  let result = '';
  if (!Array.isArray(members)) {return false;}
  members.forEach(member => {
    if(typeof(member) === 'string') {
      result += member.trim()[0];  
    }
  }); 
  return result.toUpperCase().split('').sort().join('');
};
