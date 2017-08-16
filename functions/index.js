const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
exports.handleCreateFile = functions.database.ref('/files/{fileId}')
  .onCreate(event => {
    const fileId = event.params.fileId;
    const file = event.data.val();
    const string = `/folders/${file.parent}/children/${fileId}`;
    const childRef =
      event.data.ref.parent.parent
        .child('folders').child(file.parent)
        .child('children').child(fileId);
    return childRef.set(true);
  });
