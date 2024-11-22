'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        roomId: 1,
        stars: 4,
        review: 'What an incredible cabin! Our family of 11 had a great time - the grand-kids loved the game room and theater, the grownups had fun lounging in the living room or sitting out on the deck. Communication with the property manager was easy and fast. Highly recommend!'
      },
      {
        userId: 3,
        roomId: 1,
        stars: 5,
        review: 'Beautiful property nestled in a very prime location! Panoramic views!'
      },
      {
        userId: 2,
        roomId: 6,
        stars: 5,
        review: 'Where do I begin… this cabin in the woods is magical. It is easy to feel one with the surrounding gorgeous nature because of the unique mirrored walls. The hosts were super easy to communicate with and left us a bottle of Prosecco.'
      },
      {
        userId: 9,
        roomId: 6,
        stars: 5,
        review: 'It is a unique romantic place well worth the money. The hosts left us binoculars for watching wildlife (we saw some birds). Shampoo and conditioner were top notch, and the view from the jacuzzi is pretty unbeatable. '
      },
      {
        userId: 3,
        roomId: 6,
        stars: 5,
        review: 'This place is AMAZING! Wood fired hot tub with a killer view. Looks even better than the pictures. The hosts are very hospitable as well!'
      },
      {
        userId: 7,
        roomId: 1,
        stars: 4,
        review: 'We had a great time! It was crazy snowing while we stayed and the house was really amazing, warm and cozy! Big enough for 12 people ( 6 adults and 6 kids).'
      },
      {
        userId: 8,
        roomId: 1,
        stars: 4,
        review: 'Everything was super clean and towels were folded like in a hotel room. Everything is well organized in the house and the communication with the host was quick and helpful! '
      },
      {
        userId: 3,
        roomId: 2,
        stars: 5,
        review: 'Magical little escape outside the city, beautifully furnished, very calm with an amazingly visible sky.'
      },
      {
        userId: 1,
        roomId: 2,
        stars: 5,
        review: 'Great place, friendly hospitality and nice service for a getaway trip. Highly recommended!'
      },
      {
        userId: 1,
        roomId: 3,
        stars: 3,
        review: 'Excellent villa in Ubud. Our stay was very smooth from checkin to checkout. The area is really beautiful.'
      },
      {
        userId: 2,
        roomId: 3,
        stars: 5,
        review: 'Wonderful stay. We fell in love with Ubud as this is such a beautiful area. The villa is really great, brand-new, confortable with a large swimming pool. Highly recommended.'
      },
      {
        userId: 2,
        roomId: 5,
        stars: 4,
        review: 'Beautifully renovated cabin with a great deck and wonderful location! We could walk right down to a nearby beach and the marina was less than a 5 minute drive.'
      },
      {
        userId: 3,
        roomId: 5,
        stars: 5,
        review: 'Beautifully renovated cabin with a great deck and wonderful location! We could walk right down to a nearby beach and the marina was less than a 5 minute drive. All super accessible.'
      },
      {
        userId: 9,
        roomId: 5,
        stars: 5,
        review: 'The cabin is well appointed and tastefully decorated - nice modern/woodsy vibe.'
      },
      {
        userId: 2,
        roomId: 9,
        stars: 5,
        review: 'Hands down one of the most magical places I have ever stayed in. The lake and mountain view are beautiful and the house adds to all the charm with its fireplace, sauna, and beautiful rustic wood interior'
      },
      {
        userId: 8,
        roomId: 9,
        stars: 5,
        review: 'The host was very attentive of us and provided us with a fridge full of water, yogurt, and juice. We felt very well looked after. You will not regret staying here!'
      },
      {
        userId: 7,
        roomId: 9,
        stars: 5,
        review: 'If you are looking for everything you could want from a relaxing stay in the lake como area, this is it. At the same time you will have a comfortable residence as well as direct lakeside access without having to go to public beaches. Amazing stay with plenty of amenities!'
      },
      {
        userId: 3,
        roomId: 4,
        stars: 5,
        review: 'The first time I experienced the house, I was blown away by all of the uncompromising details. This is far from living in a museum, though. It is a living, breathing home that continuously unlocks awe.'
      },
      {
        userId: 3,
        roomId: 7,
        stars: 5,
        review: 'Villa Samira was an amazing stay! Our very large group of ladies enjoyed ourselves immensely. The staff was very accommodating and treated us like royalty. The villa was very clean, all of the bedrooms were superior! Thank you Elite Havens for a very enjoyable vacation.'
      },
      {
        userId: 4,
        roomId: 7,
        stars: 5,
        review: 'Villa Samira is really suitable for relaxing, nice view, good weather and cool breeze, We can lay down near the pool for all night long with the whole family. This is the happy time and time fly.'
      },
      {
        userId: 1,
        roomId: 7,
        stars: 4,
        review: 'To the team at Villa Samira, We enjoy our great stay here. Your warm welcome and hospitality is really touching. Thanks a million for your sweet, kind & professional service. Keep up the good work & spirit.'
      },
      {
        userId: 2,
        roomId: 8,
        stars: 4,
        review: 'We absolutely LOVED the house, location and staff at Enclave 7. It was perfect for an adults getaway and we had a fantastic time celebrating my birthday there.I would highly recommend staying at the home as the beach is beautiful and the home is beautiful.'
      },
      {
        userId: 6,
        roomId: 8,
        stars: 4,
        review: 'We had the best time. Amazing house for a big group of people, awesome location(right on the beach and close to the airport), and excellent recommendations for food, etc. Thank you!'
      },
      {
        userId: 3,
        roomId: 9,
        stars: 5,
        review: 'Hands down one of the most magical places I have ever stayed in. The lake and mountain view are beautiful and the house adds to all the charm with its fireplace, sauna, and beautiful rustic wood interior.'
      },
      {
        userId: 5,
        roomId: 9,
        stars: 5,
        review: 'This is the most incredible, spectacular place on the lake. You will not find a better place for a better price — trust me! The home has everything you need — including air conditioning!'
      },
      {
        userId: 9,
        roomId: 9,
        stars: 5,
        review: 'We arrived, set our bags down, and were swimming in the lake in front of the property within the first five minutes. A very clear & clean spot on the lake, too! From the back yard we watched the sunset over the top of Bellagio. Beautiful!'
      },
      {
        userId: 2,
        roomId: 10,
        stars: 5,
        review: 'Incredible experience! If you happen to be in this area, this is a must. It is super unique and very new inside and out. Check in and check out process was seamless and host is very helpful. Definitely recommend!'
      },
      {
        userId: 1,
        roomId: 10,
        stars: 4,
        review: 'This place is awesome and cute and the hosts are Super friendly! The room was spotless. It rained when we were there so it was really cozy inside. The cafe also serves really nice food and coffee. Definitely recommend staying here!'
      },
      {
        userId: 7,
        roomId: 10,
        stars: 5,
        review: 'This would be the best place we have stayed and we have traveled the world and stayed at some amazing places. The hosts created a very special place that is so unique and peaceful.'
      },
      {
        userId: 4,
        roomId: 10,
        stars: 5,
        review: 'The food at the restaurant was amazing which we would rate close a Michelin Star. We would very much highly recommend booking and stay here. Final words WOW what a amazing place!'
      },
      {
        userId: 7,
        roomId: 11,
        stars: 4,
        review: 'This is not just a great place to stay, it is a magical place to disconnect from the outside world and reconnect with each other.'
      },
      {
        userId: 6,
        roomId: 11,
        stars: 5,
        review: 'The reviews speak for themselves. It is such a nice escape to unwind and relax. It is remote, but you do have cell service and are close enough that you can explore surrounding areas like Cullman and Birmingham. We loved the privacy!'
      },
      {
        userId: 8,
        roomId: 11,
        stars: 5,
        review: 'We loved listening to all the animals while drinking coffee outside, and exploring the property. They have thought of almost everything (extra batteries, toiletries, etc., bikes for riding around the property, etc.) We can’t wait to go back in winter to enjoy the pond more!'
      },
      {
        userId: 1,
        roomId: 12,
        stars: 5,
        review: 'STUNNING villa with authentic architecture and beautifully considered design. The villa provides everything you need to have a fantastic holiday with family or friends - pool, indoor and outdoor kitchen, pingpong table, sound system, hammocks and pool toys!'
      },
      {
        userId: 2,
        roomId: 12,
        stars: 5,
        review: 'My family and I had a wonderful stay in this home. The house is beautiful and the pool is sparkling and quite refreshing on the hot June days. We loved having the outdoor kitchen, and the house was equipped with everything we needed.'
      },
      {
        userId: 6,
        roomId: 12,
        stars: 4,
        review: 'The house is very well located for exploring all of the wonderful nearby towns and for taking longer day trips. We are already looking forward to our return!'
      },
      {
        userId: 2,
        roomId: 13,
        stars: 5,
        review: 'This is a beautiful house in an beautiful location and stunning views. This host was remarkable, available for every need and really made us feel like his personal house guests. Hope to come here again!'
      },
      {
        userId: 5,
        roomId: 13,
        stars: 5,
        review: 'We have stayed in many Airbnb’s over the past few years and we can say, without a doubt, this is the best experience we have ever had.'
      },
      {
        userId: 7,
        roomId: 13,
        stars: 4,
        review: 'The villa is absolutely stunning, spotlessly clean and every little detail has been thought of. The location is amazing, so close to the beautiful lake and beach; we had so much fun.'
      },
      {
        userId: 6,
        roomId: 13,
        stars: 4,
        review: 'The space was lovely and worked well for our group of two families. The pool area had a great view and was very nice. This would be a lovely place to stay in high season.'
      },
      {
        userId: 6,
        roomId: 14,
        stars: 5,
        review: 'My friends and I had a great time! The house is very tastefully furnished, the garden invites you to relax or have a barbecue in the evening. The city beach is just a few minutes walk away, by Uber you will find some other nice beaches around.'
      },
      {
        userId: 1,
        roomId: 15,
        stars: 5,
        review: 'We came with a party of 6 for my daughters 21st. Everyone stayed comfortably and loved the house. It was super clean and everything worked perfectly. There was also an amazing view where you could see animals and tons of nature. Will definitely be back to this beautiful home. We loved it!!'
      },
      {
        userId: 1,
        roomId: 16,
        stars: 5,
        review: 'The Sea Ranch House is a dream location in the forest, and was exactly what we were looking for in terms of a tranquil, cozy escape, would highly recommend!'
      },
      {
        userId: 1,
        roomId: 18,
        stars: 5,
        review: 'Absolutely fantastic place. Beautiful private villa, gorgeously decorated and very stylish. Wish I could buy this property and live here!!! Host was amazing and very responsive. Thanks for the lovely stay. This was a very romantic getaway!'
      },
      {
        userId: 1,
        roomId: 19,
        stars: 5,
        review: 'House is beautiful! One of the few chic rentals in Tahoe that is updated modern and still cozy. We loved everything about our stay here!'
      },
      {
        userId: 2,
        roomId: 21,
        stars: 5,
        review: 'My entire stay was perfect. Everyone goes above and beyond to help, make you feel safe and comfortable.'
      },
      {
        userId: 5,
        roomId: 21,
        stars: 3,
        review: 'I had issues with ordering food one night and Oka helped me get it straightened out. He was always ready and willing to help. And his dogs are super sweet ☺️ They remember your name and are there to greet you every time you leave/return.'
      },
      {
        userId: 4,
        roomId: 21,
        stars: 5,
        review: 'Such an amazing, unique stay in Bali. The treehouse is exactly as described and looks like all the photos - all of our friends were jealous lol the location in Ubud is amazing.'
      },
      {
        userId: 6,
        roomId: 21,
        stars: 5,
        review: 'Close to lots of activities and great, lively restaurants. The hosts were so friendly and attentive. We loved getting a floating breakfast in the morning and seeing the sunrise from bed. Definitely recommend!'
      },
      {
        userId: 7,
        roomId: 21,
        stars: 5,
        review: 'We had an amazing stay at Rescape, the staff was very friendly and the location was great!'
      },
      {
        userId: 2,
        roomId: 22,
        stars: 5,
        review: 'The villa was absolutely gorgeous, exactly as it is pictured on here. My friends and I had a lovely time and will definitely visit again.'
      },
      {
        userId: 4,
        roomId: 22,
        stars: 5,
        review: 'Amazing place to stay with great care from the whole team. The villa was unreal and bigger than what the photos portrayed!'
      },
      {
        userId: 7,
        roomId: 22,
        stars: 5,
        review: 'This place is beautiful and chic, and the swimming pool is just perfect. Clean place, communication is excellent.'
      },
      {
        userId: 7,
        roomId: 23,
        stars: 4,
        review: 'The villa is amazing. The private pool and the bathtub are so nice. Also the view from the bed is incredible. You always have a contact and everybody is very helpful.'
      },
      {
        userId: 5,
        roomId: 23,
        stars: 3,
        review: 'Unfortunately we had a problem with the water so sometimes there was none. But i think this is not a common problem. You have to be sure, that it may cost a lot more than common for the driver with a car. But the stay was nice and we would always come back.'
      },
      {
        userId: 8,
        roomId: 23,
        stars: 4,
        review: 'It has been an incredible stay. Very easy to reach through (Hidden by Airbnb) maps. communication with the host was very fluid and very attentive. The house is magnificent.'
      },
      {
        userId: 2,
        roomId: 23,
        stars: 4,
        review: 'The house has everything thought out to the last detail, the pivoting doors, the pool, the bathtub, the space to take a break on the terrace, the amount of flowers, and waking up every day with Kuta bay. It has been very inspirational and we only wish to return to Lombok to stay again.'
      },
      {
        userId: 6,
        roomId: 23,
        stars: 5,
        review: 'Incredible view! The photos don’t do it justice. What a fantastic stay, down to every last detail.'
      },
      {
        userId: 1,
        roomId: 24,
        stars: 4,
        review: 'The hideout is a fancy accommodation for everybody who is looking for some relaxation in the balinese jungle. Please mind that it‘s far away from the city and civilization.'
      },
      {
        userId: 9,
        roomId: 24,
        stars: 4,
        review: 'The hideout is amazing but secluded. You can order a driver that brings you wherever you want. The food is also delicious. Great place to stay if you want to get to know the residents and balinese hinterlands.'
      },
      {
        userId: 6,
        roomId: 24,
        stars: 5,
        review: 'The most beautiful Airbnb I’ve ever seen! I didn’t want to leave. Everything was amazing. The food was delicious, the host responded quickly, the entire villa was beautiful.'
      },
      {
        userId: 7,
        roomId: 25,
        stars: 5,
        review: 'This property is just as beautiful as the pictures! The host was so helpful and a gracious host. He was able to rent scooters and make reservations for us which was super convenient. Also, we were very close to everything! 10/10 recommend staying here!'
      },
      {
        userId: 8,
        roomId: 25,
        stars: 4,
        review: 'The location is great, especially if you have a car. Street parking is easily available, and it’s about 20 minutes to the beach/hotel zone. The actual apartment is really big and new.'
      },
      {
        userId: 9,
        roomId: 25,
        stars: 3,
        review: 'Air conditioning worked super well! My only quibble is that we lost water for a few hours one morning.Sounds like the whole building had an issue.However, it was resolved relatively quickly. Sometimes stuff happens!'
      },
      {
        userId: 2,
        roomId: 26,
        stars: 4,
        review: 'We are enjoyed our stay very much! Super quick response when ever we needed anything. The host was lovely and the place was absolutely perfect!'
      },
      {
        userId: 3,
        roomId: 26,
        stars: 4,
        review: 'We had the best stay here! The apartment is beautifully decorated and has an ocean view from the balcony. Couldn’t ask for a better location right across from the beach! And the host went above and beyond to make sure we had everything we needed. Would highly recommend!'
      },
      {
        userId: 5,
        roomId: 27,
        stars: 5,
        review: 'Our stay was absolutely phenomenal. Exceeded expectation in all aspects. Arturo and team were very accommodating and service was world class. Will be returning again without a doubt.'
      },
      {
        userId: 6,
        roomId: 27,
        stars: 5,
        review: 'Best and by far most beautiful place I have ever stayed in. Great place to stay for those who love art and appreciate interior design/ beauty of all the moving pieces that brought this place together. Best hosts I have ever had!'
      },
      {
        userId: 1,
        roomId: 28,
        stars: 5,
        review: 'This house is simply gorgeous. Kitchen is very well stocked, immaculately clean, fantastic layout for families wanting space to play and space to retreat. Highly recommend!!'
      },
      {
        userId: 2,
        roomId: 28,
        stars: 5,
        review: 'Absolutely gorgeous, modern A-frame with everything you need! In a great spot south of Breckinridge near beautiful walks & hikes. Loved the spacious interior, great basement, and enjoyed watching wildlife from the deck. Perfect for coming together with family. Thanks for the stay!'
      },
      {
        userId: 1,
        roomId: 29,
        stars: 5,
        review: 'Most impressive Airbnb I’ve stayed at by far. A hidden fairy land that allows you to relax from all your day to day chaos. I cannot wait to return.'
      },
      {
        userId: 2,
        roomId: 29,
        stars: 4,
        review: 'We liked our stay at The Crow’s nest and would love to be there again!'
      },
      {
        userId: 3,
        roomId: 30,
        stars: 5,
        review: 'As a frequent visitor of Saigon, I have stayed in several of the apartment blocks as well as Vinpearl Luxury hotel in the Landmark 81 vicinity. I am very pleased with this apartment at Landmark 81.'
      },
      {
        userId: 4,
        roomId: 30,
        stars: 3,
        review: 'While the stay has been quite been rocky with many issues and miscommunications, I enjoyed the place and appreciated the efforts in accommodating me.'
      },
      {
        userId: 3,
        roomId: 31,
        stars: 5,
        review: 'As a frequent visitor of Saigon, I have stayed in several of the apartment blocks as well as Vinpearl Luxury hotel in the Landmark 81 vicinity. I am very pleased with this apartment at Landmark 81.'
      },
      {
        userId: 4,
        roomId: 31,
        stars: 3,
        review: 'Great place. Great view. Great location. Great hosts.'
      },
      {
        userId: 7,
        roomId: 32,
        stars: 5,
        review: 'Hosts are very easy to get along with plus they give extra hand to help you. 😊 The place is awesome, clean, very picturesque and unique!'
      },
      {
        userId: 8,
        roomId: 32,
        stars: 3,
        review: 'The place is a haven in El Nido. Even though it\'s rainy, the walk to the beach and back to Colibris was refreshing and revitalizing (except when I saw frogs, haha!). The beach surrounding the area was soo clear and friendly for not-so-good swimmers like me. I especially loved the Vanilla Beach area.'
      },
      {
        userId: 4,
        roomId: 33,
        stars: 3,
        review: 'The room is clean, but some small bugs can get in from nowhere. It\'s understandable since the house is in a very nature environment.'
      },
      {
        userId: 5,
        roomId: 33,
        stars: 5,
        review: 'This was a perfect seclusion from the world. Isolated but yet close to everything we needed. The place was worth the amazing experience. Super unique. Wished we could stay another day but it was a quick stay for our drive thru the area only. So glad we booked.'
      },
      {
        userId: 4,
        roomId: 34,
        stars: 5,
        review: 'We loved every minute of our stay. The remote location was perfect, far from any city noise, and the use of the scooter to explore the area was great and lots of fun.'
      },
      {
        userId: 9,
        roomId: 34,
        stars: 5,
        review: 'The open air design of the house was lovely - we really felt like we were immersed in nature.The staff were incredible - friendly and helpful and so respectful of our privacy.'
      },
      {
        userId: 5,
        roomId: 34,
        stars: 5,
        review: 'Great remote bamboo house. Really a cool spot for two days. We went to the floating palace and hiked through nearby patty fields besides relaxing in the villa.'
      },
      {
        userId: 7,
        roomId: 34,
        stars: 5,
        review: 'We stayed here for part of our Bali trip and honeymoon holiday! It was incredible - so different to anything we have stayed in before. Everyone is so friendly and kind. The resident dog is also very cute and friendly. Would definitely stay again!'
      },
      {
        userId: 8,
        roomId: 34,
        stars: 4,
        review: 'We stayed for 2 nights and although it rained pretty much the duration of our stay and everything felt abit damp we still enjoyed.'
      },
      {
        userId: 5,
        roomId: 35,
        stars: 4,
        review: 'Lovely stay and wonderful place. Right where you want to be for the beach. Jacuzzi was nice. Deck is lovely. House worked great especially the guest house.'
      },
      {
        userId: 1,
        roomId: 35,
        stars: 3,
        review: 'The only suggestion I would make is to get rocks set up as stairs for entrance to Broad Beach. It’s slippery and treacherous walking down the current jagged rock path (not really a path).'
      },
      {
        userId: 7,
        roomId: 35,
        stars: 3,
        review: 'The location was beautiful and the staff was very responsive replying to our requests. It’s unfortunate that the back yard area had not been cleaned properly and that we had to deal with a dog poo bag while dining outside.'
      },
      {
        userId: 4,
        roomId: 35,
        stars: 2,
        review: 'The issues with our toilet and the fact that there wasn’t a shower in the main bedroom (meaning we had to share a bathroom with another guest) were major disappointments.'
      },
      {
        userId: 8,
        roomId: 35,
        stars: 5,
        review: 'Gorgeous and spacious home. Owners are very nice and have great communication. Perfect location and breathtaking views. The ideal Malibu getaway, definitely coming back!'
      },
      {
        userId: 8,
        roomId: 37,
        stars: 5,
        review: 'We stayed in this beautiful home and had unforgettable moments. The colors and atmosphere will remain in our hearts forever. Very convenient direct access to the sea. Everything was perfect.'
      },
      {
        userId: 7,
        roomId: 37,
        stars: 5,
        review: 'Every part of this house is amazing. The views alone are breathtaking. You have the master bedroom with a bathroom on the main floor that opens up to the main area of the house. '
      },
      {
        userId: 9,
        roomId: 37,
        stars: 5,
        review: 'There are 3 bedrooms and 3 bathrooms downstairs. All rooms and bathrooms are upscale. There is an amazing pool with breathtaking ocean views. You can also walk onto the beach directly from the back, MAJOR PLUS!!!!'
      },
      {
        userId: 6,
        roomId: 37,
        stars: 4,
        review: 'Absolutely amazing property and stay!! Very clean, modern, amazing views and direct water access. Location is perfect. Close to shops, supermarket, restaurants, yet the privacy of the house location makes you feel like there is no one around for miles.'
      },
      {
        userId: 2,
        roomId: 37,
        stars: 5,
        review: 'Can’t say enough about this place. We will be returning without a doubt!!'
      },
      {
        userId: 4,
        roomId: 37,
        stars: 4,
        review: 'This place is GORGEOUS and worth every penny. We came as a girl group for a week to celebrate a birthday. '
      },
      {
        userId: 6,
        roomId: 38,
        stars: 4,
        review: 'We loved our stay at Maison Marazul. We travelled there with our 15 month old and our parents and found it to be the perfect setting for our family holiday. '
      },
      {
        userId: 4,
        roomId: 38,
        stars: 4,
        review: 'We are so grateful for the wonderful memories we will have at this beautiful home and cannot recommend it highly enough.'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
