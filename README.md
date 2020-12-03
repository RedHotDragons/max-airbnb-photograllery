# airbnb-photogallery

## Get intro info
- GET /api/intros/:id
Path Parameters:
- id intro id
Success Status Code: 200
Returns: JSON
{
  id: “Integer”, 
  
  title: “String”,
  
  photos: [ “String”, “String”, … ],
  
  averageStars: “Double”,
  
  reviewCount: “Integer”,
  superhost: “Boolean”,
  city: “String”,
  state: “String”,
  country: “String”,
  homeType: “String”,
  host: “String”,
  guests: “Integer”,
  bedrooms: “Integer”,
  beds: “Integer”,
  baths: “Double”
}

## Add intro info
- POST /api/intros
Success Status Code: 201
Request Body: Expects JSON with the following keys.
{
  id: “Integer”, 
  title: “String”,
  photos: [ “String”, “String”, … ],
  city: “String”,
  state: “String”,
  country: “String”,
  homeType: “String”,
  host: “String”,
  guests: “Integer”,
  bedrooms: “Integer”,
  beds: “Integer”,
  baths: “Double”
}

## Add photo to intro info
- POST /api/intros/:id/photos
Path Parameters:
- id intro id
Success Status Code: 201
Request Body: Expects JSON with the following keys.
{
  id: “Integer”, 
  photos: [ “String”, “String”, … ]
}

## Update intro info
- PATCH /api/intros/:id
Path Parameters:
- id intro id
Success Status Code: 204
Request Body: Expects JSON with any of the following keys (include only keys to be updated)
{
  title: “String”,
  photos: [ “String”, “String”, … ],
  averageStars: “Double”,
  reviewCount: “Integer”,
  superhost: “Boolean”,
  city: “String”,
  state: “String”,
  country: “String”,
  homeType: “String”,
  host: “String”,
  guests: “Integer”,
  bedrooms: “Integer”,
  beds: “Integer”,
  baths: “Double”
}

## Delete intro
- DELETE /api/intros/:id
Path Parameters:
- id intro id
Success Status Code: 204
 
## Delete photo from intro info
- DELETE /api/intros/:id/:photoNumber
Path Parameters:
- id intro id
- photoNumber order of photo
Success Status Code: 204
