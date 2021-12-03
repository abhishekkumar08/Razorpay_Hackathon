const data = [
    {
        id: '1',
        name: 'Bihar',
        description: 'Bihar is a place full of history and spiritual significance. Located in the eastern part of India, this state is known as the land of monasteries. There are many things that make this place worth visiting.',
        badges : [
            'Sightseeing Tours',
            'Sightseeing Tours',
            'Sightseeing Tours',
            'Sightseeing Tours',
            'Sightseeing Tours',
        ],
        mainImg:
        'https://images.unsplash.com/photo-1622194993926-1801586d460f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        places: [
            {
                area: 'Golghar',
                description: 'Golghar, an enormous granary, was built by Captain John Garstin for British army in 1786, after the terrible impact of 1770 famine. The winding stairway around this monument offers a brilliant view of the city and the Ganga flowing nearby.<br />It is pillar-less with a wall of thickness of 3.6 m at the base height of 29 m.. One can climb at the top of the Golghar through the 145 steps of its spiral stairway around it. The spiral staircase was designed to facilitate the passage of the workers who deliver their load through a hole at the top, and descend the other stairs.',
                subImg:
                'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/patna/golghar/3300X2400.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
            {
                area: 'Mahabodhi Temple',
                description: 'The Mahabodhi Temple (literally: "Great Awakening Temple"), a UNESCO World Heritage Site, is an ancient, Buddhist temple in Bodh Gaya, marking the location where the Buddha is said to have attained enlightenment.<br/>The temple stands in the east to the Mahabodhi Tree. Its architectural effect is superb. Its basement is 48 square feet and it rises in the form of a cylindrical pyramid till it reaches its neck, which is cylindrical in shape. The total height of the temple is 170 ft. and on the top of the temple are Chatras which symbolize sovereignty of religion.',
                subImg:
                'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/gaya/mahabodhi_temple/buddhist_gaya_category_a_mahabodhi_temple__pic_13.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
            {
                area: 'Maner Sharif',
                description: 'Maner is a small town located 25 kilometers (16 miles) west of Patna on NH 30, in Bihar. Maner Sharif shelters two very popular Muslim tombs: One of the tombs is of Sufi saint Makhdoom Yahya Maneri, known as the Bari Dargah (the great shrine). The other one is of Makhdum Shah Daulat, popularly called Chhoti Dargah (the small shrine).<br/>There is a big dome on the top whose ceiling is full of different markings depicted from the Quran. In the mediaeval time, Maner Sharif used to be the principal site of learning and knowledge in the region.',
                subImg:
                'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/patna/maner_sharief/maner-sharif.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
            {
                area: 'Bihar Museum',
                description: 'Located in Patna, Bihar Museum has a huge collection of artifacts that showcase the rich history and culture of Bihar.<br/>The museum is a part of the National Museum of India, which is the largest museum in India. The museum is open to the public on a regular basis.',
                subImg:
                'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/patna/bihar_museum/bihar-museum.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
            {
                area: 'Takhat Sri Harimandir Ji',
                description: 'Takhat Sri Harimandir Ji Patna Sahib is considered the second holiest Takhat. Revered as the birthplace of Sri Guru Gobind Singh Ji Maharaj, it is one of the five seats of temporal authority of the Sikhs and has been consecrated by three Sikh Gurus.<br/>A symbol of valour and fearlessness, the shrine inspires great piety in pilgrims and holds pride of place in the glorious heritage of Patna City. Takhat Sri Harimandir Sahib Ji also known as Patna Sahib.',
                subImg:
                'http://www.pmc.bihar.gov.in/assets/img/patna%20sahib.jpg',
            },
            {
                area: 'Vishwa Shanti Stupa',
                description: 'Vishwa Shanti Stupa, also called the Peace Pagoda. It is located at the highest point of Ratnagiri hill, at an altitude of 400 m in Rajgir, qualifying its serene charm as divine. Built completely with marble, Stupa comprises four golden statues of Lord Buddha with each representing his life periods of birth, enlightenment, preaching and death. There is a ropeway which helps the tourists reach Vishwa Shanti Stupa a top Ratnagiri hill. The other way to reach this “Stupa” is a serpentine staircase.',
                subImg:
                'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/shanti_stupa/vishwa-shanti-stupa-rajgir.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
        ],
        items: [
            {
                itemName: 'Madhubani Painting',
                description: 'Stone carving is a very ancient tradition in Bihar. The craft achieved its zenith during the Mauryan period and its finest examples are the rock-cut caves of Barabar and Nagarjuni Hills in Jahanabad District.<br/>Various stupas and monasteries stand as the great exhibits of the excellent artistic quality of the artisans of Bihar. Amongst the most famous stone carvings of Bihar are the Ashoka pillars at Lauria Nandangarh and Koluha, along with Mundeshwari Temple Complex of Gupta period. This art is practiced at Patharkatti in Gaya district. It is one of the major centres of stone craft in Bihar. The basic raw material used in this craft is marble and Granite. This is a unique product handcrafted by artisans. This craft provides livelihood support to about 500-700 artisans family on regular basis in Gaya district of Bihar. Other centres of the stone craft in Bihar are in Nalanda, Kaimur and Patna.',
                itemImg: 'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/handicrafts_product_photo/stone/10.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
            {
                itemName: 'Stone Craft',
                description: 'Madhubani painting has become synonymous with art and craft of Bihar in the whole world.<br/>The process of painting and the use of natural dyes and pigments provide an eye-catching finish to these paintings. Traditionally, the painting was done on freshly plastered mud walls and floors of huts; but over the years it has moved to varied mediums including cloths, handmade papers, and canvas. Madhubani Painting is done with fingers, twigs, brushes, nib-pens, and matchsticks, using natural dyes and pigments, and is characterized by eye-catching geometrical patterns. This is a unique craft, handcrafted by artisans. Madhubani Painting provides livelihood support to about 20000-25000 artisan’s family on regular basis in Madhubani district and other places of Bihar.',
                itemImg: 'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/handicrafts_product_photo/madhubani/madhubani_1.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
            {
                itemName: 'Wood Carvings',
                description: 'Wood craft of Gaya is quite different from existing wood crafts available in the market.<br/>It has a huge religious importance for the Buddhist followers and pilgrims who come to visit the Holy place of Bodh Gaya, the place of Buddha’s enlightenment. The purchase of idols of Buddha has got a big ritual significance for Buddhist pilgrims. This is source of livelihood for artisans engaged in the craft. The raw materials used for the wood craft include Gambhar wood which is being purchased from Gaya’s local market. This is a unique product handcrafted by artisans. This craft provides livelihood support to families of about 200-400 artisans on regular basis in Gaya district of Bihar.',
                itemImg: 'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/handicrafts_product_photo/wood/4.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
            },
        ]
    }
]