/* ==========================================================================
   behindrobotics.com — structured intelligence dataset
   COMPANIES ↔ ROBOTS ↔ COMPONENTS, cross-linked by id.
   Compiled by behindrobotics.com from company announcements, filings, exchange
   listings, market research and credible reporting. Current to Aug 2026.
   Where a figure is disputed, the dispute is noted rather than resolved.
   ========================================================================== */
window.RH_DATA = { companies: [], robots: [], components: [], supplyChain: {} };

/* ---------------------------------------------------------------- HUMANOIDS */
window.RH_DATA.companies.push(
{ id:'figure-ai', hubs:['Civil'], name:'Figure AI', country:'United States', flag:'🇺🇸', founded:2022, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'San Jose, California', founders:'Brett Adcock', ceo:'Brett Adcock', funding:'~$1.9B across all rounds', valuation:'$39B post-money (Series C, Sep 2025)', employees:'~300', website:'https://figure.ai',
  summary:'The highest-valued humanoid developer. Figure 03 is deployed on the BMW Spartanburg line; the BotQ facility targets 12,000 robots annually. Helix is its in-house vision-language-action model.',
  notable:'Valuation moved from $2.6B to $39B in roughly seven months — among the fastest re-ratings in startup history.', robots:['figure-03','figure-02'], suppliers:['zhongda-leader','nvidia'] },

{ id:'tesla', hubs:['Civil'], name:'Tesla', country:'United States', flag:'🇺🇸', founded:2003, type:'builder', sector:'Humanoid / EV', vertical:'Humanoid', status:'public', ticker:'TSLA', hq:'Austin, Texas', founders:'Martin Eberhard, Marc Tarpenning', ceo:'Elon Musk', funding:'Public', valuation:'Public', employees:'140,000+', website:'https://tesla.com',
  summary:'Optimus leverages Tesla\'s EV supply chain and in-house actuator design. Vertical integration is the strategic bet; production targets have repeatedly slipped.',
  notable:'Sanhua Controls, an existing Tesla thermal supplier, is widely reported as an Optimus actuator supplier.', robots:['optimus'], suppliers:['sanhua','shuanghuan'] },

{ id:'unitree', hubs:['Civil'], name:'Unitree Robotics', country:'China', flag:'🇨🇳', founded:2016, type:'builder', sector:'Humanoid / Quadruped', vertical:'Humanoid', status:'public', ticker:'STAR (pending)', hq:'Hangzhou', founders:'Wang Xingxing (王兴兴)', ceo:'Wang Xingxing', funding:'~$618M IPO', valuation:'~$5.9B', employees:'~1,000', website:'https://unitree.com',
  summary:'Price and volume leader. Shipped ~5,500 units in 2025, targeting 10,000–20,000 in 2026. G1 base price cut from ~$16,000 to ~$13,500.',
  notable:'Shanghai STAR Market IPO cleared final registration after a record 104-day review. Listed on the Shanghai STAR Market on 19 Aug 2026, spiking as much as ~629% intraday; closing valuation reported around 340B+ yuan (varies by source).', robots:['unitree-g1','unitree-h1','unitree-go2','unitree-b2'], suppliers:['shuanghuan'] },

{ id:'agibot', hubs:['Civil'], name:'AgiBot (智元机器人)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'Peng Zhihui (彭志辉), Deng Taihua', ceo:'Deng Taihua', funding:'Multiple rounds', valuation:'Multi-billion', employees:'~1,000', website:'https://agibot.com',
  summary:'Ranked #1 for 2025 humanoid shipments by Omdia (5,168 units, 39% share) — a ranking Unitree disputes with its own 5,500+ figure. Rolled out its 10,000th unit in March 2026.',
  notable:'Co-founded by Peng Zhihui, a former Huawei "Genius Youth" engineer known online as Zhihui Jun.', robots:['agibot-a2'], suppliers:[] },

{ id:'agility', hubs:['Civil'], name:'Agility Robotics', country:'United States', flag:'🇺🇸', founded:2015, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'ipo-filed', ticker:'AGLT (pending)', hq:'Salem, Oregon', founders:'Damion Shelton, Jonathan Hurst, Mikhail Jones', ceo:'Peggy Johnson', funding:'$620M+ SPAC raise', valuation:'~$2.5B', employees:'~250', website:'https://agilityrobotics.com',
  summary:'Furthest along on paid deployments. Digit runs commercial workflows with GXO, Amazon, Schaeffler and Spanx; 100,000+ totes moved; $300M+ contracted Digit v5 orders.',
  notable:'Going public via Churchill Capital Corp XI — the first pure-play humanoid listing path in the US. RoboFab designed for 10,000 units/yr. SPAC merger with Churchill Capital Corp XI (~$2.5B, ticker AGLT); CEO Peggy Johnson; reported $300M+ in pre-orders for next-gen Digit.', robots:['digit'], suppliers:['nvidia'] },

{ id:'apptronik', hubs:['Civil'], name:'Apptronik', country:'United States', flag:'🇺🇸', founded:2016, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Austin, Texas', founders:'Jeff Cardenas, Nick Paine', ceo:'Jeff Cardenas', funding:'$520M (Feb 2026, Dealroom)', valuation:'~$5B (Feb 2026)', employees:'~200', website:'https://apptronik.com',
  summary:'Apollo targets case picking, palletisation and machine tending. $403M Series A led by Google (Mar 2025), extended $520M (Feb 2026). Pilots with Mercedes-Benz and GXO.',
  notable:'Spun out of the Human Centered Robotics Lab at UT Austin after years of research before taking commercial capital.', robots:['apollo'], suppliers:[] },

{ id:'boston-dynamics', hubs:['Civil'], name:'Boston Dynamics', country:'United States', flag:'🇺🇸', founded:1992, type:'builder', sector:'Humanoid / Quadruped', vertical:'Humanoid', status:'private', hq:'Waltham, Massachusetts', founders:'Marc Raibert', ceo:'Robert Playter', funding:'Hyundai-owned', valuation:'$1.1B (2021 acquisition)', employees:'~1,000', website:'https://bostondynamics.com',
  summary:'The longest-running legged robotics programme. Electric Atlas succeeded the hydraulic platform; Spot and Stretch are commercial products.',
  notable:'Founded out of MIT by Marc Raibert. Owned by Hyundai Motor Group; Spot is the most widely deployed commercial quadruped.', robots:['atlas','spot','stretch'], suppliers:[] },

{ id:'1x', hubs:['Civil'], name:'1X Technologies', country:'Norway', flag:'🇳🇴', founded:2014, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Moss / Palo Alto', founders:'Bernt Børnich', ceo:'Bernt Børnich', funding:'$125M+', valuation:'Reported $10B target', employees:'~200', website:'https://1x.tech',
  summary:'NEO targets the home rather than the factory — a distinct bet in a field focused on industrial work. Hand revised to 25 DOF.',
  notable:'April 2026: 1X said NEO pre-orders booked out next-year production capacity in five days, totalling 10,000 units.', robots:['neo'], suppliers:[] },

{ id:'neura', hubs:['Civil'], name:'NEURA Robotics', country:'Germany', flag:'🇩🇪', founded:2019, type:'builder', sector:'Cognitive robots', vertical:'Humanoid', status:'private', hq:'Metzingen', founders:'David Reger', ceo:'David Reger', funding:'$1.4B (Jun 2026, Dealroom)', valuation:'~$7B', employees:'~400', website:'https://neura-robotics.com',
  summary:'Europe\'s largest humanoid bet. 4NE-1 humanoid with deliveries targeted for late 2026; also builds cognitive cobots.',
  notable:'Largest full-stack robotics round to date. Acquired Ulm-based Adlatus Robotics (autonomous cleaning robots) outright on Aug 31 2026 (price undisclosed) to fold cleaning automation into its Neuraverse AI platform. Products: MAiRA/LARA cobots, MAV/MiPA mobile manipulators, 4NE-1 humanoid. [NEEDS VERIFICATION]', robots:['4ne1'], suppliers:[] },

{ id:'ubtech', hubs:['Civil'], name:'UBTECH Robotics', country:'China', flag:'🇨🇳', founded:2012, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'public', ticker:'9880.HK', hq:'Shenzhen', founders:'Zhou Jian (周剑)', ceo:'James Zhou Jian (周剑)', funding:'Public (HKEX 9880.HK); ~$307M Jul + ~$398M Nov 2025 placements', valuation:'~$6.7B market cap (Nov 2025)', employees:'~1,500', website:'https://ubtrobot.com',
  summary:'Walker series targets industrial and commercial service. Among the top three by 2025 humanoid shipment volume per Counterpoint.',
  notable:'One of the earliest Chinese humanoid makers to list publicly.', robots:['walker-s2'], suppliers:[] },

{ id:'fourier', hubs:['Civil'], name:'Fourier Intelligence', country:'China', flag:'🇨🇳', founded:2015, type:'builder', sector:'Humanoid / Rehab', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'Gu Jie (顾捷)', ceo:'Gu Jie', funding:'$100M+', valuation:'Undisclosed', employees:'~500', website:'https://fourierintelligence.com',
  summary:'GR-series humanoids alongside a rehabilitation robotics business providing real clinical revenue.',
  notable:'One of few humanoid makers with an existing commercial medical-device revenue line.', robots:['fourier-gr2'], suppliers:[] },

{ id:'galbot', hubs:['Civil'], name:'Galbot (银河通用)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'Wang He (王鹤)', ceo:'Wang He', funding:'$369M (Mar 2026, Dealroom)', valuation:'Multi-billion', employees:'~300', website:'',
  summary:'Wheeled-base humanoid focused on retail and pharmacy operations; backers include CATL and Meituan.',
  notable:'Operates unmanned pharmacy storefronts in China as a live commercial deployment.', robots:['galbot-g1'], suppliers:[] },

{ id:'ai2-robotics', hubs:['Civil'], name:'AI² Robotics', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'—', ceo:'—', funding:'$735M (Jun 2026, Dealroom)', valuation:'~$3B', employees:'~300', website:'',
  summary:'Wheeled humanoid developer that raised roughly $735M at a near-$3B valuation in mid-2026.',
  notable:'One of the largest single rounds in Chinese humanoid robotics.', robots:[], suppliers:[] },

{ id:'robotera', hubs:['Civil'], name:'RobotEra (星动纪元)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'Chen Jianyu (陈建宇)', ceo:'Chen Jianyu', funding:'$295M (Apr 2026, Dealroom)', valuation:'Undisclosed', employees:'~200', website:'',
  summary:'Tsinghua-affiliated humanoid developer; STAR series platforms with a dexterous-hand focus.',
  notable:'Spun out of Tsinghua University.', robots:[], suppliers:[] },

{ id:'limx', hubs:['Civil'], name:'LimX Dynamics', country:'China', flag:'🇨🇳', founded:2022, type:'builder', sector:'Humanoid / Legged', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'Shi Qingsong', ceo:'Shi Qingsong', funding:'$200M (Feb 2026 + $200M Jul 2026, Dealroom)', valuation:'Undisclosed', employees:'~200', website:'https://limxdynamics.com',
  summary:'Biped and humanoid platforms with strong locomotion research; CL-series and TRON point-foot bipeds.',
  notable:'Point-foot biped locomotion is among the hardest control problems in the field.', robots:[], suppliers:[] },

{ id:'pudu', hubs:['Civil'], name:'Pudu Robotics', country:'China', flag:'🇨🇳', founded:2016, type:'builder', sector:'Service robots', vertical:'Service', status:'private', hq:'Shenzhen', founders:'Zhang Tao (张涛)', ceo:'Zhang Tao', funding:'$150M+', valuation:'Undisclosed', employees:'~1,000', website:'https://pudurobotics.com',
  summary:'One of the largest commercial service-robot fleets globally — delivery, cleaning and now semi-humanoid platforms.',
  notable:'Ships in genuine volume to hospitality worldwide — real revenue, unlike most humanoid peers.', robots:['pudu-d9'], suppliers:[] },

{ id:'sanctuary', hubs:['Civil'], name:'Sanctuary AI', country:'Canada', flag:'🇨🇦', founded:2018, type:'builder', sector:'Robot software', vertical:'Foundation model', status:'private', hq:'Vancouver', founders:'Geordie Rose, Suzanne Gildert, Ajay Agrawal, Olivia Norton', ceo:'James Wells', funding:'$140M+', valuation:'Undisclosed', employees:'~150', website:'https://sanctuary.ai',
  summary:'Pivoted in June 2026 from building its own Phoenix humanoid to hardware-agnostic robot software — a notable strategic retreat.',
  notable:'Co-founder Geordie Rose previously founded quantum computing company D-Wave.', robots:[], suppliers:[] },

{ id:'xpeng-robotics', hubs:['Civil'], name:'XPeng Robotics', country:'China', flag:'🇨🇳', founded:2020, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'public', ticker:'XPEV', hq:'Guangzhou', founders:'He Xiaopeng (何小鹏)', ceo:'He Xiaopeng', funding:'Parent-funded', valuation:'Public parent', employees:'~500', website:'',
  summary:'IRON humanoid developed inside EV maker XPeng, reusing automotive supply chain and autonomous-driving compute.',
  notable:'Follows the Tesla playbook: EV manufacturer leveraging its own supply chain into humanoids.', robots:['xpeng-iron'], suppliers:[] },

{ id:'pal-robotics', hubs:['Civil'], name:'PAL Robotics', country:'Spain', flag:'🇪🇸', founded:2004, type:'builder', sector:'Humanoid / Service', vertical:'Humanoid', status:'private', hq:'Barcelona', founders:'Francesco Ferro, Davide Faconti', ceo:'Francesco Ferro', funding:'Private', valuation:'Undisclosed', employees:'~150', website:'https://pal-robotics.com',
  summary:'One of Europe\'s longest-running humanoid makers — TALOS, TIAGo and ARI serve research and service markets.',
  notable:'Twenty years of continuous humanoid development, predating the current wave by two decades.', robots:['talos','tiago'], suppliers:[] },

{ id:'kawasaki', hubs:['Civil'], name:'Kawasaki Heavy Industries', country:'Japan', flag:'🇯🇵', founded:1896, type:'both', sector:'Industrial / Humanoid', vertical:'Industrial', status:'public', ticker:'7012.T', hq:'Tokyo', founders:'Shozo Kawasaki', ceo:'Yasuhiko Hashimoto', funding:'Public', valuation:'Public', employees:'~38,000', website:'https://kawasakirobotics.com',
  summary:'Industrial robot maker and one of the "Big Four"; Kaleido humanoid programme and Friends robotics line.',
  notable:'Built Japan\'s first industrial robot in 1969.', robots:['kaleido'], suppliers:['nabtesco'] },

{ id:'astribot', hubs:['Civil'], name:'Astribot (星尘智能)', country:'China', flag:'🇨🇳', founded:2022, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'Lai Jie (来杰)', ceo:'Lai Jie', funding:'Nine-figure', valuation:'Undisclosed', employees:'~200', website:'https://astribot.com',
  summary:'S1 wheeled humanoid noted for high-speed manipulation demonstrations.',
  notable:'Founder previously led Baidu\'s robotics division.', robots:[], suppliers:[] },

{ id:'noetix', hubs:['Civil'], name:'Noetix Robotics (松延动力)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'Jiang Zheyuan (姜哲源)', ceo:'Jiang Zheyuan', funding:'Nine-figure', valuation:'Undisclosed', employees:'~150', website:'',
  summary:'Low-cost humanoid maker; N2 platform aimed at education and research price points.',
  notable:'Part of the wave of Tsinghua-linked humanoid startups founded post-2023.', robots:[], suppliers:[] },

{ id:'engineai', hubs:['Civil'], name:'EngineAI (众擎机器人)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'Zhao Tongyang (赵同阳)', ceo:'Zhao Tongyang', funding:'$200M (Apr 2026, Dealroom)', valuation:'Undisclosed', employees:'~150', website:'https://engineai.com.cn',
  summary:'PM01 and SE01 bipeds known for natural gait demonstrations.',
  notable:'Gained attention for a humanoid front-flip demonstration in 2025.', robots:[], suppliers:[] },

{ id:'magiclab', hubs:['Civil'], name:'MagicLab (魔法原子)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Changzhou', founders:'—', ceo:'Wu Changzheng', funding:'Undisclosed', valuation:'Undisclosed', employees:'~200', website:'',
  summary:'MagicBot humanoid series; backed by appliance and automotive group Tinavi.',
  notable:'Targets both industrial inspection and commercial service deployment.', robots:[], suppliers:[] },

{ id:'deep-robotics', hubs:['Civil'], name:'Deep Robotics (云深处科技)', country:'China', flag:'🇨🇳', founded:2017, type:'builder', sector:'Quadruped', vertical:'Quadruped', status:'private', hq:'Hangzhou', founders:'Zhu Qiuguo (朱秋国)', ceo:'Zhu Qiuguo', funding:'$100M+', valuation:'Undisclosed', employees:'~400', website:'https://deeprobotics.cn',
  summary:'X-series and Lite-series quadrupeds for power-grid inspection, emergency response and industrial patrol.',
  notable:'Zhejiang University spin-off; strong position in Chinese utility inspection contracts.', robots:['deep-x30'], suppliers:[] },

{ id:'ghost-robotics', hubs:['Defense'], name:'Ghost Robotics', country:'United States', flag:'🇺🇸', founded:2015, type:'builder', sector:'Quadruped / Defense', vertical:'Defense', status:'private', hq:'Philadelphia', founders:'Gavin Kenneally, Avik De, Jiren Parikh', ceo:'Jiren Parikh', funding:'Acquired (LIG Nex1)', valuation:'~$240M (majority stake)', employees:'~100', website:'https://ghostrobotics.io',
  summary:'Vision 60 quadruped built for defense and security patrol; deployed with US Air Force security forces.',
  notable:'Majority stake acquired by South Korea\'s LIG Nex1 — a rare defense-driven robotics exit.', robots:['vision-60'], suppliers:[] },

{ id:'anybotics', hubs:['Civil'], name:'ANYbotics', country:'Switzerland', flag:'🇨🇭', founded:2016, type:'builder', sector:'Quadruped / Inspection', vertical:'Civil', status:'private', hq:'Zurich', founders:'Péter Fankhauser, Marco Hutter, Christian Gehring, Hanspeter Fässler', ceo:'Péter Fankhauser', funding:'$70M+', valuation:'Undisclosed', employees:'~150', website:'https://anybotics.com',
  summary:'ANYmal targets industrial inspection in energy, chemicals and utilities — an explicitly non-humanoid, ROI-first strategy.',
  notable:'ETH Zurich spin-off; ANYmal is certified for hazardous (Ex) environments.', robots:['anymal'], suppliers:[] }
);

/* ------------------------------------------------- ROBOT FOUNDATION MODELS */
window.RH_DATA.companies.push(
{ id:'physical-intelligence', hubs:['Civil'], name:'Physical Intelligence', country:'United States', flag:'🇺🇸', founded:2024, type:'builder', sector:'Robot foundation models', vertical:'Foundation model', status:'private', hq:'San Francisco', founders:'Karol Hausman, Sergey Levine, Chelsea Finn, Brian Ichter, Lachy Groom', ceo:'Karol Hausman', funding:'$400M+', valuation:'~$5.6B', employees:'~100', website:'https://physicalintelligence.company',
  summary:'Builds π0 and successor vision-language-action models intended to run across many robot bodies rather than one platform.',
  notable:'Founded by ex-Google DeepMind and Stanford robot-learning researchers; reached multi-billion valuation within a year.', robots:[], suppliers:[] },

{ id:'skild-ai', hubs:['Civil'], name:'Skild AI', country:'United States', flag:'🇺🇸', founded:2023, type:'builder', sector:'Robot foundation models', vertical:'Foundation model', status:'private', hq:'Pittsburgh', founders:'Deepak Pathak, Abhinav Gupta', ceo:'Deepak Pathak', funding:'~$1.4B Series C', valuation:'$14B+', employees:'~150', website:'https://skild.ai',
  summary:'Skild Brain is a general robot control model spanning industrial arms, quadrupeds and humanoids, learning substantially from human video.',
  notable:'January 2026 Series C led by SoftBank tripled its valuation in about seven months; investors include NVIDIA\'s NVentures, Jeff Bezos, Samsung and LG.', robots:[], suppliers:[] },

{ id:'field-ai', hubs:['Civil'], name:'Field AI', country:'United States', flag:'🇺🇸', founded:2021, type:'builder', sector:'Robot autonomy software', vertical:'Foundation model', status:'private', hq:'Mission Viejo, California', founders:'Ali Agha', ceo:'Ali Agha', funding:'$400M+', valuation:'~$2B', employees:'~100', website:'https://fieldai.com',
  summary:'Field-ready autonomy for unstructured environments — mines, construction, industrial sites — without prior maps or GPS.',
  notable:'Founder Ali Agha led autonomy research at NASA JPL.', robots:[], suppliers:[] },

{ id:'covariant', hubs:['Civil'], name:'Covariant', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Manipulation AI', vertical:'Foundation model', status:'private', hq:'Emeryville, California', founders:'Pieter Abbeel, Peter Chen, Rocky Duan, Tianhao Zhang', ceo:'Peter Chen', funding:'$220M+', valuation:'~$625M', employees:'~200', website:'https://covariant.ai',
  summary:'RFM-1 manipulation foundation model for warehouse picking; key staff moved to Amazon in 2024.',
  notable:'Co-founder Pieter Abbeel is among the most cited researchers in robot learning.', robots:[], suppliers:[] },

{ id:'generalist-ai', hubs:['Civil'], name:'Generalist AI', country:'United States', flag:'🇺🇸', founded:2024, type:'builder', sector:'Robot foundation models', vertical:'Foundation model', status:'private', hq:'Palo Alto', founders:'Pete Florence', ceo:'Pete Florence', funding:'Undisclosed', valuation:'Undisclosed', employees:'~50', website:'https://generalist.ai',
  summary:'Dexterity-focused robot foundation models from a team of ex-DeepMind researchers.',
  notable:'Part of the ex-DeepMind cluster behind several leading robot-brain labs.', robots:[], suppliers:[] },

{ id:'world-labs', hubs:['Civil'], name:'World Labs', country:'United States', flag:'🇺🇸', founded:2024, type:'builder', sector:'Spatial intelligence', vertical:'Foundation model', status:'private', hq:'San Francisco', founders:'Fei-Fei Li, Justin Johnson, Christoph Lassner, Ben Mildenhall', ceo:'Fei-Fei Li', funding:'$230M+', valuation:'$1B+', employees:'~100', website:'https://worldlabs.ai',
  summary:'Large world models for spatial reasoning — foundational to how robots understand 3D environments.',
  notable:'Founded by Fei-Fei Li, creator of ImageNet and a defining figure in modern computer vision.', robots:[], suppliers:[] }
);

/* ---------------------------------------------------------- DEFENSE / DRONES */
window.RH_DATA.companies.push(
{ id:'anduril', hubs:['Defense'], name:'Anduril Industries', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Defense autonomy', vertical:'Defense', status:'private', hq:'Costa Mesa, California', founders:'Palmer Luckey, Trae Stephens, Brian Schimpf, Matt Grimm, Joe Chen', ceo:'Brian Schimpf', funding:'$5B Series H', valuation:'$61B (May 2026)', employees:'~5,000', website:'https://anduril.com',
  summary:'The most valuable venture-backed defense company. Lattice OS is an open-architecture command layer connecting sensors, drones and effectors; hardware spans Ghost, Altius, Roadrunner and Pulsar.',
  notable:'March 2026: 10-year US Army enterprise contract with a ceiling of $20B for Lattice across counter-drone operations. Alone represents roughly 31% of combined defense-tech startup valuation.', robots:['ghost-uas','altius-700','roadrunner'], suppliers:[] },

{ id:'shield-ai', hubs:['Defense'], name:'Shield AI', country:'United States', flag:'🇺🇸', founded:2015, type:'builder', sector:'Autonomous flight', vertical:'Defense', status:'private', hq:'San Diego', founders:'Ryan Tseng, Brandon Tseng', ceo:'Gary Steele', funding:'$2B Series G', valuation:'$12.7B', employees:'~1,000', website:'https://shield.ai',
  summary:'Hivemind is an autonomy stack that flies aircraft without GPS or human input. V-BAT is its flagship VTOL UAS.',
  notable:'Selected for the US Air Force Collaborative Combat Aircraft prototype programme in February 2026. Where Anduril builds the battlefield brain, Shield AI builds the pilot.', robots:['v-bat'], suppliers:[] },

{ id:'helsing', hubs:['Defense'], name:'Helsing', country:'Germany', flag:'🇩🇪', founded:2021, type:'builder', sector:'Defense AI', vertical:'Defense', status:'private', hq:'Munich', founders:'Torsten Reil, Gundbert Scherf, Niklas Köhler', ceo:'Torsten Reil, Gundbert Scherf (co-CEOs)', funding:'~$3.4B total', valuation:'~$18B', employees:'~900', website:'https://helsing.ai',
  summary:'Europe\'s highest-valued defense-tech company, building AI software for sensor fusion and battlefield decision-making plus autonomous effectors across air, land, sea and undersea. Core products include the Altra combat-cloud AI, the HX-2 loitering munition and the CA-1 Europa autonomous-combat-aircraft concept.',
  notable:'Reached a ~$18B valuation with a $1.8B Series E in July 2026 (Dragoneer, Lightspeed), after a EUR 600M Series D in 2025. Chaired by Spotify Daniel Ek (via Prima Materia) and ex-Airbus CEO Tom Enders; co-founder Torsten Reil previously founded games-AI firm NaturalMotion, and Gundbert Scherf is a former German MoD official. Building Resilience Factory drone plants (>1,000 drones/month) and shares a Bundeswehr loitering-munition framework with Stark.', robots:['hx-2'], suppliers:[] },

{ id:'skydio', hubs:['Defense'], name:'Skydio', country:'United States', flag:'🇺🇸', founded:2014, type:'builder', sector:'Autonomous drones', vertical:'Defense', status:'private', hq:'San Mateo, California', founders:'Adam Bry, Abraham Bachrach, Matt Donahoe', ceo:'Adam Bry', funding:'$850M+', valuation:'~$4.4B', employees:'~800', website:'https://skydio.com',
  summary:'The leading US-made autonomous drone maker. Onboard AI navigates GPS-denied environments; serves defense and public safety.',
  notable:'One of the few drone companies with meaningful revenue in both commercial and defense segments. Founders came from MIT and Google X\'s Project Wing.', robots:['skydio-x10'], suppliers:[] },

{ id:'quantum-systems', hubs:['Defense'], name:'Quantum Systems', country:'Germany', flag:'🇩🇪', founded:2015, type:'builder', sector:'Reconnaissance UAS', vertical:'Defense', status:'private', hq:'Gilching', founders:'Florian Seibel, Tobias Kloss', ceo:'Florian Seibel', funding:'$1.2B Series D', valuation:'~$8B', employees:'~700', website:'https://quantum-systems.com',
  summary:'VTOL fixed-wing reconnaissance drones (Vector, Trinity) widely deployed in Ukraine and across European forces.',
  notable:'July 2026 Series D made it one of Europe\'s most valuable defense-tech companies. Founder Florian Seibel also co-founded Stark.', robots:['vector'], suppliers:[] },

{ id:'saronic', hubs:['Defense'], name:'Saronic Technologies', country:'United States', flag:'🇺🇸', founded:2022, type:'builder', sector:'Autonomous surface vessels', vertical:'Defense', status:'private', hq:'Austin, Texas', founders:'Dino Mavrookas, Rob Lehman, Vibhav Altekar, Doug Lambert', ceo:'Dino Mavrookas', funding:'$1.8B', valuation:'~$4B', employees:'~600', website:'https://saronic.com',
  summary:'Autonomous surface vessels (Spyglass, Cutlass, Corsair, Marauder) for maritime ISR and strike.',
  notable:'Founder Dino Mavrookas is a former Navy SEAL. Building Port Alpha, a large-scale autonomous shipyard.', robots:['corsair'], suppliers:[] },

{ id:'stark', hubs:['Defense'], name:'Stark (SKD SE)', country:'Germany', flag:'🇩🇪', founded:2024, type:'builder', sector:'Loitering munitions / unmanned systems', vertical:'Defense', status:'private', hq:'Berlin', founders:'Florian Seibel, Johannes Schaback', ceo:'Uwe Horstmann', funding:'~$670M total', valuation:'~€3.2-3.5B', employees:'~300-450', website:'https://stark-defence.com',
  summary:'Software-defined, mass-producible unmanned strike systems for NATO allies, spanning loitering munitions, uncrewed surface vessels and multi-domain command software. Flagship is the Virtus eVTOL one-way effector (>130 km range, up to 90 min endurance), alongside Cascade, Gambit, the Vanta USV family and the Minerva swarm-control software.',
  notable:'Went from founding to frontline relevance in roughly 13 months. Raised a €500M Series C in June 2026 co-led by Sequoia Capital and Founders Fund at a ~€3.2-3.5B valuation. Co-founded by Quantum Systems founder Florian Seibel; CEO Uwe Horstmann joined from Project A. Holds a ~€269M share of a ~€540M Bundeswehr loitering-munition package split with Helsing.', robots:['stark-virtus'], suppliers:[] },

{ id:'dji', hubs:['Civil'], name:'DJI', country:'China', flag:'🇨🇳', founded:2006, type:'builder', sector:'Commercial drones', vertical:'Drones', status:'private', hq:'Shenzhen', founders:'Frank Wang (汪滔)', ceo:'Frank Wang', funding:'Private', valuation:'Est. $15B+', employees:'~14,000', website:'https://dji.com',
  summary:'The dominant global commercial drone maker by volume, with an estimated majority share of the consumer and prosumer market.',
  notable:'Subject to escalating US restrictions; added to multiple US government lists, reshaping Western drone procurement.', robots:['mavic-3','matrice-350'], suppliers:[] },

{ id:'zipline', hubs:['Civil'], name:'Zipline', country:'United States', flag:'🇺🇸', founded:2014, type:'builder', sector:'Delivery drones', vertical:'Drones', status:'private', hq:'South San Francisco', founders:'Keller Rinaudo Cliffton, Keenan Wyrobek, Will Hetzler', ceo:'Keller Rinaudo Cliffton', funding:'$500M+', valuation:'~$4.2B', employees:'~1,000', website:'https://flyzipline.com',
  summary:'The largest autonomous delivery network by flight volume — medical supplies in Rwanda and Ghana, retail delivery in the US.',
  notable:'Has flown tens of millions of autonomous commercial miles, more operational data than any Western drone delivery peer.', robots:['zipline-p2'], suppliers:[] },

{ id:'wing', hubs:['Civil'], name:'Wing', country:'United States', flag:'🇺🇸', founded:2012, type:'builder', sector:'Delivery drones', vertical:'Drones', status:'private', hq:'Palo Alto', founders:'Google X project', ceo:'Adam Woodworth', funding:'Alphabet-funded', valuation:'Alphabet subsidiary', employees:'~500', website:'https://wing.com',
  summary:'Alphabet\'s drone delivery arm, operating in the US, Australia, Ireland and Finland; partnership with Walmart.',
  notable:'One of the first companies to receive FAA air-carrier certification for drone delivery.', robots:[], suppliers:[] },

{ id:'droneshield', hubs:['Defense'], name:'DroneShield', country:'Australia', flag:'🇦🇺', founded:2014, type:'builder', sector:'Counter-UAS', vertical:'Defense', status:'public', ticker:'DRO.AX', hq:'Sydney', founders:'Oleg Vornik, John Russell', ceo:'Oleg Vornik', funding:'Public', valuation:'Public', employees:'~250', website:'https://droneshield.com',
  summary:'Counter-drone detection and defeat systems — DroneGun, DroneSentry — sold to defense and critical infrastructure.',
  notable:'One of the few pure-play publicly listed counter-UAS companies globally.', robots:[], suppliers:[] },

{ id:'epirus', hubs:['Defense'], name:'Epirus', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Directed energy', vertical:'Defense', status:'private', hq:'Torrance, California', founders:'Joe Lonsdale, Bo Marr, Grant Verstandig, Nathan Mintz', ceo:'Andy Lowery', funding:'$550M+', valuation:'~$1.35B', employees:'~400', website:'https://epirusinc.com',
  summary:'Leonidas high-power microwave systems that disable drone swarms electronically rather than kinetically.',
  notable:'Directed energy offers a cost-per-shot advantage against mass drone attacks that interceptors cannot match.', robots:[], suppliers:[] },

{ id:'xtend', hubs:['Defense'], name:'XTEND', country:'Israel', flag:'🇮🇱', founded:2018, type:'builder', sector:'Tactical drones', vertical:'Defense', status:'private', hq:'Tel Aviv', founders:'Aviv Shapira, Rubi Liani', ceo:'Aviv Shapira', funding:'$152M+', valuation:'Undisclosed', employees:'~250', website:'https://xtend.me',
  summary:'Operator-guided tactical drones with XOS software enabling non-expert operation in complex indoor and urban environments.',
  notable:'Contracts with the US DoD and Israeli MoD for indoor tactical operations.', robots:[], suppliers:[] },

{ id:'chaos-industries', hubs:['Defense'], name:'Chaos Industries', country:'United States', flag:'🇺🇸', founded:2022, type:'builder', sector:'Counter-UAS radar', vertical:'Defense', status:'private', hq:'Los Angeles', founders:'Sean Kelly, Jack Kelly', ceo:'Sean Kelly', funding:'$200M+', valuation:'~$4.5B', employees:'~300', website:'https://chaosindustries.com',
  summary:'Compact counter-drone radar for detecting and tracking small low-altitude UAS.',
  notable:'One of the highest valuation-to-funding multiples in defense tech, reflecting urgency in the counter-UAS market.', robots:[], suppliers:[] },

{ id:'iceye', hubs:['Defense'], name:'ICEYE', country:'Finland', flag:'🇫🇮', founded:2014, type:'builder', sector:'SAR satellites', vertical:'Defense', status:'private', hq:'Espoo', founders:'Rafal Modrzewski, Pekka Laurila', ceo:'Rafal Modrzewski', funding:'$1.7B total', valuation:'$12.7B (Mar 2026)', employees:'~700', website:'https://iceye.com',
  summary:'Operates the world\'s largest private synthetic aperture radar satellite constellation — all-weather, day-night imaging.',
  notable:'SAR imagery has become critical intelligence infrastructure for autonomous targeting and battlefield awareness.', robots:[], suppliers:[] },

{ id:'swift-beat', hubs:['Defense'], name:'Swift Beat', country:'United States', flag:'🇺🇸', founded:2022, type:'builder', sector:'Autonomous drones', vertical:'Defense', status:'private', hq:'—', founders:'Eric Schmidt', ceo:'—', funding:'Undisclosed', valuation:'Undisclosed', employees:'~200', website:'',
  summary:'Formerly White Stork; low-cost autonomous strike drones supplied to Ukraine.',
  notable:'Backed and chaired by former Google CEO Eric Schmidt.', robots:[], suppliers:[] },

{ id:'unusual-machines', hubs:['Civil'], name:'Unusual Machines', country:'United States', flag:'🇺🇸', founded:2019, type:'supplier', sector:'Drone components', vertical:'Drones', status:'public', ticker:'UMAC', hq:'Orlando, Florida', founders:'—', ceo:'Allan Evans', funding:'Public', valuation:'Public', employees:'~50', website:'https://unusualmachines.com',
  summary:'US-based drone component maker (Fat Shark, Rotor Riot) building domestic motor and flight-controller supply.',
  notable:'Positioned specifically around NDAA-compliant, non-Chinese drone component sourcing.', robots:[], components:['brave-f7'], supplies_to:[] }
);

/* --------------------------------------------------- WAREHOUSE / LOGISTICS */
window.RH_DATA.companies.push(
{ id:'symbotic', hubs:['Civil'], name:'Symbotic', country:'United States', flag:'🇺🇸', founded:2007, type:'builder', sector:'Warehouse automation', vertical:'Logistics', status:'public', ticker:'SYM', hq:'Wilmington, Massachusetts', founders:'Rick Cohen', ceo:'Rick Cohen', funding:'Public', valuation:'Public', employees:'~1,700', website:'https://symbotic.com',
  summary:'End-to-end AI-powered warehouse automation for large distribution centres. Customers include Walmart, Target and Albertsons.',
  notable:'Fiscal 2026 Q3 revenue rose 22% to $721M. Acquired Walmart\'s Advanced Systems and Robotics business, then ARMS Innovation in July 2026.', robots:['symbot'], suppliers:[] },

{ id:'locus-robotics', hubs:['Civil'], name:'Locus Robotics', country:'United States', flag:'🇺🇸', founded:2014, type:'builder', sector:'Warehouse AMR', vertical:'Logistics', status:'private', hq:'Wilmington, Massachusetts', founders:'Bruce Welty, Mike Johnson', ceo:'Rick Faulk', funding:'$400M+', valuation:'$1B+', employees:'~500', website:'https://locusrobotics.com',
  summary:'Collaborative picking robots that guide warehouse workers; billions of units picked across customer sites.',
  notable:'Spun out of third-party logistics operator Quiet Logistics — built by operators who felt the problem first-hand.', robots:['locus-origin'], suppliers:[] },

{ id:'geek-plus', hubs:['Civil'], name:'Geek+ (极智嘉)', country:'China', flag:'🇨🇳', founded:2015, type:'builder', sector:'Warehouse AMR', vertical:'Logistics', status:'public', ticker:'2590.HK', hq:'Beijing', founders:'Yong Zheng (郑勇)', ceo:'Yong Zheng', funding:'IPO 2025', valuation:'Public', employees:'~1,500', website:'https://geekplus.com',
  summary:'The largest AMR maker by global installed base; goods-to-person, sorting and fulfilment systems in 40+ countries.',
  notable:'One of the few warehouse robotics companies to complete an IPO — listed in Hong Kong in 2025.', robots:[], suppliers:[] },

{ id:'exotec', hubs:['Civil'], name:'Exotec', country:'France', flag:'🇫🇷', founded:2015, type:'builder', sector:'Warehouse automation', vertical:'Logistics', status:'private', hq:'Croix', founders:'Romain Moulin, Renaud Heitz', ceo:'Romain Moulin', funding:'$450M+', valuation:'$2B+', employees:'~1,000', website:'https://exotec.com',
  summary:'Skypod climbing robots that access storage racks in three dimensions — a distinct approach to dense storage.',
  notable:'France\'s first industrial-tech unicorn; customers include Carrefour, Uniqlo and Gap.', robots:['skypod'], suppliers:[] },

{ id:'autostore', hubs:['Civil'], name:'AutoStore', country:'Norway', flag:'🇳🇴', founded:1996, type:'builder', sector:'Cube storage', vertical:'Logistics', status:'public', ticker:'AUTO.OL', hq:'Nedre Vats', founders:'Ingvar Hognaland', ceo:'Mats Hovland Vikse', funding:'Public', valuation:'Public', employees:'~1,000', website:'https://autostoresystems.com',
  summary:'Cube-based automated storage and retrieval — the densest storage-per-square-metre approach in the market.',
  notable:'Pioneered the grid-and-bin storage concept later imitated across the sector.', robots:[], suppliers:[] },

{ id:'dexterity', hubs:['Civil'], name:'Dexterity', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Robotic manipulation', vertical:'Logistics', status:'private', hq:'Redwood City, California', founders:'Samir Menon', ceo:'Samir Menon', funding:'$250M+', valuation:'$1.65B', employees:'~200', website:'https://dexterity.ai',
  summary:'Truck-loading and palletising robots with force-aware manipulation; Mech platform deployed with FedEx and UPS.',
  notable:'Founder Samir Menon did his PhD in robotics at Stanford under Oussama Khatib.', robots:['dexterity-mech'], suppliers:[] },

{ id:'hai-robotics', hubs:['Civil'], name:'Hai Robotics (海柔创新)', country:'China', flag:'🇨🇳', founded:2016, type:'builder', sector:'Warehouse ASRS', vertical:'Logistics', status:'private', hq:'Shenzhen', founders:'Chen Yuchuan (陈宇奇)', ceo:'Chen Yuchuan', funding:'$400M+', valuation:'$1B+', employees:'~2,000', website:'https://hairobotics.com',
  summary:'HAIPICK case-handling robots that retrieve totes at height — a fast-growing ASRS category.',
  notable:'Created the "case-handling robot" category now imitated widely.', robots:[], suppliers:[] },

{ id:'nimble', hubs:['Civil'], name:'Nimble Robotics', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Fulfilment robotics', vertical:'Logistics', status:'private', hq:'San Francisco', founders:'Simon Kalouche', ceo:'Simon Kalouche', funding:'$200M+', valuation:'$1B+', employees:'~200', website:'https://nimblerobotics.com',
  summary:'Fully autonomous fulfilment centres combining picking robots with teleoperation fallback.',
  notable:'Operates its own fulfilment network rather than only selling hardware — a vertically integrated bet.', robots:[], suppliers:[] },

{ id:'greyorange', hubs:['Civil'], name:'GreyOrange', country:'United States', flag:'🇺🇸', founded:2011, type:'builder', sector:'Warehouse robotics', vertical:'Logistics', status:'private', hq:'Atlanta', founders:'Samay Kohli, Akash Gupta', ceo:'Samay Kohli', funding:'$250M+', valuation:'Undisclosed', employees:'~700', website:'https://greyorange.com',
  summary:'GreyMatter fulfilment orchestration software with a multi-vendor robot fleet approach.',
  notable:'Pivoted from hardware-first to software-orchestration as the differentiator.', robots:[], suppliers:[] },

{ id:'amazon-robotics', hubs:['Civil'], name:'Amazon Robotics', country:'United States', flag:'🇺🇸', founded:2003, type:'builder', sector:'Warehouse robotics', vertical:'Logistics', status:'public', ticker:'AMZN', hq:'North Reading, Massachusetts', founders:'Mick Mountz (as Kiva Systems)', ceo:'—', funding:'Amazon subsidiary', valuation:'Amazon subsidiary', employees:'—', website:'https://amazon.jobs/en/teams/amazon-robotics',
  summary:'The largest robot fleet operator on earth — over a million units across Amazon\'s network, including Proteus, Sparrow, Sequoia and Digit pilots.',
  notable:'Originally Kiva Systems, acquired by Amazon in 2012 for $775M. Acquired home-robot startup Fauna Robotics in March 2026.', robots:['proteus'], suppliers:[] },

{ id:'pickle-robot', hubs:['Civil'], name:'Pickle Robot', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Truck unloading', vertical:'Logistics', status:'private', hq:'Cambridge, Massachusetts', founders:'AJ Meyer', ceo:'AJ Meyer', funding:'$100M+', valuation:'Undisclosed', employees:'~100', website:'https://picklerobot.com',
  summary:'Robotic truck and container unloading — one of the least automated, most physically punishing tasks in logistics.',
  notable:'Targets a narrow, high-pain task rather than general-purpose manipulation.', robots:[], suppliers:[] },

{ id:'standard-bots', hubs:['Civil'], name:'Standard Bots', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Cobots', vertical:'Industrial', status:'private', hq:'Glen Cove, New York', founders:'Evan Beard', ceo:'Evan Beard', funding:'$100M+', valuation:'Undisclosed', employees:'~150', website:'https://standardbots.com',
  summary:'RO1 six-axis collaborative robot arm built in the US, positioned on price against established cobot makers.',
  notable:'US-manufactured cobot at a price point previously only available from Asian suppliers.', robots:['ro1'], suppliers:[] }
);

/* -------------------------------------------- AGRICULTURE / CONSTRUCTION */
window.RH_DATA.companies.push(
{ id:'john-deere', hubs:['Agriculture'], name:'John Deere', country:'United States', flag:'🇺🇸', founded:1837, type:'builder', sector:'Agricultural autonomy', vertical:'Agriculture', status:'public', ticker:'DE', hq:'Moline, Illinois', founders:'John Deere', ceo:'John May', funding:'Public', valuation:'Public', employees:'~83,000', website:'https://deere.com',
  summary:'The largest agricultural machinery maker and, through its autonomy programme, one of the biggest deployers of field robotics by acreage.',
  notable:'Second-generation autonomous 9RX tractor announced at CES 2025; See & Spray reduces herbicide use by targeting individual weeds.', robots:['deere-9rx'], suppliers:[] },

{ id:'carbon-robotics', hubs:['Agriculture'], name:'Carbon Robotics', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Laser weeding', vertical:'Agriculture', status:'private', hq:'Seattle', founders:'Paul Mikesell', ceo:'Paul Mikesell', funding:'$157M+', valuation:'Undisclosed', employees:'~200', website:'https://carbonrobotics.com',
  summary:'LaserWeeder uses computer vision and high-power lasers to kill weeds without herbicide — chemical-free at commercial scale.',
  notable:'Founder Paul Mikesell previously co-founded storage company Isilon.', robots:['laserweeder'], suppliers:[] },

{ id:'monarch-tractor', hubs:['Agriculture'], name:'Monarch Tractor', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Electric autonomous tractors', vertical:'Agriculture', status:'private', hq:'Livermore, California', founders:'Praveen Penmetsa, Mark Schwager, Zachary Omohundro, Carlo Mondavi', ceo:'Praveen Penmetsa', funding:'$220M+', valuation:'Undisclosed', employees:'~300', website:'https://monarchtractor.com',
  summary:'MK-V electric driver-optional tractor targeting vineyards and specialty crops.',
  notable:'Co-founder Carlo Mondavi is a fourth-generation winemaker — the customer helped design the product.', robots:['monarch-mk-v'], suppliers:[] },

{ id:'agtonomy', hubs:['Agriculture'], name:'Agtonomy', country:'United States', flag:'🇺🇸', founded:2020, type:'builder', sector:'Farm autonomy software', vertical:'Agriculture', status:'private', hq:'South San Francisco', founders:'Tim Bucher, Valerie Syme', ceo:'Tim Bucher', funding:'$50M+', valuation:'Undisclosed', employees:'~80', website:'https://agtonomy.com',
  summary:'Autonomy software retrofitted onto existing agricultural equipment rather than selling new machines.',
  notable:'Partnership with Bobcat and Doosan brings autonomy to installed equipment bases.', robots:[], suppliers:[] },

{ id:'naio', hubs:['Agriculture'], name:'Naïo Technologies', country:'France', flag:'🇫🇷', founded:2011, type:'builder', sector:'Weeding robots', vertical:'Agriculture', status:'private', hq:'Escalquens', founders:'Aymeric Barthes, Gaëtan Séverac', ceo:'Aymeric Barthes', funding:'€40M+', valuation:'Undisclosed', employees:'~150', website:'https://naio-technologies.com',
  summary:'Oz, Ted and Orio autonomous weeding robots for vegetable and vineyard operations across Europe.',
  notable:'One of the longest-operating commercial field-robot makers in Europe.', robots:['naio-orio'], suppliers:[] },

{ id:'burro', hubs:['Agriculture'], name:'Burro', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Agricultural transport', vertical:'Agriculture', status:'private', hq:'Philadelphia', founders:'Charlie Andersen', ceo:'Charlie Andersen', funding:'$50M+', valuation:'Undisclosed', employees:'~80', website:'https://burro.ai',
  summary:'Autonomous ground carts that carry harvested produce, addressing farm labour shortage in the simplest possible way.',
  notable:'Deliberately narrow: solves carrying, not picking — and ships in real volume as a result.', robots:['burro-grande'], suppliers:[] },

{ id:'verdant', hubs:['Agriculture'], name:'Verdant Robotics', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Precision agriculture', vertical:'Agriculture', status:'private', hq:'Hayward, California', founders:'Gabe Sibley, Curtis Garner, Lawrence Ibarria', ceo:'Gabe Sibley', funding:'$70M+', valuation:'Undisclosed', employees:'~80', website:'https://verdantrobotics.com',
  summary:'Multi-action precision spraying that treats individual plants rather than whole fields.',
  notable:'Founder Gabe Sibley previously led autonomy research at Cruise and founded Zippy.', robots:[], suppliers:[] },

{ id:'built-robotics', hubs:['Civil'], name:'Built Robotics', country:'United States', flag:'🇺🇸', founded:2016, type:'builder', sector:'Construction autonomy', vertical:'Civil', status:'private', hq:'San Francisco', founders:'Noah Ready-Campbell, Andrew Liang', ceo:'Noah Ready-Campbell', funding:'$110M+', valuation:'Undisclosed', employees:'~150', website:'https://builtrobotics.com',
  summary:'Autonomy retrofit kits for excavators and heavy equipment; Exosystem for solar pile driving.',
  notable:'Founder Noah Ready-Campbell built the company after selling a startup to eBay; targets solar construction at utility scale.', robots:[], suppliers:[] },

{ id:'dusty-robotics', hubs:['Civil'], name:'Dusty Robotics', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Construction layout', vertical:'Civil', status:'private', hq:'Mountain View, California', founders:'Tessa Lau, Philipp Herget', ceo:'Tessa Lau', funding:'$90M+', valuation:'Undisclosed', employees:'~100', website:'https://dustyrobotics.com',
  summary:'FieldPrinter prints building layouts directly onto floors from BIM models, replacing manual chalk-line work.',
  notable:'Reported to cut layout time substantially on high-rise projects — one of construction robotics\' clearest ROI cases.', robots:['fieldprinter'], suppliers:[] },

{ id:'canvas', hubs:['Civil'], name:'Canvas', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Construction robotics', vertical:'Civil', status:'private', hq:'San Francisco', founders:'Kevin Albert, Maria Davidson', ceo:'Kevin Albert', funding:'$100M+', valuation:'Undisclosed', employees:'~100', website:'https://canvas.build',
  summary:'Drywall finishing robots operated by union-trained workers — an explicitly labour-partnership model.',
  notable:'Founder Kevin Albert previously worked at Boston Dynamics. Partnered with the drywall finishers\' union rather than around it.', robots:[], suppliers:[] },

{ id:'gecko-robotics', hubs:['Civil'], name:'Gecko Robotics', country:'United States', flag:'🇺🇸', founded:2013, type:'builder', sector:'Industrial inspection', vertical:'Civil', status:'private', hq:'Pittsburgh', founders:'Jake Loosararian, Troy Demmer', ceo:'Jake Loosararian', funding:'$350M+', valuation:'$1.25B+', employees:'~500', website:'https://geckorobotics.com',
  summary:'Wall-climbing inspection robots plus the Cantilever data platform for asset integrity in power, defense and heavy industry.',
  notable:'Contracts across the US Navy and power sector; the data layer, not the robot, is the durable product.', robots:['gecko-toka'], suppliers:[] }
);

/* ------------------------------------------------ MEDICAL / INDUSTRIAL ARMS */
window.RH_DATA.companies.push(
{ id:'intuitive', hubs:['Civil'], name:'Intuitive Surgical', country:'United States', flag:'🇺🇸', founded:1995, type:'builder', sector:'Surgical robotics', vertical:'Medical', status:'public', ticker:'ISRG', hq:'Sunnyvale, California', founders:'Frederic Moll, Robert Younge, John Freund', ceo:'Dave Rosa', funding:'Public', valuation:'Public', employees:'~14,000', website:'https://intuitive.com',
  summary:'The da Vinci system defined surgical robotics; a large installed base with high-margin recurring instrument revenue.',
  notable:'The clearest proof that robotics can generate durable, compounding revenue — the model most robotics startups aspire to.', robots:['da-vinci-5'], suppliers:[] },

{ id:'cmr-surgical', hubs:['Civil'], name:'CMR Surgical', country:'United Kingdom', flag:'🇬🇧', founded:2014, type:'builder', sector:'Surgical robotics', vertical:'Medical', status:'private', hq:'Cambridge', founders:'Martin Frost, Luke Hares, Keith Marshall, Mark Slack, Paul Roberts', ceo:'Massimiliano Colella', funding:'$1B+', valuation:'Multi-billion', employees:'~800', website:'https://cmrsurgical.com',
  summary:'Versius modular surgical robot designed as a lower-cost, smaller-footprint alternative to da Vinci.',
  notable:'Among the largest privately funded medical device companies in Europe.', robots:['versius'], suppliers:[] },

{ id:'fanuc', hubs:['Civil'], name:'FANUC', country:'Japan', flag:'🇯🇵', founded:1972, type:'both', sector:'Industrial robots', vertical:'Industrial', status:'public', ticker:'6954.T', hq:'Oshino, Yamanashi', founders:'Seiuemon Inaba', ceo:'Kenji Yamaguchi', funding:'Public', valuation:'Public', employees:'~9,000', website:'https://fanuc.co.jp',
  summary:'The world\'s largest industrial robot maker by installed base, and a major consumer of precision reducers.',
  notable:'Long-term supply agreements with Nabtesco underpin its joint supply chain.', robots:[], suppliers:['nabtesco'] },

{ id:'abb', hubs:['Civil'], name:'ABB Robotics', country:'Switzerland', flag:'🇨🇭', founded:1988, type:'both', sector:'Industrial robots', vertical:'Industrial', status:'public', ticker:'ABBN.SW', hq:'Zurich', founders:'Merger of ASEA and BBC', ceo:'Morten Wierod', funding:'Public', valuation:'Public', employees:'~110,000', website:'https://new.abb.com/products/robotics',
  summary:'One of the "Big Four" industrial robot makers alongside FANUC, Yaskawa and KUKA.',
  notable:'Standard-spec user of Nabtesco RV reducers; announced plans to spin off its robotics division.', robots:[], suppliers:['nabtesco'] },

{ id:'yaskawa', hubs:['Civil'], name:'Yaskawa Electric', country:'Japan', flag:'🇯🇵', founded:1915, type:'both', sector:'Industrial robots / drives', vertical:'Industrial', status:'public', ticker:'6506.T', hq:'Kitakyushu', founders:'Keiichiro Yasukawa', ceo:'Masahiro Ogawa', funding:'Public', valuation:'Public', employees:'~15,000', website:'https://yaskawa-global.com',
  summary:'Motoman industrial robots plus one of the largest servo drive and motor businesses globally.',
  notable:'Coined the term "mechatronics" in 1969.', robots:[], suppliers:['nabtesco'] },

{ id:'kuka', hubs:['Civil'], name:'KUKA', country:'Germany', flag:'🇩🇪', founded:1898, type:'both', sector:'Industrial robots', vertical:'Industrial', status:'private', hq:'Augsburg', founders:'Johann Josef Keller, Jakob Knappich', ceo:'Peter Mohnen', funding:'Midea-owned', valuation:'Acquired (€4.5B, 2016)', employees:'~15,000', website:'https://kuka.com',
  summary:'German industrial robot maker; a mainstay of European automotive body shops.',
  notable:'Acquired by China\'s Midea Group in 2016 — a deal that reshaped European debate on industrial technology ownership.', robots:[], suppliers:[] },

{ id:'universal-robots', hubs:['Civil'], name:'Universal Robots', country:'Denmark', flag:'🇩🇰', founded:2005, type:'builder', sector:'Collaborative robots', vertical:'Industrial', status:'private', hq:'Odense', founders:'Esben Østergaard, Kasper Støy, Kristian Kassow', ceo:'Kim Povlsen', funding:'Teradyne-owned', valuation:'Acquired ($285M, 2015)', employees:'~1,200', website:'https://universal-robots.com',
  summary:'Created the collaborative robot category; the UR series remains the reference cobot platform.',
  notable:'Owned by Teradyne. Odense became a global robotics cluster largely because of this company.', robots:['ur10e'], suppliers:[] },

{ id:'doosan-robotics', hubs:['Civil'], name:'Doosan Robotics', country:'South Korea', flag:'🇰🇷', founded:2015, type:'builder', sector:'Collaborative robots', vertical:'Industrial', status:'public', ticker:'454910.KS', hq:'Suwon', founders:'Doosan Group', ceo:'Ryu Junghoon', funding:'IPO 2023', valuation:'Public', employees:'~500', website:'https://doosanrobotics.com',
  summary:'Fast-growing cobot maker; among the global top five by unit share.',
  notable:'2023 IPO was one of the largest robotics listings in Korean market history.', robots:[], suppliers:[] },

{ id:'techman', hubs:['Civil'], name:'Techman Robot', country:'Taiwan', flag:'🇹🇼', founded:2015, type:'builder', sector:'Collaborative robots', vertical:'Industrial', status:'private', hq:'Taoyuan', founders:'Quanta Storage', ceo:'Haw-Ching Yang', funding:'Private', valuation:'Undisclosed', employees:'~400', website:'https://tm-robot.com',
  summary:'Cobots with built-in vision as standard rather than an add-on.',
  notable:'Among the top global cobot makers by volume; backed by Quanta Storage and Delta Electronics.', robots:[], suppliers:[] }
);

/* ============================ SUPPLIERS: REDUCERS & ACTUATION ============ */
window.RH_DATA.companies.push(
{ id:'harmonic-drive', hubs:['Civil'], name:'Harmonic Drive Systems', country:'Japan', flag:'🇯🇵', founded:1970, type:'supplier', sector:'Precision reducers', vertical:'Actuation', status:'public', ticker:'6324.T / HSYDF', hq:'Tokyo', founders:'Licensed from USM Corp', ceo:'Akira Nagai', funding:'Public', valuation:'~$4.2B market cap', employees:'~2,000', website:'https://harmonicdrive.net',
  summary:'The global quality benchmark for strain-wave (harmonic) gearing and the default Tier-1 supplier for high-spec humanoid joints.',
  notable:'Largest holding in the ROBO Global ETF; widely treated as the cleanest Western-facing exposure to the humanoid theme.', components:['csd-2a','csg-2a'], supplies_to:['figure-ai','boston-dynamics','kawasaki'] },

{ id:'nabtesco', hubs:['Civil'], name:'Nabtesco', country:'Japan', flag:'🇯🇵', founded:2003, type:'supplier', sector:'Precision reducers', vertical:'Actuation', status:'public', ticker:'6268.T', hq:'Tokyo', founders:'Merger of Teijin Seiki and Nabco', ceo:'Atsushi Kimura', funding:'Public', valuation:'Public', employees:'~8,000', website:'https://nabtesco.com',
  summary:'Global leader in precision gear reducers — an estimated 22–25% of global harmonic and cycloidal reducer revenue, and roughly 60% of the RV-reducer market for medium-to-large robot joints.',
  notable:'RV series is standard spec at FANUC, ABB, Yaskawa and Kawasaki. Invested $180M+ in capacity and R&D between 2022 and 2025.', components:['rv-n'], supplies_to:['fanuc','abb','yaskawa','kawasaki'] },

{ id:'leaderdrive', hubs:['Civil'], name:'Leaderdrive (绿的谐波)', country:'China', flag:'🇨🇳', founded:2003, type:'supplier', sector:'Harmonic reducers', vertical:'Actuation', status:'public', ticker:'688017.SS', hq:'Suzhou', founders:'Zuo Yubo (左昱昱)', ceo:'Zuo Yubo', funding:'Public', valuation:'Public', employees:'~1,500', website:'',
  summary:'China\'s leading domestic harmonic reducer maker, scaling cost-competitive alternatives to the Japanese incumbents.',
  notable:'Named by McKinsey among the emerging challengers in strain-wave gearing.', components:[], supplies_to:[] },

{ id:'shuanghuan', hubs:['Civil'], name:'Zhejiang Shuanghuan Driveline (双环传动)', country:'China', flag:'🇨🇳', founded:1980, type:'supplier', sector:'Reducers / gears', vertical:'Actuation', status:'public', ticker:'002472.SZ', hq:'Yuhuan, Zhejiang', founders:'Wu Changhong (吴长鸿)', ceo:'Wu Changhong', funding:'Public', valuation:'Public', employees:'~7,000', website:'',
  summary:'Automotive gear maker that moved into RV and harmonic reducers; reported supplier to both Tesla Optimus and Unitree.',
  notable:'New Suzhou plant coming online in 2026, described at roughly 500,000 units of annual reducer capacity.', components:[], supplies_to:['tesla','unitree'] },

{ id:'zhongda-leader', hubs:['Civil'], name:'Ningbo Zhongda Leader (中大力德)', country:'China', flag:'🇨🇳', founded:1998, type:'supplier', sector:'Reducers / actuators', vertical:'Actuation', status:'public', ticker:'002896.SZ', hq:'Ningbo', founders:'Cen Jianjun (岑建军)', ceo:'Cen Jianjun', funding:'Public', valuation:'Public', employees:'~2,000', website:'',
  summary:'Integrated reducer and actuator maker; named among Figure AI\'s reducer suppliers.',
  notable:'Part of the Chinese cost-competitive challenge to Japanese reducer dominance.', components:[], supplies_to:['figure-ai'] },

{ id:'sanhua', hubs:['Civil'], name:'Sanhua Intelligent Controls', country:'China', flag:'🇨🇳', founded:1984, type:'supplier', sector:'Actuators / thermal', vertical:'Actuation', status:'public', ticker:'002050.SZ', hq:'Shaoxing, Zhejiang', founders:'Zhang Daocai (张道才)', ceo:'Zhang Yabo', funding:'Public', valuation:'Public', employees:'~20,000', website:'',
  summary:'Existing Tesla EV thermal-management supplier, widely reported as an actuator and thermal supplier for Optimus.',
  notable:'Has expanded capacity in servo motors and electromechanical actuators specifically for humanoid demand.', components:[], supplies_to:['tesla'] },

{ id:'cone-drive', hubs:['Civil'], name:'Cone Drive', country:'United States', flag:'🇺🇸', founded:1926, type:'supplier', sector:'Harmonic / cycloidal', vertical:'Actuation', status:'private', ticker:'', hq:'Traverse City, Michigan', founders:'Wildhaber-Cone design lineage', ceo:'—', funding:'Timken-owned', valuation:'Undisclosed', employees:'~500', website:'https://conedrive.com',
  summary:'US-made harmonic strain-wave and cycloidal gearing positioned for humanoid joints — compact, lightweight, backlash-free.',
  notable:'The main domestic US alternative to Japanese reducer supply — strategically relevant under new procurement rules.', components:[], supplies_to:[] },

{ id:'laifual', hubs:['Civil'], name:'Zhejiang Laifual Drive', country:'China', flag:'🇨🇳', founded:2011, type:'supplier', sector:'Harmonic reducers', vertical:'Actuation', status:'private', hq:'Hangzhou', founders:'—', ceo:'—', funding:'Private', valuation:'Undisclosed', employees:'~800', website:'https://laifual.com',
  summary:'Harmonic reducer maker competing on published spec parity — ±15 arcsecond positioning precision and 10,000+ hour service life.',
  notable:'Represents the Chinese strategy of competing on measurable spec sheets, not just price.', components:[], supplies_to:[] },

{ id:'maxon', hubs:['Civil'], name:'maxon', country:'Switzerland', flag:'🇨🇭', founded:1961, type:'supplier', sector:'Precision motors', vertical:'Actuation', status:'private', hq:'Sachseln', founders:'Erwin Braun', ceo:'Eugen Elmiger', funding:'Private', valuation:'Undisclosed', employees:'~3,000', website:'https://maxongroup.com',
  summary:'High-precision brushless DC and frameless motors used across robotics, medical devices and space systems.',
  notable:'Supplied motors for NASA Mars rovers — a durability credential few competitors can match.', components:['ec-frameless-85'], supplies_to:[] },

{ id:'kollmorgen', hubs:['Civil'], name:'Kollmorgen', country:'United States', flag:'🇺🇸', founded:1916, type:'supplier', sector:'Frameless motors', vertical:'Actuation', status:'private', hq:'Radford, Virginia', founders:'Otto Kollmorgen', ceo:'—', funding:'Regal Rexnord-owned', valuation:'Undisclosed', employees:'~2,000', website:'https://kollmorgen.com',
  summary:'TBM frameless motor families designed for direct integration into robot joints.',
  notable:'One of the few US suppliers with frameless motor capability at humanoid-relevant torque density.', components:['tbm2g'], supplies_to:[] },

{ id:'nidec', hubs:['Civil'], name:'Nidec', country:'Japan', flag:'🇯🇵', founded:1973, type:'supplier', sector:'Motors', vertical:'Actuation', status:'public', ticker:'6594.T', hq:'Kyoto', founders:'Shigenobu Nagamori', ceo:'Mitsuya Kishida', funding:'Public', valuation:'Public', employees:'~100,000', website:'https://nidec.com',
  summary:'The world\'s largest precision motor maker by volume, spanning micro motors to EV traction and robotics drives.',
  notable:'Scale advantage in motors is the counterweight to Japan\'s reducer concentration.', components:['nidec-d-series'], supplies_to:[] },

{ id:'inovance', hubs:['Civil'], name:'Inovance Technology', country:'China', flag:'🇨🇳', founded:2003, type:'supplier', sector:'Servo drives', vertical:'Actuation', status:'public', ticker:'300124.SZ', hq:'Shenzhen', founders:'Zhu Xingming (朱兴明)', ceo:'Zhu Xingming', funding:'Public', valuation:'Public', employees:'~20,000', website:'https://inovance.com',
  summary:'China\'s largest domestic servo drive and industrial automation supplier, increasingly displacing Japanese incumbents domestically.',
  notable:'A key reason Chinese robot makers can build cost-competitive systems without importing drives.', components:['sv670'], supplies_to:[] },

{ id:'synapticon', hubs:['Civil'], name:'Synapticon', country:'Germany', flag:'🇩🇪', founded:2010, type:'supplier', sector:'Servo drives', vertical:'Actuation', status:'private', hq:'Schönaich', founders:'Nikolai Ensslen', ceo:'Nikolai Ensslen', funding:'Private', valuation:'Undisclosed', employees:'~100', website:'https://synapticon.com',
  summary:'SOMANET integrated servo drive modules designed specifically for compact robot joints.',
  notable:'Among the few European suppliers of joint-integrated drive electronics at humanoid scale.', components:['somanet-circulo'], supplies_to:[] },

{ id:'thk', hubs:['Civil'], name:'THK', country:'Japan', flag:'🇯🇵', founded:1971, type:'supplier', sector:'Linear motion', vertical:'Motion', status:'public', ticker:'6481.T', hq:'Tokyo', founders:'Hiroshi Teramachi', ceo:'Akihiro Teramachi', funding:'Public', valuation:'Public', employees:'~13,000', website:'https://thk.com',
  summary:'Inventor of the linear guide; LM guides and ball screws are foundational to robot axes and humanoid limbs.',
  notable:'Linear motion is an under-discussed bottleneck as humanoid volumes rise.', components:['shs-lm-guide'], supplies_to:[] },

{ id:'hiwin', hubs:['Civil'], name:'Hiwin Technologies', country:'Taiwan', flag:'🇹🇼', founded:1989, type:'supplier', sector:'Linear motion', vertical:'Motion', status:'public', ticker:'2049.TW', hq:'Taichung', founders:'Eric Chuo (卓永財)', ceo:'Eric Chuo', funding:'Public', valuation:'Public', employees:'~7,000', website:'https://hiwin.tw',
  summary:'Ball screws, linear guides and single-axis robots; a key non-Japanese alternative in precision motion.',
  notable:'Taiwan\'s position in precision motion is a strategically overlooked node in the robotics supply chain.', components:['kk-single-axis'], supplies_to:[] },

{ id:'ewellix', hubs:['Civil'], name:'Ewellix', country:'Sweden', flag:'🇸🇪', founded:2019, type:'supplier', sector:'Linear actuators', vertical:'Motion', status:'private', hq:'Gothenburg', founders:'SKF carve-out', ceo:'—', funding:'Schaeffler-owned', valuation:'Undisclosed', employees:'~1,200', website:'https://ewellix.com',
  summary:'Electric linear actuators and telescopic pillars used in mobile robots and cobot lifts.',
  notable:'Carved out of SKF, later acquired by Schaeffler — consolidation typical of the motion-components layer.', components:['ema-100'], supplies_to:[] }
);

/* ============================ SUPPLIERS: SENSING & COMPUTE ============== */
window.RH_DATA.companies.push(
{ id:'nvidia', hubs:['Civil'], name:'NVIDIA', country:'United States', flag:'🇺🇸', founded:1993, type:'supplier', sector:'Edge compute / AI', vertical:'Compute', status:'public', ticker:'NVDA', hq:'Santa Clara, California', founders:'Jensen Huang, Chris Malachowsky, Curtis Priem', ceo:'Jensen Huang', funding:'Public', valuation:'Public', employees:'~30,000', website:'https://nvidia.com',
  summary:'Jetson is the default onboard compute for a large share of robotics developers; Isaac provides simulation and Omniverse the training environment. Also an investor in Figure AI.',
  notable:'Jetson Thor targets humanoid-class workloads. Nvidia\'s investment in Figure was as much about guaranteed GPU allocation as capital.', components:['jetson-thor','jetson-orin'], supplies_to:['figure-ai','agility'] },

{ id:'qualcomm', hubs:['Civil'], name:'Qualcomm', country:'United States', flag:'🇺🇸', founded:1985, type:'supplier', sector:'Edge compute', vertical:'Compute', status:'public', ticker:'QCOM', hq:'San Diego', founders:'Irwin Jacobs, Andrew Viterbi and others', ceo:'Cristiano Amon', funding:'Public', valuation:'Public', employees:'~50,000', website:'https://qualcomm.com',
  summary:'Dragonwing and RB-series robotics platforms combining edge AI, connectivity and low power draw.',
  notable:'Power efficiency is Qualcomm\'s wedge against Nvidia in battery-constrained mobile robots.', components:['rb3-gen2'], supplies_to:[] },

{ id:'ouster', hubs:['Civil'], name:'Ouster', country:'United States', flag:'🇺🇸', founded:2015, type:'supplier', sector:'LiDAR', vertical:'Sensing', status:'public', ticker:'OUST', hq:'San Francisco', founders:'Angus Pacala, Mark Frichtl', ceo:'Angus Pacala', funding:'Public', valuation:'Public', employees:'~350', website:'https://ouster.com',
  summary:'Digital LiDAR across the OS0/OS1/OS2 families, widely used in robotics and industrial autonomy.',
  notable:'One of the few LiDAR makers to survive the SPAC-era shakeout with volume shipments intact.', components:['os1','os0'], supplies_to:[] },

{ id:'hesai', hubs:['Civil'], name:'Hesai Technology', country:'China', flag:'🇨🇳', founded:2014, type:'supplier', sector:'LiDAR', vertical:'Sensing', status:'public', ticker:'HSAI', hq:'Shanghai', founders:'David Li (李一帆), Kai Sun, Shaoqing Xiang', ceo:'David Li', funding:'Public (Nasdaq)', valuation:'Public', employees:'~1,500', website:'https://hesaitech.com',
  summary:'Among the global volume leaders in automotive-grade LiDAR; ATX and JT series target cost-sensitive robotics.',
  notable:'Chinese LiDAR cost curves have made 3D sensing viable at robot price points Western suppliers struggled to reach.', components:['hesai-atx','hesai-jt16'], supplies_to:[] },

{ id:'robosense', hubs:['Civil'], name:'RoboSense (速腾聚创)', country:'China', flag:'🇨🇳', founded:2014, type:'supplier', sector:'LiDAR', vertical:'Sensing', status:'public', ticker:'2498.HK', hq:'Shenzhen', founders:'Qiu Chunchao (邱纯潮)', ceo:'Qiu Chunchao', funding:'Public', valuation:'Public', employees:'~1,000', website:'https://robosense.ai',
  summary:'Automotive and robotics LiDAR; E1R and Airy target humanoid and mobile robot integration.',
  notable:'H1 2026: 719,200 LiDAR units shipped (+169.6% YoY); robotics segment 282,600 units (+510.4% YoY); automotive/ADAS 436,600 units (+98% YoY). E-Platform solid-state LiDAR surpassed 300,000 cumulative units; claims #1 global robotics-LiDAR share (self-reported), 3,400+ robotics clients. Listed HKEX 2498.HK.', components:['robosense-e1r'], supplies_to:[] },

{ id:'velodyne-ouster', hubs:['Civil'], name:'Livox', country:'China', flag:'🇨🇳', founded:2016, type:'supplier', sector:'LiDAR', vertical:'Sensing', status:'private', hq:'Shenzhen', founders:'DJI spin-off', ceo:'—', funding:'DJI-backed', valuation:'Undisclosed', employees:'~500', website:'https://livoxtech.com',
  summary:'Low-cost LiDAR spun out of DJI; Mid-360 series widely adopted in robotics research and mobile robots.',
  notable:'Mid-360 became a de facto standard for low-cost 3D mapping in mobile robotics.', components:['mid-360s'], supplies_to:[] },

{ id:'stereolabs', hubs:['Civil'], name:'Stereolabs', country:'United States', flag:'🇺🇸', founded:2010, type:'supplier', sector:'Depth cameras', vertical:'Sensing', status:'private', hq:'San Francisco', founders:'Cecile Schmollgruber, Edwin Azzam', ceo:'Cecile Schmollgruber', funding:'Private', valuation:'Undisclosed', employees:'~100', website:'https://stereolabs.com',
  summary:'ZED stereo depth cameras — a default perception sensor for robotics prototyping and deployment.',
  notable:'Stereo depth remains the cost-effective alternative to LiDAR for many indoor robots.', components:['zed-x'], supplies_to:[] },

{ id:'orbbec', hubs:['Civil'], name:'Orbbec', country:'China', flag:'🇨🇳', founded:2013, type:'supplier', sector:'Depth cameras', vertical:'Sensing', status:'public', ticker:'688322.SS', hq:'Shenzhen', founders:'Huang Yuanhao (黄源浩)', ceo:'Huang Yuanhao', funding:'Public', valuation:'Public', employees:'~1,000', website:'https://orbbec3d.com',
  summary:'Femto and Gemini depth camera families; partnership with Microsoft on Azure Kinect technology.',
  notable:'Took over Azure Kinect depth technology after Microsoft exited the hardware.', components:['femto-mega','gemini-335l'], supplies_to:[] },

{ id:'sony-semi', hubs:['Civil'], name:'Sony Semiconductor Solutions', country:'Japan', flag:'🇯🇵', founded:2016, type:'supplier', sector:'Image sensors', vertical:'Sensing', status:'public', ticker:'6758.T', hq:'Atsugi', founders:'Sony subsidiary', ceo:'Terushi Shimizu', funding:'Public parent', valuation:'Public parent', employees:'~15,000', website:'https://sony-semicon.com',
  summary:'The dominant global image sensor supplier; IMX500 adds on-sensor AI inference.',
  notable:'Sony holds roughly half the global image sensor market — a concentration rivalling the reducer bottleneck.', components:['imx500'], supplies_to:[] },

{ id:'analog-devices', hubs:['Civil'], name:'Analog Devices', country:'United States', flag:'🇺🇸', founded:1965, type:'supplier', sector:'IMU / sensing ICs', vertical:'Sensing', status:'public', ticker:'ADI', hq:'Wilmington, Massachusetts', founders:'Ray Stata, Matthew Lorber', ceo:'Vincent Roche', funding:'Public', valuation:'Public', employees:'~24,000', website:'https://analog.com',
  summary:'ADIS tactical-grade IMUs and precision analog components for motion sensing and control.',
  notable:'Tactical-grade IMUs are export-controlled in many jurisdictions — a quiet chokepoint in autonomy.', components:['adis16470'], supplies_to:[] },

{ id:'bosch-sensortec', hubs:['Civil'], name:'Bosch', country:'Germany', flag:'🇩🇪', founded:1886, type:'supplier', sector:'MEMS sensors', vertical:'Sensing', status:'private', hq:'Gerlingen', founders:'Robert Bosch', ceo:'Stefan Hartung', funding:'Private', valuation:'Undisclosed', employees:'~420,000', website:'https://bosch-sensortec.com',
  summary:'The largest MEMS sensor maker globally; IMUs, pressure and environmental sensors used across robotics.',
  notable:'MEMS scale from consumer electronics subsidises the precision available to robotics at low cost.', components:['bhi360'], supplies_to:[] },

{ id:'renishaw', hubs:['Civil'], name:'Renishaw', country:'United Kingdom', flag:'🇬🇧', founded:1973, type:'supplier', sector:'Encoders / metrology', vertical:'Sensing', status:'public', ticker:'RSW.L', hq:'Wotton-under-Edge', founders:'David McMurtry, John Deer', ceo:'Will Lee', funding:'Public', valuation:'Public', employees:'~5,000', website:'https://renishaw.com',
  summary:'Absolute optical encoders providing the position feedback that closed-loop robot joints depend on.',
  notable:'Encoder precision sets the practical ceiling on joint accuracy regardless of gear quality.', components:['resolute'], supplies_to:[] },

{ id:'ati-industrial', hubs:['Civil'], name:'ATI Industrial Automation', country:'United States', flag:'🇺🇸', founded:1989, type:'supplier', sector:'Force/torque sensors', vertical:'Sensing', status:'private', hq:'Apex, North Carolina', founders:'—', ceo:'—', funding:'Novanta-owned', valuation:'Undisclosed', employees:'~500', website:'https://ati-ia.com',
  summary:'Six-axis force/torque sensors and robotic tool changers — the standard for contact-aware manipulation.',
  notable:'Force sensing is what separates robots that can assemble from robots that can only move.', components:['mini45'], supplies_to:[] },

{ id:'onrobot', hubs:['Civil'], name:'OnRobot', country:'Denmark', flag:'🇩🇰', founded:2018, type:'supplier', sector:'End effectors', vertical:'Sensing', status:'private', hq:'Odense', founders:'Enrico Krog Iversen', ceo:'Enrico Krog Iversen', funding:'Private', valuation:'Undisclosed', employees:'~200', website:'https://onrobot.com',
  summary:'Grippers, force/torque sensors and vision systems for collaborative robot arms.',
  notable:'Founded by the former CEO of Universal Robots — the Odense cobot cluster compounding on itself.', components:['hex-ft'], supplies_to:[] },

{ id:'schunk', hubs:['Civil'], name:'SCHUNK', country:'Germany', flag:'🇩🇪', founded:1945, type:'supplier', sector:'Grippers', vertical:'Sensing', status:'private', hq:'Lauffen am Neckar', founders:'Friedrich Schunk', ceo:'Henrik A. Schunk', funding:'Private', valuation:'Undisclosed', employees:'~3,500', website:'https://schunk.com',
  summary:'The broadest gripper and clamping portfolio in industrial automation; increasingly relevant to humanoid hands.',
  notable:'Gripping technology is the least glamorous and most decisive constraint on what a robot can actually do.', components:[], supplies_to:[] },

{ id:'amprius', hubs:['Civil'], name:'Amprius Technologies', country:'United States', flag:'🇺🇸', founded:2008, type:'supplier', sector:'Battery cells', vertical:'Power', status:'public', ticker:'AMPX', hq:'Fremont, California', founders:'Yi Cui', ceo:'Kang Sun', funding:'Public', valuation:'Public', employees:'~200', website:'https://amprius.com',
  summary:'Silicon-anode battery cells with high energy density, targeting drones and mobile robots where weight dominates.',
  notable:'Founded by Stanford materials scientist Yi Cui; energy density is the binding constraint on humanoid runtime.', components:['sicore-sa102'], supplies_to:[] },

{ id:'catl', hubs:['Civil'], name:'CATL', country:'China', flag:'🇨🇳', founded:2011, type:'supplier', sector:'Batteries', vertical:'Power', status:'public', ticker:'300750.SZ', hq:'Ningde', founders:'Robin Zeng (曾毓群)', ceo:'Robin Zeng', funding:'Public', valuation:'Public', employees:'~120,000', website:'https://catl.com',
  summary:'The world\'s largest battery maker; also an investor in Chinese humanoid companies including Galbot.',
  notable:'CATL investing directly into humanoid startups signals batteries as a strategic control point, not just a component.', components:[], supplies_to:['galbot'] }
);

/* ==================================== ROBOTS =========================== */
window.RH_DATA.robots.push(
{ id:'figure-03', name:'Figure 03', maker:'figure-ai', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2025, price:'Not sold publicly', status:'Deployed (pilot)', height:'~1.68 m', payload:'~20 kg', summary:'Third-generation general-purpose humanoid running the Helix VLA model; deployed on the BMW Spartanburg line.', compute:'Next-gen onboard AI with advanced tactile sensing', useCases:'Automotive manufacturing, General-purpose labor', components:['jetson-thor'] },
{ id:'figure-02', name:'Figure 02', maker:'figure-ai', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2024, price:'Not sold publicly', status:'Superseded', height:'~1.68 m', payload:'~20 kg', summary:'Completed an eleven-month BMW pilot: 90,000+ components moved across ~1,250 operating hours.', dof:'40+', battery:'~2 hours', compute:'Custom onboard AI inference, cloud-connected foundation models', useCases:'Automotive manufacturing, Logistics sorting, General research', components:[] },
{ id:'optimus', name:'Tesla Optimus', maker:'tesla', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2025, price:'Target sub-$20,000', status:'Internal pilot', height:'~1.73 m', payload:'~20 kg', summary:'Vertically integrated humanoid using Tesla-designed actuators and FSD-derived compute.', compute:'Tesla FSD computer hardware adapted for robotics', useCases:'Internal manufacturing', components:[] },
{ id:'unitree-g1', name:'Unitree G1', maker:'unitree', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2024, price:'~$13,500', status:'Shipping', height:'1.32 m', payload:'~3 kg', summary:'The price-disruptive humanoid. Base price cut from ~$16,000, opening research and pilot markets.', dof:'23 to 43', battery:'1-2 hours', compute:'8-core CPU, optional NVIDIA Jetson Orin (up to 157 TOPS)', useCases:'AI development, Robotics research, Education, Light industrial tasks', components:[] },
{ id:'unitree-h1', name:'Unitree H1', maker:'unitree', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2023, price:'~$90,000', status:'Shipping', height:'1.80 m', payload:'~30 kg', summary:'Full-size humanoid demonstrating running and dynamic balance at a fraction of Western pricing.', compute:'High-performance onboard compute for real-time balance and locomotion', useCases:'Research', components:[] },
{ id:'unitree-go2', name:'Unitree Go2', maker:'unitree', type:'Quadruped', vertical:'Quadruped', country:'China', flag:'🇨🇳', year:2023, price:'~$1,600', status:'Shipping', height:'0.40 m', payload:'~8 kg', summary:'Consumer-priced quadruped that collapsed the entry cost of legged robotics.', battery:'~2-4 hours', compute:'4D LiDAR, ultrasonic sensors, onboard AI', useCases:'Inspection', components:[] },
{ id:'unitree-b2', name:'Unitree B2', maker:'unitree', type:'Quadruped', vertical:'Quadruped', country:'China', flag:'🇨🇳', year:2023, price:'Enterprise', status:'Shipping', height:'0.65 m', payload:'~40 kg', summary:'Industrial-grade quadruped for inspection and payload-carrying tasks.', components:[] },
{ id:'digit', name:'Digit', maker:'agility', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2024, price:'Lease / contract', status:'Commercial deployment', height:'1.75 m', payload:'~16 kg', summary:'The most commercially deployed humanoid — paid workflows with GXO, Amazon, Schaeffler and Spanx.', dof:'16', battery:'~4 hours (with swap)', compute:'Onboard perception and autonomy stack, fleet management cloud integration', useCases:'Warehouse tote handling, Logistics fulfillment, Truck unloading', components:[] },
{ id:'apollo', name:'Apollo', maker:'apptronik', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2024, price:'Not sold publicly', status:'Pilot', height:'1.73 m', payload:'~25 kg', summary:'Manufacturing and logistics humanoid; pilots with Mercedes-Benz and GXO.', battery:'~4 hours', compute:'Onboard edge compute for real-time perception and manipulation', useCases:'Logistics', components:[] },
{ id:'atlas', name:'Atlas (electric)', maker:'boston-dynamics', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2024, price:'R&D platform', status:'Development', height:'1.50 m', payload:'—', summary:'All-electric successor to the hydraulic Atlas; the field\'s benchmark for dynamic capability.', compute:'Advanced onboard AI for dynamic balance and complex manipulation', useCases:'Industrial automation', components:[] },
{ id:'spot', name:'Spot', maker:'boston-dynamics', type:'Quadruped', vertical:'Quadruped', country:'United States', flag:'🇺🇸', year:2020, price:'~$74,500', status:'Shipping', height:'0.84 m', payload:'14 kg', summary:'The most widely deployed commercial quadruped — inspection, mapping and data capture.', dof:'20', battery:'~90 minutes', compute:'Onboard edge compute with payload bay for custom sensors', useCases:'Industrial inspection, Construction monitoring, Public safety, Hazardous environments', components:[] },
{ id:'stretch', name:'Stretch', maker:'boston-dynamics', type:'Mobile manipulator', vertical:'Logistics', country:'United States', flag:'🇺🇸', year:2023, price:'Enterprise', status:'Shipping', height:'—', payload:'23 kg/case', summary:'Purpose-built container-unloading robot — a narrow, high-ROI counterpoint to general-purpose humanoids.', battery:'~8 hours', compute:'Onboard perception for box detection and autonomous navigation', useCases:'Warehouse case handling, Truck unloading, Pallet building', components:[] },
{ id:'neo', name:'NEO', maker:'1x', type:'Humanoid', vertical:'Humanoid', country:'Norway', flag:'🇳🇴', year:2025, price:'$20,000 or $499/month', status:'Pre-order (US 2026)', height:'1.65 m', payload:'~20 kg', summary:'1X Technologies home/household humanoid. Early-access pre-orders open at $20,000 ($200 deposit) or $499/month; US delivery targeted 2026, international 2027. Weight 29.9 kg, lifting capacity 69.8 kg, sustained carry 24.9 kg. Uses proprietary tendon-drive actuation inside a soft 3D-lattice polymer body for safe operation around people. Height, DOF, battery, compute and grip force undisclosed. [NEEDS VERIFICATION]', compute:'Onboard AI for safe human-robot interaction', useCases:'Home assistance', components:[] },
{ id:'4ne1', name:'4NE-1', maker:'neura', type:'Humanoid', vertical:'Humanoid', country:'Germany', flag:'🇩🇪', year:2026, price:'Not disclosed', status:'Pre-delivery', height:'1.80 m', payload:'~15 kg', summary:'Europe\'s flagship humanoid; deliveries targeted for late 2026.', components:[] },
{ id:'walker-s2', name:'Walker S2', maker:'ubtech', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2025, price:'Enterprise', status:'Shipping', height:'1.76 m', payload:'~15 kg', summary:'Industrial humanoid with swappable battery design for continuous shift operation.', compute:'Advanced AI for multi-modal perception and dexterous manipulation', useCases:'Automotive manufacturing, Logistics, Smart factory operations', components:[] },
{ id:'agibot-a2', name:'AgiBot A2', maker:'agibot', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2025, price:'Enterprise', status:'Shipping', height:'1.75 m', payload:'~15 kg', summary:'High-volume Chinese humanoid; AgiBot rolled out its 10,000th unit in March 2026.', compute:'Proprietary AI foundation model for embodied intelligence', useCases:'Industrial assembly, Logistics, Commercial service', components:[] },
{ id:'fourier-gr2', name:'Fourier GR-2', maker:'fourier', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2024, price:'Enterprise', status:'Shipping', height:'1.75 m', payload:'~3 kg/arm', summary:'Research and rehabilitation-oriented humanoid with an open SDK.', compute:'Onboard AI for adaptive locomotion and manipulation', useCases:'Healthcare assistance, Industrial logistics, Research', components:[] },
{ id:'galbot-g1', name:'Galbot G1', maker:'galbot', type:'Wheeled humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2024, price:'Enterprise', status:'Deployed', height:'~1.73 m', payload:'~10 kg', summary:'Wheeled-base humanoid operating unmanned retail pharmacy storefronts in China.', compute:'Advanced vision and spatial reasoning AI', useCases:'Warehouse logistics, Retail inventory, Last-mile delivery', components:[] },
{ id:'xpeng-iron', name:'XPeng IRON', maker:'xpeng-robotics', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2025, price:'Not disclosed', status:'Development', height:'1.78 m', payload:'—', summary:'Humanoid built on XPeng\'s automotive compute and supply chain.', components:[] },
{ id:'kaleido', name:'Kaleido', maker:'kawasaki', type:'Humanoid', vertical:'Humanoid', country:'Japan', flag:'🇯🇵', year:2024, price:'R&D', status:'Development', height:'~1.78 m', payload:'~60 kg lift', summary:'Kawasaki\'s long-running humanoid programme, aimed at disaster response and logistics.', components:[] },
{ id:'talos', name:'TALOS', maker:'pal-robotics', type:'Humanoid', vertical:'Humanoid', country:'Spain', flag:'🇪🇸', year:2017, price:'Research', status:'Shipping', height:'1.75 m', payload:'6 kg/arm', summary:'Full-size torque-controlled research humanoid used in European robotics labs.', components:[] },
{ id:'tiago', name:'TIAGo', maker:'pal-robotics', type:'Mobile manipulator', vertical:'Service', country:'Spain', flag:'🇪🇸', year:2016, price:'Research', status:'Shipping', height:'1.45 m', payload:'3 kg', summary:'Modular mobile manipulator widely used in assistive and research robotics.', components:[] },
{ id:'anymal', name:'ANYmal', maker:'anybotics', type:'Quadruped', vertical:'Civil', country:'Switzerland', flag:'🇨🇭', year:2023, price:'Enterprise', status:'Shipping', height:'0.70 m', payload:'~10 kg', summary:'Industrial inspection quadruped certified for hazardous (Ex) environments.', dof:'12', battery:'~2 hours', compute:'Onboard AI for autonomous navigation and anomaly detection', useCases:'Industrial inspection, Oil & gas, Mining, Research', components:[] },
{ id:'deep-x30', name:'X30', maker:'deep-robotics', type:'Quadruped', vertical:'Civil', country:'China', flag:'🇨🇳', year:2024, price:'Enterprise', status:'Shipping', height:'0.75 m', payload:'~20 kg', summary:'Inspection quadruped deployed across Chinese power substations and tunnels.', components:[] },
{ id:'vision-60', name:'Vision 60', maker:'ghost-robotics', type:'Quadruped', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2021, price:'Defense contract', status:'Deployed', height:'0.76 m', payload:'~10 kg', summary:'Defense and security quadruped deployed with US Air Force security forces.', dof:'12', battery:'~2 hours', compute:'Onboard edge AI for autonomous navigation and target recognition', useCases:'Defense reconnaissance, Border security, Hazardous environment exploration', components:[] },
{ id:'pudu-d9', name:'PUDU D9', maker:'pudu', type:'Humanoid', vertical:'Service', country:'China', flag:'🇨🇳', year:2025, price:'Enterprise', status:'Shipping', height:'1.70 m', payload:'~10 kg', summary:'Service humanoid extending Pudu\'s hospitality fleet into bipedal form.', components:[] },
{ id:'ghost-uas', name:'Ghost 4', maker:'anduril', type:'sUAS', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2022, price:'Defense contract', status:'Deployed', height:'—', payload:'ISR sensors', summary:'Autonomous small UAS for ISR missions, operated through Lattice.', compute:'Anduril Lattice AI software for autonomous swarm coordination', useCases:'Tactical reconnaissance, Electronic warfare, Strike missions', components:[] },
{ id:'altius-700', name:'ALTIUS-700', maker:'anduril', type:'Loitering munition', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2023, price:'Defense contract', status:'Deployed', height:'—', payload:'Warhead', summary:'Tube-launched loitering munition used extensively in Ukraine.', components:[] },
{ id:'roadrunner', name:'Roadrunner-M', maker:'anduril', type:'Counter-UAS interceptor', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2023, price:'Defense contract', status:'Deployed', height:'—', payload:'Interceptor', summary:'Reusable VTOL interceptor for counter-drone defence — lands and re-arms if unused.', components:[] },
{ id:'v-bat', name:'V-BAT', maker:'shield-ai', type:'VTOL UAS', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2022, price:'Defense contract', status:'Deployed', height:'—', payload:'ISR sensors', summary:'VTOL fixed-wing UAS flying autonomously without GPS via the Hivemind stack.', battery:'~3-4 hours', compute:'Hivemind AI pilot for GPS-denied autonomous flight', useCases:'Indoor mapping, Perimeter security, Tactical reconnaissance', components:[] },
{ id:'hx-2', name:'HX-2', maker:'helsing', type:'Strike drone', vertical:'Defense', country:'Germany', flag:'🇩🇪', year:2024, price:'Defense contract', status:'Production', height:'—', payload:'Warhead', summary:'AI-enabled electric strike drone designed for mass European production.', components:[] },
{ id:'skydio-x10', name:'Skydio X10', maker:'skydio', type:'sUAS', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2023, price:'~$11,000+', status:'Shipping', height:'—', payload:'Modular sensors', summary:'Autonomous drone navigating GPS-denied environments via onboard AI.', components:[] },
{ id:'vector', name:'Vector', maker:'quantum-systems', type:'VTOL UAS', vertical:'Defense', country:'Germany', flag:'🇩🇪', year:2021, price:'Defense contract', status:'Deployed', height:'—', payload:'EO/IR', summary:'VTOL fixed-wing reconnaissance drone widely deployed in Ukraine.', components:[] },
{ id:'corsair', name:'Corsair', maker:'saronic', type:'Autonomous surface vessel', vertical:'Defense', country:'United States', flag:'🇺🇸', year:2024, price:'Defense contract', status:'Production', height:'~7 m length', payload:'~1,000 kg', summary:'Medium autonomous surface vessel for maritime ISR and strike.', components:[] },
{ id:'mavic-3', name:'Mavic 3 Enterprise', maker:'dji', type:'sUAS', vertical:'Drones', country:'China', flag:'🇨🇳', year:2022, price:'~$3,500', status:'Shipping', height:'—', payload:'Camera', summary:'The reference commercial inspection drone globally, subject to escalating Western restrictions.', dof:'N/A', battery:'~45 minutes', compute:'Omnidirectional obstacle sensing, AI subject tracking', useCases:'Public safety, Infrastructure inspection, Surveying, Search and rescue', components:[] },
{ id:'matrice-350', name:'Matrice 350 RTK', maker:'dji', type:'Industrial UAS', vertical:'Drones', country:'China', flag:'🇨🇳', year:2023, price:'~$10,000', status:'Shipping', height:'—', payload:'2.7 kg', summary:'Industrial survey and inspection platform with modular payloads.', dof:'N/A', battery:'~55 minutes', compute:'O3 Enterprise transmission, onboard obstacle avoidance AI', useCases:'Public safety, Infrastructure inspection, Surveying and mapping', components:[] },
{ id:'zipline-p2', name:'Zipline P2', maker:'zipline', type:'Delivery drone', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2023, price:'Service model', status:'Deployed', height:'—', payload:'~3.6 kg', summary:'Delivery drone with a tethered droid that lowers packages precisely.', compute:'Autonomous flight software with precision parachute delivery', useCases:'Medical supply delivery, E-commerce logistics, Emergency response', components:[] },
{ id:'symbot', name:'Symbotic System', maker:'symbotic', type:'Warehouse ASRS', vertical:'Logistics', country:'United States', flag:'🇺🇸', year:2022, price:'System contract', status:'Deployed', height:'—', payload:'Case handling', summary:'Fleet-based high-speed case storage and retrieval for large distribution centres.', battery:'Continuous (inductive charging)', compute:'Centralized AI fleet management and 3D spatial reasoning', useCases:'Large-scale warehouse automation, Retail supply chain optimization', components:[] },
{ id:'locus-origin', name:'LocusBot Origin', maker:'locus-robotics', type:'Warehouse AMR', vertical:'Logistics', country:'United States', flag:'🇺🇸', year:2022, price:'Robots-as-a-service', status:'Deployed', height:'—', payload:'~36 kg', summary:'Collaborative picking AMR that meets workers at the pick face.', battery:'Continuous (opportunity charging)', compute:'Onboard vision and cloud-based fleet orchestration', useCases:'E-commerce order fulfillment, Retail inventory management, Goods-to-person picking', components:[] },
{ id:'skypod', name:'Skypod', maker:'exotec', type:'Climbing AMR', vertical:'Logistics', country:'France', flag:'🇫🇷', year:2019, price:'System contract', status:'Deployed', height:'—', payload:'~30 kg', summary:'Robot that climbs storage racks to retrieve totes in three dimensions.', components:[] },
{ id:'dexterity-mech', name:'Mech', maker:'dexterity', type:'Truck-loading robot', vertical:'Logistics', country:'United States', flag:'🇺🇸', year:2024, price:'System contract', status:'Deployed', height:'—', payload:'~30 kg', summary:'Force-aware truck loading and palletising robot deployed with FedEx and UPS.', components:[] },
{ id:'proteus', name:'Proteus', maker:'amazon-robotics', type:'Warehouse AMR', vertical:'Logistics', country:'United States', flag:'🇺🇸', year:2022, price:'Internal', status:'Deployed', height:'—', payload:'Cart towing', summary:'Amazon\'s first fully autonomous mobile robot able to operate around people.', components:[] },
{ id:'ro1', name:'RO1', maker:'standard-bots', type:'Collaborative arm', vertical:'Industrial', country:'United States', flag:'🇺🇸', year:2023, price:'~$37,000', status:'Shipping', height:'—', payload:'18 kg', summary:'US-built six-axis cobot priced against Asian competitors.', dof:'6', battery:'N/A', compute:'Onboard AI for bin picking and dynamic path planning', useCases:'Manufacturing, Logistics, Machine tending', components:[] },
{ id:'ur10e', name:'UR10e', maker:'universal-robots', type:'Collaborative arm', vertical:'Industrial', country:'Denmark', flag:'🇩🇰', year:2018, price:'~$45,000', status:'Shipping', height:'—', payload:'12.5 kg', summary:'The reference collaborative robot arm across manufacturing and labs.', dof:'6', battery:'N/A', compute:'Onboard controller with intuitive graphical programming interface', useCases:'Manufacturing, Assembly, Packaging, Machine tending', components:[] },
{ id:'da-vinci-5', name:'da Vinci 5', maker:'intuitive', type:'Surgical robot', vertical:'Medical', country:'United States', flag:'🇺🇸', year:2024, price:'~$2M system', status:'Shipping', height:'—', payload:'—', summary:'Fifth-generation surgical system with force feedback and integrated digital tooling.', battery:'N/A', compute:'Advanced haptic feedback and 3D high-definition vision processing', useCases:'Minimally invasive surgery, Complex surgical procedures', components:[] },
{ id:'versius', name:'Versius', maker:'cmr-surgical', type:'Surgical robot', vertical:'Medical', country:'United Kingdom', flag:'🇬🇧', year:2019, price:'System contract', status:'Shipping', height:'—', payload:'—', summary:'Modular surgical robot with independent arm carts and a smaller footprint than da Vinci.', components:[] },
{ id:'deere-9rx', name:'Autonomous 9RX', maker:'john-deere', type:'Autonomous tractor', vertical:'Agriculture', country:'United States', flag:'🇺🇸', year:2025, price:'Enterprise', status:'Shipping', height:'—', payload:'Tillage', summary:'Second-generation fully autonomous large tractor for broadacre tillage.', battery:'N/A', compute:'Computer vision, GPS, and AI for fully autonomous field operation', useCases:'Precision agriculture, Automated planting, Automated harvesting', components:[] },
{ id:'laserweeder', name:'LaserWeeder G2', maker:'carbon-robotics', type:'Weeding implement', vertical:'Agriculture', country:'United States', flag:'🇺🇸', year:2024, price:'~$1.4M', status:'Shipping', height:'—', payload:'Laser array', summary:'Vision-guided laser weeding at commercial scale, eliminating herbicide for target rows.', dof:'N/A', battery:'N/A', compute:'Real-time computer vision and high-power laser targeting', useCases:'Organic farming, High-value crop weeding, Chemical-free agriculture', components:[] },
{ id:'monarch-mk-v', name:'MK-V', maker:'monarch-tractor', type:'Electric tractor', vertical:'Agriculture', country:'United States', flag:'🇺🇸', year:2023, price:'~$90,000', status:'Shipping', height:'—', payload:'Implements', summary:'Driver-optional electric tractor for vineyards and specialty crops.', components:[] },
{ id:'naio-orio', name:'Orio', maker:'naio', type:'Weeding robot', vertical:'Agriculture', country:'France', flag:'🇫🇷', year:2022, price:'Enterprise', status:'Shipping', height:'—', payload:'Tool carrier', summary:'Autonomous tool-carrier for large-scale vegetable weeding.', components:[] },
{ id:'burro-grande', name:'Burro Grande', maker:'burro', type:'Ag transport robot', vertical:'Agriculture', country:'United States', flag:'🇺🇸', year:2023, price:'~$30,000', status:'Shipping', height:'—', payload:'~230 kg', summary:'Autonomous cart that follows workers and hauls harvested produce.', components:[] },
{ id:'fieldprinter', name:'FieldPrinter', maker:'dusty-robotics', type:'Layout robot', vertical:'Civil', country:'United States', flag:'🇺🇸', year:2022, price:'Subscription', status:'Deployed', height:'—', payload:'Printing head', summary:'Prints BIM building layouts directly onto construction floors.', components:[] },
{ id:'gecko-toka', name:'TOKA', maker:'gecko-robotics', type:'Climbing inspection robot', vertical:'Civil', country:'United States', flag:'🇺🇸', year:2021, price:'Service model', status:'Deployed', height:'—', payload:'Ultrasonic sensors', summary:'Wall-climbing robot capturing ultrasonic thickness data on boilers, tanks and hulls.', components:[] }
);

/* ================================= COMPONENTS ========================== */
window.RH_DATA.components.push(
{ id:'csd-2a', name:'CSD-2A Strain Wave Gear Set', maker:'harmonic-drive', category:'Strain wave gear', country:'Japan', flag:'🇯🇵', spec:'Zero backlash · 30–160:1', summary:'Component-set harmonic drive for designers integrating the gear directly into a joint housing.', used_in:[] },
{ id:'csg-2a', name:'CSG-2A Series', maker:'harmonic-drive', category:'Strain wave gear', country:'Japan', flag:'🇯🇵', spec:'High torque variant', summary:'Higher-torque strain wave gearing for larger robot joints.', used_in:[] },
{ id:'rv-n', name:'RV-N Series Cycloidal Reducer', maker:'nabtesco', category:'Cycloidal reducer', country:'Japan', flag:'🇯🇵', spec:'High shock-load capacity', summary:'Standard specification at most major industrial robot makers for medium-to-large joints.', used_in:[] },
{ id:'jetson-thor', name:'Jetson Thor', maker:'nvidia', category:'Edge AI compute', country:'United States', flag:'🇺🇸', spec:'Humanoid-class inference', summary:'Onboard compute module targeted at humanoid and general-purpose robot workloads.', used_in:['figure-03'] },
{ id:'jetson-orin', name:'Jetson AGX Orin', maker:'nvidia', category:'Edge AI compute', country:'United States', flag:'🇺🇸', spec:'Up to 275 TOPS', summary:'The workhorse compute module across a large share of current robotics platforms.', used_in:[] },
{ id:'rb3-gen2', name:'Dragonwing RB3 Gen 2', maker:'qualcomm', category:'Edge AI compute', country:'United States', flag:'🇺🇸', spec:'Low-power vision kit', summary:'Power-efficient edge AI platform for battery-constrained mobile robots.', used_in:[] },
{ id:'ec-frameless-85', name:'EC frameless DT 85 L', maker:'maxon', category:'Frameless BLDC motor', country:'Switzerland', flag:'🇨🇭', spec:'High torque density', summary:'Frameless motor for direct integration into robot joint assemblies.', used_in:[] },
{ id:'tbm2g', name:'TBM²G Frameless Motors', maker:'kollmorgen', category:'Frameless BLDC motor', country:'United States', flag:'🇺🇸', spec:'High continuous torque', summary:'US-made frameless motor family for robot joints and gimbals.', used_in:[] },
{ id:'nidec-d-series', name:'D-Series Frameless Motors', maker:'nidec', category:'Frameless BLDC motor', country:'Japan', flag:'🇯🇵', spec:'Volume-optimised', summary:'Frameless motor family produced at a scale few robotics-specific suppliers can match.', used_in:[] },
{ id:'sv670', name:'SV670 Servo Drive', maker:'inovance', category:'Servo drive', country:'China', flag:'🇨🇳', spec:'EtherCAT, high response', summary:'Domestic Chinese servo drive displacing Japanese incumbents in cost-sensitive builds.', used_in:[] },
{ id:'somanet-circulo', name:'SOMANET Circulo', maker:'synapticon', category:'Servo drive module', country:'Germany', flag:'🇩🇪', spec:'Joint-integrated, encoder built in', summary:'Integrated drive module designed to sit inside a compact robot joint.', used_in:[] },
{ id:'shs-lm-guide', name:'SHS Caged Ball LM Guide', maker:'thk', category:'Linear guide', country:'Japan', flag:'🇯🇵', spec:'Caged ball, low noise', summary:'Linear motion guide underpinning robot axes and gantry systems.', used_in:[] },
{ id:'kk-single-axis', name:'KK Series Single-Axis Robot', maker:'hiwin', category:'Linear axis module', country:'Taiwan', flag:'🇹🇼', spec:'Integrated ballscrew stage', summary:'Pre-assembled linear axis module shortening machine build time.', used_in:[] },
{ id:'ema-100', name:'EMA-100 Electric Actuator', maker:'ewellix', category:'Linear actuator', country:'Sweden', flag:'🇸🇪', spec:'Electromechanical, IP-rated', summary:'Electric linear actuator replacing hydraulics in mobile and industrial robots.', used_in:[] },
{ id:'os1', name:'OS1 Digital LiDAR', maker:'ouster', category:'LiDAR sensor', country:'United States', flag:'🇺🇸', spec:'Mid-range, up to 128 ch', summary:'Widely used mid-range digital LiDAR for mobile robots and industrial autonomy.', used_in:[] },
{ id:'os0', name:'OS0 Ultra-Wide LiDAR', maker:'ouster', category:'LiDAR sensor', country:'United States', flag:'🇺🇸', spec:'90° vertical FOV', summary:'Ultra-wide field-of-view LiDAR for close-range robotics and indoor mapping.', used_in:[] },
{ id:'hesai-atx', name:'Hesai ATX', maker:'hesai', category:'LiDAR sensor', country:'China', flag:'🇨🇳', spec:'Compact automotive-grade', summary:'Cost-optimised LiDAR bringing automotive-grade sensing to robotics price points.', used_in:[] },
{ id:'hesai-jt16', name:'JT16', maker:'hesai', category:'LiDAR sensor', country:'China', flag:'🇨🇳', spec:'Short-range robotics', summary:'Compact LiDAR aimed specifically at mobile robots and AMRs.', used_in:[] },
{ id:'robosense-e1r', name:'RoboSense E1R', maker:'robosense', category:'Robotics LiDAR', country:'China', flag:'🇨🇳', spec:'Solid-state, compact', summary:'Solid-state LiDAR designed for humanoid and mobile robot integration.', used_in:[] },
{ id:'mid-360s', name:'Mid-360S', maker:'velodyne-ouster', category:'LiDAR sensor', country:'China', flag:'🇨🇳', spec:'360° low-cost 3D', summary:'Low-cost 360° LiDAR that became a de facto standard in mobile robotics research.', used_in:[] },
{ id:'zed-x', name:'ZED X', maker:'stereolabs', category:'Stereo depth camera', country:'United States', flag:'🇺🇸', spec:'GMSL2, industrial', summary:'Rugged stereo depth camera for outdoor and industrial robot perception.', used_in:[] },
{ id:'femto-mega', name:'Femto Mega', maker:'orbbec', category:'Depth camera', country:'China', flag:'🇨🇳', spec:'ToF, Azure Kinect lineage', summary:'Time-of-flight depth camera carrying forward Microsoft Azure Kinect technology.', used_in:[] },
{ id:'gemini-335l', name:'Gemini 335L', maker:'orbbec', category:'Depth camera', country:'China', flag:'🇨🇳', spec:'Active stereo', summary:'Active stereo depth camera widely used in Chinese robot builds.', used_in:[] },
{ id:'imx500', name:'IMX500 Intelligent Vision Sensor', maker:'sony-semi', category:'Image sensor', country:'Japan', flag:'🇯🇵', spec:'On-sensor AI inference', summary:'Image sensor with integrated AI processing, cutting latency and power for vision tasks.', used_in:[] },
{ id:'adis16470', name:'ADIS16470 Tactical IMU', maker:'analog-devices', category:'Tactical IMU', country:'United States', flag:'🇺🇸', spec:'Low drift, calibrated', summary:'Tactical-grade inertial measurement unit for navigation in GPS-denied conditions.', used_in:[] },
{ id:'bhi360', name:'BHI360 Smart IMU', maker:'bosch-sensortec', category:'Smart IMU', country:'Germany', flag:'🇩🇪', spec:'Integrated sensor fusion', summary:'MEMS IMU with onboard fusion, reducing host compute load.', used_in:[] },
{ id:'resolute', name:'RESOLUTE Absolute Encoder', maker:'renishaw', category:'Absolute encoder', country:'United Kingdom', flag:'🇬🇧', spec:'1 nm resolution', summary:'Absolute optical encoder providing the joint position feedback closed-loop control depends on.', used_in:[] },
{ id:'mini45', name:'Mini45 Force/Torque Sensor', maker:'ati-industrial', category:'Force/torque sensor', country:'United States', flag:'🇺🇸', spec:'6-axis, compact', summary:'Six-axis force/torque sensor enabling contact-aware assembly and insertion.', used_in:[] },
{ id:'hex-ft', name:'HEX 6-Axis F/T Sensor', maker:'onrobot', category:'Force/torque sensor', country:'Denmark', flag:'🇩🇰', spec:'Cobot-native mounting', summary:'Force/torque sensor designed to bolt directly onto collaborative arms.', used_in:[] },
{ id:'sicore-sa102', name:'SiCore SA102', maker:'amprius', category:'Battery cell', country:'United States', flag:'🇺🇸', spec:'Silicon anode, high Wh/kg', summary:'High energy-density cell targeting drones and robots where mass is the binding constraint.', used_in:[] },
{ id:'brave-f7', name:'Brave F7 Flight Controller', maker:'unusual-machines', category:'Flight controller', country:'United States', flag:'🇺🇸', spec:'NDAA-compliant', summary:'US-made flight controller for drones requiring non-Chinese component sourcing.', used_in:[] }
);

/* ============================ SUPPLY-CHAIN CONTEXT ===================== */
window.RH_DATA.supplyChain = {
  headline:'Precision reduction gearing is the structural bottleneck',
  points:[
    { title:'Concentration', body:'Harmonic and strain-wave gearboxes remain concentrated among a small group of manufacturers — Harmonic Drive, Nabtesco, and emerging Chinese players such as Leaderdrive.' },
    { title:'Hard to scale', body:'Unlike electronics, precision gearboxes are capital-intensive and metrology-bound. Capacity cannot be added quickly, so rising humanoid volumes could outpace qualified supply.' },
    { title:'Japan\'s position', body:'Nabtesco holds an estimated 22–25% of global harmonic and cycloidal reducer revenue and roughly 60% of the RV-reducer market for medium-to-large robot joints.' },
    { title:'China\'s challenge', body:'Shuanghuan (Optimus, Unitree), Zhongda Leader (Figure AI) and Leaderdrive are contesting the incumbency. Shuanghuan\'s Suzhou plant is described at roughly 500,000 units of annual reducer capacity.' },
    { title:'Market size', body:'The harmonic reducer market is projected to reach roughly $9.4B by 2034 (~12.8% CAGR). Humanoid demand alone could represent $800M–$1.2B annually by 2030.' },
    { title:'The other chokepoints', body:'Beyond gearing: Sony holds roughly half the global image sensor market, tactical-grade IMUs face export controls, and battery energy density caps humanoid runtime.' }
  ]
};

/* ---------------------------------------- ADDITIONS: EU + China humanoids */
window.RH_DATA.companies.push(
{ id:'agile-robots', hubs:['Civil'], name:'Agile Robots SE', country:'Germany', flag:'🇩🇪', founded:2018, type:'builder', sector:'Industrial / Humanoid', vertical:'Industrial', status:'private', ticker:'', hq:'Munich', founders:'Zhaopeng Chen, Peter Meusel', ceo:'Zhaopeng Chen', funding:'$384M+', valuation:'~$1B (unicorn)', employees:'~2,500', website:'https://agile-robots.com',
  summary:'DLR (German Aerospace Center) spin-off combining force-sensitive manipulation with AI. Diana 7 cobot, the Agile Hand, and a first industrial humanoid shown at Hannover Messe 2026.',
  notable:'Backed by SoftBank Vision Fund 2, Sequoia China, Foxconn and BMW i Ventures. Absorbed assets of Franka Emika and thyssenkrupp Automation Engineering.', robots:['diana-7'], suppliers:[] },

{ id:'franka', hubs:['Civil'], name:'Franka Robotics', country:'Germany', flag:'🇩🇪', founded:2016, type:'builder', sector:'Collaborative robots', vertical:'Industrial', status:'private', hq:'Munich', founders:'Sami Haddadin, Simon Haddadin', ceo:'Sami Haddadin', funding:'Acquired', valuation:'Part of Agile Robots', employees:'~200', website:'https://franka.de',
  summary:'Maker of the Franka research cobot, a standard platform in robot-learning labs worldwide. Now part of the Agile Robots group.',
  notable:'Founder Sami Haddadin is one of Europe\'s most prominent robotics researchers; the Franka arm is ubiquitous in academic manipulation research.', robots:['franka-research-3'], suppliers:[] },

{ id:'flexiv', hubs:['Civil'], name:'Flexiv Robotics', country:'United States / China', flag:'🇺🇸', founded:2016, type:'builder', sector:'Adaptive robots', vertical:'Industrial', status:'private', hq:'Santa Clara / Shanghai', founders:'Shiquan Wang', ceo:'Shiquan Wang', funding:'$100M+', valuation:'Undisclosed', employees:'~400', website:'https://flexiv.com',
  summary:'Rizon force-controlled adaptive robot arms combining industrial-grade force sensing with AI.',
  notable:'Stanford robotics spin-off; among the earliest to bring whole-arm force control to commercial cobots.', robots:['rizon-4'], suppliers:[] },

{ id:'leju', hubs:['Civil'], name:'Leju Robot (乐聚机器人)', country:'China', flag:'🇨🇳', founded:2016, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'Leng Xiaokun (冷晓琨)', ceo:'Leng Xiaokun', funding:'$255M+', valuation:'Undisclosed', employees:'~200', website:'https://lejurobot.com',
  summary:'KUAVO full-size humanoids plus AELOS educational robots and PANDO miniatures. Delivered its 100th full-size humanoid in 2025.',
  notable:'Early Tencent strategic investment; one of the more established Chinese humanoid makers by track record.', robots:['kuavo'], suppliers:[] },

{ id:'simplexity', hubs:['Civil'], name:'Simplexity Robotics (简概机器人)', country:'China', flag:'🇨🇳', founded:2025, type:'builder', sector:'Humanoid', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'Former Li Auto executives', ceo:'—', funding:'~¥2B (RMB)', valuation:'Undisclosed', employees:'~200', website:'',
  summary:'Embodied-intelligence startup that raised roughly ¥2B across five rounds in six months — a record fundraising pace for the sector.',
  notable:'Founding team came from EV maker Li Auto; backers include Sequoia China and Legend Capital.', robots:[], suppliers:[] },

);

window.RH_DATA.robots.push(
{ id:'diana-7', name:'Diana 7', maker:'agile-robots', type:'Collaborative arm', vertical:'Industrial', country:'Germany', flag:'🇩🇪', year:2020, price:'Enterprise', status:'Shipping', height:'—', payload:'7 kg', summary:'Seven-axis force-sensitive cobot for precision assembly.', components:[] },
{ id:'franka-research-3', name:'Franka Research 3', maker:'franka', type:'Research arm', vertical:'Industrial', country:'Germany', flag:'🇩🇪', year:2023, price:'~€20,000', status:'Shipping', height:'—', payload:'3 kg', summary:'Torque-controlled research arm ubiquitous in robot-learning labs.', components:[] },
{ id:'rizon-4', name:'Rizon 4', maker:'flexiv', type:'Adaptive arm', vertical:'Industrial', country:'United States', flag:'🇺🇸', year:2019, price:'Enterprise', status:'Shipping', height:'—', payload:'4 kg', summary:'Force-controlled adaptive robot arm with whole-arm sensing.', components:[] },
{ id:'kuavo', name:'KUAVO', maker:'leju', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2024, price:'Enterprise', status:'Shipping', height:'~1.70 m', payload:'~15 kg', summary:'Full-size humanoid used in research and early commercial pilots.', components:[] }
);

/* ============================ DRONE ARCHIVE ============================ */
/* Platforms span military ISR/strike, commercial and delivery. Makers added
   where not already present so maker links resolve. */
window.RH_DATA.companies.push(
{ id:'baykar', hubs:['Defense','Civil'], name:'Baykar', country:'Türkiye', flag:'🇹🇷', founded:1984, type:'builder', sector:'Combat UAS', vertical:'Drones', status:'private', hq:'Istanbul', founders:'Özdemir Bayraktar', ceo:'Haluk Bayraktar', funding:'Private', valuation:'Undisclosed', employees:'~6,000', website:'https://baykartech.com',
  summary:'Turkey\'s leading drone maker; the Bayraktar TB2 reshaped tactical drone warfare and export markets. Now spans TB3 (naval), Akıncı and the jet-powered Kızılelma.',
  notable:'CTO Selçuk Bayraktar is MIT-trained; the TB2 is operated by 30+ countries.', robots:['tb2','tb3','akinci','kizilelma'], suppliers:[] },
{ id:'ga-asi', hubs:['Defense'], name:'General Atomics Aeronautical', country:'United States', flag:'🇺🇸', founded:1993, type:'builder', sector:'MALE/HALE UAS', vertical:'Drones', status:'private', hq:'San Diego', founders:'General Atomics', ceo:'Linden Blue', funding:'Private', valuation:'Undisclosed', employees:'~9,000', website:'https://ga-asi.com',
  summary:'Maker of the Predator and Reaper family — the reference armed medium-altitude long-endurance drones of the last two decades.',
  notable:'The MQ-9 Reaper remains a primary US and allied ISR and strike platform.', robots:['mq-9','gray-eagle'], suppliers:[] },
{ id:'northrop', hubs:['Defense'], name:'Northrop Grumman', country:'United States', flag:'🇺🇸', founded:1994, type:'builder', sector:'HALE UAS', vertical:'Drones', status:'public', ticker:'NOC', hq:'Falls Church, Virginia', founders:'Merger', ceo:'Kathy Warden', funding:'Public', valuation:'Public', employees:'~100,000', website:'https://northropgrumman.com',
  summary:'Builds the RQ-4 Global Hawk and MQ-4C Triton high-altitude, long-endurance surveillance drones.',
  notable:'Global Hawk operates above 50,000 ft for wide-area strategic ISR.', robots:['global-hawk','triton'], suppliers:[] },
{ id:'aerovironment', hubs:['Defense'], name:'AeroVironment', country:'United States', flag:'🇺🇸', founded:1971, type:'builder', sector:'Small UAS / loitering', vertical:'Drones', status:'public', ticker:'AVAV', hq:'Arlington, Virginia', founders:'Paul MacCready', ceo:'Wahid Nawabi', funding:'Public', valuation:'Public', employees:'~2,000', website:'https://avinc.com',
  summary:'Small tactical drones (Puma, Raven) and the Switchblade family of loitering munitions widely used in Ukraine.',
  notable:'Switchblade 300 and 600 popularised the man-portable loitering munition category.', robots:['switchblade-300','switchblade-600','puma-ae'], suppliers:[] },
{ id:'baau', hubs:['Defense'], name:'Boeing / Airpower Teaming', country:'Australia', flag:'🇦🇺', founded:2016, type:'builder', sector:'Autonomous combat air', vertical:'Drones', status:'public', ticker:'BA', hq:'Brisbane', founders:'Boeing', ceo:'—', funding:'Public parent', valuation:'Public parent', employees:'—', website:'https://boeing.com.au',
  summary:'Developer of the MQ-28 Ghost Bat, an autonomous "loyal wingman" designed to fly alongside crewed fighters.',
  notable:'The first military aircraft designed and built in Australia in over 50 years.', robots:['ghost-bat'], suppliers:[] },
{ id:'kratos', hubs:['Defense'], name:'Kratos Defense', country:'United States', flag:'🇺🇸', founded:1994, type:'builder', sector:'Combat drones', vertical:'Drones', status:'public', ticker:'KTOS', hq:'San Diego', founders:'—', ceo:'Eric DeMarco', funding:'Public', valuation:'Public', employees:'~4,000', website:'https://kratosdefense.com',
  summary:'Maker of the XQ-58 Valkyrie, a low-cost jet-powered combat drone for the loyal-wingman role.',
  notable:'Designed around attritable cost — cheap enough to risk in contested airspace.', robots:['xq-58'], suppliers:[] },
{ id:'iai', hubs:['Defense','Civil'], name:'Israel Aerospace Industries', country:'Israel', flag:'🇮🇱', founded:1953, type:'builder', sector:'UAS / loitering', vertical:'Drones', status:'private', hq:'Lod', founders:'State of Israel', ceo:'Boaz Levy', funding:'State-owned', valuation:'Undisclosed', employees:'~15,000', website:'https://iai.co.il',
  summary:'Heron MALE drones and the Harop/Harpy loitering munitions — a pioneer of the anti-radiation loitering weapon.',
  notable:'The Harpy was among the earliest operational loitering munitions.', robots:['heron','harop'], suppliers:[] },
{ id:'parrot', hubs:['Civil','Defense'], name:'Parrot', country:'France', flag:'🇫🇷', founded:1994, type:'builder', sector:'Commercial drones', vertical:'Drones', status:'public', ticker:'PARRO.PA', hq:'Paris', founders:'Henri Seydoux', ceo:'Henri Seydoux', funding:'Public', valuation:'Public', employees:'~500', website:'https://parrot.com',
  summary:'Europe\'s main commercial drone maker; the ANAFI series serves enterprise and defense micro-UAS needs.',
  notable:'Positioned as the Western micro-drone alternative to DJI for security-sensitive buyers.', robots:['anafi-usa'], suppliers:[] },
{ id:'autel', hubs:['Civil'], name:'Autel Robotics', country:'China', flag:'🇨🇳', founded:2014, type:'builder', sector:'Commercial drones', vertical:'Drones', status:'private', hq:'Shenzhen', founders:'—', ceo:'—', funding:'Private', valuation:'Undisclosed', employees:'~1,000', website:'https://auteldrones.com',
  summary:'The main challenger to DJI in the prosumer and enterprise drone segment; EVO series.',
  notable:'Also subject to US regulatory scrutiny alongside DJI.', robots:['evo-max-4t'], suppliers:[] }
);

window.RH_DATA.robots.push(
{ id:'tb2', name:'Bayraktar TB2', maker:'baykar', type:'MALE UCAV', vertical:'Drones', country:'Türkiye', flag:'🇹🇷', year:2014, price:'~$5M system', status:'In service', height:'12 m wingspan', payload:'150 kg', summary:'Medium-altitude armed drone that reshaped tactical drone warfare; operated by 30+ countries.', dof:'N/A', battery:'~27 hours', compute:'Autonomous takeoff/landing, satellite datalink, electro-optical targeting', useCases:'Tactical reconnaissance, Precision strike, Border surveillance', components:[] },
{ id:'tb3', name:'Bayraktar TB3', maker:'baykar', type:'Naval UCAV', vertical:'Drones', country:'Türkiye', flag:'🇹🇷', year:2024, price:'Low single-digit $M', status:'In service', height:'Folding wings', payload:'>TB2', summary:'Carrier-capable evolution of the TB2 with folding wings, built for the TCG Anadolu.', components:[] },
{ id:'akinci', name:'Bayraktar Akıncı', maker:'baykar', type:'HALE UCAV', vertical:'Drones', country:'Türkiye', flag:'🇹🇷', year:2021, price:'Undisclosed', status:'In service', height:'20 m wingspan', payload:'~1,350 kg', summary:'Heavy high-altitude drone able to carry cruise missiles and standoff weapons.', components:[] },
{ id:'kizilelma', name:'Bayraktar Kızılelma', maker:'baykar', type:'Jet UCAV', vertical:'Drones', country:'Türkiye', flag:'🇹🇷', year:2022, price:'Undisclosed', status:'Testing', height:'—', payload:'~1,500 kg', summary:'Jet-powered stealthy combat drone for carrier and contested-airspace operations.', components:[] },
{ id:'mq-9', name:'MQ-9 Reaper', maker:'ga-asi', type:'MALE UCAV', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2007, price:'~$30M', status:'In service', height:'20 m wingspan', payload:'~1,700 kg', summary:'The benchmark armed ISR drone, flying long-endurance strike and surveillance for the US and allies.', dof:'N/A', battery:'~27 hours', compute:'Advanced sensor fusion, satellite communication, autonomous flight systems', useCases:'Persistent surveillance, Precision strike, Intelligence gathering', components:[] },
{ id:'gray-eagle', name:'MQ-1C Gray Eagle', maker:'ga-asi', type:'MALE UAS', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2009, price:'~$21M', status:'In service', height:'17 m wingspan', payload:'~360 kg', summary:'US Army long-endurance ISR and strike drone derived from the Predator line.', components:[] },
{ id:'global-hawk', name:'RQ-4 Global Hawk', maker:'northrop', type:'HALE ISR', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2001, price:'~$130M', status:'In service', height:'40 m wingspan', payload:'Sensors', summary:'High-altitude, long-endurance strategic surveillance drone operating above 50,000 ft.', components:[] },
{ id:'triton', name:'MQ-4C Triton', maker:'northrop', type:'HALE maritime ISR', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2018, price:'~$180M', status:'In service', height:'40 m wingspan', payload:'Maritime sensors', summary:'Maritime surveillance variant of Global Hawk for broad-ocean ISR.', components:[] },
{ id:'switchblade-300', name:'Switchblade 300', maker:'aerovironment', type:'Loitering munition', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2011, price:'~$60,000', status:'In service', height:'Man-portable', payload:'Anti-personnel', summary:'Backpackable loitering munition for precision short-range strike.', dof:'N/A', battery:'~15 minutes', compute:'Man-in-the-loop guidance, GPS/INS navigation, electro-optical seeker', useCases:'Tactical strike, Counter-sniper, Rapid response for dismounted troops', components:[] },
{ id:'switchblade-600', name:'Switchblade 600', maker:'aerovironment', type:'Loitering munition', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2020, price:'~$170,000', status:'In service', height:'Man-portable', payload:'Anti-armor', summary:'Larger anti-armor loitering munition with extended range and a shaped-charge warhead.', components:[] },
{ id:'puma-ae', name:'RQ-20 Puma AE', maker:'aerovironment', type:'Small ISR UAS', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2012, price:'~$250,000 system', status:'In service', height:'2.8 m wingspan', payload:'EO/IR', summary:'Hand-launched small ISR drone used by ground and special forces.', components:[] },
{ id:'ghost-bat', name:'MQ-28 Ghost Bat', maker:'baau', type:'Loyal wingman', vertical:'Drones', country:'Australia', flag:'🇦🇺', year:2021, price:'Undisclosed', status:'Testing', height:'~11.7 m', payload:'Sensor/EW packages', summary:'Autonomous combat drone designed to team with crewed fighters.', components:[] },
{ id:'xq-58', name:'XQ-58 Valkyrie', maker:'kratos', type:'Loyal wingman', vertical:'Drones', country:'United States', flag:'🇺🇸', year:2019, price:'~$4M', status:'Testing', height:'~8.2 m', payload:'Internal bays', summary:'Low-cost attritable jet combat drone for the collaborative combat aircraft role.', components:[] },
{ id:'heron', name:'IAI Heron', maker:'iai', type:'MALE ISR', vertical:'Drones', country:'Israel', flag:'🇮🇱', year:1994, price:'Undisclosed', status:'In service', height:'16.6 m wingspan', payload:'~250 kg', summary:'Long-endurance surveillance drone operated by many air forces worldwide.', components:[] },
{ id:'harop', name:'IAI Harop', maker:'iai', type:'Loitering munition', vertical:'Drones', country:'Israel', flag:'🇮🇱', year:2009, price:'Undisclosed', status:'In service', height:'3 m', payload:'23 kg warhead', summary:'Anti-radiation loitering munition that dives onto emitting targets.', components:[] },
{ id:'anafi-usa', name:'Parrot ANAFI USA', maker:'parrot', type:'Micro ISR UAS', vertical:'Drones', country:'France', flag:'🇫🇷', year:2020, price:'~$7,000', status:'Shipping', height:'Foldable', payload:'32x zoom EO/IR', summary:'Secure micro-drone built for defense and public-safety users needing non-Chinese hardware.', components:[] },
{ id:'evo-max-4t', name:'Autel EVO Max 4T', maker:'autel', type:'Enterprise UAS', vertical:'Drones', country:'China', flag:'🇨🇳', year:2023, price:'~$8,000', status:'Shipping', height:'Foldable', payload:'Thermal + zoom', summary:'Enterprise inspection drone competing directly with DJI\'s Matrice line.', components:[] }
);

/* ---- ADDITIONS: Humanoid HMND 01 robot + agriculture companies (from RH research) ---- */
window.RH_DATA.robots.push(
{ id:'hmnd-01', name:'HMND 01', maker:'humanoid-uk', type:'Humanoid', vertical:'Humanoid', country:'United Kingdom', flag:'🇬🇧', year:2025, price:'Not disclosed', status:'Development', height:'~1.75 m', payload:'~15 kg', summary:'General-purpose humanoid running the in-house KinetIQ control stack on NVIDIA Jetson Thor, aimed at logistics and light manufacturing tasks.', components:['jetson-thor'] }
);

window.RH_DATA.companies.push(
{ id:'agxeed', hubs:['Agriculture'], name:'AgXeed', country:'Netherlands', flag:'🇳🇱', founded:2018, type:'builder', sector:'Autonomous tractors', vertical:'Agriculture', status:'private', hq:'Oploo', founders:'Joris Hiddema, Lars Schmitz', ceo:'Joris Hiddema', funding:'Private', valuation:'Undisclosed', employees:'~100', website:'https://agxeed.com',
  summary:'Maker of the AgBot autonomous tractor range, controlled through a cloud portal that plans and monitors field work. The AgBot T2 offers roughly 2.5 cm path precision; featured in Clarkson\'s Farm Season 5.',
  notable:'The AgBot T2 is priced around €295,000. AgXeed sells autonomy as a planning-and-execution system, not just a driverless vehicle.', robots:['agxeed-agbot-t2'], suppliers:[] },

{ id:'farmdroid', hubs:['Agriculture'], name:'FarmDroid', country:'Denmark', flag:'🇩🇰', founded:2018, type:'builder', sector:'Seeding / weeding robots', vertical:'Agriculture', status:'private', hq:'Vejle', founders:'Jens Warming, Kristian Warming', ceo:'—', funding:'Private', valuation:'Undisclosed', employees:'~60', website:'https://farmdroid.com',
  summary:'Danish maker of the solar-powered FD20, a field robot that both seeds and weeds using centimetre-level GPS to remember each seed\'s position. Seen at LAMMA 2025 and featured in Clarkson\'s Farm Season 5.',
  notable:'Fully solar-powered and chemical-free; the seed-position memory lets it weed between and within rows without vision.', robots:['farmdroid-fd20'], suppliers:[] },

{ id:'farm-ng', hubs:['Agriculture'], name:'farm-ng', country:'United States', flag:'🇺🇸', founded:2019, type:'builder', sector:'Modular ag robots', vertical:'Agriculture', status:'private', hq:'Watsonville, California', founders:'Ethan Rublee', ceo:'Ethan Rublee', funding:'Private', valuation:'Undisclosed', employees:'~40', website:'https://farm-ng.com',
  summary:'Maker of the Amiga, a compact modular electric robot platform for small and specialty farms, with a developer-friendly open approach.',
  notable:'Founder Ethan Rublee previously co-founded computer-vision company Industrial Perception (acquired by Google).', robots:['amiga'], suppliers:[] }
);

window.RH_DATA.robots.push(
{ id:'agxeed-agbot-t2', name:'AgBot T2', maker:'agxeed', type:'Autonomous tractor', vertical:'Agriculture', country:'Netherlands', flag:'🇳🇱', year:2023, price:'~€295,000', status:'Shipping', height:'—', payload:'3-wheel tracked', summary:'Autonomous tracked field robot with ~2.5 cm path precision, planned and monitored via the AgXeed cloud portal.', components:[] },
{ id:'farmdroid-fd20', name:'FarmDroid FD20', maker:'farmdroid', type:'Seeding/weeding robot', vertical:'Agriculture', country:'Denmark', flag:'🇩🇰', year:2020, price:'~€75,000', status:'Shipping', height:'—', payload:'Solar-powered', summary:'Solar-powered robot that seeds and weeds chemical-free, using GPS seed-position memory for precise in-row weeding.', dof:'N/A', battery:'Solar-powered continuous operation', compute:'GPS-based precise location tracking for each seed', useCases:'Organic farming, Precision seeding, Mechanical weeding', components:[] },
{ id:'amiga', name:'Amiga', maker:'farm-ng', type:'Modular ag robot', vertical:'Agriculture', country:'United States', flag:'🇺🇸', year:2021, price:'~$20,000+', status:'Shipping', height:'—', payload:'Modular tooling', summary:'Compact modular electric platform for specialty crops, built to be extended by developers.', components:[] }
);

/* EU agriculture-robotics regulation / subsidy context (from RH research) */
window.RH_DATA.agRegulation = {
  headline:'Policy and demographics behind Europe\'s ag-robot push',
  points:[
    { title:'CAP eco-schemes', body:'The EU Common Agricultural Policy\'s eco-schemes (a large multi-year budget) can reimburse a meaningful share of precision-equipment investment; some member states such as France and Denmark have offered subsidies covering up to roughly 40% of qualifying precision-agriculture kit.' },
    { title:'Germany driverless law (2024)', body:'Germany moved to allow driverless machine operation on private agricultural land, removing a key legal barrier to fielding autonomous tractors.' },
    { title:'Green Deal chemical targets', body:'EU Green Deal and Farm-to-Fork targets to cut chemical pesticide use create direct demand for laser and mechanical weeding robots that reduce or eliminate herbicide.' },
    { title:'Ageing farmers', body:'A structural labour driver: only about 6% of EU farmers are under 35 while roughly 31% are over 65, pushing interest in autonomy as succession and labour gaps widen.' },
    { title:'Cost barrier', body:'Adoption is gated by price — conventional self-propelled sprayers can run into the millions, and around 40% of farmers cite upfront cost as the main barrier, which is why sub-€100k robots and subsidies matter.' }
  ]
};

/* ---- ADDITIONS: German defense startups (from RH research, facts in own words) ---- */
window.RH_DATA.companies.push(
{ id:'tytan', hubs:['Defense'], name:'Tytan Technologies', country:'Germany', flag:'🇩🇪', founded:2023, type:'builder', sector:'Counter-UAS interceptors', vertical:'Defense', status:'private', hq:'Munich', founders:'Balázs Nagy, Batuhan Yumurtacı', ceo:'Balázs Nagy', funding:'~€46M+', valuation:'~€150M', employees:'51-200', website:'https://tytan-technologies.com',
  summary:'Builds AI-guided kinetic interceptor drones for counter-UAS and air defense, aimed at cheaply countering mass low-cost drone threats such as Shahed-class attacks. Products span the EOS short-range multicopter interceptor and the faster fixed-wing METIS/TI series, wrapped in a sensor-plus-effector "Drone Defender" ecosystem.',
  notable:'Raised a €30M Series A in February 2026 co-led by Armira and the NATO Innovation Fund. A new German factory targets up to 3,000 interceptors per month from late 2026; systems are already reported in Ukrainian use, with Bundeswehr contracts for installation protection and partnerships including Mercedes-Benz (G-Class mounting) and HENSOLDT sensors. CTO Batuhan Yumurtacı is a Forbes 30 Under 30 honoree.', robots:['tytan-metis','tytan-eos'], suppliers:[] },

{ id:'reactive-dynamics', hubs:['Defense'], name:'Reactive Dynamics', country:'Germany', flag:'🇩🇪', founded:2025, type:'builder', sector:'Uncrewed ground vehicles', vertical:'Defense', status:'private', hq:'Eichstätt, Bavaria', founders:'Julius Mahler, Maximilian Wunderlich, Joris Bauer-Ludwigs', ceo:'—', funding:'Early-stage', valuation:'Undisclosed', employees:'~dozens', website:'https://reactive-dynamics.com',
  summary:'Full-stack developer of autonomous uncrewed ground vehicles for squad-level land operations, positioning ground autonomy as the missing piece of battlefield robotics. Its RDX 1 is a modular electric tracked platform (~80 km/h, ~150 km range, up to 1,200 kg payload) coordinated in groups via its React OS under a single operator.',
  notable:'Founded September 2025; very early-stage relative to peers, focused on the land-domain autonomy gap. Partners with Quantum Systems (linked to Stark\'s Florian Seibel) and has appeared at NATO/Bundeswehr events such as Steadfast Dart and Eurosatory.', robots:['rdx-1'], suppliers:[] }
);

window.RH_DATA.robots.push(
{ id:'stark-virtus', name:'Virtus (OWE-V)', maker:'stark', type:'Loitering munition (eVTOL)', vertical:'Defense', country:'Germany', flag:'🇩🇪', year:2025, price:'Undisclosed', status:'In service', height:'>130 km range', payload:'German warhead', summary:'eVTOL one-way effector with over 130 km range and up to 90 minutes endurance; reusable in a training mode, cruising ~120 km/h and diving up to ~250 km/h.', components:[] },
{ id:'tytan-metis', name:'METIS / TI', maker:'tytan', type:'Kinetic interceptor', vertical:'Defense', country:'Germany', flag:'🇩🇪', year:2025, price:'Low-cost', status:'In service', height:'~0.9 m', payload:'Kinetic / fragmentation', summary:'Fixed-wing AI-guided interceptor for NATO Class II drones, high-speed and able to operate in GPS-denied conditions; thousands reported in Ukrainian use.', components:[] },
{ id:'tytan-eos', name:'EOS', maker:'tytan', type:'Interceptor multicopter', vertical:'Defense', country:'Germany', flag:'🇩🇪', year:2025, price:'Low-cost', status:'Development', height:'Multicopter', payload:'Kinetic', summary:'Short-range multicopter interceptor aimed at NATO Class I drone threats.', components:[] },
{ id:'rdx-1', name:'RDX 1', maker:'reactive-dynamics', type:'Uncrewed ground vehicle', vertical:'Defense', country:'Germany', flag:'🇩🇪', year:2025, price:'Undisclosed', status:'Development', height:'Tracked UGV', payload:'up to 1,200 kg', summary:'Modular electric tracked UGV: ~80 km/h top speed, ~150 km range, 60% gradient, low signature; multiple units coordinated via React OS under one operator.', components:[] }
);


/* ---- ADDITIONS: Qwen batch (new companies only, deduped) ---- */
window.RH_DATA.companies.push(
{ id:'elbit-systems', hubs:['Defense'], name:"Elbit Systems", country:'Israel', flag:'🇮🇱', founded:1966, type:'builder', sector:'Robotic & autonomous systems', vertical:'Defense', status:'private', hq:'Haifa', founders:'Michael Federmann', ceo:'Bezhalel Machlis', funding:'Public', valuation:'~$9B market cap', employees:'—', website:'https://elbitsystems.com',
  summary:'Israeli defense electronics group building robotic and autonomous systems for ISR, drone swarms and unmanned ground vehicles.',
  notable:'', robots:[], suppliers:[] },
{ id:'rheinmetall', hubs:['Defense'], name:"Rheinmetall", country:'Germany', flag:'🇩🇪', founded:1889, type:'builder', sector:'Uncrewed ground systems', vertical:'Defense', status:'private', hq:'Düsseldorf', founders:'—', ceo:'Armin Papperger', funding:'Public', valuation:'~$15B market cap', employees:'—', website:'https://rheinmetall.com',
  summary:'German defense and automotive group; its Mission Master family of uncrewed ground vehicles brings autonomous navigation to military logistics and reconnaissance.',
  notable:'', robots:[], suppliers:[] },
{ id:'lockheed-martin-autonomous', hubs:['Defense'], name:"Lockheed Martin Autonomous Systems", country:'United States', flag:'🇺🇸', founded:1995, type:'builder', sector:'Autonomous systems', vertical:'Defense', status:'private', hq:'Bethesda, Maryland', founders:'—', ceo:'Jim Taiclet', funding:'Public', valuation:'~$500B+ parent cap', employees:'—', website:'https://lockheedmartin.com',
  summary:'Autonomous systems division of Lockheed Martin, spanning air, ground and sea domains with a focus on cross-platform autonomy.',
  notable:'', robots:[], suppliers:[] },
{ id:'raytheon-advanced-tech', hubs:['Defense'], name:"Raytheon Advanced Technology", country:'United States', flag:'🇺🇸', founded:1922, type:'builder', sector:'Defense robotics & AI', vertical:'Defense', status:'private', hq:'Waltham, Massachusetts', founders:'—', ceo:'Chris Tomaine', funding:'Public', valuation:'~$150B+ parent cap', employees:'—', website:'https://rtx.com',
  summary:'Advanced defense technology arm of RTX developing robotics, autonomous systems and AI-enabled military capabilities.',
  notable:'', robots:[], suppliers:[] },
{ id:'applied-intuition', hubs:['Civil'], name:"Applied Intuition", country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Autonomy software / simulation', vertical:'Industrial', status:'private', hq:'Sunnyvale, California', founders:'Qasar Rashid, Adeeb Ahmad', ceo:'Qasar Rashid', funding:'~$550M+', valuation:'Undisclosed', employees:'—', website:'https://appliedintuition.com',
  summary:'Provides an end-to-end software stack — simulation, vehicle OS and self-driving systems — for autonomous vehicles and defense platforms.',
  notable:'', robots:[], suppliers:[] },
{ id:'lig-nex1', hubs:['Defense'], name:"LIG Nex1", country:'South Korea', flag:'🇰🇷', founded:1976, type:'builder', sector:'Defense robotics / UGVs', vertical:'Defense', status:'private', hq:'Seongnam', founders:'—', ceo:'Yoon Young-min', funding:'Public', valuation:'~$3B market cap', employees:'—', website:'https://lignex1.com',
  summary:'South Korean defense company; acquired Ghost Robotics for a reported $400M to build autonomous robotic solutions for military use.',
  notable:'', robots:[], suppliers:[] },
{ id:'bluehalo', hubs:['Defense'], name:"BlueHalo", country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Space / counter-UAS / autonomy', vertical:'Defense', status:'private', hq:'Huntsville, Alabama', founders:'—', ceo:'Benjamin Reese', funding:'Acquired by AeroVironment ($4.1B)', valuation:'—', employees:'—', website:'https://bluehalo.com',
  summary:'Space systems, counter-UAS, directed energy and autonomous systems specialist; acquired by AeroVironment in 2025.',
  notable:'', robots:[], suppliers:[] },
{ id:'cubic-defense', hubs:['Defense'], name:"Cubic Defense", country:'United States', flag:'🇺🇸', founded:1951, type:'builder', sector:'C5ISR / autonomous systems', vertical:'Defense', status:'private', hq:'San Diego', founders:'—', ceo:'John S. Holt', funding:'~$2B+ segment', valuation:'—', employees:'—', website:'https://cubic.com',
  summary:'Provides networked command, control and intelligence systems with edge computing for military operations.',
  notable:'', robots:[], suppliers:[] },
{ id:'general-atomics-aeronautical', hubs:['Defense'], name:"General Atomics", country:'United States', flag:'🇺🇸', founded:1955, type:'builder', sector:'MALE/HALE UAS', vertical:'Defense', status:'private', hq:'San Diego', founders:'Neal Blue', ceo:'Neal Blue', funding:'Private', valuation:'Undisclosed', employees:'—', website:'https://ga-asi.com',
  summary:'Maker of the MQ-9 Reaper and other long-endurance unmanned aircraft for persistent surveillance and precision strike.',
  notable:'', robots:[], suppliers:[] },
{ id:'agrobot', hubs:['Agriculture'], name:"Agrobot", country:'Spain', flag:'🇪🇸', founded:2011, type:'builder', sector:'Harvesting robotics', vertical:'Agriculture', status:'private', hq:'Huelva', founders:'Dmitry Karp', ceo:'Dmitry Karp', funding:'~$20M+', valuation:'Undisclosed', employees:'—', website:'https://agrobot.com',
  summary:'Develops autonomous strawberry-harvesting robots with up to 24 independent arms for gentle, precision fruit picking.',
  notable:'', robots:[], suppliers:[] },
{ id:'harvest-croo-robotics', hubs:['Agriculture'], name:"Harvest CROO Robotics", country:'United States', flag:'🇺🇸', founded:2014, type:'builder', sector:'Harvesting robotics', vertical:'Agriculture', status:'private', hq:'Tampa, Florida', founders:'Gary Wishnatzki', ceo:'Gary Wishnatzki', funding:'~$5.8M', valuation:'Undisclosed', employees:'—', website:'https://harvestcroorobotics.com',
  summary:'Builds fully autonomous strawberry-harvesting systems using computer vision and precision robotics for specialty crops.',
  notable:'', robots:[], suppliers:[] },
{ id:'advanced-farm-tech', hubs:['Agriculture'], name:"Advanced Farm Technologies", country:'United States', flag:'🇺🇸', founded:2013, type:'builder', sector:'Harvesting robotics', vertical:'Agriculture', status:'private', hq:'Davis, California', founders:'Joshua Lessing', ceo:'Joshua Lessing', funding:'~$7.5M', valuation:'Undisclosed', employees:'—', website:'https://advancedfarm.com',
  summary:'Autonomous harvesting robots for strawberries and other specialty crops with AI-driven precision picking.',
  notable:'', robots:[], suppliers:[] },
{ id:'four-growers', hubs:['Agriculture'], name:"Four Growers", country:'United States', flag:'🇺🇸', founded:2020, type:'builder', sector:'Harvesting robotics', vertical:'Agriculture', status:'private', hq:'Pittsburgh, Pennsylvania', founders:'Michel van de Water', ceo:'Michel van de Water', funding:'~$9M', valuation:'Undisclosed', employees:'—', website:'https://fourgrowers.com',
  summary:'Developer of the GR-100 autonomous harvesting robot for greenhouse and field crops.',
  notable:'', robots:[], suppliers:[] },
{ id:'bear-robotics', hubs:['Civil'], name:"Bear Robotics", country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Service / AMR', vertical:'Logistics', status:'private', hq:'Redwood City, California', founders:'John Seo', ceo:'John Seo', funding:'~$80M+', valuation:'Undisclosed', employees:'—', website:'https://bearrobotics.ai',
  summary:'Service robots and industrial autonomous mobile robots for hospitality and logistics.',
  notable:'', robots:[], suppliers:[] },
{ id:'bear-flag-robotics', hubs:['Agriculture'], name:"Bear Flag Robotics", country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Agricultural autonomy', vertical:'Agriculture', status:'private', hq:'Sunnyvale, California', founders:'—', ceo:'—', funding:'Acquired by John Deere', valuation:'—', employees:'—', website:'https://bearflagrobotics.com',
  summary:'Developed autonomous driving technology for farm tractors; acquired by John Deere.',
  notable:'', robots:[], suppliers:[] },
{ id:'tortuga-agtech', hubs:['Agriculture'], name:"Tortuga AgTech", country:'United States', flag:'🇺🇸', founded:2016, type:'builder', sector:'Harvesting robotics', vertical:'Agriculture', status:'private', hq:'Denver, Colorado', founders:'Kenta Ikeda', ceo:'Kenta Ikeda', funding:'$47.7M', valuation:'Undisclosed', employees:'—', website:'https://tortuga.ag',
  summary:'Robotics for autonomous inventory, grading, picking and packing of soft produce; acquired by Oishii in 2025.',
  notable:'', robots:[], suppliers:[] },
{ id:'root-ai', hubs:['Agriculture'], name:"Root AI", country:'United States', flag:'🇺🇸', founded:2016, type:'builder', sector:'Greenhouse robotics', vertical:'Agriculture', status:'private', hq:'Cambridge, Massachusetts', founders:'Josh Lessing', ceo:'Josh Lessing', funding:'Acquired by AppHarvest', valuation:'—', employees:'—', website:'https://root.ai',
  summary:'Built intelligent greenhouse-harvesting robots including the Virgo multi-crop picker; acquired by AppHarvest.',
  notable:'', robots:[], suppliers:[] },
{ id:'robotiq', hubs:['Civil'], name:"Robotiq", country:'Canada', flag:'🇨🇦', founded:2011, type:'supplier', sector:'End effectors / grippers', vertical:'Industrial', status:'private', hq:'Lévis, Quebec', founders:'—', ceo:'—', funding:'Private', valuation:'Undisclosed', employees:'—', website:'https://robotiq.com',
  summary:'Adaptive grippers, vacuum grippers and force-torque sensors for collaborative robots.',
  notable:'', robots:[], suppliers:[] },
{ id:'festo', hubs:['Civil'], name:"Festo", country:'Germany', flag:'🇩🇪', founded:1925, type:'supplier', sector:'Pneumatic actuators / automation', vertical:'Industrial', status:'private', hq:'Esslingen', founders:'—', ceo:'—', funding:'~€4B+ revenue', valuation:'Private', employees:'—', website:'https://festo.com',
  summary:'Leading supplier of pneumatic and electrical automation, handling systems and industrial robots.',
  notable:'', robots:[], suppliers:[] },
{ id:'smc-corporation', hubs:['Civil'], name:"SMC Corporation", country:'Japan', flag:'🇯🇵', founded:1959, type:'supplier', sector:'Pneumatic actuators', vertical:'Industrial', status:'private', hq:'Tokyo', founders:'—', ceo:'—', funding:'Public', valuation:'~$10B+ market cap', employees:'—', website:'https://smcworld.com',
  summary:'World-leading maker of pneumatic control devices and actuators for industrial automation and robotics.',
  notable:'', robots:[], suppliers:[] },
{ id:'greenfield-robotics', hubs:['Agriculture'], name:"Greenfield Robotics", country:'United States', flag:'🇺🇸', founded:2015, type:'builder', sector:'Agricultural autonomy', vertical:'Agriculture', status:'private', hq:'Kansas City, Missouri', founders:'Jason Pieper', ceo:'Jason Pieper', funding:'Private', valuation:'Undisclosed', employees:'—', website:'https://greenfieldincorporated.com',
  summary:'Small autonomous field robots for herbicide-free weed control and soil-health improvement.',
  notable:'', robots:[], suppliers:[] },
{ id:'harvest-automation', hubs:['Agriculture'], name:"Harvest Automation", country:'United States', flag:'🇺🇸', founded:2010, type:'builder', sector:'Material handling', vertical:'Agriculture', status:'private', hq:'Boston, Massachusetts', founders:'David Gray', ceo:'David Gray', funding:'Private', valuation:'Undisclosed', employees:'—', website:'https://harvestautomation.com',
  summary:'Mobile robots for material handling and crop maintenance in greenhouse and nursery operations.',
  notable:'', robots:[], suppliers:[] }
);

/* ---- ADDITIONS: World Humanoid Robot Games 2026 key firms ---- */
window.RH_DATA.companies.push(
{ id:'x-humanoid', hubs:['Civil'], name:'X-Humanoid (Beijing Humanoid Robot Innovation Center)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'—', ceo:'—', funding:'State-backed', valuation:'Undisclosed', employees:'—', website:'https://www.x-humanoid.com',
  summary:'Beijing state-backed humanoid innovation center behind the Tiangong (Tien Kung) robot series. Its Tiangong Ultra set a 9.39-second 100m mark at the 2026 World Humanoid Robot Games, faster than the human world record, and demonstrated a ~2.88m high jump.',
  notable:'Developer of Tiangong Ultra, Tien Kung 3.0, Tien Kung Omni and TianYi 2.0. Tiangong Ultra also won the inaugural 2025 Games 100m in 21.5s — a dramatic one-year leap to sub-9.5s. Positioned as a national-champion open humanoid platform.', robots:['tiangong-ultra'], suppliers:[] },
{ id:'honor-robotics', hubs:['Civil'], name:'Honor', country:'China', flag:'🇨🇳', founded:2013, type:'builder', sector:'Consumer tech / humanoid', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'—', ceo:'George Zhao', funding:'Undisclosed', valuation:'Undisclosed', employees:'—', website:'https://www.honor.com',
  summary:'Chinese smartphone maker that entered humanoid robotics; its Lightning robot ran a 9.47-second 100m at the 2026 World Humanoid Robot Games and a reported 9.32s in a test run, at a peak speed of 14.5 m/s.',
  notable:'A non-traditional entrant — a consumer-electronics company competing at the front of humanoid athletics. Lightning finished second to the Tiangong Ultra in the headline 100m heat, both beating the human 100m world record.', robots:['honor-lightning'], suppliers:[] },
{ id:'booster-robotics', hubs:['Civil'], name:'Booster Robotics', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'Zhao Mingguo', ceo:'Zhao Mingguo', funding:'Undisclosed', valuation:'Undisclosed', employees:'—', website:'https://www.boosterobotics.com',
  summary:'Maker of the Booster T1 humanoid, a research and athletics platform strong in robot football. Tsinghua University teams using Booster hardware have won RoboCup humanoid honors.',
  notable:'Chief scientist Zhao Mingguo frames competitive events as a spur toward real-world humanoid deployment. T1 is a common platform in humanoid soccer leagues.', robots:['booster-t1'], suppliers:[] }
);
window.RH_DATA.robots.push(
{ id:'tiangong-ultra', name:'Tiangong Ultra', maker:'x-humanoid', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2025, price:'Research platform', status:'Competition', height:'~1.8 m', payload:'—', summary:'Record-setting athletic humanoid: 9.39s over 100m and ~2.88m high jump at the 2026 World Humanoid Robot Games, both beating human world records in demonstration/heat conditions.', dof:'', battery:'', compute:'Autonomous locomotion control', useCases:'Athletics, locomotion research, demonstration', components:[] },
{ id:'honor-lightning', name:'Lightning', maker:'honor-robotics', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2026, price:'Prototype', status:'Competition', height:'—', payload:'—', summary:'Athletic humanoid sprinter: 9.47s over 100m in competition and a reported 9.32s in testing, peak speed 14.5 m/s.', useCases:'Sprinting, locomotion research', components:[] },
{ id:'booster-t1', name:'Booster T1', maker:'booster-robotics', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2024, price:'Research platform', status:'Shipping', height:'~1.2 m', payload:'—', summary:'Compact humanoid platform widely used in robot football and research; associated with RoboCup humanoid league success.', useCases:'Football, research, education', components:[] }
);

/* ---- ADDITIONS: Cowork DB research 2026-08-22 ---- */
window.RH_DATA.companies.push(
{ id:'byd-robotics', hubs:['Civil'], name:'BYD Robotics (15th Division)', country:'China', flag:'🇨🇳', founded:2025, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'—', ceo:'Wang Chuanfu (BYD)', funding:'BYD-backed', valuation:'Undisclosed', employees:'—', website:'https://www.byd.com',
  summary:'In-house humanoid robot division of Chinese EV and battery giant BYD. First prototype teased for an August 2026 reveal, with a planned dealership sales-advisor role at BYD "Di Space" experience centers; specifications undisclosed. [NEEDS VERIFICATION]',
  notable:'A major automaker entering humanoid robotics from a battery/EV manufacturing base — a pattern echoing Tesla Optimus and XPeng. Details thin as of announcement.', robots:['byd-humanoid'], suppliers:[] }
);
window.RH_DATA.robots.push(
{ id:'unitree-r1', name:'Unitree R1', maker:'unitree', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2025, price:'~$5,900', status:'Shipping', height:'1.2 m', payload:'—', summary:'Low-cost education/developer humanoid unveiled July 2025 — roughly $5,900, 25 kg, 26 degrees of freedom, 8-core CPU with optional NVIDIA Jetson Orin. Undercuts even the G1 on price.', dof:'26', battery:'', compute:'8-core CPU, optional NVIDIA Jetson Orin', useCases:'Education, developer platform, research', components:[] },
{ id:'byd-humanoid', name:'BYD humanoid prototype', maker:'byd-robotics', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2026, price:'Undisclosed', status:'Prototype', height:'—', payload:'—', summary:'Unnamed humanoid prototype teased August 2026 for a planned dealership sales-advisor role; specifications undisclosed. [NEEDS VERIFICATION]', useCases:'Retail / sales-advisor role', components:[] }
);

/* Enrich existing suppliers with fresh figures */
(function(){
  var D=window.RH_DATA;
  var ld=D.companies.find(function(c){return c.id==='leaderdrive'});
  if(ld && !(ld.notable||'').includes('124.4M')){ ld.notable=(ld.notable? ld.notable+' ':'')+'FY25 net profit reported ~124.4M yuan (~+100% YoY); estimated ~30-40% China harmonic-reducer share; clients include AgiBot and UBTECH. [NEEDS VERIFICATION]'; }
  var rs=D.companies.find(function(c){return c.id==='robosense'});
  if(rs && !(rs.notable||'').includes('185,500')){ rs.notable=(rs.notable? rs.notable+' ':'')+'Q1 2026 robotics-segment LiDAR sales reported ~185,500 units (+1,458.8% YoY) across 3,400+ clients; listed on HKEX (2498.HK).'; }
})();


/* ---- ADDITIONS: Korthos ecosystem scan (curated to beat) 2026-08 ---- */
window.RH_DATA.companies.push(
{ id:'10beauty', hubs:['Civil'], name:'10Beauty', country:'United States', flag:'🇺🇸', founded:2020, type:'builder', sector:'Robot manicures / Beauty automation', vertical:'Industrial', status:'private', hq:'Burlington, Massachusetts', founders:'', ceo:'', funding:'$23.5M raise (2026-07-01); Series A extension to $38M total (2024-02-06)', valuation:'Undisclosed', employees:'', website:'https://www.10beauty.co/',
  summary:'10Beauty develops a full-service robotic manicure platform for retail and salon settings',
  notable:'10Beauty raises USD23.5M to expand robotic manicure deployments (2026-07-01); 10Beauty launches robotic manicure system at Ulta Beauty (2025-11-13); 10Beauty closes $17M Series A extension, taking equity financing to $38M (2024-02-06)', robots:[], suppliers:[] },
{ id:'10lines', hubs:['Civil'], name:'10Lines', country:'Estonia', flag:'🇪🇪', founded:2019, type:'builder', sector:'Striping robots', vertical:'Industrial', status:'private', hq:'Tallinn', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://10linesrobots.com/',
  summary:'10Lines builds autonomous robots that map and stripe paved surfaces without manual pre-marking',
  notable:'', robots:[], suppliers:[] },
{ id:'3d-infotech', hubs:['Civil'], name:'3D Infotech', country:'United States', flag:'🇺🇸', founded:2005, type:'supplier', sector:'3D metrology', vertical:'Components', status:'private', hq:'Irvine', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.3dinfotech.com/',
  summary:'3D Infotech develops robotic metrology and automated inspection systems for manufacturing',
  notable:'', robots:[], suppliers:[] },
{ id:'3d-s-r-o', hubs:['Civil'], name:'3D s.r.o.', country:'Slovakia', flag:'🇸🇰', founded:1991, type:'builder', sector:'3D programming', vertical:'Industrial', status:'private', hq:'Bratislava, Bratislava Region', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.3dsro.sk/wp1/',
  summary:'Delivers turnkey industrial automation, robot cells and process-analytics systems',
  notable:'', robots:[], suppliers:[] },
{ id:'3d-components-as', hubs:['Civil'], name:'3D-Components AS', country:'Norway', flag:'🇳🇴', founded:2016, type:'builder', sector:'RobTrack', vertical:'Industrial', status:'private', hq:'Oslo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.3d-components.com',
  summary:'3D-Components AS 3D-Components develops RobTrack, an AI process-intelligence platform for robotic welding and metal additive manufacturing.',
  notable:'Google DeepMind European Robotics Accelerator selection (2026-06-09); MagNEO manufacturing consortium membership (2024-05-01); VOJEXT cobot pilot selection (2023-07-04); Change2Twin assessment funding (2022-01-01); Oslo operations commenced (2016-01-01)', robots:[], suppliers:[] },
{ id:'3dr-inc', hubs:['Civil'], name:'3DR Inc.', country:'United States', flag:'🇺🇸', founded:0, type:'builder', sector:'Autopilots / GNSS / telemetry', vertical:'Industrial', status:'private', hq:'Chula Vista, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.3dr.com/',
  summary:'3DR Inc. designs and manufactures autopilots, GNSS modules, telemetry radios, power modules and related electronic systems for UAVs and unmanned vehicles',
  notable:'mRo Quad Zero packages an H7 autopilot in a sub-250g development drone (2023-12-23); mRo x2.1 autopilot reaches fielded fixed-wing use (2018-05-21)', robots:[], suppliers:[] },
{ id:'7a-drones', hubs:['Civil'], name:'7A Drones', country:'Taiwan', flag:'🇹🇼', founded:2019, type:'builder', sector:'Commercial drones', vertical:'Drones', status:'private', hq:'Puzi City, Chiayi County', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://7adrones.com/en/home/',
  summary:'Taiwan-based commercial UAS manufacturer and application integrator',
  notable:'7A Drones agrees framework for ten SKYDRIVE aircraft (2026-02-12); 7A Drones and SkyDrive begin Taiwan advanced-air-mobility collaboration (2025-05-08)', robots:[], suppliers:[] },
{ id:'7robotics', hubs:['Civil'], name:'7robotics', country:'United States', flag:'🇺🇸', founded:2019, type:'builder', sector:'Production automation systems', vertical:'Industrial', status:'private', hq:'Nashville', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://7robotics.com/',
  summary:'7robotics builds custom robotic automation systems for manufacturers, with a focus on production problems in the building-products industry',
  notable:'7robotics wins ABB award for robotic pallet-building system (2025-09-08); 7robotics launches as Con-Vey robotics automation company (2020-05-28)', robots:[], suppliers:[] },
{ id:'7xrobotics', hubs:['Civil'], name:'7Xrobotics', country:'Canada', flag:'🇨🇦', founded:2024, type:'builder', sector:'AI laundry-folding systems', vertical:'Industrial', status:'private', hq:'Calgary, AB', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://7xr.tech',
  summary:'AI-powered laundry-folding system built around two robot arms and vision-based manipulation',
  notable:'7X Robotics wins UCalgary Launchpad best-prototype award (2026-04-08); 7X Robotics laundry-folding robot tested in home demo (2025-08-28)', robots:[], suppliers:[] },
{ id:'8i-robotics', hubs:['Civil'], name:'8i Robotics', country:'Canada', flag:'🇨🇦', founded:0, type:'builder', sector:'Optimus', vertical:'Healthcare', status:'private', hq:'London', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.8irobotics.com/',
  summary:'Optimus, a surgeon-supervised, three-arm robot for open and minimally invasive spine procedures',
  notable:'IMPLANET installs 8i multi-arm surgical robot at Amiens-Picardie (2026-07-15); 8i Robotics and IMPLANET sign spine-robot clinical partnership (2025-11-13)', robots:[], suppliers:[] },
{ id:'9-mothers', hubs:['Defense'], name:'9 Mothers', country:'United States', flag:'🇺🇸', founded:2024, type:'builder', sector:'AI mission systems', vertical:'Defense', status:'private', hq:'Austin, Texas', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://9mothers.com',
  summary:'AI mission systems for defence robotics',
  notable:'9 Mothers launches EDDA counter-drone robot (2026-06-05)', robots:[], suppliers:[] },
{ id:'a-lux', hubs:['Civil'], name:'A-LUX', country:'South Korea', flag:'🇰🇷', founded:2015, type:'builder', sector:'Lightweight training drones', vertical:'Drones', status:'private', hq:'Seoul, Seoul', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aluxonline.com/',
  summary:'A-LUX designs and manufactures lightweight drones and educational robots in South Korea.',
  notable:'A-LUX signs ₩8.45bn Armed Forces training-drone contract (2026-07-30)', robots:[], suppliers:[] },
{ id:'a-techsyn', hubs:['Civil'], name:'A-techSYN', country:'Ireland', flag:'🇮🇪', founded:2016, type:'builder', sector:'CGT aircraft and avionics stack', vertical:'Drones', status:'private', hq:'Shannon', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://a-techsyn.com/',
  summary:'A-techSYN develops complete fixed-wing and VTOL unmanned-aircraft systems, including autopilots, communications, payload integration and ground-control software',
  notable:'A-techSYN wins €2.5M flight-services contract in Spain (2025-02-10)', robots:[], suppliers:[] },
{ id:'a-k-robotics', hubs:['Civil'], name:'A&K Robotics', country:'Canada', flag:'🇨🇦', founded:2015, type:'builder', sector:'Cruz pods', vertical:'Industrial', status:'private', hq:'Vancouver, British Columbia', founders:'', ceo:'', funding:'Series A C$8M (2026-04-21)', valuation:'Undisclosed', employees:'', website:'https://www.aandkrobotics.com/',
  summary:'A&K Robotics builds autonomous passenger-mobility infrastructure for airports and other large indoor venues.',
  notable:'Series A funding of C$8M (2026-04-21); Melonee Wise appointed to board of advisors (2025-11-06); Five-pod Madrid airport pilot with Aena (2025-10-29); Cruz pod testing at Vancouver International Airport (2024-07-25)', robots:[], suppliers:[] },
{ id:'a2z-drone-delivery', hubs:['Civil'], name:'A2Z Drone Delivery', country:'United States', flag:'🇺🇸', founded:2016, type:'builder', sector:'Cargo drones', vertical:'Drones', status:'private', hq:'Los Angeles, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.a2zdronedelivery.com/',
  summary:'A2Z Drone Delivery supplies an end-to-end drone-logistics stack spanning aircraft, payload handling and unattended ground infrastructure.',
  notable:'A2Z joins Alatau City drone mobility test project (2026-05-28); A2Z AirDock wins Innovation Vanguard Award (2025-05-30); A2Z AirDock enters FAA airworthiness review (2025-05-12); A2Z AirDock receives U.S. drone-docking patent (2025-04-08)', robots:[], suppliers:[] },
{ id:'aaeon', hubs:['Civil'], name:'AAEON', country:'Taiwan', flag:'🇹🇼', founded:1992, type:'supplier', sector:'Embedded and edge-AI systems', vertical:'Components', status:'private', hq:'New Taipei City', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aaeon.com/',
  summary:'AAEON manufactures industrial computers, embedded boards and edge-AI systems for equipment builders and integrators.',
  notable:'UP Xtreme ARL Edge robotics Mini PC (2025); BOXER-6647-MTH for advanced robotics (2025); UP Xtreme 7100 Edge, Taiwan Excellence Award (2024); BOXER-8646AI with 12 PoE camera ports (2023); NVIDIA Jetson Orin edge-AI systems (2023)', robots:[], suppliers:[] },
{ id:'aalto', hubs:['Civil'], name:'AALTO', country:'United Kingdom', flag:'🇬🇧', founded:2022, type:'builder', sector:'Zephyr HAPS', vertical:'Drones', status:'private', hq:'Farnborough, Hampshire', founders:'', ceo:'Hughes Boulnois - CEO (appointed 2024-10-30)', funding:'$100 million conditional investment announced (2024-06-03)', valuation:'Undisclosed', employees:'', website:'https://www.aaltohaps.com/',
  summary:'AALTO HAPS develops and operates Zephyr, a solar-powered fixed-wing high-altitude platform station designed for persistent stratospheric missions.',
  notable:'Indonesia partnership memorandum (2026-03-02); 67-day continuous flight completed (2025-04-28); 4G connectivity demonstration in Kenya (2025-03-03); First operational Zephyr flight from Kenya base (2025-02-03); CEO appointment: Hughes Boulnois (2024-10-30); UK CAA Design Organisa', robots:[], suppliers:[] },
{ id:'aaronia', hubs:['Defense'], name:'Aaronia', country:'Germany', flag:'🇩🇪', founded:2003, type:'builder', sector:'AARTOS platform', vertical:'Defense', status:'private', hq:'Strickscheid', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aaronia.com/',
  summary:'German RF measurement, direction-finding and counter-drone technology company founded in 2003',
  notable:'Aaronia unveils sub-5kg AARTOS Hawk T1 airborne RF-geolocation payload (2026-06-16)', robots:[], suppliers:[] },
{ id:'ab-dynamics', hubs:['Civil'], name:'AB Dynamics', country:'United Kingdom', flag:'🇬🇧', founded:1982, type:'builder', sector:'Driving robots', vertical:'Industrial', status:'private', hq:'Bradford on Avon, Wiltshire', founders:'', ceo:'Sarah Matthews-DeMers - CEO (appointed 2025-12-01); Andrew Lewis - interim CFO (appointed 2026-02-23', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.abdynamics.com/',
  summary:'AB Dynamics plc supplies automotive testing, simulation and measurement systems, including driving robots, ADAS platforms and driverless proving-ground controls',
  notable:'Sarah Matthews-DeMers appointed CEO (2025-12-01); Andrew Lewis appointed interim CFO (2026-02-23)', robots:[], suppliers:[] },
{ id:'able-innovations', hubs:['Civil'], name:'Able Innovations', country:'Canada', flag:'🇨🇦', founded:2018, type:'builder', sector:'Patient transfer', vertical:'Healthcare', status:'private', hq:'Toronto', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.ableinnovations.com/',
  summary:'Toronto healthcare-robotics company focused on patient transfers',
  notable:'', robots:[], suppliers:[] },
{ id:'absolute-robotics', hubs:['Civil'], name:'Absolute Robotics', country:'United Kingdom', flag:'🇬🇧', founded:2018, type:'builder', sector:'TM cobot cells', vertical:'Industrial', status:'private', hq:'Bristol', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.absoluterobotics.uk/',
  summary:'UK industrial-automation integrator within Absolute Automation Group',
  notable:'Automated Hanover Displays circuit-board testing (2021-07-20)', robots:[], suppliers:[] },
{ id:'abz-innovation', hubs:['Agriculture'], name:'ABZ Innovation', country:'Hungary', flag:'🇭🇺', founded:2011, type:'builder', sector:'Sprayer drones', vertical:'Agriculture', status:'private', hq:'Szentendre, Pest', founders:'', ceo:'', funding:'€7 million strategic investment (January 2026)', valuation:'Undisclosed', employees:'', website:'https://abzinnovation.com/',
  summary:'ABZ Innovation develops professional drones for agriculture, spraying and field operations.',
  notable:'L50 wins FRUIT LOGISTICA Innovation Award 2026; C10 EU C5 certification; Remote ID compliance (US); Agritechnica 2025 debut; Drone Nerds partnership', robots:[], suppliers:[] },
{ id:'accerion', hubs:['Civil'], name:'Accerion', country:'Netherlands', flag:'🇳🇱', founded:2015, type:'supplier', sector:'Triton optical positioning', vertical:'Components', status:'private', hq:'Venlo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://accerion.tech/',
  summary:'Accerion develops infrastructure-free optical positioning sensors for automated guided vehicles and autonomous mobile robots.',
  notable:'SICK acquires Accerion to expand AMR localization portfolio (2025-01-27); Accerion and SICK combine Triton with LiDAR-LOC for AMR localization (2022-12-07); KuMaTech uses Accerion sensor technology in AGV family (2021-05-04); KUKA adopts Accerion Triton as standard option for omn', robots:[], suppliers:[] },
{ id:'accio-robotics', hubs:['Civil'], name:'Accio Robotics', country:'India', flag:'🇮🇳', founded:2019, type:'builder', sector:'Goods-to-person automation', vertical:'Industrial', status:'private', hq:'Bengaluru', founders:'', ceo:'', funding:'Pre-Series A $1.8 million (2024-01-09)', valuation:'Undisclosed', employees:'', website:'https://www.acciorobotics.com/',
  summary:'Accio Robotics develops goods-to-person warehouse automation for e-commerce and distribution operations.',
  notable:'Accio Robotics raises $1.8 million Pre-Series A (2024-01-09)', robots:[], suppliers:[] },
{ id:'accipiter-radar', hubs:['Civil'], name:'Accipiter Radar', country:'Canada', flag:'🇨🇦', founded:1994, type:'supplier', sector:'Intelligence Network', vertical:'Components', status:'private', hq:'Fenwick', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.accipiterradar.com/',
  summary:'Accipiter Radar develops networked radar surveillance systems for detecting and tracking small aircraft, drones, vessels, vehicles, people and birds.',
  notable:'Accipiter Radar deploys drone detection for Blue Angels airshow (2025-07-28)', robots:[], suppliers:[] },
{ id:'acconeer', hubs:['Civil'], name:'Acconeer', country:'Sweden', flag:'🇸🇪', founded:2012, type:'supplier', sector:'Pulsed radar', vertical:'Components', status:'private', hq:'Malmö', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://acconeer.com/',
  summary:'Malmö-based radar-sensor company developing compact, low-power pulsed-coherent radar sensors and modules',
  notable:'GROOVE X launches LOVOT companion robot (2018-12-18)', robots:[], suppliers:[] },
{ id:'accuray', hubs:['Civil'], name:'Accuray', country:'United States', flag:'🇺🇸', founded:1990, type:'builder', sector:'CyberKnife / helical radiotherapy (TomoTherapy, Radixact)', vertical:'Healthcare', status:'private', hq:'Madison, Wisconsin', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.accuray.com/',
  summary:'Accuray develops, manufactures and supports radiation oncology systems.',
  notable:'', robots:[], suppliers:[] },
{ id:'acecore-technologies', hubs:['Civil'], name:'Acecore Technologies', country:'Netherlands', flag:'🇳🇱', founded:2013, type:'builder', sector:'Zoe, Noa', vertical:'Drones', status:'private', hq:'Uden, North Brabant', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://acecoretechnologies.com/',
  summary:'Dutch professional-UAV manufacturer founded in 2013',
  notable:'', robots:[], suppliers:[] },
{ id:'aceinna', hubs:['Civil'], name:'ACEINNA', country:'United States', flag:'🇺🇸', founded:2017, type:'supplier', sector:'IMU / GNSS-INS modules', vertical:'Components', status:'private', hq:'Tewksbury, Massachusetts', founders:'', ceo:'', funding:'~$50 million spinout financing completed (2018-06-19)', valuation:'Undisclosed', employees:'', website:'https://www.aceinna.com/',
  summary:'MEMS sensing company spun out from MEMSIC in 2017',
  notable:'Global distribution agreement with Avnet (2023-06-29); OpenIMU development kit launch for drones, robots, AGVs (2018-09-17); ~$50 million spinout financing completed (2018-06-19)', robots:[], suppliers:[] },
{ id:'aceworks', hubs:['Civil'], name:'ACEWORKS', country:'South Korea', flag:'🇰🇷', founded:2009, type:'builder', sector:'ADSmart', vertical:'Industrial', status:'private', hq:'Seoul', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aceworks.ai/en/',
  summary:'ACEWORKS develops control software and systems for future mobility',
  notable:'ACEWORKS launches RoboSense AC1 robot vision platform in Korea (2025-08-14)', robots:[], suppliers:[] },
{ id:'acieta', hubs:['Civil'], name:'Acieta', country:'United States', flag:'🇺🇸', founded:1983, type:'builder', sector:'Robotic automation cells', vertical:'Industrial', status:'private', hq:'Shelbyville, Indiana', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.acieta.com/',
  summary:'Acieta provides industrial robotic automation systems for manufacturers. Its integration work covers welding, machine tending, palletizing, material handling and more.',
  notable:'Acieta expands North American production footprint for complex automation programs (2026-04-01); Acieta acquires Capital Industries to expand robotic automation integration (2024-07-30)', robots:[], suppliers:[] },
{ id:'acodyne', hubs:['Civil'], name:'Acodyne', country:'Denmark', flag:'🇩🇰', founded:2023, type:'builder', sector:'E100 / E200', vertical:'Drones', status:'private', hq:'Copenhagen', founders:'', ceo:'', funding:'€2.5 million pre-seed (2026-06-22)', valuation:'Undisclosed', employees:'', website:'https://www.acodyne.com/',
  summary:'Acodyne develops unmanned eVTOL cargo aircraft for high-speed heavy-lift logistics in defence, offshore and remote operations.',
  notable:'Acodyne raised €2.5 million pre-seed (2026-06-22)', robots:[], suppliers:[] },
{ id:'acrab', hubs:['Civil'], name:'Acrab', country:'Singapore', flag:'🇸🇬', founded:2024, type:'supplier', sector:'GELIX compute stack', vertical:'Components', status:'private', hq:'Singapore, Singapore', founders:'', ceo:'', funding:'Series B $130 million (2026-08-06); >$350 million cumulative backing disclosed', valuation:'Undisclosed', employees:'', website:'https://www.acrab.ai/',
  summary:'Acrab builds agentic-AI compute infrastructure for edge devices. Its stack combines purpose-built GELIX silicon, local edge systems and orchestration software.',
  notable:'Acrab raises $130 million Series B (2026-08-06)', robots:[], suppliers:[] },
{ id:'acs-motion-control', hubs:['Civil'], name:'ACS Motion Control', country:'Israel', flag:'🇮🇱', founded:1985, type:'supplier', sector:'SPiiPlus', vertical:'Components', status:'private', hq:'Yokneam Illit', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://acsmotioncontrol.com/',
  summary:'EtherCAT motion controllers, servo drives and machine-control software',
  notable:'ACS Motion Control marks 40 years of precision motion control (2025-06-11)', robots:[], suppliers:[] },
{ id:'acsl', hubs:['Civil'], name:'ACSL', country:'Japan', flag:'🇯🇵', founded:2013, type:'builder', sector:'SOTEN', vertical:'Drones', status:'private', hq:'Tokyo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.acsl.co.jp/',
  summary:'ACSL develops industrial drones and drone-related technologies in Japan.',
  notable:'Renewed Japan’s Class 1 type certificate for PF2-CAT3 (2026); Received orders for aerial-photography systems (2026); Signed Canadian distribution and integration agreement with Draganfly (2026)', robots:[], suppliers:[] },
{ id:'activ-surgical', hubs:['Civil'], name:'Activ Surgical', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Intraoperative visualization', vertical:'Healthcare', status:'private', hq:'Boston', founders:'', ceo:'', funding:'Series B $45M for ActivInsights commercialization (2021-09-30); $15M funding for autonomous surgery platform (2020-07-16', valuation:'Undisclosed', employees:'', website:'https://www.activsurgical.com/',
  summary:'Activ Surgical develops surgical intelligence and visualization technology for operating rooms.',
  notable:'CE Mark received for ActivSight Intelligent Light (2022-12-06); Series B funding of $45M for ActivInsights commercialization (2021-09-30); $15M funding for autonomous surgery platform (2020-07-16)', robots:[], suppliers:[] },
{ id:'actuonix-motion-devices', hubs:['Civil'], name:'Actuonix Motion Devices', country:'Canada', flag:'🇨🇦', founded:2004, type:'supplier', sector:'Linear actuators and servos', vertical:'Components', status:'private', hq:'Victoria', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.actuonix.com/',
  summary:'Actuonix Motion Devices designs and manufactures compact electric linear actuators and servos in Victoria, British Columbia',
  notable:'Actuonix launches L8 micro linear actuators (2025-06-26)', robots:[], suppliers:[] },
{ id:'acua-ocean', hubs:['Civil'], name:'ACUA Ocean', country:'United Kingdom', flag:'🇬🇧', founded:2020, type:'builder', sector:'Long-range USVs', vertical:'Industrial', status:'private', hq:'Plymouth', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.ocean.tech/',
  summary:'ACUA Ocean develops modular long-endurance USVs for defence, survey and offshore inspection',
  notable:'ACUA Ocean completes 100-hour autonomous offshore trial (2026-07-07)', robots:[], suppliers:[] },
{ id:'acumino', hubs:['Civil'], name:'Acumino', country:'United States', flag:'🇺🇸', founded:2021, type:'builder', sector:'Dexterous models', vertical:'Industrial', status:'private', hq:'Boston, Massachusetts', founders:'', ceo:'', funding:'$11.7 million seed round led by Radar Ventures (2026-06-24); $6.5M from Greek and international investors (2024-05-01)', valuation:'Undisclosed', employees:'', website:'https://acumino.ai/',
  summary:'Acumino builds robot models for dexterous industrial automation tasks.',
  notable:'Google DeepMind European Robotics Accelerator selection (2026-06-09); Partnership with MegaChips for Japan distribution (2025-03-25); Healthcare robotics collaboration with Mitsubishi Electric and Festo (2023-05-30)', robots:[], suppliers:[] },
{ id:'acwa-robotics', hubs:['Civil'], name:'ACWA Robotics', country:'France', flag:'🇫🇷', founded:2018, type:'builder', sector:'In-pipe robots', vertical:'Industrial', status:'private', hq:'Bastia', founders:'', ceo:'', funding:'raises EUR 4.8M for water-pipe inspection robots (2024-01-19)', valuation:'Undisclosed', employees:'', website:'https://www.acwa-robotics.com/',
  summary:'ACWA Robotics develops autonomous in-pipe robots for drinking-water network inspection',
  notable:'ACWA Pathfinder completes Dunkirk water-pipe inspection (2024-10-25)', robots:[], suppliers:[] },
{ id:'adamantq', hubs:['Civil'], name:'AdamantQ', country:'Sweden', flag:'🇸🇪', founded:0, type:'supplier', sector:'Diamond spin systems', vertical:'Components', status:'private', hq:'Malmo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.adamantq.com/',
  summary:'AdamantQ develops chip-scale quantum sensors and timing components based on engineered defects in synthetic diamond.',
  notable:'AdamantQ selected for NATO DIANA’s 2026 programme (2025-12-10)', robots:[], suppliers:[] },
{ id:'adapta-robotics', hubs:['Civil'], name:'Adapta Robotics', country:'Romania', flag:'🇷🇴', founded:2015, type:'builder', sector:'Testing robots', vertical:'Industrial', status:'private', hq:'Bucharest', founders:'', ceo:'', funding:'Catalyst Romania invested EUR2 million (2024-10-01)', valuation:'Undisclosed', employees:'', website:'https://www.adaptarobotics.com',
  summary:'Adapta Robotics builds specialised automation where standard industrial arms are difficult to configure.',
  notable:'Google DeepMind selected the company for European Robotics Accelerator (2026-06-09); Catalyst Romania invested EUR2 million (2024-10-01)', robots:[], suppliers:[] },
{ id:'adaptronics', hubs:['Civil'], name:'Adaptronics', country:'Italy', flag:'🇮🇹', founded:2022, type:'builder', sector:'Electro Active Adhesive Layer', vertical:'Industrial', status:'private', hq:'Bologna', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.adaptronics.it/',
  summary:'Adaptronics develops electro-adhesive interfaces with tactile sensing for robotic grasping.',
  notable:'Adaptronics selected for NATO DIANA’s 2026 programme (2025-12-10)', robots:[], suppliers:[] },
{ id:'addverb', hubs:['Civil'], name:'Addverb', country:'India', flag:'🇮🇳', founded:2016, type:'builder', sector:'AMRs, sortation and AS/RS', vertical:'Industrial', status:'private', hq:'Noida, Gautam Buddha Nagar', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://addverb.com/',
  summary:'Addverb builds warehouse and industrial automation systems spanning AMRs, sortation, AS/RS, picking stations and software.',
  notable:'', robots:[], suppliers:[] },
{ id:'adlatus-robotics', hubs:['Civil'], name:'Adlatus Robotics', country:'Germany', flag:'🇩🇪', founded:2015, type:'builder', sector:'Cleaning robots', vertical:'Industrial', status:'private', hq:'Ulm', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.adlatus.eu/',
  summary:'ADLATUS Robotics builds autonomous floor-care systems around cleaning robots and service stations.',
  notable:'ADLATUS and NEURA Robotics form cleaning-robotics partnership (2025-09-22); ADLATUS introduces SR1300 autonomous vacuum sweeper (2022-05-10); ADLATUS wins Deutsche Bahn autonomous-cleaning development contract (2018-03-23)', robots:[], suppliers:[] },
{ id:'adlink-technology', hubs:['Civil'], name:'ADLINK Technology', country:'Taiwan', flag:'🇹🇼', founded:1995, type:'supplier', sector:'AI modules', vertical:'Components', status:'private', hq:'Taoyuan', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.adlinktech.com',
  summary:'ADLINK Technology develops edge computing, AIoT and embedded hardware for industrial systems.',
  notable:'ADLINK unveils edge AI platforms powered by NVIDIA Jetson Thor and IGX Thor (2026-03-17); ADLINK and LIPS Launch AMR 3D x AI Vision Solution, Powered by NVIDIA Isaac (2025-02-26)', robots:[], suppliers:[] },
{ id:'advanced-acoustic-concepts', hubs:['Defense'], name:'Advanced Acoustic Concepts', country:'United States', flag:'🇺🇸', founded:1989, type:'builder', sector:'Undersea warfare systems', vertical:'Defense', status:'private', hq:'Great River, New York', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.advancedacousticconcepts.com/',
  summary:'Advanced Acoustic Concepts develops undersea-warfare systems for the U.S. Navy and allied defence programmes',
  notable:'Recent Contract: $53.94m U.S. Navy minehunting contract (2026-08-03)', robots:[], suppliers:[] },
{ id:'advanced-aircraft-company', hubs:['Civil'], name:'Advanced Aircraft Company', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'HAMR aircraft', vertical:'Drones', status:'private', hq:'Hampton', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://advancedaircraftcompany.com/',
  summary:'Develops hybrid-electric and distributed-propulsion unmanned aircraft',
  notable:'', robots:[], suppliers:[] },
{ id:'advanced-metal-research', hubs:['Civil'], name:'Advanced Metal Research', country:'United States', flag:'🇺🇸', founded:2025, type:'builder', sector:'Welding cells', vertical:'Industrial', status:'private', hq:'Los Angeles, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://advancedmetalresearch.com/',
  summary:'Robotic welding cells for metal fabrication combining computer vision, real-time seam tracking and post-weld inspection',
  notable:'AbInitio Bio and Advanced Metal Research reach YC Spring 2026 Demo Day (2026-06-16)', robots:[], suppliers:[] },
{ id:'advanced-motion-controls', hubs:['Civil'], name:'ADVANCED Motion Controls', country:'United States', flag:'🇺🇸', founded:1987, type:'supplier', sector:'Servo drives', vertical:'Components', status:'private', hq:'Camarillo, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.a-m-c.com/',
  summary:'ADVANCED Motion Controls designs and manufactures servo drives and motor controllers for industrial and robotic motion systems.',
  notable:'FMP060-25-IPM FlexPro servo-drive assembly datasheet (2025-12-15); FE060-25-IPM FlexPro Ethernet/IP servo drive datasheet (2025-08-15); FlexPro EtherNet/IP servo drives unveiling (2024-02-03)', robots:[], suppliers:[] },
{ id:'advanced-navigation', hubs:['Civil'], name:'Advanced Navigation', country:'Australia', flag:'🇦🇺', founded:2012, type:'supplier', sector:'INS / GNSS', vertical:'Components', status:'private', hq:'Sydney', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.advancednavigation.com',
  summary:'Advanced Navigation develops inertial navigation, acoustic navigation and autonomous positioning systems for land, air, sea, subsea and space applications',
  notable:'', robots:[], suppliers:[] },
{ id:'advanced-protection-systems', hubs:['Defense'], name:'Advanced Protection Systems', country:'Poland', flag:'🇵🇱', founded:2015, type:'builder', sector:'Integrated anti-drone systems', vertical:'Defense', status:'private', hq:'Gdynia', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://apsystems.tech/',
  summary:'Develops integrated counter-drone systems for defence, critical infrastructure, airports, borders and public venues.',
  notable:'Advanced Protection Systems wins SAN counter-UAS component contracts (2026-01-30)', robots:[], suppliers:[] },
{ id:'advantech', hubs:['Civil'], name:'Advantech', country:'Taiwan', flag:'🇹🇼', founded:1983, type:'supplier', sector:'Edge AI systems', vertical:'Components', status:'private', hq:'Taipei', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.advantech.com',
  summary:'Advantech develops industrial computers, edge AI systems, embedded platforms and IoT hardware for automation and connected machines.',
  notable:'Partnership with FORT Robotics on safe physical AI edge systems (2026-03-17); AFE-R770 launch for autonomous mobile robots (2024-06-25)', robots:[], suppliers:[] },
{ id:'advex-ai', hubs:['Civil'], name:'Advex AI', country:'United States', flag:'🇺🇸', founded:2023, type:'supplier', sector:'Generative visual inspection', vertical:'Components', status:'private', hq:'Boston, MA', founders:'', ceo:'', funding:'Advex AI raises $3.5M seed round (2024-11-01)', valuation:'Undisclosed', employees:'', website:'https://www.advexai.com/',
  summary:'Advex AI provides generative-AI visual inspection for manufacturers',
  notable:'', robots:[], suppliers:[] },
{ id:'aegisx', hubs:['Civil'], name:'AegisX', country:'Sweden', flag:'🇸🇪', founded:2024, type:'supplier', sector:'OpenLink radar', vertical:'Components', status:'private', hq:'Karlskrona', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aegisx.com/',
  summary:'AegisX develops OpenLink, a distributed tactical radar concept for detecting and tracking low-flying drones that can evade conventional surveillance.',
  notable:'AegisX selected for NATO DIANA’s 2026 programme (2025-12-10); AegisX AB is registered in Karlskrona (2024-07-18)', robots:[], suppliers:[] },
{ id:'aeirobot', hubs:['Civil'], name:'AeiROBOT', country:'South Korea', flag:'🇰🇷', founded:2018, type:'builder', sector:'Alice product line', vertical:'Industrial', status:'private', hq:'Ansan, Gyeonggi-do', founders:'', ceo:'', funding:'AeiROBOT raises $7.2M Series A to scale humanoid robotics (2023-04-14)', valuation:'Undisclosed', employees:'', website:'https://www.arobot4all.com',
  summary:'AeiROBOT develops humanoid robots in South Korea under the A Robot for All concept.',
  notable:'NVIDIA powers humanoid robot industry with Isaac GR00T platform (2025-05-19); AeiROBOT raises $7.2M Series A to scale humanoid robotics (2023-04-14)', robots:[], suppliers:[] },
{ id:'aeolus-robotics-inc', hubs:['Civil'], name:'Aeolus Robotics, Inc.', country:'United States', flag:'🇺🇸', founded:2016, type:'builder', sector:'aeo mobile service robot', vertical:'Industrial', status:'private', hq:'Boston, MA', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aeolusbot.com',
  summary:'Aeolus Robotics develops aeo, an autonomous indoor service robot for care, delivery, security and disinfection workflows.',
  notable:'Aeolus launches aeo service robot (2023-01-04)', robots:[], suppliers:[] },
{ id:'aereus', hubs:['Civil'], name:'Aereus', country:'Germany', flag:'🇩🇪', founded:2025, type:'supplier', sector:'Multimodal spatial data engine', vertical:'Components', status:'private', hq:'Munich', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aereus.de/',
  summary:'Aereus develops multimodal scene-intelligence software for defence, security and critical infrastructure.',
  notable:'Aereus selected for NATO DIANA’s 2026 cohort (2025-12-10)', robots:[], suppliers:[] },
{ id:'aergility', hubs:['Civil'], name:'Aergility', country:'United States', flag:'🇺🇸', founded:2015, type:'builder', sector:'Vista and Hauler VTOL platforms', vertical:'Drones', status:'private', hq:'Dunnellon, Florida', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aergility.com/',
  summary:'Aergility develops autonomous VTOL aircraft for contested logistics, civil cargo and intelligence missions.',
  notable:'Aergility completes untethered ATLIS hover tests (2024-05-22)', robots:[], suppliers:[] },
{ id:'aerial-precision', hubs:['Civil'], name:'Aerial Precision', country:'Netherlands', flag:'🇳🇱', founded:2018, type:'supplier', sector:'Laser scanning payloads', vertical:'Components', status:'private', hq:'Maastricht', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aerial-precision.com/',
  summary:'Aerial Precision develops compact LiDAR hardware and processing software for drones and mobile robots.',
  notable:'', robots:[], suppliers:[] },
{ id:'aerialoop', hubs:['Civil'], name:'Aerialoop', country:'Ecuador', flag:'🇪🇨', founded:2020, type:'builder', sector:'Drone networks', vertical:'Drones', status:'private', hq:'Quito', founders:'', ceo:'', funding:'Kamay Ventures invests in Aerialoop drone delivery airline (2022-10-27)', valuation:'Undisclosed', employees:'', website:'https://www.aerialoop.com/',
  summary:'Aerialoop develops and operates drone networks for urban logistics and industrial drone services.',
  notable:'Aerialoop launches Detroit cargo drone pilot (2025-09-16); Aerialoop plans Ecuador drone logistics network with retailers (2025-02-13); Kamay Ventures invests in Aerialoop drone delivery airline (2022-10-27)', robots:[], suppliers:[] },
{ id:'aerialx', hubs:['Defense'], name:'AerialX', country:'Canada', flag:'🇨🇦', founded:2013, type:'builder', sector:'DroneBullet and detection tools', vertical:'Defense', status:'private', hq:'Vancouver', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aerialx.com/',
  summary:'AerialX develops counter-UAS tools spanning radio-frequency detection, autonomous interception and drone forensics.',
  notable:'', robots:[], suppliers:[] },
{ id:'aerion', hubs:['Civil'], name:'Aerion', country:'Estonia', flag:'🇪🇪', founded:2026, type:'builder', sector:'Drone nodes', vertical:'Industrial', status:'private', hq:'Tallinn, Harju County', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aerion.ee/',
  summary:'Aerion builds an autonomous drone network for industrial monitoring in Estonia and the Baltics.',
  notable:'', robots:[], suppliers:[] },
{ id:'aerium-analytics', hubs:['Civil'], name:'AERIUM Analytics', country:'Canada', flag:'🇨🇦', founded:2016, type:'builder', sector:'RoBird platform', vertical:'Industrial', status:'private', hq:'Calgary', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aeriumanalytics.com/',
  summary:'AERIUM Analytics develops and operates drone-based wildlife management, remote sensing and geospatial services',
  notable:'AERIUM Analytics selected for NATO DIANA’s 2026 cohort (2025-12-10); AERIUM acquires Clear Flight Solutions assets (2025-06-18); AERIUM acquires RoBird technology and IP portfolio (2020-03-10)', robots:[], suppliers:[] },
{ id:'aerix-systems', hubs:['Civil'], name:'Aerix Systems', country:'France', flag:'🇫🇷', founded:2020, type:'builder', sector:'Omnidirectional UAVs', vertical:'Drones', status:'private', hq:'Merignac', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aerix-systems.com/',
  summary:'Aerix Systems develops modular aerial robots built around omnidirectional propulsion.',
  notable:'Selected for NATO DIANA’s 2026 programme (2025-12-10)', robots:[], suppliers:[] },
{ id:'aerobotics', hubs:['Agriculture'], name:'Aerobotics', country:'South Africa', flag:'🇿🇦', founded:2014, type:'builder', sector:'Crop intelligence', vertical:'Agriculture', status:'private', hq:'Cape Town', founders:'', ceo:'', funding:'Aerobotics raises $17M Series B to scale agriculture AI globally (2021-01-20)', valuation:'Undisclosed', employees:'', website:'https://aerobotics.com/',
  summary:'Aerobotics an agricultural-data company focused on perennial crops',
  notable:'Aerobotics raises $17M Series B to scale agriculture AI globally (2021-01-20)', robots:[], suppliers:[] },
{ id:'aerobotix', hubs:['Civil'], name:'Aerobotix', country:'United States', flag:'🇺🇸', founded:2005, type:'builder', sector:'Robot workcells', vertical:'Industrial', status:'private', hq:'Huntsville', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aerobotix.net/',
  summary:'Huntsville robotic-systems integrator serving aerospace and defence manufacturing',
  notable:'Aerobotix wins $1.2M Air Force SBIR for F-35 robotic scuff sanding (2026-03-10); Aerobotix reaches 40 robotic installations for U.S. missile manufacturing (2022-05-20); Aerobotix unveils six-robot hypersonic missile production line (2021-04-16)', robots:[], suppliers:[] },
{ id:'aerodefense', hubs:['Defense'], name:'AeroDefense', country:'United States', flag:'🇺🇸', founded:2015, type:'builder', sector:'Drone detection', vertical:'Defense', status:'private', hq:'Oceanport', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aerodefense.tech/',
  summary:'AeroDefense provides counter-drone detection rather than an interceptor or jammer.',
  notable:'AeroDefense selected for MDA SHIELD IDIQ drone-detection vehicle (2026-07-09)', robots:[], suppliers:[] },
{ id:'aerodyne-group', hubs:['Civil'], name:'Aerodyne Group', country:'Malaysia', flag:'🇲🇾', founded:2014, type:'builder', sector:'Drone data operations', vertical:'Industrial', status:'private', hq:'Cyberjaya', founders:'', ceo:'', funding:'Aerodyne Group raises $30M bridging round (2022-09-26)', valuation:'Undisclosed', employees:'', website:'https://aerodyne.group/',
  summary:'Aerodyne Group provides drone data, AI analytics and digital-transformation services for enterprise asset operators.',
  notable:'Aerodyne Group raises $30M bridging round (2022-09-26)', robots:[], suppliers:[] },
{ id:'aerones', hubs:['Civil'], name:'Aerones', country:'Latvia', flag:'🇱🇻', founded:2018, type:'builder', sector:'Turbine robots', vertical:'Industrial', status:'private', hq:'Riga', founders:'', ceo:'', funding:'$62M financing round (2025-06-03); $30M growth round (2023-01-16); EUR4.416M EU Innovation Fund grant (2024-01-18)', valuation:'Undisclosed', employees:'', website:'https://aerones.com',
  summary:'Aerones provides robot-enabled wind turbine maintenance and inspection services.',
  notable:'Offshore robotic maintenance technology tests completed in Scotland (2024-10-17); Visual Inspection Studio launched (2025-05-02); Crawler Gen 3 introduced (2025-05-22)', robots:[], suppliers:[] },
{ id:'aerosense', hubs:['Civil'], name:'Aerosense', country:'Japan', flag:'🇯🇵', founded:2015, type:'builder', sector:'Aerobo Wing', vertical:'Drones', status:'private', hq:'Tokyo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aerosense.co.jp/en/',
  summary:'Aerosense develops Japanese industrial drones and cloud data-processing tools for surveying, inspection, disaster response and infrastructure workflows.',
  notable:'', robots:[], suppliers:[] },
{ id:'aerospace-industrial-development-corporation', hubs:['Defense'], name:'Aerospace Industrial Development Corporation', country:'Taiwan', flag:'🇹🇼', founded:1969, type:'builder', sector:'Uncrewed systems', vertical:'Defense', status:'private', hq:'Taichung', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aidc.com.tw/en/',
  summary:'Taiwan’s publicly listed aerospace prime for aircraft design, system integration, production and sustainment',
  notable:'', robots:[], suppliers:[] },
{ id:'aerotech', hubs:['Civil'], name:'Aerotech', country:'United States', flag:'🇺🇸', founded:1970, type:'supplier', sector:'Stages, drives and controls', vertical:'Components', status:'private', hq:'Pittsburgh', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aerotech.com/',
  summary:'Aerotech an employee-owned precision-motion and automation company founded in Pittsburgh in 1970',
  notable:'Aerotech releases Automation1 version 2.11 (2025-10-21)', robots:[], suppliers:[] },
{ id:'aerovect', hubs:['Civil'], name:'AeroVect', country:'United States', flag:'🇺🇸', founded:2020, type:'builder', sector:'AeroVect Driver for GSE', vertical:'Industrial', status:'private', hq:'South San Francisco, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aerovect.com/',
  summary:'AI-powered self-driving software for airport ground support equipment',
  notable:'dnata selects AeroVect for autonomous ground-support trials (2022-09-16); AeroVect and GAT partner on autonomous airport tarmac driving (2022-03-18)', robots:[], suppliers:[] },
{ id:'aescape', hubs:['Civil'], name:'Aescape', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Aescape table', vertical:'Industrial', status:'private', hq:'New York', founders:'', ceo:'', funding:'Aescape raises $83M in Series B funding (2025-03-04)', valuation:'Undisclosed', employees:'', website:'https://www.aescape.com',
  summary:'Aescape builds robotic massage systems for wellness, hospitality and recovery environments.',
  notable:'Aescape reaches 100-location robotic massage footprint (2025-09-23); Aescape raises $83M in Series B funding (2025-03-04); Aescape launches automated massage system with Equinox rollout (2024-03-13)', robots:[], suppliers:[] },
{ id:'aethon', hubs:['Civil'], name:'Aethon', country:'United States', flag:'🇺🇸', founded:2004, type:'builder', sector:'TUG / Zena', vertical:'Healthcare', status:'private', hq:'Pittsburgh', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aethon.com/',
  summary:'Aethon builds autonomous mobile robots for hospital, hospitality and facility logistics.',
  notable:'ST Engineering Aethon launches ZenaRx hospital delivery robot (2024-04-29); Upstate deploys 14 Aethon TUG robots for hospital logistics (2023-07-10); ST Engineering agrees to acquire Aethon (2017-07-17); Aethon installs TUG robots at 21 hospitals in 2013 (2014-01-14)', robots:[], suppliers:[] },
{ id:'aetina', hubs:['Civil'], name:'Aetina', country:'Taiwan', flag:'🇹🇼', founded:2012, type:'supplier', sector:'Embedded GPU and Jetson systems', vertical:'Components', status:'private', hq:'New Taipei City', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aetina.com/',
  summary:'Aetina designs edge-AI computing platforms, embedded GPU modules and carrier systems for industrial deployment.',
  notable:'', robots:[], suppliers:[] },
{ id:'aeva-technologies', hubs:['Civil'], name:'Aeva Technologies', country:'United States', flag:'🇺🇸', founded:2017, type:'supplier', sector:'4D LiDAR', vertical:'Components', status:'private', hq:'Mountain View, CA', founders:'', ceo:'', funding:'Secured $100M Apollo investment (2025-10-28)', valuation:'Undisclosed', employees:'', website:'https://www.aeva.com/',
  summary:'Aeva Technologies develops 4D lidar and perception technology for automotive, industrial and robotics applications',
  notable:'Secured $100M Apollo investment (2025-10-28); Formed manufacturing collaboration with LG Innotek (2025-07-29); Introduced Atlas Ultra at CES 2025 (2025-01-07); Selected by Daimler Truck for series-production autonomous trucks (2024-01-09)', robots:[], suppliers:[] },
{ id:'aevex', hubs:['Defense'], name:'AEVEX', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'UAS / USV systems', vertical:'Defense', status:'private', hq:'Solana Beach, CA', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aevex.com/',
  summary:'AEVEX develops defence autonomy, uncrewed aircraft, loitering munitions, unmanned surface vessels and mission systems for U.S. and allied customers.',
  notable:'', robots:[], suppliers:[] },
{ id:'aeye-inc', hubs:['Civil'], name:'AEye Inc', country:'United States', flag:'🇺🇸', founded:2013, type:'supplier', sector:'Apollo', vertical:'Components', status:'private', hq:'Pleasanton', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aeye.ai/',
  summary:'AEye Inc develops adaptive lidar systems for automotive, industrial and mobility applications.',
  notable:'', robots:[], suppliers:[] },
{ id:'ace-robotics', hubs:['Civil'], name:'ACE Robotics (大晓机器人)', country:'China', flag:'🇨🇳', founded:2025, type:'builder', sector:'Robotics, Embodied AI', vertical:'Industrial', status:'private', hq:'Shanghai, Shanghai', founders:'', ceo:'', funding:'Angel round led by Ant Group (2026-02-10); Angel+ round completion (2026-06-15)', valuation:'Undisclosed', employees:'', website:'https://www.ace-robotics.cn/',
  summary:'ACE Robotics develops embodied-intelligence world models and robot-brain modules, including Kairos, A1 and ACE-Ego.',
  notable:'Kairos 3.0 and KaiWu developer platform release (2025-12-18); ACE-Ego open-source announcement with CUHK MMLab (2026-06-17); Kairos 3.1 and Ambient Capture Engine 2.0 unveiling (2026-07-19)', robots:[], suppliers:[] }
);

/* ---- ADDITIONS: curated DB enrichment 2026-08-28 (suppliers) ---- */
window.RH_DATA.companies.push(
{ id:'hyundai-mobis', hubs:['Civil'], name:'Hyundai Mobis', country:'South Korea', flag:'🇰🇷', founded:1977, type:'supplier', sector:'Actuators (robot joints)', vertical:'Components', status:'public', hq:'Seoul', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.mobis.com',
  summary:'Automotive component giant entering robotics: announced at CES 2026 as the actuator supplier for Boston Dynamics next-generation Atlas, pairing automotive-scale manufacturing with Hyundai Motor Group ownership of Boston Dynamics. [NEEDS VERIFICATION]',
  notable:'Boston Dynamics (Atlas) is its first official robotics-sector customer. Actuators typically represent 60%+ of a humanoid robot material cost. Competes with Harmonic Drive, Nabtesco, Leaderdrive.', robots:[], suppliers:[] },
{ id:'lg-energy-solution', hubs:['Civil'], name:'LG Energy Solution', country:'South Korea', flag:'🇰🇷', founded:2020, type:'supplier', sector:'Batteries (robot power packs)', vertical:'Components', status:'public', hq:'Seoul', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.lgensol.com',
  summary:'Major EV battery maker moving into humanoid robot power: has secured battery supply deals with Tesla (Optimus), Boston Dynamics and Figure AI, with Unitree reported in talks, leveraging high-nickel ternary chemistry from its EV business. [NEEDS VERIFICATION]',
  notable:'Uses ultra-high-nickel ternary cells (cathode supplier L&F Co.). Competes with Panasonic, Samsung SDI, SK On, CATL in the EV/robotics battery market.', robots:[], suppliers:[] }
);


/* ---- ADDITIONS: Korthos day-3 (curated) 2026-08-28 ---- */
window.RH_DATA.companies.push(
{ id:'agco', hubs:['Agriculture'], name:'AGCO', country:'United States', flag:'🇺🇸', founded:1990, type:'builder', sector:'Agriculture (farm machinery)', vertical:'Agriculture', status:'private', hq:'Duluth, Georgia', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.agcocorp.com',
  summary:'"AGCO manufactures agricultural machinery, tractors, combines, sprayers and precision-farming systems." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'ageagle-aerial-systems', hubs:['Civil'], name:'AgEagle Aerial Systems', country:'United States', flag:'🇺🇸', founded:0, type:'builder', sector:'Aerial / drones', vertical:'Drones', status:'private', hq:'Wichita, Kansas', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://ageagle.com/',
  summary:'"builds professional drones, sensors and software for commercial and government users" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agilex-robotics', hubs:['Civil'], name:'AgileX Robotics', country:'China', flag:'🇨🇳', founded:2016, type:'builder', sector:'Mobile robotics development platforms', vertical:'Industrial', status:'private', hq:'Shenzhen, Guangdong', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://global.agilex.ai/',
  summary:'"builds configurable mobile bases and unmanned ground vehicles for research, education, inspection, logistics, agriculture and industrial development" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agilink', hubs:['Civil'], name:'AGILINK', country:'China', flag:'🇨🇳', founded:0, type:'supplier', sector:'End effectors (dexterous hands/grippers)', vertical:'Components', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://store.agibot.com/collections/dexterous-hand',
  summary:'"AGILINK develops dexterous robotic hands and grippers for humanoids, industrial robots and embodied-AI developers." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agilis-robotics', hubs:['Civil'], name:'Agilis Robotics', country:'Hong Kong', flag:'🇭🇰', founded:0, type:'builder', sector:'Surgical robotics', vertical:'Healthcare', status:'private', hq:'Hong Kong', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.agilisrobotics.com/',
  summary:'"Miniature flexible robotic instruments for endoluminal surgery." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agilox', hubs:['Civil'], name:'AGILOX', country:'Austria', flag:'🇦🇹', founded:2017, type:'builder', sector:'Warehouse logistics / AMR', vertical:'Industrial', status:'private', hq:'Neukirchen bei Lambach', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.agilox.net/en/',
  summary:'"AGILOX builds autonomous mobile robots and intelligent guided vehicles for intralogistics and warehouse automation." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agreenculture', hubs:['Agriculture'], name:'Agreenculture', country:'France', flag:'🇫🇷', founded:2016, type:'builder', sector:'Agriculture (autonomy retrofit)', vertical:'Agriculture', status:'private', hq:'Toulouse', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.agreenculture.fr/',
  summary:'"Combines positioning, perception, control and safety hardware so equipment manufacturers and farm operators can convert tractors and implements into autonomous field systems." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agri-automation', hubs:['Agriculture'], name:'Agri Automation', country:'Australia', flag:'🇦🇺', founded:2022, type:'builder', sector:'Agriculture (systems integration)', vertical:'Agriculture', status:'private', hq:'Monarto South, South Australia', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.agriautomation.com.au/',
  summary:'"Agri Automation distributes, integrates and supports automation systems for agricultural operations." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agricobots', hubs:['Agriculture'], name:'Agricobots', country:'Italy', flag:'🇮🇹', founded:0, type:'builder', sector:'Agriculture (vineyards and orchards)', vertical:'Agriculture', status:'private', hq:'Rho, Lombardy', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.agricobots.com/en/',
  summary:'"Agricobots develops autonomous agricultural robots for vineyards and orchards." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agripass-robotics', hubs:['Agriculture'], name:'AgriPass Robotics', country:'Israel', flag:'🇮🇱', founded:2022, type:'builder', sector:'Agriculture (precision weeding)', vertical:'Agriculture', status:'private', hq:'Tel Aviv', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://agripass.co/',
  summary:'"RHIC uses cameras and crop models to distinguish weeds from cultivated plants as the machine travels through a field." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agrirobot', hubs:['Agriculture'], name:'AgriRobot', country:'Denmark', flag:'🇩🇰', founded:0, type:'builder', sector:'Agriculture (safety software)', vertical:'Agriculture', status:'private', hq:'Kongens Lyngby, Capital Region', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://agrirobot.ai/',
  summary:'"Develops certifiable safety software for autonomous agricultural machines." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'agrointelli', hubs:['Agriculture'], name:'Agrointelli', country:'Denmark', flag:'🇩🇰', founded:2015, type:'builder', sector:'Agriculture (field robots)', vertical:'Agriculture', status:'private', hq:'Lem St, Central Denmark Region', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://agrointelli.com/',
  summary:'"ROBOTTI autonomous field robots for arable and horticultural farming" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aheadform', hubs:['Civil'], name:'AheadForm', country:'China', flag:'🇨🇳', founded:2024, type:'builder', sector:'Humanoid / social robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aheadform.com/products',
  summary:'"develops expressive humanoid heads and social robots for human-machine interaction" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aibo-medical-robot', hubs:['Civil'], name:'Aibo Medical Robot', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Surgical robotics (vascular intervention)', vertical:'Healthcare', status:'private', hq:'Shenzhen', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.abrobo.com/',
  summary:'"Develops robotic systems for vascular intervention" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aica', hubs:['Civil'], name:'AICA', country:'Switzerland', flag:'🇨🇭', founded:2019, type:'builder', sector:'Industrial automation / robot control software', vertical:'Industrial', status:'private', hq:'Prilly', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aica.tech/',
  summary:'"sensor-driven adaptive control for industrial robots" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aice', hubs:['Defense'], name:'AICE', country:'United States', flag:'🇺🇸', founded:2026, type:'builder', sector:'Maritime / defense robotics', vertical:'Defense', status:'private', hq:'San Francisco, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aicepower.com',
  summary:'"builds modular underwater drone swarms for defence missions" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aidin-robotics', hubs:['Civil'], name:'Aidin Robotics', country:'South Korea', flag:'🇰🇷', founded:0, type:'supplier', sector:'Robotic sensors (force-torque)', vertical:'Components', status:'private', hq:'Anyang', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aidinrobotics.co.kr/en',
  summary:'"develops force-torque sensors and robotic sensing products for industrial robots, cobots and research platforms" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aidol', hubs:['Civil'], name:'AIDOL', country:'Russia', flag:'🇷🇺', founded:0, type:'builder', sector:'Humanoid / social robotics', vertical:'Humanoid', status:'private', hq:'Moscow', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aidoltech.ru/en',
  summary:'"anthropomorphic humanoid robots for communication, assistance and public-facing service environments" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aiendoscopic', hubs:['Civil'], name:'aiEndoscopic', country:'Switzerland', flag:'🇨🇭', founded:0, type:'builder', sector:'Medical AI / healthcare robotics-adjacent', vertical:'Healthcare', status:'private', hq:'Zurich', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aiendoscopic.com/',
  summary:'"larynGuide analyses the live image from an endoscope and adds visual guidance during airway procedures" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aigen', hubs:['Agriculture'], name:'Aigen', country:'United States', flag:'🇺🇸', founded:2020, type:'builder', sector:'Agriculture robotics', vertical:'Agriculture', status:'private', hq:'Kirkland, Washington', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aigen.io/',
  summary:'"autonomous solar-powered field robots for agriculture" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'ailos-robotics', hubs:['Civil'], name:'AILOS Robotics', country:'Belgium', flag:'🇧🇪', founded:2024, type:'supplier', sector:'Motion components (gearboxes)', vertical:'Components', status:'private', hq:'Brussels', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://ailos-robotics.com/',
  summary:'"develops compact, backdrivable gearboxes for human-centred robots" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aim-medical-robotics', hubs:['Civil'], name:'AiM Medical Robotics', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Surgical robotics (neurosurgery)', vertical:'Healthcare', status:'private', hq:'Worcester, Massachusetts', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aimmedicalrobotics.com/',
  summary:'"MRI-compatible surgical robotics for neurosurgical procedures" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aim-robotics', hubs:['Civil'], name:'AIM Robotics', country:'Denmark', flag:'🇩🇰', founded:0, type:'supplier', sector:'End-effectors / dispensing tools', vertical:'Components', status:'private', hq:'Herlev', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aim-robotics.com/',
  summary:'"supplies electrically driven dispensing end-effectors for collaborative robot process applications" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'aimoga-robotics', hubs:['Civil'], name:'AiMOGA Robotics', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid and quadruped robotics', vertical:'Humanoid', status:'private', hq:'Wuhu', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aimoga-robot.com/',
  summary:'"AiMOGA Robotics develops humanoid robots and quadruped robot dogs under Chery robotics program." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'ainos', hubs:['Civil'], name:'Ainos', country:'United States', flag:'🇺🇸', founded:1984, type:'supplier', sector:'Sensors / industrial and robotic olfaction', vertical:'Components', status:'private', hq:'Houston, Texas', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.ainos.com/',
  summary:'"converts scent and volatile-compound signals into machine-readable Smell ID data" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'ainstein', hubs:['Civil'], name:'Ainstein', country:'United States', flag:'🇺🇸', founded:0, type:'supplier', sector:'Perception (radar sensors)', vertical:'Components', status:'private', hq:'Lawrence, Kansas', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://ainstein.ai/',
  summary:'"Ainstein develops radar sensing products for drones, vehicles and industrial autonomy systems." — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'air-robotics', hubs:['Civil'], name:'AIR Robotics', country:'United States', flag:'🇺🇸', founded:0, type:'builder', sector:'Robotics design and engineering services', vertical:'Industrial', status:'private', hq:'Boston, Massachusetts', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.airoboticstudio.com/',
  summary:'"a robotics design and development studio focused on streamlining how robotics solutions are designed and developed" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'airbot-systems', hubs:['Civil'], name:'Airbot Systems', country:'France', flag:'🇫🇷', founded:2015, type:'builder', sector:'UAV electronics (carrier boards, power distribution)', vertical:'Drones', status:'private', hq:'Cognac, Nouvelle-Aquitaine', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.airbot-systems.com/',
  summary:'"supplies Cube/Pixhawk carrier-board hardware and compact power-distribution boards for UAV builds" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] },
{ id:'airbound', hubs:['Civil'], name:'Airbound', country:'India', flag:'🇮🇳', founded:2020, type:'builder', sector:'Delivery drones / logistics', vertical:'Drones', status:'private', hq:'Bengaluru', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.airbound.com/',
  summary:'"builds autonomous delivery drones and logistics operations for healthcare, e-commerce and public-service delivery in India" — Korthos.xyz',
  notable:'', robots:[], suppliers:[] }
);

/* ---- ADDITIONS: ICRA 2026 exhibitors (partial — page is image-based) ---- */
window.RH_DATA.companies.push(
{ id:'lightwheel', hubs:['Civil'], name:'Lightwheel', country:'China', flag:'🇨🇳', founded:0, type:'supplier', sector:'Robotics components / data', vertical:'Components', status:'private', hq:'', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'',
  summary:'Confirmed platinum partner/exhibitor at IEEE ICRA 2026. [NEEDS VERIFICATION — profile to be researched; details not yet confirmed]', notable:'', robots:[], suppliers:[] },
{ id:'tars-robotics', hubs:['Civil'], name:'TARS', country:'', flag:'🌐', founded:0, type:'builder', sector:'Robotics', vertical:'Industrial', status:'private', hq:'', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'',
  summary:'Confirmed platinum partner/exhibitor at IEEE ICRA 2026. [NEEDS VERIFICATION — profile to be researched; details not yet confirmed]', notable:'', robots:[], suppliers:[] }
);

/* ---- ADDITIONS: Pittsburgh robotics ecosystem (verified) 2026-08-28 ---- */
window.RH_DATA.companies.push(
{ id:'hebi-robotics', hubs:['Civil'], name:'HEBI Robotics', country:'United States', flag:'🇺🇸', founded:2014, type:'supplier', sector:'Modular actuators / components', vertical:'Components', status:'private', hq:'Pittsburgh, Pennsylvania', founders:'Dave Rollinson, Howie Choset, Matt Tesch', ceo:'', funding:'Seed-stage', valuation:'Undisclosed', employees:'', website:'https://www.hebirobotics.com',
  summary:'Carnegie Mellon Biorobotics Lab spin-off making modular, force-controlled "Lego for robots" actuators. Its H-Series smart actuators offer zero backlash and up to 140 Nm continuous torque with onboard IMU and current sensing, used to build custom robots for rugged environments — from refinery inspection to underwater and space applications.',
  notable:'Founded 2014 by a CMU team under Professor Howie Choset; X-Series platform launched 2016, adopted by universities and industry worldwide. Designs and assembles actuators in Pittsburgh.', robots:[], suppliers:[] },
{ id:'seegrid', hubs:['Civil'], name:'Seegrid', country:'United States', flag:'🇺🇸', founded:2003, type:'builder', sector:'Autonomous mobile robots (AMR)', vertical:'Industrial', status:'private', hq:'Pittsburgh, Pennsylvania', founders:'Hans Moravec', ceo:'', funding:'~$265M total (incl. $50M Series D, 2024)', valuation:'Undisclosed', employees:'~350', website:'https://seegrid.com',
  summary:'Pittsburgh-based leader in autonomous mobile robots for material handling. Its Palion AMR line — Lift, Pallet Truck and Tow Tractor — uses vision-guided "Sliding Scale Autonomy" and is engineered and assembled in the US. Ranked the #1 US AMR provider by Interact Analysis; surpassed 20 million autonomous miles in 2026.',
  notable:'Founded 2003 by robotics pioneer Hans Moravec. Raised $50M Series D (2024, led by Giant Eagle and G2 Venture Partners); acquired Box Robotics. Backers include Innovation Works.', robots:[], suppliers:[] }
);

/* ---- ADDITIONS: curated DB 2026-08-31 (detailed, sourced) ---- */
window.RH_DATA.companies.push(
{ id:'humanoid-uk', hubs:['Civil'], name:'Humanoid', country:'United Kingdom', flag:'🇬🇧', founded:2024, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', ticker:'', hq:'London', founders:'Artem Sokolov', ceo:'Artem Sokolov', funding:'$152M (Jul 2026, Dealroom)', valuation:'$1.35B post-money', employees:'', website:'https://thehumanoid.ai',
  summary:'London-based humanoid startup (founded 2024 as SKL Robotics Ltd.), became Europe’s first pure-play humanoid unicorn with a $152M Series A in July 2026 (Schaeffler and Bosch among investors) at a $1.35B post-money valuation. Builds the HMND 01 wheeled bimanual manipulator, with Bosch’s robotics subsidiary as contract manufacturer; beta rollout targeted Q4 2026.',
  notable:'Competitors: Figure AI, 1X Technologies, Apptronik, Neura Robotics.', robots:[], suppliers:[] },
{ id:'ehang', hubs:['Civil'], name:'EHang', country:'China', flag:'🇨🇳', founded:2014, type:'builder', sector:'Passenger eVTOL / drones', vertical:'Drones', status:'public', ticker:'EH', hq:'Guangzhou', founders:'Huazhi Hu', ceo:'Huazhi Hu', funding:'Public (Nasdaq: EH)', valuation:'Undisclosed', employees:'', website:'https://www.ehang.com',
  summary:'Guangzhou-based, Nasdaq-listed maker of pilotless passenger eVTOL aircraft. Its EH216-S was CAAC type-certified in 2023 and completed its first public demonstration flight at Hong Kong Cyberport on Aug 28, 2026 under the HKSAR "Regulatory Sandbox X" project, partnering with Kwoon Chung Smart Mobility toward Hong Kong/Macau commercialization.',
  notable:'Competitors: Joby Aviation, Volocopter, Archer Aviation.', robots:['ehang-eh216s'], suppliers:[] },
{ id:'cubemars', hubs:['Civil'], name:'CubeMars', country:'China', flag:'🇨🇳', founded:0, type:'supplier', sector:'Actuators', vertical:'Components', status:'private', ticker:'', hq:'', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'https://www.cubemars.com',
  summary:'Chinese maker of quasi-direct-drive robotic actuators widely used in the DIY, academic and prototyping community for quadrupeds and humanoid hands. Its AK80-64 integrates a BLDC motor, planetary gearbox, 14-bit magnetic encoder and driver with dual servo/MIT control modes.',
  notable:'Competitors: T-Motor, MyActuator (RMD series), Unitree in-house actuators.', robots:[], suppliers:[] },
{ id:'bosch-rexroth', hubs:['Civil'], name:'Bosch Rexroth', country:'Germany', flag:'🇩🇪', founded:2001, type:'supplier', sector:'Mobile robotics / AMR', vertical:'Industrial', status:'private', ticker:'', hq:'Lohr am Main', founders:'', ceo:'', funding:'Bosch subsidiary', valuation:'Undisclosed', employees:'', website:'https://www.boschrexroth.com',
  summary:'Bosch industrial subsidiary whose ACTIVE Shuttle autonomous mobile robot carries 260 kg on a 612×235 mm lifting platform at up to 1.0 m/s, using laser SLAM navigation, PL d safety scanners and stereo cameras, fleet-managed via a REST/WebSocket management system.',
  notable:'Competitors: MiR (Teradyne), Geek+, Hai Robotics.', robots:[], suppliers:[] }
);
window.RH_DATA.robots.push(
{ id:'ehang-eh216s', name:'EHang EH216-S', maker:'ehang', type:'Passenger eVTOL', vertical:'Drones', country:'China', flag:'🇨🇳', year:2023, price:'—', status:'Type-certified', height:'1.93 m', payload:'620 kg MTOW', summary:'Pilotless 2-seat passenger eVTOL, CAAC type-certified since 2023. Coaxial dual-rotor propulsion (16 propellers), 5.73 m rotor span, 130 km/h max design speed, 30 km range. First public flight in Hong Kong Aug 2026. Battery chemistry, compute and full sensor suite undisclosed. [NEEDS VERIFICATION]', dof:'', battery:'Undisclosed', compute:'Undisclosed', useCases:'Urban air mobility, passenger transport', components:[] }
);


/* ---- ADDITIONS: Korthos backfill (curated) 2026-08-30 ---- */
window.RH_DATA.companies.push(
{ id:'algorized', hubs:['Civil'], name:'Algorized', country:'United States', flag:'🇺🇸', founded:2022, type:'supplier', sector:'Perception AI', vertical:'Components', status:'private', hq:'Campbell, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.algorized.com',
  summary:'"sensor-agnostic people-sensing and positioning software for UWB and mmWave radar"',
  notable:'', robots:[], suppliers:[] },
{ id:'alias-robotics', hubs:['Civil'], name:'Alias Robotics', country:'Spain', flag:'🇪🇸', founded:2018, type:'builder', sector:'Robot cybersecurity', vertical:'Industrial', status:'private', hq:'Vitoria-Gasteiz', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aliasrobotics.com/',
  summary:'"on-premise security models, agent tooling, vulnerability research, threat assessments and products such as RIS, BlackBox and Alurity"',
  notable:'', robots:[], suppliers:[] },
{ id:'aliciabots', hubs:['Civil'], name:'AliciaBots', country:'Singapore', flag:'🌐', founded:2020, type:'builder', sector:'Marine robotics', vertical:'Industrial', status:'private', hq:'Singapore', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://aliciabots.com/',
  summary:'"RoverClean, which uses magnetic attachment and rotating brushes for underwater hull cleaning"',
  notable:'', robots:[], suppliers:[] },
{ id:'all3', hubs:['Civil'], name:'All3', country:'United Kingdom', flag:'🌐', founded:2023, type:'builder', sector:'Construction Robotics', vertical:'Industrial', status:'private', hq:'London', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://all3.com/',
  summary:'"combines software-assisted design with robotic fabrication for custom-building workflows"',
  notable:'', robots:[], suppliers:[] },
{ id:'allen-control-systems', hubs:['Defense'], name:'Allen Control Systems', country:'United States', flag:'🇺🇸', founded:2022, type:'builder', sector:'Defense', vertical:'Defense', status:'private', hq:'Austin, Texas', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.allencontrolsystems.com',
  summary:'"detects, identifies and neutralizes UAVs, combining sensors, autonomy and kinetic or non-kinetic effects"',
  notable:'', robots:[], suppliers:[] },
{ id:'allied-vision', hubs:['Civil'], name:'Allied Vision', country:'Germany', flag:'🇩🇪', founded:0, type:'supplier', sector:'Vision (industrial cameras)', vertical:'Components', status:'private', hq:'Stadtroda, Thuringia', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.alliedvision.com',
  summary:'"supplies area-scan, line-scan, smart, embedded, high-speed, short-wave-infrared and thermal cameras alongside lenses, frame grabbers and image-processing software"',
  notable:'', robots:[], suppliers:[] },
{ id:'allient', hubs:['Civil'], name:'Allient', country:'United States', flag:'🇺🇸', founded:1962, type:'supplier', sector:'Motion, controls and power technology', vertical:'Components', status:'private', hq:'Buffalo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.allient.com/',
  summary:'"Allient is a US-listed motion, controls and power-technology company formed from Allied Motion Technologies"',
  notable:'', robots:[], suppliers:[] },
{ id:'allonic', hubs:['Civil'], name:'Allonic', country:'Hungary', flag:'🌐', founded:2021, type:'supplier', sector:'End Effectors', vertical:'Components', status:'private', hq:'Budapest', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.allonic.co',
  summary:'"produces monolithic robotic mechanisms with scaffolding, soft load-bearing fibers, actuators and routed tendons integrated during production"',
  notable:'', robots:[], suppliers:[] },
{ id:'allus-ai', hubs:['Civil'], name:'Allus AI', country:'United States', flag:'🇺🇸', founded:2025, type:'supplier', sector:'Manufacturing vision AI', vertical:'Components', status:'private', hq:'Atlanta', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://allus.ai',
  summary:'the platform deploys "to cameras, industrial PCs, and robots to enable real-time inspection, anomaly detection, and process monitoring"',
  notable:'', robots:[], suppliers:[] },
{ id:'allvision-io', hubs:['Civil'], name:'Allvision IO', country:'United States', flag:'🇺🇸', founded:2017, type:'supplier', sector:'Localization / geospatial mapping', vertical:'Components', status:'private', hq:'Pittsburgh', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.allvision.io/',
  summary:'"Allvision IO is a geospatial mapping and asset-intelligence layer for physical infrastructure"',
  notable:'', robots:[], suppliers:[] },
{ id:'allwinner-technology-co-ltd', hubs:['Civil'], name:'Allwinner Technology Co., Ltd.', country:'China', flag:'🇨🇳', founded:2007, type:'supplier', sector:'Semiconductors', vertical:'Components', status:'private', hq:'Zhuhai, Guangdong', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.allwinnertech.com/',
  summary:'"Allwinner’s product families combine Arm application processors with graphics, video, audio and, on selected devices, neural-processing and real-time-control resources"',
  notable:'', robots:[], suppliers:[] },
{ id:'ally-robotics', hubs:['Civil'], name:'Ally Robotics', country:'United States', flag:'🇺🇸', founded:2021, type:'builder', sector:'Collaborative robotics (industrial)', vertical:'Industrial', status:'private', hq:'Bellevue', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://allyrobotics.com/',
  summary:'"Ally Robotics develops lightweight collaborative robot arms intended to make automation easier to deploy in restaurants, manufacturing and service environments"',
  notable:'', robots:[], suppliers:[] },
{ id:'allynavag', hubs:['Agriculture'], name:'AllynavAG', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Agriculture (farm robotics)', vertical:'Agriculture', status:'private', hq:'', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.allynav.com/',
  summary:'"GNSS-RTK positioning, sensor fusion, and remote path planning on a tracked electric chassis"',
  notable:'', robots:[], suppliers:[] },
{ id:'almond', hubs:['Civil'], name:'Almond', country:'United States', flag:'🇺🇸', founded:2025, type:'builder', sector:'Industrial (manipulation)', vertical:'Industrial', status:'private', hq:'San Francisco, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://almond.bot/',
  summary:'"The Axol ecosystem includes the standalone robot, Axol Cart, a perception kit and an open-source SDK"',
  notable:'', robots:[], suppliers:[] },
{ id:'aloft-technologies', hubs:['Civil'], name:'Aloft Technologies', country:'United States', flag:'🇺🇸', founded:0, type:'builder', sector:'Aerial (drone fleet/airspace software)', vertical:'Drones', status:'private', hq:'Silver Spring', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aloft.ai/',
  summary:'"reporting over 10 million flights on its network"',
  notable:'', robots:[], suppliers:[] },
{ id:'alpha-autonomy', hubs:['Civil'], name:'Alpha Autonomy', country:'Greece', flag:'🌐', founded:2021, type:'supplier', sector:'Perception / autonomy software', vertical:'Components', status:'private', hq:'Athens', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.alpha-autonomy.com/',
  summary:'"Its AlphaMind.AI stack combines lidar, visual sensing and onboard models for navigation, perception and decision-making in GPS-denied or hazardous environments"',
  notable:'', robots:[], suppliers:[] },
{ id:'alpha-unmanned-systems', hubs:['Civil'], name:'Alpha Unmanned Systems', country:'Spain', flag:'🇪🇸', founded:2014, type:'builder', sector:'Aerial (UAV manufacturer)', vertical:'Drones', status:'private', hq:'San Sebastián de los Reyes', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.alphaunmannedsystems.com',
  summary:'"develops professional helicopter UAVs for defence, maritime security, surveillance and industrial payload missions, including the A900 platform family"',
  notable:'', robots:[], suppliers:[] },
{ id:'alphadroid', hubs:['Civil'], name:'Alphadroid', country:'India', flag:'🇮🇳', founded:2023, type:'builder', sector:'Service robotics', vertical:'Industrial', status:'private', hq:'Noida', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.alphadroid.io/',
  summary:'"offerings span cleaning, delivery and conversational capabilities across hospitality, healthcare, retail, logistics, offices and public venues"',
  notable:'', robots:[], suppliers:[] },
{ id:'alpine-bearing', hubs:['Civil'], name:'Alpine Bearing', country:'United States', flag:'🇺🇸', founded:1957, type:'supplier', sector:'Motion Components (bearings)', vertical:'Components', status:'private', hq:'Billerica, Massachusetts', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://alpinebearing.com/',
  summary:'"designed for high-speed rotary joints, compact designs, and weight-sensitive robot applications"',
  notable:'', robots:[], suppliers:[] },
{ id:'apt', hubs:['Civil'], name:'APT', country:'Japan', flag:'🌐', founded:2009, type:'builder', sector:'Warehouse Logistics', vertical:'Industrial', status:'private', hq:'Chiba, Chiba', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://n-apt.com/',
  summary:'"APT engineers warehouse projects from system design through controls, software, installation and maintenance."',
  notable:'', robots:[], suppliers:[] },
{ id:'aqua-robotics', hubs:['Defense'], name:'Aqua Robotics', country:'Norway', flag:'🇳🇴', founded:2016, type:'builder', sector:'Maritime', vertical:'Defense', status:'private', hq:'Bryne', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://en.aquarobotics.no/',
  summary:'"HALO remains installed on an aquaculture cage and brushes both the inside and outside of the net continuously."',
  notable:'', robots:[], suppliers:[] },
{ id:'aquaairx', hubs:['Defense'], name:'AquaAirX', country:'India', flag:'🇮🇳', founded:2024, type:'builder', sector:'Maritime', vertical:'Defense', status:'private', hq:'Bengaluru', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aquaairx.com/',
  summary:'"develops AI-enabled amphibious drones and mission systems for aerial and underwater operations"',
  notable:'', robots:[], suppliers:[] },
{ id:'aquatonomy', hubs:['Defense'], name:'Aquatonomy', country:'United States', flag:'🇺🇸', founded:2023, type:'builder', sector:'Maritime', vertical:'Defense', status:'private', hq:'Pittsburgh', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aquatonomy.com',
  summary:'"develops autonomy software for underwater inspection and search robots"',
  notable:'', robots:[], suppliers:[] },
{ id:'aquiline-drones', hubs:['Civil'], name:'Aquiline Drones', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Aerial', vertical:'Drones', status:'private', hq:'Hartford', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.aquilinedrones.com/',
  summary:'"develops enterprise UAS products and drone operations services"',
  notable:'', robots:[], suppliers:[] },
{ id:'arbe-robotics-ltd', hubs:['Civil'], name:'Arbe Robotics Ltd.', country:'Israel', flag:'🇮🇱', founded:2015, type:'supplier', sector:'Perception (Radar supplier)', vertical:'Components', status:'private', hq:'Tel Aviv, Tel Aviv', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://arberobotics.com/',
  summary:'"develops high-resolution 4D imaging radar chipsets and perception software for autonomous systems"',
  notable:'', robots:[], suppliers:[] },
{ id:'arc-aerosystems', hubs:['Civil'], name:'ARC Aerosystems', country:'United Kingdom', flag:'🌐', founded:2017, type:'builder', sector:'Aerial', vertical:'Drones', status:'private', hq:'Cranfield', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://arcaerosystems.com/',
  summary:'"Pegasus is a two-seat gyroplane capable of vertical take-off and landing through a powered rotor system"',
  notable:'', robots:[], suppliers:[] },
{ id:'arcani', hubs:['Civil'], name:'Arcani', country:'United Kingdom', flag:'🌐', founded:2024, type:'supplier', sector:'Sensors', vertical:'Components', status:'private', hq:'London', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.arcani.ai/',
  summary:'"develops passive acoustic sensing systems for detecting drones and ground threats"',
  notable:'', robots:[], suppliers:[] },
{ id:'archer-aviation', hubs:['Civil'], name:'Archer Aviation', country:'United States', flag:'🇺🇸', founded:2018, type:'builder', sector:'Aerial (eVTOL maker)', vertical:'Drones', status:'private', hq:'San Jose, CA', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.archer.com/',
  summary:'"Midnight remains a piloted four-passenger aircraft undergoing certification and operational preparation"',
  notable:'', robots:[], suppliers:[] },
{ id:'arctos-robotics', hubs:['Civil'], name:'ARCTOS Robotics', country:'Netherlands', flag:'🌐', founded:0, type:'builder', sector:'Development Platform', vertical:'Industrial', status:'private', hq:'', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://arctosrobotics.com/',
  summary:'"an open-source six-axis robot-arm project and kit platform for education, research and prototyping"',
  notable:'', robots:[], suppliers:[] },
{ id:'argeo', hubs:['Defense'], name:'Argeo', country:'Norway', flag:'🇳🇴', founded:2017, type:'builder', sector:'Maritime', vertical:'Defense', status:'private', hq:'Asker', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://argeo.no/',
  summary:'"provides subsea data and inspection services using autonomous underwater vehicles, sensors and digital survey workflows"',
  notable:'', robots:[], suppliers:[] },
{ id:'argus-interception', hubs:['Defense'], name:'ARGUS Interception', country:'Germany', flag:'🇩🇪', founded:2023, type:'builder', sector:'Defense; C-UAS robotics', vertical:'Defense', status:'private', hq:'Rotenburg (Wümme)', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://argus-interception.com/en/',
  summary:'"develops A1-FALKE as a reusable net-based interceptor for small drones"',
  notable:'', robots:[], suppliers:[] },
{ id:'aria-insights', hubs:['Civil'], name:'Aria Insights', country:'United States', flag:'🇺🇸', founded:2008, type:'builder', sector:'Aerial', vertical:'Drones', status:'private', hq:'Danvers', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'',
  summary:'"developed persistent aerial-observation systems built around tethered multirotor aircraft, ground power and data equipment"',
  notable:'', robots:[], suppliers:[] },
{ id:'arix-technologies', hubs:['Civil'], name:'ARIX Technologies', country:'United States', flag:'🇺🇸', founded:2017, type:'builder', sector:'Inspection', vertical:'Industrial', status:'private', hq:'Houston', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.arix-tech.com/',
  summary:'"builds pipe-climbing robots for corrosion and external pipeline inspection"',
  notable:'', robots:[], suppliers:[] },
{ id:'ark-electronics', hubs:['Civil'], name:'ARK Electronics', country:'United States', flag:'🇺🇸', founded:2018, type:'supplier', sector:'Avionics', vertical:'Components', status:'private', hq:'Murray', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://arkelectron.com',
  summary:'"develops electronics and hardware for drones, autonomous systems and embedded robotics projects"',
  notable:'', robots:[], suppliers:[] },
{ id:'arke-telekom', hubs:['Civil'], name:'Arke Telekom', country:'Turkey', flag:'🌐', founded:2014, type:'builder', sector:'Communications', vertical:'Industrial', status:'private', hq:'Ankara', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://arketel.com/',
  summary:'"designs wireless communications, embedded systems and software for defence, cloud and industrial applications"',
  notable:'', robots:[], suppliers:[] },
{ id:'arkeus', hubs:['Civil'], name:'ARKEUS', country:'Australia', flag:'🌐', founded:2020, type:'supplier', sector:'Perception', vertical:'Components', status:'private', hq:'Melbourne, Victoria', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://arkeus.com/',
  summary:'"combines hyperspectral optics with its ARK edge-AI engine to search large areas and convert sensor data into tracks before transmission"',
  notable:'', robots:[], suppliers:[] },
{ id:'askari-defense', hubs:['Defense'], name:'Askari Defense', country:'United States', flag:'🇺🇸', founded:2024, type:'builder', sector:'Defense robotics', vertical:'Defense', status:'private', hq:'Atlanta, Georgia', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://askaridefense.com/',
  summary:'"compact kinetic interceptors that can be carried and launched by an individual operator"',
  notable:'', robots:[], suppliers:[] },
{ id:'asrock-industrial', hubs:['Civil'], name:'ASRock Industrial', country:'Taiwan', flag:'🌐', founded:2018, type:'supplier', sector:'AI compute / edge computing', vertical:'Components', status:'private', hq:'Taipei, Taipei', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.asrockind.com/',
  summary:'"industrial computers, embedded motherboards and edge AI systems for automation equipment"',
  notable:'', robots:[], suppliers:[] },
{ id:'ass-maschinenbau', hubs:['Civil'], name:'ASS Maschinenbau', country:'Germany', flag:'🇩🇪', founded:1983, type:'supplier', sector:'End-effectors / robot tooling', vertical:'Components', status:'private', hq:'Overath, North Rhine-Westphalia', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.ass-automation.com/en/',
  summary:'"designs and manufactures end-of-arm tooling, robotic hands and automation systems"',
  notable:'', robots:[], suppliers:[] },
{ id:'assistmotion', hubs:['Civil'], name:'AssistMotion', country:'Japan', flag:'🌐', founded:2017, type:'builder', sector:'Exoskeleton / wearable robotics', vertical:'Healthcare', status:'private', hq:'Ueda, Nagano', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://assistmotion.jp/',
  summary:'"a Shinshu University spinout developing wearable robots and soft actuators for movement support"',
  notable:'', robots:[], suppliers:[] },
{ id:'asteria-aerospace', hubs:['Civil'], name:'Asteria Aerospace', country:'India', flag:'🇮🇳', founded:2011, type:'builder', sector:'Aerial / drone manufacturer', vertical:'Drones', status:'private', hq:'Bengaluru', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://asteria.co.in/',
  summary:'"develops and manufactures uncrewed aircraft and aerial-data software for government and enterprise users"',
  notable:'', robots:[], suppliers:[] },
{ id:'asterion-systems', hubs:['Defense'], name:'Asterion Systems', country:'United States', flag:'🇺🇸', founded:2021, type:'builder', sector:'Defense / counter-UAS', vertical:'Defense', status:'private', hq:'Washington', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://asterion.systems/',
  summary:'"fuses radar, optical, radio-frequency and other sensor inputs into a shared command picture"',
  notable:'', robots:[], suppliers:[] },
{ id:'astrobotic', hubs:['Civil'], name:'Astrobotic', country:'United States', flag:'🇺🇸', founded:2007, type:'builder', sector:'Space robotics (lunar)', vertical:'Space', status:'private', hq:'Pittsburgh, Pennsylvania', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.astrobotic.com/',
  summary:'"develops lunar landers, rovers, surface-power systems and mission services"',
  notable:'', robots:[], suppliers:[] },
{ id:'astroscale', hubs:['Civil'], name:'Astroscale', country:'Japan', flag:'🌐', founded:2013, type:'builder', sector:'Space robotics (on-orbit servicing)', vertical:'Space', status:'private', hq:'Tokyo', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.astroscale.com/en',
  summary:'"builds servicing spacecraft around rendezvous, proximity operations and controlled interaction with another object in orbit"',
  notable:'', robots:[], suppliers:[] },
{ id:'asylon', hubs:['Civil'], name:'Asylon', country:'United States', flag:'🇺🇸', founded:0, type:'builder', sector:'Security robotics (service)', vertical:'Industrial', status:'private', hq:'Norristown', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://asylonrobotics.com/',
  summary:'"managed robotic-security systems that combine aerial and ground robots, human oversight, real-time analytics and a Robotic Security Operations Center"',
  notable:'', robots:[], suppliers:[] },
{ id:'atdev', hubs:['Civil'], name:'ATDev', country:'United States', flag:'🇺🇸', founded:2022, type:'builder', sector:'Healthcare / assistive robotics', vertical:'Healthcare', status:'private', hq:'Boston, MA', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://assistivetech.dev/',
  summary:'"develops robotic mobility devices for people with physical injuries and disabilities"',
  notable:'', robots:[], suppliers:[] },
{ id:'ati-robotics', hubs:['Civil'], name:'Ati Robotics', country:'India', flag:'🇮🇳', founded:2017, type:'builder', sector:'Industrial / autonomous mobile robots', vertical:'Industrial', status:'private', hq:'Bengaluru', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.atirobotics.ai/',
  summary:'"builds autonomous mobile robots and AI software for factory material orchestration"',
  notable:'', robots:[], suppliers:[] },
{ id:'atlas-elektronik', hubs:['Defense'], name:'Atlas Elektronik', country:'Germany', flag:'🇩🇪', founded:1902, type:'builder', sector:'Maritime robotics', vertical:'Defense', status:'private', hq:'Bremen', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.tkmsgroup.com/atlas-elektronik',
  summary:'"develops sonar, command systems, sensors and uncrewed naval platforms for mine countermeasures, surveillance and other maritime missions"',
  notable:'', robots:[], suppliers:[] },
{ id:'atlas-innovative-technologies', hubs:['Defense'], name:'Atlas Innovative Technologies', country:'United Kingdom', flag:'🌐', founded:2025, type:'builder', sector:'Defense / counter-UAS', vertical:'Defense', status:'private', hq:'London', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://www.atlasinnotech.com/',
  summary:'"develops modular systems intended to keep sensors, communications and effectors operating where conventional links or infrastructure are disrupted"',
  notable:'', robots:[], suppliers:[] },
{ id:'atlas-motion', hubs:['Civil'], name:'Atlas Motion', country:'United States', flag:'🇺🇸', founded:2026, type:'supplier', sector:'Actuation / motor manufacturing', vertical:'Components', status:'private', hq:'Long Beach, California', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://atlasmotion.com/',
  summary:'"building a design-to-production system for electric motion hardware rather than selling only a fixed catalogue of motors"',
  notable:'', robots:[], suppliers:[] },
{ id:'atomic-industries', hubs:['Civil'], name:'Atomic Industries', country:'United States', flag:'🇺🇸', founded:2021, type:'builder', sector:'Manufacturing / factory automation', vertical:'Industrial', status:'private', hq:'Detroit', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://atomic.industries',
  summary:'"combines software, tooling production and injection moulding within one manufacturing workflow"',
  notable:'', robots:[], suppliers:[] },
{ id:'atoms', hubs:['Civil'], name:'Atoms', country:'United States', flag:'🇺🇸', founded:0, type:'builder', sector:'Industrial automation group', vertical:'Industrial', status:'private', hq:'Los Angeles', founders:'', ceo:'', funding:'', valuation:'Undisclosed', employees:'', website:'https://atoms.co',
  summary:'"an industrial physical-automation group spanning food infrastructure, mining technology and transport"',
  notable:'', robots:[], suppliers:[] }
);

/* ---- REGULATION DATABASE (structured, clickable, sourced) ---- */
window.RH_DATA.regulations = [
  { id:'eu-ai-act', region:'EU', flag:'🇪🇺', topic:'AI Act — high-risk robotics', status:'In force', category:'AI / safety',
    summary:'The EU Artificial Intelligence Act classifies many robotics and autonomous-system use cases as "high-risk," imposing conformity assessment, risk management, data governance, transparency and human-oversight obligations before market placement.',
    source:'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { id:'eu-machinery-2023', region:'EU', flag:'🇪🇺', topic:'Machinery Regulation (EU) 2023/1230', status:'In force', category:'Product safety',
    summary:'The core robot law in the EU. Requires CE marking, a Declaration of Conformity and a technical file before sale or putting into service. Still certifiable under Directive 2006/42/EC during the transition period. Harmonised safety standards EN ISO 10218-1/-2 and ISO/TS 15066 evidence conformity and safe human-robot collaboration.',
    source:'https://eur-lex.europa.eu/eli/reg/2023/1230/oj' },
  { id:'eu-market-surveillance', region:'EU', flag:'🇪🇺', topic:'Market Surveillance Regulation (EU) 2019/1020', status:'In force', category:'Compliance',
    summary:'Article 4 requires an EU-established economic operator accountable for product compliance — meaning a manufacturer, importer or authorised representative inside the EU must hold responsibility for robots placed on the market.',
    source:'https://eur-lex.europa.eu/eli/reg/2019/1020/oj' },
  { id:'eu-dual-use-2021', region:'EU', flag:'🇪🇺', topic:'Dual-Use Regulation (EU) 2021/821', status:'In force', category:'Export control',
    summary:'Export-control framework that can capture UGVs, quadrupeds and "military-adjacent" robots. Manufacturers must check classification before moving hardware across borders.',
    source:'https://eur-lex.europa.eu/eli/reg/2021/821/oj' },
  { id:'eu-batteries-2023', region:'EU', flag:'🇪🇺', topic:'Batteries Regulation (EU) 2023/1542', status:'In force', category:'Stewardship',
    summary:'Governs the large lithium packs used in robots — sustainability, labelling, carbon-footprint and end-of-life obligations. Works alongside WEEE (e-waste) and national packaging/transport rules (e.g. ADR for battery road transport).',
    source:'https://eur-lex.europa.eu/eli/reg/2023/1542/oj' },
  { id:'eu-gdpr', region:'EU', flag:'🇪🇺', topic:'GDPR — robot sensors & personal data', status:'In force', category:'Privacy',
    summary:'Directly relevant to robotics: robots carry cameras, LiDAR and microphones that capture identifiable people, triggering data-protection obligations around lawful basis, minimisation and transparency.',
    source:'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
  { id:'us-faa-part108', region:'USA', flag:'🇺🇸', topic:'FAA Part 108 — drone BVLOS rule', status:'Proposed', category:'Airspace',
    summary:'Beyond-visual-line-of-sight rule for drones up to 1,320 lb MTOW, wingspan under 25 ft, ground speed up to 87 knots — replacing ad-hoc Part 107 waivers with two tiers: "Operating Permit" (lower-risk: small package delivery, ag monitoring, rural inspection) and "Operating Certificate" (higher-risk, requires a Safety Management System). NPRM reached OIRA final review Jul 10 2026; final rule expected late 2026 into 2027. [NEEDS VERIFICATION]',
    source:'https://www.faa.gov/uas/advanced_operations/beyond_visual_line_of_sight' },
  { id:'us-section-232-drones', region:'USA', flag:'🇺🇸', topic:'Section 232 tariffs on drones & UAS components', status:'In force', category:'Trade / tariff',
    summary:'Effective Sept 3 2026 (announced Aug 13 2026). 100% tariff (HTS 9903.08.21) on drones over 25 kg MTOW and units bundled with thermal-imaging payloads or docking stations; 25% tariff (HTS 9903.08.22) on standard sub-25 kg commercial/consumer drones. Reduced blended rates for preferred partners (15% EU/South Korea/Taiwan/Switzerland/Liechtenstein, 10% UK). Blue UAS / FCC-listed components get a 180-day grace period through Feb 9 2027. [NEEDS VERIFICATION — proclamation number unconfirmed]',
    source:'https://www.federalregister.gov/' },
  { id:'us-bis-drone-export', region:'USA', flag:'🇺🇸', topic:'BIS drone export rule', status:'In force', category:'Export control',
    summary:'Effective Aug 13 2026. Raised the UAV endurance threshold for national-security controls from 30 minutes to 3 hours and eased controls on lower-capability drones, streamlining US commercial drone exports.',
    source:'https://www.federalregister.gov/documents/2026/08/14/2026-16628/streamlining-export-controls-for-drone-exports' },
  { id:'china-mofcom-drone', region:'China', flag:'🇨🇳', topic:'MOFCOM drone export controls', status:'In force', category:'Export control',
    summary:'Effective Aug 5 2026. New licensing requirement on drone-related dual-use exports to the United States, part of broader trade countermeasures.',
    source:'https://globaltradealert.org/state-act/99707' },
  { id:'china-humanoid-standards', region:'China', flag:'🇨🇳', topic:'Humanoid robot standards', status:'Draft', category:'Standards',
    summary:'China is drafting national standards for humanoid robots covering terminology, safety, performance grading and testing, aiming to shape the category as domestic makers scale.',
    source:'' }
];

/* ---- ADDITIONS: mega-caps with robotics relevance 2026-08-31 ---- */
window.RH_DATA.companies.push(
{ id:'alibaba-robotics', hubs:['Civil'], name:'Alibaba Group', country:'China', flag:'🇨🇳', founded:1999, type:'builder', sector:'Foundation models / robot AI', vertical:'Software', status:'public', ticker:'BABA', hq:'Hangzhou', founders:'Jack Ma', ceo:'Eddie Wu', funding:'Public (NYSE: BABA)', valuation:'Undisclosed', employees:'', website:'https://www.alibaba.com',
  summary:'Chinese tech giant increasingly central to the robot software layer: its Qwen-Robot foundation-model suite targets embodied AI, and it is an investor across multiple Chinese humanoid makers (including XPeng Robotics and LimX Dynamics), positioning as a potential "operating system" layer for the robot economy.',
  notable:'Backs competing humanoid hardware makers while shipping its own Qwen-Robot embodied-AI models. Competitors in this layer: Google DeepMind, NVIDIA, ByteDance.', robots:[], suppliers:[] },
{ id:'airbus', hubs:['Defense'], name:'Airbus', country:'France', flag:'🇫🇷', founded:1970, type:'builder', sector:'Aerospace / autonomous flight', vertical:'Drones', status:'public', ticker:'AIR', hq:'Toulouse', founders:'', ceo:'Guillaume Faury', funding:'Public (EPA: AIR)', valuation:'Undisclosed', employees:'', website:'https://www.airbus.com',
  summary:'European aerospace OEM whose Airbus UpNext R&D arm develops autonomous-flight demonstrators, uncrewed systems and AI-assisted piloting. Relevant to robotics through autonomy, uncrewed aerial platforms and defence drone programmes.',
  notable:'UpNext runs autonomous taxi/take-off/landing and formation-flight demonstrators. Competitors: Boeing, Lockheed Martin, Northrop Grumman.', robots:[], suppliers:[] },
{ id:'aptiv', hubs:['Civil'], name:'Aptiv', country:'Ireland', flag:'🇮🇪', founded:2017, type:'supplier', sector:'Perception sensors / autonomy', vertical:'Components', status:'public', ticker:'APTV', hq:'Dublin', founders:'', ceo:'Kevin Clark', funding:'Public (NYSE: APTV)', valuation:'Undisclosed', employees:'', website:'https://www.aptiv.com',
  summary:'Automotive technology supplier of perception sensors, compute and software for autonomous systems. Its radar, vision and sensor-fusion stacks — built for advanced driver assistance and autonomy — are increasingly relevant to mobile robotics and AMRs.',
  notable:'Competitors: Bosch, Continental, NVIDIA, Mobileye.', robots:[], suppliers:[] },
{ id:'atlas-copco', hubs:['Civil'], name:'Atlas Copco', country:'Sweden', flag:'🇸🇪', founded:1873, type:'supplier', sector:'Industrial tooling / end effectors', vertical:'Components', status:'public', ticker:'ATCO', hq:'Nacka', founders:'', ceo:'', funding:'Public (STO: ATCO)', valuation:'Undisclosed', employees:'', website:'https://www.atlascopco.com',
  summary:'Swedish industrial group supplying precision assembly tools, robotic tightening systems and end-of-arm tooling widely integrated into factory-automation and robotic assembly lines.',
  notable:'Competitors: Bosch Rexroth, ATI Industrial Automation, Schunk.', robots:[], suppliers:[] },
{ id:'arcbest', hubs:['Civil'], name:'ArcBest', country:'United States', flag:'🇺🇸', founded:1923, type:'builder', sector:'Logistics robotics', vertical:'Industrial', status:'public', ticker:'ARCB', hq:'Fort Smith, Arkansas', founders:'', ceo:'Judy McReynolds', funding:'Public (Nasdaq: ARCB)', valuation:'Undisclosed', employees:'', website:'https://arcb.com',
  summary:'US freight and logistics company that developed Vaux, an autonomous material-handling system, and deploys warehouse/dock automation — bringing robotics into freight handling and the loading dock.',
  notable:'Vaux autonomous forklift/trailer-loading system. Competitors: Seegrid, Fox Robotics, Boston Dynamics (Stretch).', robots:[], suppliers:[] }
);

/* ---- ADDITIONS: humanoid company atlas (Robotuo/Techniahqrobot images) 2026-08-31 ---- */
window.RH_DATA.companies.push(
{ id:'nasa-robotics', hubs:['Civil'], name:'NASA (Valkyrie)', country:'United States', flag:'🇺🇸', founded:1958, type:'builder', sector:'Research humanoid', vertical:'Humanoid', status:'government', hq:'Houston, Texas', founders:'', ceo:'', funding:'Government-funded', valuation:'Undisclosed', employees:'', website:'https://www.nasa.gov', summary:'US space agency; its Valkyrie (R5) humanoid is a research platform developed for dexterous work in degraded or dangerous environments, including future space and disaster-response applications.', notable:'', robots:['nasa-valkyrie'], suppliers:[] },
{ id:'ihmc', hubs:['Civil'], name:'IHMC', country:'United States', flag:'🇺🇸', founded:1990, type:'builder', sector:'Research humanoid', vertical:'Humanoid', status:'nonprofit', hq:'Pensacola, Florida', founders:'', ceo:'', funding:'Research-funded', valuation:'Undisclosed', employees:'', website:'https://www.ihmc.us', summary:'Institute for Human and Machine Cognition; its Nadia humanoid is a dynamic bipedal research robot known for advanced balance and locomotion control work.', notable:'', robots:['ihmc-nadia'], suppliers:[] },
{ id:'kepler-robotics', hubs:['Civil'], name:'Kepler Robotics', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'https://www.gotokepler.com', summary:'Shanghai-based humanoid maker building the Forerunner series of general-purpose humanoid robots aimed at industrial and commercial deployment.', notable:'', robots:['kepler-forerunner-k2'], suppliers:[] },
{ id:'robotis', hubs:['Civil'], name:'ROBOTIS', country:'South Korea', flag:'🇰🇷', founded:1999, type:'builder', sector:'Robotics platforms', vertical:'Humanoid', status:'public', hq:'Seoul', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.robotis.com', summary:'Korean robotics company known for Dynamixel smart actuators and the THORMANG humanoid research platform, widely used in academia.', notable:'', robots:['robotis-thormang3'], suppliers:[] },
{ id:'mentee-robotics', hubs:['Civil'], name:'Mentee Robotics', country:'Israel', flag:'🇮🇱', founded:2022, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Herzliya', founders:'Amnon Shashua', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'https://www.menteebot.com', summary:'Israeli humanoid startup (backed by Mobileye founder Amnon Shashua) building the MenteeBot general-purpose humanoid with an AI-first, simulation-trained approach.', notable:'', robots:['menteebot-v3'], suppliers:[] },
{ id:'toyota-robotics', hubs:['Civil'], name:'Toyota', country:'Japan', flag:'🇯🇵', founded:1937, type:'builder', sector:'Research humanoid', vertical:'Humanoid', status:'public', ticker:'7203.T', hq:'Toyota City', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.toyota-global.com', summary:'Japanese automaker with a long-running humanoid research programme; its T-HR3 is a remotely-controlled humanoid demonstrating whole-body teleoperation and balance.', notable:'', robots:['toyota-thr3'], suppliers:[] },
{ id:'zhicheng-ai', hubs:['Civil'], name:'Zhicheng AI (Towards AGI)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Hangzhou', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Hangzhou-based humanoid robotics company developing general-purpose humanoid robots under a "Towards AGI" embodied-intelligence approach. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'lanxin-robotics', hubs:['Civil'], name:'Lanxin Robotics', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Service / humanoid robotics', vertical:'Humanoid', status:'private', hq:'Hangzhou', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Hangzhou-based robotics company building wheeled service humanoid robots. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'spirit-ai', hubs:['Civil'], name:'Spirit AI (Qianxun)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Hangzhou', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Hangzhou-based humanoid robotics developer building general-purpose bipedal robots. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'pndbotics', hubs:['Civil'], name:'PNDbotics', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Ningbo', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'https://www.pndbotics.com', summary:'Ningbo-based humanoid maker building the Adam full-size general-purpose humanoid robot.', notable:'', robots:[], suppliers:[] },
{ id:'estun', hubs:['Civil'], name:'Estun (Codroid)', country:'China', flag:'🇨🇳', founded:1993, type:'builder', sector:'Industrial robotics / humanoid', vertical:'Humanoid', status:'public', hq:'Nanjing', founders:'', ceo:'', funding:'Public (SZSE)', valuation:'Undisclosed', employees:'', website:'https://www.estun.com', summary:'Nanjing-based industrial-automation and robotics group; its Codroid line extends into humanoid robotics alongside a large industrial-robot business.', notable:'', robots:[], suppliers:[] },
{ id:'dobot', hubs:['Civil'], name:'Dobot', country:'China', flag:'🇨🇳', founded:2015, type:'builder', sector:'Collaborative robots / humanoid', vertical:'Humanoid', status:'public', hq:'Shenzhen', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.dobot-robots.com', summary:'Shenzhen-based maker of collaborative robot arms and education robots, expanding into humanoid robotics.', notable:'', robots:[], suppliers:[] },
{ id:'cyborg-robotics', hubs:['Civil'], name:'Cyborg Robotics', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shenzhen-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'dexforce', hubs:['Civil'], name:'Dexforce', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shenzhen-based humanoid robotics company. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'x-square-robot', hubs:['Civil'], name:'X Square Robot', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shenzhen-based humanoid and embodied-AI robotics company. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'matrix-robotics', hubs:['Civil'], name:'Matrix', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shanghai-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'whallsbot', hubs:['Civil'], name:'Whallsbot', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shanghai-based humanoid robotics company. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'robbyant', hubs:['Civil'], name:'Robbyant (Ant Lingbo)', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shanghai-based humanoid robotics developer (Ant Lingbo Technology). [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'droidup', hubs:['Civil'], name:'DroidUp', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shanghai-based humanoid robotics company. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'tis-robot', hubs:['Civil'], name:'TiSROBOT', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shanghai-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'isagebot', hubs:['Civil'], name:'iSageBot', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shanghai', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shanghai-based humanoid robotics company building multi-arm mobile manipulators. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'galaxea', hubs:['Civil'], name:'Galaxea', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'', ceo:'', funding:'$280M (Apr 2026, Dealroom)', valuation:'Undisclosed', employees:'', website:'', summary:'Beijing-based humanoid and embodied-AI company; raised $280M in April 2026 (per Dealroom) among the top humanoid rounds of the year.', notable:'', robots:[], suppliers:[] },
{ id:'casbot', hubs:['Civil'], name:'CASBOT', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Beijing-based humanoid robotics company developing general-purpose humanoids. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'corenetic', hubs:['Civil'], name:'Corenetic', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Beijing-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'phybot', hubs:['Civil'], name:'Phybot', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Beijing-based humanoid robotics company (Dongyi Technology). [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'cyberone-robotics', hubs:['Civil'], name:'CyberOne', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Beijing-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'dreame-robotics', hubs:['Civil'], name:'Dreame', country:'China', flag:'🇨🇳', founded:2017, type:'builder', sector:'Consumer / humanoid robotics', vertical:'Humanoid', status:'private', hq:'Suzhou', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'https://www.dreametech.com', summary:'Suzhou-based consumer-robotics company (cleaning robots) expanding into humanoid robotics.', notable:'', robots:[], suppliers:[] },
{ id:'gac-robotics', hubs:['Civil'], name:'GAC', country:'China', flag:'🇨🇳', founded:1997, type:'builder', sector:'Automaker / humanoid', vertical:'Humanoid', status:'public', hq:'Guangzhou', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.gac.com.cn', summary:'Guangzhou Automobile Group; the Chinese automaker has a humanoid robotics programme (GoMate) leveraging its manufacturing base.', notable:'', robots:[], suppliers:[] },
{ id:'midea-robotics', hubs:['Civil'], name:'Midea', country:'China', flag:'🇨🇳', founded:1968, type:'builder', sector:'Appliances / humanoid', vertical:'Humanoid', status:'public', hq:'Foshan', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.midea.com', summary:'Foshan-based appliance giant (owner of KUKA) developing humanoid robots, combining its KUKA industrial-robot arm with consumer-scale manufacturing.', notable:'', robots:[], suppliers:[] },
{ id:'zerith', hubs:['Civil'], name:'Zerith', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Hefei', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Hefei-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'haier-robotics', hubs:['Civil'], name:'Haier', country:'China', flag:'🇨🇳', founded:1984, type:'builder', sector:'Appliances / humanoid', vertical:'Humanoid', status:'public', hq:'Qingdao', founders:'', ceo:'', funding:'Public', valuation:'Undisclosed', employees:'', website:'https://www.haier.com', summary:'Qingdao-based appliance multinational developing humanoid robots as part of a smart-home and industrial automation push.', notable:'', robots:[], suppliers:[] },
{ id:'yobotics', hubs:['Civil'], name:'Yobotics (Yobo Robotics)', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Jinan', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Jinan-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'lumos-robotics', hubs:['Civil'], name:'Lumos', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Shenzhen', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Shenzhen-based humanoid robotics company. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'chaoneng-robot', hubs:['Civil'], name:'Chaoneng Robot', country:'China', flag:'🇨🇳', founded:0, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Changsha', founders:'', ceo:'', funding:'Undisclosed', valuation:'Undisclosed', employees:'', website:'', summary:'Changsha-based humanoid robotics developer. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'gigaai', hubs:['Civil'], name:'GigaAI (Jijia)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'Beijing', founders:'', ceo:'', funding:'$295M (Apr 2026, Dealroom)', valuation:'Undisclosed', employees:'', website:'', summary:'Chinese humanoid/embodied-AI company; raised $295M in April 2026 (per Dealroom), among the top humanoid rounds of the year.', notable:'', robots:[], suppliers:[] },
{ id:'rhoda', hubs:['Civil'], name:'Rhoda', country:'United States', flag:'🇺🇸', founded:2024, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'', founders:'', ceo:'', funding:'$450M (Mar 2026, Dealroom)', valuation:'Undisclosed', employees:'', website:'', summary:'US humanoid/embodied-AI startup; raised $450M in March 2026 (per Dealroom), among the largest humanoid rounds of the year. [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'walden', hubs:['Civil'], name:'Walden', country:'United Kingdom', flag:'🇬🇧', founded:2024, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'', founders:'', ceo:'', funding:'$300M (Jul 2026, Dealroom)', valuation:'Undisclosed', employees:'', website:'', summary:'UK humanoid/embodied-AI startup; raised $300M in July 2026 (per Dealroom). [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'psibot', hubs:['Civil'], name:'PsiBot (Lingchu)', country:'China', flag:'🇨🇳', founded:2023, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'', founders:'', ceo:'', funding:'$280M (Mar 2026, Dealroom)', valuation:'Undisclosed', employees:'', website:'', summary:'Chinese embodied-AI/humanoid company; raised $280M in March 2026 (per Dealroom). [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] },
{ id:'anyverse-dynamics', hubs:['Civil'], name:'Anyverse Dynamics', country:'China', flag:'🇨🇳', founded:2024, type:'builder', sector:'Humanoid robotics', vertical:'Humanoid', status:'private', hq:'', founders:'', ceo:'', funding:'$200M (May 2026, Dealroom)', valuation:'Undisclosed', employees:'', website:'', summary:'Chinese humanoid robotics company; raised $200M in May 2026 (per Dealroom). [NEEDS VERIFICATION]', notable:'', robots:[], suppliers:[] }
);

/* ---- robots referenced in the humanoid atlas ---- */
window.RH_DATA.robots.push(
{ id:'nasa-valkyrie', name:'Valkyrie (R5)', maker:'nasa-robotics', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2013, price:'Research', status:'Research', height:'1.9 m', payload:'—', summary:'NASA electric humanoid built for dexterous work in degraded/dangerous environments and future space applications.', useCases:'Space, disaster response, research', components:[] },
{ id:'ihmc-nadia', name:'Nadia', maker:'ihmc', type:'Humanoid', vertical:'Humanoid', country:'United States', flag:'🇺🇸', year:2023, price:'Research', status:'Research', height:'—', payload:'—', summary:'IHMC dynamic bipedal research humanoid focused on advanced balance and locomotion control.', useCases:'Locomotion research', components:[] },
{ id:'kepler-forerunner-k2', name:'Forerunner K2', maker:'kepler-robotics', type:'Humanoid', vertical:'Humanoid', country:'China', flag:'🇨🇳', year:2025, price:'—', status:'Development', height:'—', payload:'—', summary:'Kepler Robotics general-purpose humanoid for industrial and commercial deployment.', useCases:'Industrial, commercial', components:[] },
{ id:'robotis-thormang3', name:'THORMANG3', maker:'robotis', type:'Humanoid', vertical:'Humanoid', country:'South Korea', flag:'🇰🇷', year:2016, price:'Research platform', status:'Shipping', height:'1.37 m', payload:'—', summary:'ROBOTIS open humanoid research platform built on Dynamixel Pro actuators, widely used in academia.', useCases:'Research, education', components:[] },
{ id:'menteebot-v3', name:'MenteeBot V3', maker:'mentee-robotics', type:'Humanoid', vertical:'Humanoid', country:'Israel', flag:'🇮🇱', year:2025, price:'—', status:'Development', height:'1.75 m', payload:'—', summary:'Mentee Robotics general-purpose humanoid trained largely in simulation, with an AI-first architecture.', useCases:'General purpose, logistics', components:[] },
{ id:'toyota-thr3', name:'T-HR3', maker:'toyota-robotics', type:'Humanoid', vertical:'Humanoid', country:'Japan', flag:'🇯🇵', year:2017, price:'Research', status:'Research', height:'1.54 m', payload:'—', summary:'Toyota teleoperated humanoid demonstrating whole-body control and balance via a master manoeuvring system.', useCases:'Teleoperation research', components:[] }
);
