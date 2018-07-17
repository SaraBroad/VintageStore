const db = require("../models")
var sequelize = require("sequelize");


db.sequelize.query('INSERT INTO Products (productName, price, size, description, inStock, imageOne, imageTwo, imageThree, createdAt, updatedAt) VALUES("The Navy Audrey", "84.99", "2", "This 60s navy beauty, originally sourced in a NYC thrift shop, has such an elegant cut. The fabric drapes and hugs your body in all the right places. Originally a long gown, it has been hemmed to a length that is perfect for a date night, or an office party.", true, "/images/1.jpg", "/images/2.jpg", null, now(), now()), ("Little Beaux Dress", "104.90", "4", "This vintage gem came to us from suburban Philadelphia looking almost like a prairie dress. Its sleeves were long, the skirt came down to the ankles and there was originally a black panel behind the bow on the back. Regardless, the potential was evident. After shortening the hem, sleeves and removing that panel to allow that beautiful bow detail to shine, this dress became a LBD treasure that works on any occasion.", true, "/images/3.jpg", "/images/4.jpg", null, now(), now()), ("You, Jane", "60.00", "4/6", "This rockabilly gem was sourced in Portland, Oregon. It is so flattering at the waist. This tough cotton beauty will forever give us major Tarzan and Jane vibes!", true, "/images/5.jpg", "/images/6.jpg", null, now(), now()), ("Dark Marilyn", "120.00", "4/6", "This Parisian stunner is difficult to part with. A cotton concoction of beautiful stitching, perfect pleats, and sexy layers, make this dress truly one of a kind. Sourced in Italy and worn all over the streets of Paris, this piece comes ready to add new beautiful moments to the tapestry of its existence.", true, "/images/7.jpg", "/images/8.jpg", null, now(), now()), ("Sway, Fay", "49.99", "2/4", "This beautiful two-piece set is what 70s dreams are made of. Made of a delicate 100% silk, it offers beautiful movement and is light enough to be a perfect choice for multiple seasons.", true, "/images/10.jpg", "/images/11.jpg", null, now(), now()), ("90s Floral Mini", "38.99", "2/4", "This navy and white floral mini is so flattering no matter your body type. The short skirt is beautifully offset but the ladylike ruffled neckline for a sweet & sexy combination!", true, "/images/12.jpg", "/images/13.jpg", null, now(), now()), ("Huttons Horseshoe", "88.99", "6/8", "This vintage Ralph Lauren number gives off major equestrian Lauren Hutton vibes. A flattering fit no for most sizes 2-8, this merino wool number is a perfect fall LBD.", true, "/images/14.jpg", "/images/15.jpg", "/images/16.jpg", curdate(), curdate()), ("Tuxedo Realness", "64.99", "4", "Own the boardroom in this heavy yet powerful rayon black tuxedo dress.", true, "/images/17.jpg", "/images/18.jpg", null, curdate(), curdate()), ("Goddess Print", "80.00", "2", "This one of a kind vintage piece was sourced in North Philadelphia. It came to us as a long skirt with a fairly tight bottom. A short trim and reworking of its gorgeous, flattering bodice gave this beauty new life.", true, "/images/19.jpg", "/images/20.jpg", null, curdate(), curdate()), ("Disco Squares", "48.99", "2/4/6/8", "This orange stretchy number is so beautiful and fun! Pair it with a sweet red lipstick and big hair and dance the night away!", true, "/images/21.jpg", "/images/22.jpg", null, curdate(), curdate()), ("Pollock Florals", "88.99", "6/8", "This vibrant, vintage day dress reminds us of the beautiful colors in a floral Jackson Pollock piece. Perfect for a day date or an easter lunch, this dress is sure to put you in a good mood!", true, "/images/23.jpg", "/images/24.jpg", null, curdate(), curdate()), ("Rose with Monet", "120.00", "4/6", "The Rose with Monet dress is exactly what it sounds like. A frock that is ideal for a afternoon of champagne picnicking. With its flattering light pleats and waistline, this dress is the definition of dreamy.", true, "/images/25.jpg", "/images/26.jpg", null, curdate(), curdate()), ("Jaquard LBD", "80.00", "4", "This black jaquard dress, has stitching details for days. With a V-neck & back; reminiscent of a 50s hoop style, this dress can easily go from cocktails to formal wear!", true, "/images/27.jpg", "/images/28.jpg", null, curdate(), curdate()), ("Black & Red Sailor", "50.00", "4", "This vintage inspired dress comes with a cute red slip that peeps out just so and adorable red flap and button detail on the back.", true, "/images/29.jpg", "/images/30.jpg", null, curdate(), curdate()), ("Pearls & Polkas", "70.00", "4/6", "This vintage polka-dot beauty is a beach day staple. Its lightweight fabric will not hold you down. Yet, with its darling details like the v-line back and pearl buttons, it can be easily taken from day to night with just a quick red lip application.", true, "/images/31.jpg", "/images/32.jpg", null, curdate(), curdate()), ("Blue Hawaiian Print", "50.00", "2-10", "This vintage summer dress came to us from Albania! It features a wonderfully stretchy waistline, and can fit a wide array of sizes. It is an ideal summer dress that will have you twirling its beautifully pleated skirt all day long.", true, "/images/33.jpg", "/images/34.jpg", "/images/35.jpg", curdate(), curdate()), ("Regal Red & Gold", "100.00", "6/8 P", "This vintage red & gold jaquard skirt is what holiday gala dreams are made of. The dress is intended for a regular to petite sized queen.", true, "/images/36.jpg", "/images/37.jpg", null, curdate(), curdate()), ("The Cindi", "120.00", "4/6", "This vintage 80s/90s gives us major Top Model vibes. It features a beautifully layered, ruffled skirt, a loose bodice and the most delicate of polka-dotted chiffon overlay.", true, "/images/38.jpg", "/images/39.jpg", "/images/40.jpg", curdate(), curdate()), ("Power Skirt", "90.00", "4/6", "This vintage wool skirt is another office staple for the fashion forward executive. It features a tight fitting high-waist and just above the ankle length that cuts a beautiful and slimming figure.", true, "/images/41.jpg", "/images/42.jpg", null, curdate(), curdate()), ("Slinky LBD", "60.00", "2/4", "This 90s beauty is something like a dressed up nightie. Just pair it with the right shoes, a killer pair of earrings and it is ready for a night on the town!", true, "/images/43.jpg", "/images/44.jpg", null, curdate(), curdate()), ("Everything at Tiffanys Skirt", "60.00", "6/8", "This perfect vintage skirt will have you feeling like a lady no matter what you decide to do in it. With a gorgeous waistline that tucks you in just so, this skirt has a slight sheen to it that makes it perfect for even a formal evening out.", true, "/images/45.jpg", null, null, curdate(), curdate()), ("The MaryAnne", "45.00", "0/2", "This gorgeous Gingham number brings us back to our Gilligans Island vibes. The sweet and sassy Mary-Anne dress is a perfect vintage choice for any day out.", true, "/images/46.jpg", "/images/47.jpg", null, curdate(), curdate());'),
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