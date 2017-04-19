const mockUser = {
  email:"j@gmail.com",
  name:"jay",
  uid:"F8bqpTEph1UMR4WRsXS092G3kUO2"
}

const mockItinerary = {
    description: "this is a tour from Jay",
    destinations:[
        {
          markers:[
            {
              position:{
                lat: 39.725646102034084,
                lng:-104.9307632446289
              }
            }
          ],
          place:"asdf",
          placeDescription:"asdf"
        }
      ],
     display:"none",
     id:1492470172298,
     place:"",
     placeDescription:"",
     title:"jay",
     uid:"F8bqpTEph1UMR4WRsXS092G3kUO2"
   }

const mockItineraries = [
  {
    description: "something else",
    destinations:[
        {
          markers:[
            {
              position:{
                lat: 39.725646102034084,
                lng:-104.9307632446289
              }
            }
          ],
          place:"brew",
          placeDescription:"tour"
        }
      ],
     display:"none",
     id:1492470172298,
     place:"",
     placeDescription:"",
     title:"something",
     uid:"F8bqpTEph1UMR4WRsXS092G3kUO2"
   },
  {
    description: "brewery tour around denver",
    destinations:[
        {
          markers:[
            {
              position:{
                lat: 39.725646102034084,
                lng:-104.9307632446289
              }
            }
          ],
          place:"brew",
          placeDescription:"tour"
        }
      ],
     display:"none",
     id:1492470172292,
     place:"",
     placeDescription:"",
     title:"jay",
     uid:"F8bqpTEph1UMR4WRsXS092G3kUO2"
   },
   {
     description: "museum tour around denver",
     destinations:[
         {
           markers:[
             {
               position:{
                 lat: 39.725646102034084,
                 lng:-104.9307632446289
               }
             }
           ],
           place:"asdf",
           placeDescription:"asdf"
         }
       ],
      display:"none",
      id:1492470172295,
      place:"",
      placeDescription:"",
      title:"museum tour",
      uid:"DoOPaXplZbdp7ZU9mTLfTCjQfAc2"
    }
 ]

 export { mockUser, mockItinerary, mockItineraries }
