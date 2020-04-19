/**
 * A queryReference object is an object that represents the  "current" place in the database that we are querying.
 * 
 * We get them by calling either:
 *  firestore.doc('users/:userId');
 * firestore.collections('users');
 * 
 * The queryReference object does not have the actual data of the collection or document. It instead has properties that
 * tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for . 
 * 
 * 
 * DocumentReference vs CollectionReference
 * 
 * We use documentRef objects to perform our CRUD methods (create,retrieve,update,delete). The documentRef methods are 
 * .set() .get() .update() .delete() respectively
 * 
 */