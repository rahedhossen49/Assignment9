// Create a new collection.
db.createCollection("admin")

// Removes a collection from the database.
db.admin.drop()
// Inserts a single document into a collection.
db.users.insertOne({
    name: "Rahed Hossen",
    email: "xyz@gmail.com"
  })
//   Delete/remove a single document from the collection.
db.user.deleteOne({
    "name": "Rahed Hossen"
})
