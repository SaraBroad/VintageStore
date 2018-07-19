var shippo = require('shippo')("shippo_test_21e0c18e6e38cb28ffc3dc545bb2a1596d2f44fe")

var addressFrom  = {
    "name": "Shawn Ippotle",
    "company": "Shippo",
    "street1": "215 Clayton St.",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94117",
    "country": "US",
    "phone": "+1 555 341 9393",
    "email": "shippotle@goshippo.com",
};

var addressTo = {
    "name": "Mr Hippo",
    "company": "",
    "street1": "Broadway 1",
    "street2": "",
    "city": "New York",
    "state": "NY",
    "zip": "10007",
    "country": "US",
    "phone": "+1 555 341 9393",
    "email": "mrhippo@goshippo.com",
    "metadata": "Hippos dont lie"
};

var parcel = {
    "length": "5",
    "width": "5",
    "height": "5",
    "distance_unit": "in",
    "weight": "2",
    "mass_unit": "lb"
};

var shipment = {
    "address_from": addressFrom,
    "address_to": addressTo,
    "parcels": [parcel],
};

shippo.transaction.create({
    "shipment": shipment,
    "carrier_account": "078870331023437cb917f5187429b093",
    "servicelevel_token": "usps_priority"
}, function(err, transaction) {
    // asynchronously called
});