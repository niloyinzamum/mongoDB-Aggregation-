//Number of documents that don't have any rider property
db.testCollection.find().count()-db.testCollection.find({rider:{$exists: true}}).count()

//List of the riders with their parcel id who don't have more than 10 parcels
db.testCollection.aggregate(
    [
      {
        $match: {
          weight: {
            $lt: 10
          }
        }
      }, {$group: {_id: "$_id", "rider": { "$first": "$rider" }}}
    ]
  )

//List of the riders and their total collected amount
  db.testCollection.aggregate([
      {
          $group : {_id: "$_id", total : {$sum:"$amount"}}
      }
  ])