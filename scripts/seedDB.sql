const db = require("../../models")


INSERT INTO Product (productName, size, price, description, inStock, imageOne, imageTwo, imageThree, createdAt, updatedAt) VALUES("The Navy Audrey", "2", "84.99", "This 60's navy beauty, originally sourced in a NYC thrift shop, has such an elegant cut. The fabric drapes and hugs your body in all the right places. Originally a long gown, it has been hemmed to a length that is perfect for a date night, or an office party.", true, "/images/1.jpg", "/images/2.jpg", null, now(), now());