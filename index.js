var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},key, value)
  return 
}
function deleteFromObjectByKey( object,key){
   var newObj = Object.assign({},key)
   delete newObj[key];
   return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object
  
}