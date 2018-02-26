/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  var count=0;
  for (var i=0;i<preferences.length;i++){
    var x=preferences[i];
    var y=preferences[x-1];
    var z=preferences[y-1];
    if (z-1==i&&y!=z) {
      count++;
    }
  }
  return Math.floor(count/3);
};
