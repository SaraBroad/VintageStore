'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',
    [{
        productName: "The Navy Audrey",
        size: "2",
        price: "84.99",
        description: "This 60's navy beauty, originally sourced in a NYC thrift shop, has such an elegant cut. The fabric drapes and hugs your body in all the right places. Originally a long gown, it has been hemmed to a length that is perfect for a date night, or an office party.",
        inStock: true, 
        imageOne: "/images/1.jpg", 
        imageTwo: "/images/2.jpg",
        imageThree: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Little Beaux Dress",
        size: "4",
        price: "104.90",
        description: "This vintage gem came to us from suburban Philadelphia looking almost like a prairie dress. It's sleeves were long, the skirt came down to the ankles and there was originally a black panel behind the bow on the back. Regardless,the potential was evident. After shortening the hem, sleeves and removing that panel to allow that beautiful bow detail to shine, this dress became a LBD treasure that works on any occasion.",
        inStock: true, 
        imageOne:"/images/3.jpg", 
        imageTwo:"/images/4.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "You, Jane",
        size: "4/6",
        price: "60.00",
        description: "This rockabilly gem was sourced in Portland, Oregon. It is so flattering at the waist. This tough cotton beauty will forever give us major Tarzan and Jane vibes!", 
        inStock: true, 
        imageOne: "/images/5.jpg", 
        imageTwo: "/images/6.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        productName: "Dark Marilyn",
        size: "4/6",
        price: "120.00",
        description: "This Parisian stunner is difficult to part with. A cotton concoction of beautiful stitching, perfect pleats, and sexy layers, make this dress truly one of a kind. Sourced in Italy and worn all over the streets of Paris, this piece comes ready to add new beautiful moments to the tapestry of it's existence.", 
        inStock: true, 
        imageOne: "/images/7.jpg", 
        imageTwo: "/images/8.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Sway, Fay",
        size: "2/4",
        price: "49.99",
        description: "This beautiful two-piece set is what 70's dreams are made of. Made of a delicate 100% silk, it offers beautiful movement and is light enough to be a perfect choice for multiple seasons.", 
        inStock: true, 
        imageOne: "/images/10.jpg", 
        imageTwo: "/images/11.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "90's Floral Mini",
        size: "2/4",
        price: "38.99",
        description: "This navy and white floral mini is so flattering no matter your body type. The short skirt is beautifully offset but the ladylike ruffled neckline for a sweet & sexy combination!",
        inStock: true,  
        imageOne: "/images/12.jpg", 
        imageTwo: "/images/13.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Hutton's Horseshoe",
        size: "6/8",
        price: "88.99",
        description: "This vintage Ralph Lauren number gives off major equestrian Lauren Hutton vibes. A flattering fit for most sizes 2-8, this merino wool number is a perfect fall LBD.",
        inStock: true,  
        imageOne: "/images/14.jpg", 
        imageTwo: "/images/15.jpg", 
        imageThree: "/images/16.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Tuxedo Realness",
        size: "4",
        price: "64.99",
        description: "Own the boardroom in this heavy yet powerful rayon black tuxedo dress.", 
        inStock: true, 
        imageOne: "/images/17.jpg", 
        imageTwo: "/images/18.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Goddess Print",
        size: "2",
        price: "80.00",
        description: "This one of a kind vintage piece was sourced in North Philadelphia. It came to us as a long skirt with a fairly tight bottom. A short trim and reworking of it's gorgeous, flattering bodice gave this beauty new life.", 
        inStock: true, 
        imageOne: "/images/19.jpg", 
        imageTwo: "/images/20.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Disco Squares",
        size: "2/4/6/8",
        price: "48.99",
        description: "This orange stretchy number is so beautiful and fun! Pair it with a sweet red lip and big hair and dance the night away!", 
        inStock: true, 
        imageOne: "/images/21.jpg", 
        imageTwo: "/images/22.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Pollock Florals",
        size: "6/8",
        price: "88.99",
        description: "This vibrant, vintage day dress reminds us of the beautiful colors in a floral Jackson Pollock piece. Perfect for a day date or an easter lunch, this dress is sure to put you in a good mood!",
        inStock: true, 
        imageOne: "/images/23.jpg", 
        imageTwo: "/images/24.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        productName: "Rose with Monet",
        size: "4/6",
        price: "120.00",
        description: "The Rose with Monet dress is exactly what it sounds like. A frock that is ideal for a afternoon of champagne picnicking. With it's flattering light pleats and waistline, this dress is the definition of dreamy.", 
        inStock: true, 
        imageOne: "/images/25.jpg", 
        imageTwo: "/images/26.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Jaquard LBD",
        size: "4",
        price: "80.00",
        description: "This black jaquard dress, has stitching details for days. With a V-neck & back; reminiscent of a 50's hoop style, this dress can easily go from cocktails to formal wear!", 
        inStock: true, 
        imageOne: "/images/27.jpg", 
        imageTwo: "/images/28.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Black & Red Sailor",
        size: "4",
        price: "50.00",
        description: "This vintage inspired dress comes with a cute red slip that peeps out just so and adorable red flap and button detail on the back.", 
        inStock: true, 
        imageOne: "/images/29.jpg", 
        imageTwo: "/images/30.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Pearls & Polkas",
        size: "4/6",
        price: "70.00",
        description: "This vintage polka-dot beauty is a beach day staple. It's lightweight fabric won't hold you down. Yet, with it's darling details like the v-line back and pearl buttons, it can be easily taken from day to night with just a quick red lip application. ",
        inStock: true, 
        imageOne: "/images/31.jpg", 
        imageTwo: "/images/32.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Blue Hawaiian Print",
        size: "2-10",
        price: "50.00",
        description: "This vintage summer dress came to us from Albania! It features a wonderfully stretchy waistline, and can fit a wide array of sizes. It is an ideal summer dress that will have you twirling it's beautifully pleated skirt all day long.", 
        inStock: true, 
        imageOne: "/images/33.jpg", 
        imageTwo: "/images/34.jpg", 
        imageThree: "/images/35.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Goddess Print",
        size: "6/8",
        price: "80.00",
        description: "This vintage piece was sourced in North Philadelphia. It came to us as a long skirt with a fairly tight bottom. A short trim gave this beauty new life.", 
        inStock: true, 
        imageOne: "/images/19.jpg", 
        imageTwo: "/images/20.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        productName: "Regal Red & Gold",
        size: "6/8 P",
        price: "100.00",
        description: "This vintage red & gold jaquard skirt is what holiday gala dreams are made of. The dress is intended for a regular to petite sized queen.", 
        inStock: true, 
        imageOne: "/images/36.jpg", 
        imageTwo: "/images/37.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "The Cindi",
        size: "4/6",
        price: "120.00",
        description: "This vintage 80s/90s gives us major Top Model vibes. It features a beautifully layered, ruffled skirt, a loose bodice and the most delicate of polka-dotted chiffon overlay.", 
        inStock: true, 
        imageOne: "/images/38.jpg", 
        imageTwo: "/images/39.jpg", 
        imageThree: "/images/40.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Power Skirt",
        size: "4/6",
        price: "90.00",
        description: "This vintage wool skirt is another office staple for the fashion forward executive. It features a tight fitting high-waist and just above the ankle length that cuts a beautiful and slimming figure.", 
        inStock: true, 
        imageOne: "/images/41.jpg", 
        imageTwo: "/images/42.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Slinky LBD",
        size: "2/4",
        price: "60.00",
        description: "This 90s beauty is something like a dressed up nightie. Just pair it with the right shoes, a killer pair of earrings and it is ready for a night on the town!", 
        inStock: true, 
        imageOne: "/images/43.jpg", 
        imageTwo: "/images/44.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Everything at Tiffany's Skirt",
        size: "6/8",
        price: "60.00",
        description: "This perfect vintage skirt will have you feeling like a lady no matter what you decide to do in it. With a gorgeous waistline that tucks you in 'just so', this skirt has a slight sheen to it that makes it perfect for even a formal evening out.", 
        inStock: true, 
        imageOne: "/images/45.jpg",
        imageTwo: null, 
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "The MaryAnne",
        size: "0/2",
        price: "45.00",
        description: "This gorgeous Gingham number brings us back to our Gilligan's Island vibes. The sweet and sassy Mary-Anne dress is a perfect vintage choice for any day out.", 
        inStock: true, 
        imageOne: "/images/46.jpg", 
        imageTwo: "/images/47.jpg",
        imageThree: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  }, 

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
