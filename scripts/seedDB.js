

db.sequelize.query("INSERT INTO Products (productName, size, price, description, inStock, imageOne, imageTwo, imageThree, createdAt, updatedAt) VALUES('The Navy Audrey', '2', '84.99', 'This 60s navy beauty, originally sourced in a NYC thrift shop, has such an elegant cut. The fabric drapes and hugs your body in all the right places. Originally a long gown, it has been hemmed to a length that is perfect for a date night, or an office party.', true, '/images/1.jpg', '/images/2.jpg', null, now(), now()"),
    function (err) {
        if (err) {
            return res.json(400, {
                response: {
                    code: 400,
                    message: 'An error appeared.'
                }
            });
        } else {
            console.log('succes');
            res.json(201, {
                response: {
                    code: 201,
                    message: 'Video has been added'
                }
            });
        }

    };