var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  const recipes={};
  return recipes
}
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({},key, value)
  return newObj
}
function deleteFromObjectByKey( object,key){
   var newObj = Object.assign({},key)
   delete newObj[key];
   return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object
  
}