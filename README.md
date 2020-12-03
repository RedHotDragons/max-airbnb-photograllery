## Get intro info  
- GET <code>/api/intros/:id</code>
Path Parameters:  
- <code>id</code> intro id  
**Success Status Code**: <code>200</code>  
**Returns**: JSON  
``` 
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
```

## Add intro info  
- POST <code>/api/intros</code>  
**Success Status Code**: <code>201</code>  
**Request Body**: Expects JSON with the following keys.  
```
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
```

## Add photo to intro info  
- POST <code>/api/intros/:id/photos</code>  
Path Parameters:  
- <code>id</code> intro id  
**Success Status Code**: <code>201</code>  
**Request Body**: Expects JSON with the following keys.  
```
{
  id: “Integer”, 
  photos: [ “String”, “String”, … ]
}
```

## Update intro info  
- PATCH <code>/api/intros/:id</code>  
Path Parameters:  
- <code>id</code> intro id  
**Success Status Code**: <code>204</code>  
**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)  
```
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
```

## Delete intro  
- DELETE <code>/api/intros/:id</code>  
Path Parameters:  
- <code>id</code> intro id  
**Success Status Code**: <code>204</code>  
 
## Delete photo from intro info  
- DELETE <code>/api/intros/:id/:photoNumber</code>  
Path Parameters:  
- <code>id</code> intro id  
- photoNumber order of photo  
**Success Status Code**: <code>204</code>  
