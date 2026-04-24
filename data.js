const portfolioData = {
    site: {
        logoText: "Stan Lee Archive",
        metaTitle: "Architecture Portfolio",
        email: "a2199547@yahoo.com",
        instagramUrl: "https://instagram.com/stanlee_an/",
        instagramHandle: "@stanlee_an"
    },
    hero: {
        title: "This is an digital architve for Stan Lee",
        subtitle: "Here is the space for a good motto."
    },
    about: {
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
        {
            title: "Gap",
            cover: "./assets/photography_net/net_02.jpg",
            album: [
                { src: "./assets/photography_net/net_02.jpg", caption: "明大前駅 2026" },
                { src: "./assets/photography_net/net_01.jpg", caption: "明大前駅 2026" }
            ]
        },
        {
            title: "City of Lightness",
            cover: "./assets/photography_look/look_01.jpg",
            album: [
                { src: "./assets/photography_look/look_01.jpg", caption: "明大前駅 2026" },
                { src: "./assets/photography_look/look_02.jpg", caption: "明大前駅 2026" },
                { src: "./assets/photography_look/look_04.jpg", caption: "品川區 2026" },
                { src: "./assets/photography_look/look_03.jpg", caption: "山梨縣 2026" }
            ]
        },
        {
            title: "不 死",
            cover: "./assets/photography_fuji/fuji_04.jpg",
            album: [
                { src: "./assets/photography_fuji/fuji_04.jpg", caption: "山中湖 2026" },
                { src: "./assets/photography_fuji/fuji_02.jpg", caption: "河口湖 2026" },
                { src: "./assets/photography_fuji/fuji_01.jpg", caption: "河口湖 2026" },
                { src: "./assets/photography_fuji/fuji_05.jpg", caption: "河口湖 2026" },
                { src: "./assets/photography_fuji/fuji_03.jpg", caption: "山中湖 2026" }
            ]
        }
    ],
    works: [
        {
            title: "BUILDING 269",
            category: "Academic / 2025",
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


            ]
        },
        {
            title: "THE CONCRETE VOID",
            category: "Competition / 2025",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            imageHover: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2064&auto=format&fit=crop",
            info: {
                "Location": "Tokyo, Japan",
                "Year": "2025",
                "Scale": "450 sqm"
            },
            content: [
                { type: "image", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", width: "100%", align: "center", marginTop: "0", caption: "Void Courtyard Perspective" },
                { type: "text", text: "A study in subtracted volumes. The voids within the monolithic structure create internal courtyards that capture daily light variations.", width: "70%", align: "center", marginTop: "100px" }
            ]
        },
        {
            title: "URBAN INTERVENTION",
            category: "Studio / 2025",
            image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2064&auto=format&fit=crop",
            imageHover: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1974&auto=format&fit=crop",
            info: {
                "Site": "New York, USA",
                "Type": "Urban Strategy"
            },
            content: [
                { type: "image", src: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2064&auto=format&fit=crop", width: "100%", align: "center", marginTop: "0", caption: "Masterplan Overview" }
            ]
        },
        {
            title: "LIGHT & SHADOW",
            category: "Personal / 2026",
            image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1974&auto=format&fit=crop",
            imageHover: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
            info: {
                "Status": "Theoretical Study"
            },
            content: [
                { type: "image", src: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1974&auto=format&fit=crop", width: "80%", align: "left", marginTop: "0", caption: "Study 01" }
            ]
        }
    ]
};

window.portfolioData = portfolioData;
