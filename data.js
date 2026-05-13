const portfolioData = {
    site: {/*contact*/
        logoText: "Stan Lee Archive",
        metaTitle: "Architecture Portfolio",
        email: "a2199547@yahoo.com",
        instagramUrl: "https://instagram.com/stanlee_an/",
        instagramHandle: "@stanlee_an"
    },
    hero: {/*hero*/
        title: "This is a digital architve for Stan Lee",
        subtitle: "Here is the space for a good motto."
    },
    about: {/*about*/
        title: "Stan Lee",
        description: "Raised in Dongshi, Taichung. Leave in Tainan now.<br>Year 4 in architecture program in NCKU.<br>Favorite band is sunset rollercoaster.<br>Start to run recently and fall in love with it.<br>Always explore the world with curiosity.",
        experience: [
            "2025 - 2026 / NIO+C / Architecture Intern",
            "2024 / OH Dear Studio / Design Intern",
            "2023 / CTAA Architecture Lab / Architecture Intern"
        ],
        education: [
            "2022 - present / B.Arch, National Cheng Kung University",
            "2019 - 2022 / Taichung First Seniro High School"
        ],
        skills: [
            "Rhinoceros, AutoCAD, Revit",
            "Adobe Creative Suite (Ps, Ai, Id)",
            "Enscape, Lumion"
        ]
    },
    images: [
        {/*Gap*/
            title: "Gap",
            cover: "./assets/photography_net/net_02.JPG",
            album: [
                { src: "./assets/photography_net/net_02.JPG", caption: "明大前駅 2026" },
                { src: "./assets/photography_net/net_01.JPG", caption: "明大前駅 2026" }
            ]
        },
        {/*City of Lightness*/
            title: "City of Lightness",
            cover: "./assets/photography_look/look_01.JPG",
            album: [
                { src: "./assets/photography_look/look_01.JPG", caption: "明大前駅 2026" },
                { src: "./assets/photography_look/look_02.JPG", caption: "明大前駅 2026" },
                { src: "./assets/photography_look/look_04.JPG", caption: "品川區 2026" },
                { src: "./assets/photography_look/look_03.JPG", caption: "山梨縣 2026" }
            ]
        },
        {/*Fuji*/
            title: "不 死",
            cover: "./assets/photography_fuji/fuji_04.JPG",
            album: [
                { src: "./assets/photography_fuji/fuji_04.JPG", caption: "山中湖 2026" },
                { src: "./assets/photography_fuji/fuji_02.JPG", caption: "河口湖 2026" },
                { src: "./assets/photography_fuji/fuji_01.JPG", caption: "河口湖 2026" },
                { src: "./assets/photography_fuji/fuji_05.JPG", caption: "河口湖 2026" },
                { src: "./assets/photography_fuji/fuji_03.JPG", caption: "山中湖 2026" }
            ]
        }
    ],
    works: [
        {/*紐約 */
            title: "BUILDING 269",
            category: "Studio / 2025",
            image: "./assets/project_ny/model/05_full.jpeg",
            imageHover: "./assets/project_ny/model/02_hand.jpg",
            info: {
                "Site": "Brooklyn, New York, USA",
                "Year": "2025",
                "Team": "Stan Lee \nWinnie \nMimi \nSeal Ke",
                "Type": "Adaptive Reuse"
            },
            content: [
                {
                    type: "text", text: "Brooklyn navy yard is once an industrial zone. Due to its location advantage, it locates boat manufacturing, fishing industry and other warehouses program. Along with the time changes, industry is now leaving here gradually. But the old warehouses stay. Nowadays there are some business activities start to move into here. Like co-work space and research team. New activities has been gradually taken control of this old zone. Giving a new life to a once industrial location.",
                    width: "60%", align: "left", marginTop: "40px"
                },
                {/*原北立面*/
                    type: "image", src: "./assets/project_ny/shot/01_nele.jpg",
                    width: "100%", align: "left", marginTop: "40px", caption: "01 / Existing North Elevation"
                },
                {/*原西立面*/
                    type: "image", src: "./assets/project_ny/shot/02_wele.jpg",
                    width: "50%", align: "left", marginTop: "0px", caption: "02 / Existing West Elevation"
                },
                {
                    type: "text", text: "Building 269, which in front of coast line, is our design target. A warehouse is a building only with skin. It’s the product of effectiveness and function. But we found this textures beautiful. You can spot this skin deteriorates over time, and new patches are added; the patchwork exterior forms the building's first impression, recording the traces of history, environment, and people. We believe this aesthetic is worth preserving",
                    width: "50%", align: "center", marginTop: "60px"
                },
                {/*site plan*/
                    type: "image", src: "./assets/project_ny/drawing/04_siteplan.jpg",
                    width: "35%", align: "right", marginTop: "120px", caption: "03 / Site Plan"
                },
                {/*長剖*/
                    type: "image", src: "./assets/project_ny/drawing/02_lsec.jpg",
                    width: "100%", align: "right", marginTop: "0px", caption: "04 / Long Section"
                },
                {
                    type: "text", text: "The Building 269 is located behind the existing flood gate. In terms of flood control strategy, we chose to reserve the area near the sea as activity space. The sunken plaza serves as a flood control pool, responding to changes in water levels under different conditions. The roof uses translucent material to create an outdoor-like space within the shell of the old building, connecting with the surrounding open space planting plan.",
                    width: "100%", align: "left", marginTop: "40px"
                },
                {/*立面*/
                    type: "image", src: "./assets/project_ny/drawing/06_ele.jpg",
                    width: "70%", align: "left", marginTop: "80px", caption: "05 / Elevation"
                },
                {
                    type: "text", text: "Our design approach is to preserve the original building, utilize the existing space. For the skin, we only repair the unusable pieces. We cut off the wall under 2.5 meter. This gesture enables things to flow in and out, including publicity, visibility and water. New programs occur within the flesh beneath this outer layer. Perhaps after decades, the building's exterior walls will slowly deteriorate and rust, as if the building is undergoing self-metabolism, at which point the new structure will emerge from the original flesh.",
                    width: "70%", align: "left", marginTop: "40px"
                },
                {/*平面*/
                    type: "image", src: "./assets/project_ny/drawing/01_plan.jpg",
                    width: "70%", align: "center", marginTop: "80px", caption: "06 / Plan"
                },
                {
                    type: "text", text: "We aim to create the relationship for new and old, sometimes through dialogue, sometimes through individual expression. And the whole system is simple and clear, providing comfortable and flexible spatial quality. The new building's ground floor is fully elevated above the flood line.Lift-down doors allow water to flow freely in and out, and a sunken plaza near the shoreline serves as an open space.These measures respond to the threat of flooding, giving the entire building flood resilience. The building program provides office space, offering more opportunities for startups, enabling Navy Yard to successfully transition.",
                    width: "40%", align: "center", marginTop: "40px"
                },
                {/*短剖面*/
                    type: "image", src: "./assets/project_ny/drawing/03_ssec.jpg",
                    width: "40%", align: "right", marginTop: "80px", caption: "07 / Short Section"
                },
                {/*細部剖面*/
                    type: "image", src: "./assets/project_ny/drawing/05_detail.jpg",
                    width: "40%", align: "left", marginTop: "-450px", caption: "08 / Wall Section"
                },
                {/*axon*/
                    type: "image", src: "./assets/project_ny/drawing/07_axon.jpg",
                    width: "60%", align: "center", marginTop: "80px", caption: "09 / Isometric Drawing"
                },
                {/*模型-*/
                    type: "image", src: "./assets/project_ny/model/01_out.jpg",
                    width: "90%", align: "center", marginTop: "80px", caption: "10 / Model Image"
                },
                {/*Test*/
                    type: "image", src: "./assets/photography_fuji/fuji_03.JPG",
                    width: "90%", align: "center", marginTop: "80px", caption: "10 / Model Image"
                },


            ]
        },
        {/*大三設計 */
            title: "Sports Garden",
            category: "Studio / 2024-2025",
            image: "./assets/project_ht/01_htmain.png",
            imageHover: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2064&auto=format&fit=crop",
            info: {
                "Site": "Cheng Kung University, Tainan, Taiwan",
                "Type": "Sports Complex/Masterplanning",
                "Scale": "30000 sqm",
                "Team": "Stan Lee \nBrian Chen \nBlake Yang",
                "Tutor": "Minter Lim"
            },
            content: [
                {/*模型-*/
                    type: "image", src: "./assets/project_ny/model/01_out.jpg",
                    width: "90%", align: "center", marginTop: "80px", caption: "10 / Model Image"
                },
                { type: "text", text: "A study in subtracted volumes. The voids within the monolithic structure create internal courtyards that capture daily light variations.", width: "70%", align: "center", marginTop: "100px" }
            ]
        },
        {/*2025垂直競圖*/
            title: "The Hatcher",
            category: "Competition / 2025",
            image: "./assets/project_ht/01_htmain.png",
            imageHover: "./assets/project_ht/08_htcollage.png",
            info: {
                "Site": "Southern Taiwan Science Park, Tainan",
                "Program": "Reasearch and Learning Center",
                "Team": "Shih-An Lee \nMing-Ming Tang \nPeiyi-Wei \nYu-Shiang Huang \nHsiang-Chi Tseng \nYantong Cheng \nTimothy Chou",
                "Honor": "3rd Price"
            },
            content: [
                {/*主視覺*/
                    type: "image", src: "./assets/project_ht/01_htmain.png",
                    width: "100%", align: "center", marginTop: "80px", caption: "01 / The Hatcher"
                },
                {/*基地*/
                    type: "image", src: "./assets/project_ht/06_htsite.png",
                    width: "60%", align: "left", marginTop: "80px", caption: "02 / Site"
                },
                {
                    type: "text", text: "Southern Taiwan Science Park is a designated area, distanced from the city, segmented by the plan into isolated blocks, with talented engineers working in enclosed buildings. Road and buildings are both exceed the scale of human live, thus make it a Hi-tech encalve. Cut from life context, STSP seems like just a machine endlessly working and producing.",
                    width: "60%", align: "left", marginTop: "40px"
                },
                {/*拼貼-*/
                    type: "image", src: "./assets/project_ht/08_htcollage.png",
                    width: "50%", align: "left", marginTop: "80px", caption: "03 / Concept"
                },
                {
                    type: "text", text: "The nature of education is exchange. We wish to create a place where cutting-edge research can be showcased, accessed, and discussed.",
                    width: "50%", align: "left", marginTop: "40px"
                },
                {/*循環*/
                    type: "image", src: "./assets/project_ht/05_htcir.jpg",
                    width: "50%", align: "centet", marginTop: "100px", caption: "04 / Circulation System"
                },
                {
                    type: "text", text: "We deduce of a feedback system. An exhibits of research findings will ungoing each quater, inviting the public to explore the results. Feedback and visions of the future will be collected and integrated through AIoT, transforming them into spatial forms. These will then be 3D-printed, materializing collective human wisdom.",
                    width: "50%", align: "center", marginTop: "20px"
                },
                {/*爆炸*/
                    type: "image", src: "./assets/project_ht/02_htexplo.jpg",
                    width: "50%", align: "right", marginTop: "80px", caption: "05 / Explosion Diagram"
                },
                {
                    type: "text", text: "A red public route guides visitors through discussion areas, experiment zones, and research labs, weaving between the tower and the building while constantly looking back at the public City Stage.The route is a demontration of the opening of once enclosed research institue, introducing city dynamic.",
                    width: "50%", align: "right", marginTop: "40px"
                },
                {/*塔剖*/
                    type: "image", src: "./assets/project_ht/07_httowersec.jpg",
                    width: "50%", align: "right", marginTop: "80px", caption: "06 / Recycling Tower Section"
                },
                {/*spawns*/
                    type: "image", src: "./assets/project_ht/11_htspawns.jpg",
                    width: "50%", align: "right", marginTop: "40px", caption: "07 / The Spawns"
                },
                {
                    type: "text", text: "The SPAWNINGS go through a life cycle, after an exhibition time, they are dismantled, fragmented, molted, purified and recycled into raw material for the next respawn. Aiming for zero-waste recycle.",
                    width: "50%", align: "right", marginTop: "40px"
                },
                {/*site plan*/
                    type: "image", src: "./assets/project_ht/04_htsiteplan.png",
                    width: "50%", align: "centet", marginTop: "100px", caption: "08 / Site Plan"
                },
                {/*sec*/
                    type: "image", src: "./assets/project_ht/03_htsec.jpg",
                    width: "100%", align: "centet", marginTop: "100px", caption: "09 / Section"
                },
                {/*樹後*/
                    type: "image", src: "./assets/project_ht/09_httree.png",
                    width: "100%", align: "centet", marginTop: "80px", caption: "10 / View From Street"
                },


            ]
        },
        {/*Slit*/
            title: "Slit",
            category: "Academic / 2024",
            image: "./assets/project_slit/05_perspective2.png",
            imageHover: "./assets/project_slit/03_concept.png",
            info: {
                "Site": "Hagenaar Forest, Tainan, Taiwan",
                "Program": "Private Library",
                "Tutor": "Melody-Ho \nSabrina Wang",
                "Honor": "13th Asian Contest of Architectural Rookies 5th price",
            },
            content: [
                {/*概念素描*/
                    type: "image", src: "./assets/project_slit/03_concept.png",
                    width: "100%", align: "center", marginTop: "80px", caption: "01 / Concept"
                },
                {
                    type: "text", text: "Life is something that can only move forward. As we grow, we are also heading towards death. I can't help but wonder if life could occasionally slow down—perhaps an afternoon, escaping into a slit where even time slows its pace, quietly facing ourselves.",
                    width: "60%", align: "left", marginTop: "40px"
                },
                {/*手繪觀察*/
                    type: "image", src: "./assets/project_slit/06_sunset.jpg",
                    width: "60%", align: "left", marginTop: "80px", caption: "02 / sun path"
                },
                {/*手繪觀察*/
                    type: "image", src: "./assets/project_slit/07_ripple.jpg",
                    width: "60%", align: "left", marginTop: "40px", caption: "03 / lights on river"
                },
                {/*手繪觀察*/
                    type: "image", src: "./assets/project_slit/08_shadow.jpg",
                    width: "60%", align: "left", marginTop: "40px", caption: "04 / shadow of trees"
                },
                {
                    type: "text", text: "Locates at the edge of Tainan city, Hagenaar Forest seems like a heterogeneous realm within the city. Accompanied by the flowing waters of Zhuxi Creek, the sensory experience here departs from the urban environment—one can see the distant skyline, hear the continuous murmuring of the river, and feel the rough texture of the trees. The noise and chaos of the city are absent in this place.",
                    width: "60%", align: "left", marginTop: "40px"
                },
                {
                    type: "text", text: "I selected three scenes from the site and transform to drawings. The overlapping of lines may represent the convergence of sightlines, the intersection of pathways, or the meeting of urban edges. The slits woven by these intersecting lines, I believe, are the spiritual spaces I seek—spaces where one can retreat, like a rift in time and space.",
                    width: "60%", align: "left", marginTop: "40px"
                },
                {/*lines*/
                    type: "image", src: "./assets/project_slit/12_diagram.jpg",
                    width: "80%", align: "center", marginTop: "120px", caption: "05 / interwoven, creating space"
                },
                {/*sketch*/
                    type: "image", src: "./assets/project_slit/13_sketch.jpg",
                    width: "30%", align: "center", marginTop: "40px", caption: "06 / Concept Sketch"
                },
                {/*siteplan*/
                    type: "image", src: "./assets/project_slit/02_siteplan.jpg",
                    width: "30%", align: "center", marginTop: "80px", caption: "07 / Site Plan"
                },
                {/*plan*/
                    type: "image", src: "./assets/project_slit/01_plan.jpg",
                    width: "100%", align: "center", marginTop: "100px", caption: "08 / Plan"
                },
                {
                    type: "text", text: "I observed interwoven lines. Life, much like a straight path moving forward, changes when monotonous lines bend and intersect, creating a pause along the journey. As countless patterns overlap, I see the possibilities of architecture. Following the site's context, I drew multiple curves, using them to create intersecting roof planes that shape an organic skyline. This allows the architecture to settle lightly within the forest like fallen leaves.",
                    width: "60%", align: "left", marginTop: "40px"
                },
                {/*section*/
                    type: "image", src: "./assets/project_slit/14_section.jpg",
                    width: "100%", align: "center", marginTop: "120px", caption: "09 / Section"
                },
                {/*perspective*/
                    type: "image", src: "./assets/project_slit/05_perspective2.png",
                    width: "60%", align: "right", marginTop: "100px", caption: "10 / perspective"
                },
                {
                    type: "text", text: "Thin, leaf-like structures gently descend to form the roof, supported by slender columns that articulate the interplay between lines and surfaces, cutting slits into the sky. Architecture and nature create a richly layered texture. The building is kept at a single-story height, with undulating roofs that transform into ramps or furniture-scale elements where people can sit and recline. The result is a space filled with a sense of seclusion, tranquility, and security.",
                    width: "60%", align: "right", marginTop: "40px"
                },
                {/*modle*/
                    type: "image", src: "./assets/project_slit/09_modle1.jpg",
                    width: "80%", align: "center", marginTop: "80px", caption: "11 / Modle"
                },

            ]
        }
    ]
};

window.portfolioData = portfolioData;
