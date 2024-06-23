let money = 10000; // Initial money value
let passiveIncome = 0; // Initial passive income
let cityLevel = 1;
let friendsInvited = 0; // Initial invited friends value
let twitterRewardClaimed = false;
let youtubeRewardClaimed = false;
let telegramRewardClaimed = false;
let invite1RewardClaimed = false;
let invite5RewardClaimed = false;
let invite10RewardClaimed = false;


const buildings = {
    school: {
        level: 0,
        maxLevel: 6,
        passive: 0,
        upgradeCost: [50, 55, 60.5, 66.55, 73.2, 80.52],
        passiveIncome: [0, 70, 80.5, 92.57, 106.46, 122.43, 140.79],
        requiredCityLevel: 1
    },
    farm: {
        level: 0,
        maxLevel: 6,
        passive: 0,
        upgradeCost: [75, 82.5, 90.75, 99.82, 109.8, 120.78],
        passiveIncome: [0, 85, 97.75, 112.41, 129.27, 148.66, 170.96],
        requiredCityLevel: 1
    },
    store: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [400, 444, 492.84, 547.05, 607.22, 674.02, 748.16, 830.53, 921.81, 1023.21, 1135.76],
        passiveIncome: [0, 200, 228, 259.92, 296.3, 337.79, 385.06, 438.78, 499.64, 568.47, 645.08, 730.54, 825.1],
        requiredCityLevel: 2
    },
    park: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [550, 610.5, 677.55, 752.19, 834.93, 926.32, 1027.72, 1139.49, 1267.49, 1404.64, 1561.68],
        passiveIncome: [0, 270, 307.89, 351.89, 402.56, 460.61, 526.77, 601.89, 686.88, 782.77, 890.81, 1012.39, 1150.17],
        requiredCityLevel: 2
    },
    hospital: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [2500, 2800, 3136, 3512.32, 3933.79, 4405.85, 4934.55, 5526.7, 6189.9, 6932.69, 7764.62],
        passiveIncome: [0, 300, 338.96, 383.06, 433.39, 490.14, 553.74, 624.58, 703.2, 790.26, 886.59, 993.1, 1109.84],
        requiredCityLevel: 3
    },
    police: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [3000, 3360, 3763.2, 4214.78, 4720.55, 5287.02, 5921.46, 6632.04, 7427.88, 8319.23, 9317.54],
        passiveIncome: [0, 330, 372.89, 421.37, 476.15, 538.05, 608.04, 687.04, 776.36, 877.22, 990.98, 1118.12, 1260.28],
        requiredCityLevel: 3
    },
    fire: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [3000, 3360, 3763.2, 4214.78, 4720.55, 5287.02, 5921.46, 6632.04, 7427.88, 8319.23, 9317.54],
        passiveIncome: [0, 330, 372.89, 421.37, 476.15, 538.05, 608.04, 687.04, 776.36, 877.22, 990.98, 1118.12, 1260.28],
        requiredCityLevel: 3
    },
    factory: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [3200, 3584, 4014.08, 4495.76, 5035.26, 5639.49, 6316.23, 7074.18, 7923.08, 8873.85, 9938.71],
        passiveIncome: [0, 350, 395.49, 446.91, 505.01, 570.66, 644.84, 728.61, 823.41, 930.45, 1051.41, 1187.4, 1340.18],
        requiredCityLevel: 3
    },
    mediumStore: {
        level: 0,
        maxLevel: 11,
        passive: 0,
        upgradeCost: [2800, 3136, 3512.32, 3933.79, 4405.85, 4934.55, 5526.7, 6189.9, 6932.69, 7764.62, 8696.37],
        passiveIncome: [0, 350, 395.49, 446.91, 505.01, 570.66, 644.84, 728.61, 823.41, 930.45, 1051.41, 1187.4, 1340.18],
        requiredCityLevel: 3
    },
    bigFactory: {
        level: 0,
        maxLevel: 21,
        passive: 0,
        upgradeCost: [7000, 7910, 8938.29, 10100, 11413.31, 12897.04, 14573.65, 16468.24, 18609.11, 21029.29, 23761.97, 26851.02, 30341.65, 34268.06, 38743.29, 43779.88, 49471.27, 55902.54, 63169.87, 71381.96, 80661.61],
        passiveIncome: [0, 750, 847.5, 957.67, 1082.17, 1222.86, 1381.83, 1561.46, 1764.68, 1993.83, 2253.03, 2545.93, 2876.9, 3250.89, 3673.51, 4151.06, 4690.7, 5300.49, 5989.58, 6768.2, 7648.07, 8616.91], // Добавлено значение для 21-го уровня
        requiredCityLevel: 4
    },
    airport: {
        level: 0,
        maxLevel: 21,
        passive: 0,
        upgradeCost: [7000, 7910, 8938.29, 10100, 11413.31, 12897.04, 14573.65, 16468.24, 18609.11, 21029.29, 23761.97, 26851.02, 30341.65, 34268.06, 38743.29, 43779.88, 49471.27, 55902.54, 63169.87, 71381.96, 80661.61],
        passiveIncome: [0, 750, 847.5, 957.67, 1082.17, 1222.86, 1381.83, 1561.46, 1764.68, 1993.83, 2253.03, 2545.93, 2876.9, 3250.89, 3673.51, 4151.06, 4690.7, 5300.49, 5989.58, 6768.2, 7648.07, 8616.91],
        requiredCityLevel: 4
    },
    university: {
        level: 0,
        maxLevel: 21,
        passive: 0,
        upgradeCost: [7000, 7910, 8938.29, 10100, 11413.31, 12897.04, 14573.65, 16468.24, 18609.11, 21029.29, 23761.97, 26851.02, 30341.65, 34268.06, 38743.29, 43779.88, 49471.27, 55902.54, 63169.87, 71381.96, 80661.61],
        passiveIncome: [0, 750, 847.5, 957.67, 1082.17, 1222.86, 1381.83, 1561.46, 1764.68, 1993.83, 2253.03, 2545.93, 2876.9, 3250.89, 3673.51, 4151.06, 4690.7, 5300.49, 5989.58, 6768.2, 7648.07, 8616.91],
        requiredCityLevel: 4
    },
    mall: {
        level: 0,
        maxLevel: 21,
        passive: 0,
        upgradeCost: [7000, 7910, 8938.29, 10100, 11413.31, 12897.04, 14573.65, 16468.24, 18609.11, 21029.29, 23761.97, 26851.02, 30341.65, 34268.06, 38743.29, 43779.88, 49471.27, 55902.54, 63169.87, 71381.96, 80661.61],
        passiveIncome: [0, 750, 847.5, 957.67, 1082.17, 1222.86, 1381.83, 1561.46, 1764.68, 1993.83, 2253.03, 2545.93, 2876.9, 3250.89, 3673.51, 4151.06, 4690.7, 5300.49, 5989.58, 6768.2, 7648.07, 8616.91],
        requiredCityLevel: 4
    },
    stadium: {
        level: 0,
        maxLevel: 21,
        passive: 0,
        upgradeCost: [7000, 7910, 8938.29, 10100, 11413.31, 12897.04, 14573.65, 16468.24, 18609.11, 21029.29, 23761.97, 26851.02, 30341.65, 34268.06, 38743.29, 43779.88, 49471.27, 55902.54, 63169.87, 71381.96, 80661.61],
        passiveIncome: [0, 750, 847.5, 957.67, 1082.17, 1222.86, 1381.83, 1561.46, 1764.68, 1993.83, 2253.03, 2545.93, 2876.9, 3250.89, 3673.51, 4151.06, 4690.7, 5300.49, 5989.58, 6768.2, 7648.07, 8616.91],
        requiredCityLevel: 4
    },
    bigHospital: {
        level: 0,
        maxLevel: 26,
        passive: 0,
        upgradeCost: [9000, 10179, 11509.29, 13012, 14712.31, 16636.84, 18815.75, 21282.16, 24073.31, 27230.16, 30800.09, 34835.94, 39397.78, 44553.75, 50381.95, 56970.61, 64418.81, 72837.69, 82350.66, 93093.76, 105517.16, 119686.26, 135683.34, 153608.31, 173580.11, 195737.72, 220241.02],
        passiveIncome: [0, 950, 1074.5, 1215.47, 1375.17, 1556.45, 1762.32, 1996.03, 2261.13, 2561.52, 2901.38, 3285.32, 3720.35, 4213.03, 4770.48, 5400.47, 6111.46, 6912.65, 7814.14, 8826.01, 9960.49, 11231.98, 12657.76, 14256.4, 16048.97, 18059.61, 20315.78],
        requiredCityLevel: 5
    },
    bigPoliceStation: {
        level: 0,
        maxLevel: 26,
        passive: 0,
        upgradeCost: [9000, 10179, 11509.29, 13012, 14712.31, 16636.84, 18815.75, 21282.16, 24073.31, 27230.16, 30800.09, 34835.94, 39397.78, 44553.75, 50381.95, 56970.61, 64418.81, 72837.69, 82350.66, 93093.76, 105517.16, 119686.26, 135683.34, 153608.31, 173580.11, 195737.72, 220241.02],
        passiveIncome: [0, 950, 1074.5, 1215.47, 1375.17, 1556.45, 1762.32, 1996.03, 2261.13, 2561.52, 2901.38, 3285.32, 3720.35, 4213.03, 4770.48, 5400.47, 6111.46, 6912.65, 7814.14, 8826.01, 9960.49, 11231.98, 12657.76, 14256.4, 16048.97, 18059.61, 20315.78],
        requiredCityLevel: 5
    },
    bigFireStation: {
        level: 0,
        maxLevel: 26,
        passive: 0,
        upgradeCost: [9000, 10179, 11509.29, 13012, 14712.31, 16636.84, 18815.75, 21282.16, 24073.31, 27230.16, 30800.09, 34835.94, 39397.78, 44553.75, 50381.95, 56970.61, 64418.81, 72837.69, 82350.66, 93093.76, 105517.16, 119686.26, 135683.34, 153608.31, 173580.11, 195737.72, 220241.02],
        passiveIncome: [0, 950, 1074.5, 1215.47, 1375.17, 1556.45, 1762.32, 1996.03, 2261.13, 2561.52, 2901.38, 3285.32, 3720.35, 4213.03, 4770.48, 5400.47, 6111.46, 6912.65, 7814.14, 8826.01, 9960.49, 11231.98, 12657.76, 14256.4, 16048.97, 18059.61, 20315.78],
        requiredCityLevel: 5
    },
    militaryBase: {
        level: 0,
        maxLevel: 26,
        passive: 0,
        upgradeCost: [9000, 10179, 11509.29, 13012, 14712.31, 16636.84, 18815.75, 21282.16, 24073.31, 27230.16, 30800.09, 34835.94, 39397.78, 44553.75, 50381.95, 56970.61, 64418.81, 72837.69, 82350.66, 93093.76, 105517.16, 119686.26, 135683.34, 153608.31, 173580.11, 195737.72, 220241.02],
        passiveIncome: [0, 950, 1074.5, 1215.47, 1375.17, 1556.45, 1762.32, 1996.03, 2261.13, 2561.52, 2901.38, 3285.32, 3720.35, 4213.03, 4770.48, 5400.47, 6111.46, 6912.65, 7814.14, 8826.01, 9960.49, 11231.98, 12657.76, 14256.4, 16048.97, 18059.61, 20315.78],
        requiredCityLevel: 5
    },
    hugeMall: {
        level: 0,
        maxLevel: 26,
        passive: 0,
        upgradeCost: [9000, 10179, 11509.29, 13012, 14712.31, 16636.84, 18815.75, 21282.16, 24073.31, 27230.16, 30800.09, 34835.94, 39397.78, 44553.75, 50381.95, 56970.61, 64418.81, 72837.69, 82350.66, 93093.76, 105517.16, 119686.26, 135683.34, 153608.31, 173580.11, 195737.72, 220241.02],
        passiveIncome: [0, 950, 1074.5, 1215.47, 1375.17, 1556.45, 1762.32, 1996.03, 2261.13, 2561.52, 2901.38, 3285.32, 3720.35, 4213.03, 4770.48, 5400.47, 6111.46, 6912.65, 7814.14, 8826.01, 9960.49, 11231.98, 12657.76, 14256.4, 16048.97, 18059.61, 20315.78],
        requiredCityLevel: 5
    },
    bigTrainStation: {
        level: 0,
        maxLevel: 31,
        passive: 0,
        upgradeCost: [12000, 13572, 15352.41, 17382, 19695.09, 22319.24, 25296.48, 28673.52, 32491.08, 36800.4, 41665.45, 47162.46, 53380.56, 60422.45, 68305.76, 77162.36, 87039.08, 98100.82, 110531.51, 124535.46, 140340.67, 158200.11, 178395.85, 201242.71, 227092.15, 256336.56, 289413.79, 326811.8, 369073.4, 416802.2, 470672.91, 531438.85],
        passiveIncome: [0, 1250, 1412.5, 1587.78, 1786.3, 2010.71, 2263.95, 2549.34, 2870.65, 3232.24, 3639.08, 4096.39, 4610.41, 5188.1, 5837.29, 6567.37, 7389.3, 8316.92, 9366.37, 10556.59, 11809.66, 13151.61, 14582.97, 16175.58, 17928.52, 19872.95, 22020.21, 24396.84, 27031.83, 29958.41, 33214.54, 36843.95],
        requiredCityLevel: 6
    },
    shippingPort: {
        level: 0,
        maxLevel: 31,
        passive: 0,
        upgradeCost: [12000, 13572, 15352.41, 17382, 19695.09, 22319.24, 25296.48, 28673.52, 32491.08, 36800.4, 41665.45, 47162.46, 53380.56, 60422.45, 68305.76, 77162.36, 87039.08, 98100.82, 110531.51, 124535.46, 140340.67, 158200.11, 178395.85, 201242.71, 227092.15, 256336.56, 289413.79, 326811.8, 369073.4, 416802.2, 470672.91, 531438.85],
        passiveIncome: [0, 1250, 1412.5, 1587.78, 1786.3, 2010.71, 2263.95, 2549.34, 2870.65, 3232.24, 3639.08, 4096.39, 4610.41, 5188.1, 5837.29, 6567.37, 7389.3, 8316.92, 9366.37, 10556.59, 11809.66, 13151.61, 14582.97, 16175.58, 17928.52, 19872.95, 22020.21, 24396.84, 27031.83, 29958.41, 33214.54, 36843.95],
        requiredCityLevel: 6
    },
    advancedFactory: {
        level: 0,
        maxLevel: 31,
        passive: 0,
        upgradeCost: [12000, 13572, 15352.41, 17382, 19695.09, 22319.24, 25296.48, 28673.52, 32491.08, 36800.4, 41665.45, 47162.46, 53380.56, 60422.45, 68305.76, 77162.36, 87039.08, 98100.82, 110531.51, 124535.46, 140340.67, 158200.11, 178395.85, 201242.71, 227092.15, 256336.56, 289413.79, 326811.8, 369073.4, 416802.2, 470672.91, 531438.85],
        passiveIncome: [0, 1250, 1412.5, 1587.78, 1786.3, 2010.71, 2263.95, 2549.34, 2870.65, 3232.24, 3639.08, 4096.39, 4610.41, 5188.1, 5837.29, 6567.37, 7389.3, 8316.92, 9366.37, 10556.59, 11809.66, 13151.61, 14582.97, 16175.58, 17928.52, 19872.95, 22020.21, 24396.84, 27031.83, 29958.41, 33214.54, 36843.95],
        requiredCityLevel: 6
    },
    superStadium: {
        level: 0,
        maxLevel: 31,
        passive: 0,
        upgradeCost: [12000, 13572, 15352.41, 17382, 19695.09, 22319.24, 25296.48, 28673.52, 32491.08, 36800.4, 41665.45, 47162.46, 53380.56, 60422.45, 68305.76, 77162.36, 87039.08, 98100.82, 110531.51, 124535.46, 140340.67, 158200.11, 178395.85, 201242.71, 227092.15, 256336.56, 289413.79, 326811.8, 369073.4, 416802.2, 470672.91, 531438.85],
        passiveIncome: [0, 1250, 1412.5, 1587.78, 1786.3, 2010.71, 2263.95, 2549.34, 2870.65, 3232.24, 3639.08, 4096.39, 4610.41, 5188.1, 5837.29, 6567.37, 7389.3, 8316.92, 9366.37, 10556.59, 11809.66, 13151.61, 14582.97, 16175.58, 17928.52, 19872.95, 22020.21, 24396.84, 27031.83, 29958.41, 33214.54, 36843.95],
        requiredCityLevel: 6
    },
    area51: {
        level: 0,
        maxLevel: 31,
        passive: 0,
        upgradeCost: [12000, 13572, 15352.41, 17382, 19695.09, 22319.24, 25296.48, 28673.52, 32491.08, 36800.4, 41665.45, 47162.46, 53380.56, 60422.45, 68305.76, 77162.36, 87039.08, 98100.82, 110531.51, 124535.46, 140340.67, 158200.11, 178395.85, 201242.71, 227092.15, 256336.56, 289413.79, 326811.8, 369073.4, 416802.2, 470672.91, 531438.85],
        passiveIncome: [0, 1250, 1412.5, 1587.78, 1786.3, 2010.71, 2263.95, 2549.34, 2870.65, 3232.24, 3639.08, 4096.39, 4610.41, 5188.1, 5837.29, 6567.37, 7389.3, 8316.92, 9366.37, 10556.59, 11809.66, 13151.61, 14582.97, 16175.58, 17928.52, 19872.95, 22020.21, 24396.84, 27031.83, 29958.41, 33214.54, 36843.95],
        requiredCityLevel: 6
    },
    skyscraper: {
        level: 0,
        maxLevel: 51,
        passive: 0,
        upgradeCost: [15000, 16965, 19190.52, 21727.5, 24634.76, 27979.85, 31839.95, 36303.39, 41470.48, 47454.17, 54381.43, 62395.17, 71655.7, 82343.96, 94664.34, 108018.9, 123915.8, 142931.1, 164720.1, 189972.8, 218618.7, 250912.3, 287307.3, 328483.1, 375331.5, 428989.5, 490862.1, 562575.2, 646051.3, 743558.6, 857744.7, 991711.1, 1149148.7, 1331784, 1543614.4, 1789731.7, 2076414.8, 2411436.2, 2804247.4, 3266060.2, 3810269.2, 4452904.8, 5213096.7, 6113891.7, 7183052.3, 8454017.1, 9967006.6, 11768299.8, 13887573.7, 16389256.8, 19342082.9, 22826174.6],
        passiveIncome: [0, 1600, 1808, 2042.88, 2307.62, 2605.56, 2940.35, 3316.1, 3737.25, 4208.52, 4735.16, 5322.78, 5977.51, 6705.04, 7511.65, 8404.07, 9390.67, 10478.58, 11675.91, 13091.02, 14632.46, 16309.15, 18130.24, 20105.87, 22246.57, 24563.57, 27068.79, 29775.45, 32700.51, 35863.86, 39288.38, 42998.92, 47023.8, 51394.94, 56148.34, 61324.48, 66968.97, 73133.27, 79874.99, 87258.24, 95354.89, 104245.9, 113722.6, 124021.3, 135233.4, 147450.2, 160773.4, 175314.1, 191194.7, 208548.1, 227518.7],
        requiredCityLevel: 7
    },
    launchSite: {
        level: 0,
        maxLevel: 51,
        passive: 0,
        upgradeCost: [15000, 16965, 19190.52, 21727.5, 24634.76, 27979.85, 31839.95, 36303.39, 41470.48, 47454.17, 54381.43, 62395.17, 71655.7, 82343.96, 94664.34, 108018.9, 123915.8, 142931.1, 164720.1, 189972.8, 218618.7, 250912.3, 287307.3, 328483.1, 375331.5, 428989.5, 490862.1, 562575.2, 646051.3, 743558.6, 857744.7, 991711.1, 1149148.7, 1331784, 1543614.4, 1789731.7, 2076414.8, 2411436.2, 2804247.4, 3266060.2, 3810269.2, 4452904.8, 5213096.7, 6113891.7, 7183052.3, 8454017.1, 9967006.6, 11768299.8, 13887573.7, 16389256.8, 19342082.9, 22826174.6],
        passiveIncome: [0, 1600, 1808, 2042.88, 2307.62, 2605.56, 2940.35, 3316.1, 3737.25, 4208.52, 4735.16, 5322.78, 5977.51, 6705.04, 7511.65, 8404.07, 9390.67, 10478.58, 11675.91, 13091.02, 14632.46, 16309.15, 18130.24, 20105.87, 22246.57, 24563.57, 27068.79, 29775.45, 32700.51, 35863.86, 39288.38, 42998.92, 47023.8, 51394.94, 56148.34, 61324.48, 66968.97, 73133.27, 79874.99, 87258.24, 95354.89, 104245.9, 113722.6, 124021.3, 135233.4, 147450.2, 160773.4, 175314.1, 191194.7, 208548.1, 227518.7],
        requiredCityLevel: 7
    },
    nuclearPlant: {
        level: 0,
        maxLevel: 51,
        passive: 0,
        upgradeCost: [15000, 16965, 19190.52, 21727.5, 24634.76, 27979.85, 31839.95, 36303.39, 41470.48, 47454.17, 54381.43, 62395.17, 71655.7, 82343.96, 94664.34, 108018.9, 123915.8, 142931.1, 164720.1, 189972.8, 218618.7, 250912.3, 287307.3, 328483.1, 375331.5, 428989.5, 490862.1, 562575.2, 646051.3, 743558.6, 857744.7, 991711.1, 1149148.7, 1331784, 1543614.4, 1789731.7, 2076414.8, 2411436.2, 2804247.4, 3266060.2, 3810269.2, 4452904.8, 5213096.7, 6113891.7, 7183052.3, 8454017.1, 9967006.6, 11768299.8, 13887573.7, 16389256.8, 19342082.9, 22826174.6],
        passiveIncome: [0, 1600, 1808, 2042.88, 2307.62, 2605.56, 2940.35, 3316.1, 3737.25, 4208.52, 4735.16, 5322.78, 5977.51, 6705.04, 7511.65, 8404.07, 9390.67, 10478.58, 11675.91, 13091.02, 14632.46, 16309.15, 18130.24, 20105.87, 22246.57, 24563.57, 27068.79, 29775.45, 32700.51, 35863.86, 39288.38, 42998.92, 47023.8, 51394.94, 56148.34, 61324.48, 66968.97, 73133.27, 79874.99, 87258.24, 95354.89, 104245.9, 113722.6, 124021.3, 135233.4, 147450.2, 160773.4, 175314.1, 191194.7, 208548.1, 227518.7],
        requiredCityLevel: 7
    },
    cryptoMuseum: {
        level: 0,
        maxLevel: 51,
        passive: 0,
        upgradeCost: [500000, 580000, 672800, 780448, 905319.68, 1050170.83, 1218198.16, 1413109.87, 1639207.45, 1901480.64, 2205717.54, 2558632.35, 2968013.52, 3442895.68, 3993758.99, 4632760.43, 5374002.1, 6233842.44, 7231257.23, 8388258.38, 9730379.73, 1128740.48, 1303919.96, 1518110.79, 1761820.52, 2043721.88, 2370761.39, 2750091.21, 3190021.8, 3700427.29, 4292493.45, 4972929.61, 5757597.18, 6700136.74, 7772153.09, 9015703.39, 10458216.22, 12131530.82, 14072575.7, 16324187.7, 18936079.9, 21965827.19, 25480359.45, 29557217.7, 34286378.19, 39772191.2, 46135741.9, 53517406.9, 62080254.3, 72013049.8, 83535190.1],
        passiveIncome: [0, 25000, 27500, 30250, 33275, 36602.5, 40262.75, 44289.03, 48717.93, 53589.72, 58948.69, 64843.55, 71327.9, 78460.69, 86306.78, 94937.46, 104431.2, 114874.32, 126361.76, 138997.93, 152897.73, 168187.5, 185006.25, 203506.87, 223857.56, 246243.32, 270867.65, 297954.41, 327749.85, 360524.84, 396577.32, 436235.06, 479858.56, 527844.42, 580628.86, 638691.75, 702560.92, 772817.01, 850098.71, 935108.59, 1028619.44, 1131481.39, 1244629.53, 1369092.48, 1506001.93, 1656601.1, 1822262.09, 2004488.3, 2204937.13, 2425430.84, 2667973.93],
        requiredCityLevel: 7
    },
    megapolisMall: {
        level: 0,
        maxLevel: 51,
        passive: 0,
        upgradeCost: [500000, 580000, 672800, 780448, 905319.68, 1050170.83, 1218198.16, 1413109.87, 1639207.45, 1901480.64, 2205717.54, 2558632.35, 2968013.52, 3442895.68, 3993758.99, 4632760.43, 5374002.1, 6233842.44, 7231257.23, 8388258.38, 9730379.73, 1128740.48, 1303919.96, 1518110.79, 1761820.52, 2043721.88, 2370761.39, 2750091.21, 3190021.8, 3700427.29, 4292493.45, 4972929.61, 5757597.18, 6700136.74, 7772153.09, 9015703.39, 10458216.22, 12131530.82, 14072575.7, 16324187.7, 18936079.9, 21965827.19, 25480359.45, 29557217.7, 34286378.19, 39772191.2, 46135741.9, 53517406.9, 62080254.3, 72013049.8, 83535190.1],
        passiveIncome: [0, 25000, 27500, 30250, 33275, 36602.5, 40262.75, 44289.03, 48717.93, 53589.72, 58948.69, 64843.55, 71327.9, 78460.69, 86306.78, 94937.46, 104431.2, 114874.32, 126361.76, 138997.93, 152897.73, 168187.5, 185006.25, 203506.87, 223857.56, 246243.32, 270867.65, 297954.41, 327749.85, 360524.84, 396577.32, 436235.06, 479858.56, 527844.42, 580628.86, 638691.75, 702560.92, 772817.01, 850098.71, 935108.59, 1028619.44, 1131481.39, 1244629.53, 1369092.48, 1506001.93, 1656601.1, 1822262.09, 2004488.3, 2204937.13, 2425430.84, 2667973.93],
        requiredCityLevel: 7
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const userId = new URLSearchParams(window.location.search).get('user_id');
    if (!userId) {
        console.error('User ID is not provided in the URL');
        return;
    }

    const serverUrl = 'http://13.60.42.44:5000/api'; // Замените на ваш IP и порт

    try {
        const response = await fetch(`${serverUrl}/get_user_data/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log('Data received:', data);

        // Обновление значений переменных
        money = data.money;
        passiveIncome = data.passive_income;
        cityLevel = data.city_level;
        friendsInvited = data.friends_invited;
        availableClicks = data.available_clicks;
        moneyPerClick = data.money_per_click;
        twitterRewardClaimed = data.twitter_reward_claimed;
        youtubeRewardClaimed = data.youtube_reward_claimed;
        telegramRewardClaimed = data.telegram_reward_claimed;
        invite1RewardClaimed = data.invite1_reward_claimed;
        invite5RewardClaimed = data.invite5_reward_claimed;
        invite10RewardClaimed = data.invite10_reward_claimed;

        // Обновление данных зданий
        Object.assign(buildings, JSON.parse(data.buildings || '{}'));

        // Обновление UI
        updateMoneyDisplay();
        updatePassiveDisplay();
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    // Добавление слушателя событий для сохранения данных
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', async () => {
            try {
                const response = await fetch(`${serverUrl}/save_user_data`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userId,
                        money,
                        passive_income: passiveIncome,
                        city_level: cityLevel,
                        friends_invited: friendsInvited,
                        available_clicks: availableClicks,
                        money_per_click: moneyPerClick,
                        twitter_reward_claimed: twitterRewardClaimed,
                        youtube_reward_claimed: youtubeRewardClaimed,
                        telegram_reward_claimed: telegramRewardClaimed,
                        invite1_reward_claimed: invite1RewardClaimed,
                        invite5_reward_claimed: invite5RewardClaimed,
                        invite10_reward_claimed: invite10RewardClaimed,
                        buildings: JSON.stringify(buildings),
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Data saved successfully:', result);
            } catch (error) {
                console.error('Error saving user data:', error);
            }
        });
    }
});


let moneyPerClick = 1; // Initial money per click

function updateMoneyPerClick() {
    switch (cityLevel) {
        case 1:
            moneyPerClick = 1;
            break;
        case 2:
            moneyPerClick = 1.5;
            break;
        case 3:
            moneyPerClick = 2;
            break;
        case 4:
            moneyPerClick = 2.5;
            break;
        case 5:
            moneyPerClick = 3;
            break;
        case 6:
            moneyPerClick = 3.5;
            break;
        case 7:
            moneyPerClick = 5;
            break;
        default:
            moneyPerClick = 1; // Default value
    }
}

let availableClicksMax = 2000; // Initial available clicks max

function updateAvailableClicksMax() {
    switch (cityLevel) {
        case 1:
            availableClicksMax = 2000;
            availableClicks = 2000;
            money+=1000;
            break;
        case 2:
            availableClicksMax = 5000;
            availableClicks = 5000;
            money+=2000;
            break;
        case 3:
            availableClicksMax = 6000;
            availableClicks = 6000;
            money+=10000;
            break;
        case 4:
            availableClicksMax = 7000;
            availableClicks = 7000;
            money+=20000;
            break;
        case 5:
            availableClicksMax = 7000;
            availableClicks = 7000;
            money+=50000;
            break;
        case 6:
            availableClicksMax = 7000;
            availableClicks = 7000;
            money+=500000;
            break;
        case 7:
            availableClicksMax = 10000;
            availableClicks = 10000;
            money+=1000000;
            break;
        default:
            availableClicksMax = 2000; // Default value
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle reward claiming
    function handleClaimReward(button, rewardType, url, rewardAmount, condition = true) {
        if (!condition) return;

        switch (rewardType) {
            case 'twitter':
                if (!twitterRewardClaimed) {
                    window.open(url, '_blank');
                    money += rewardAmount;
                    twitterRewardClaimed = true;
                    button.querySelector('img').src = 'images/CLAIMED_REWARD.webp';
                    button.classList.add('disabled');
                }
                break;
            case 'youtube':
                if (!youtubeRewardClaimed) {
                    window.open(url, '_blank');
                    money += rewardAmount;
                    youtubeRewardClaimed = true;
                    button.querySelector('img').src = 'images/CLAIMED_REWARD.webp';
                    button.classList.add('disabled');
                }
                break;
            case 'telegram':
                if (!telegramRewardClaimed) {
                    window.open(url, '_blank');
                    money += rewardAmount;
                    telegramRewardClaimed = true;
                    button.querySelector('img').src = 'images/CLAIMED_REWARD.webp';
                    button.classList.add('disabled');
                }
                break;
            case 'invite1':
                if (!invite1RewardClaimed && friendsInvited >= 1) {
                    money += rewardAmount;
                    invite1RewardClaimed = true;
                    button.querySelector('img').src = 'images/CLAIMED_REWARD.webp';
                    button.classList.add('disabled');
                }
                break;
            case 'invite5':
                if (!invite5RewardClaimed && friendsInvited >= 5) {
                    money += rewardAmount;
                    invite5RewardClaimed = true;
                    button.querySelector('img').src = 'images/CLAIMED_REWARD.webp';
                    button.classList.add('disabled');
                }
                break;
            case 'invite10':
                if (!invite10RewardClaimed && friendsInvited >= 10) {
                    money += rewardAmount;
                    invite10RewardClaimed = true;
                    button.querySelector('img').src = 'images/CLAIMED_REWARD.webp';
                    button.classList.add('disabled');
                }
                break;
            default:
                break;
        }

        // Update money display
        document.getElementById('money-display').innerHTML = money.toLocaleString() + ' <span class="coin-emoji"></span>';
    }

    // Add event listeners to the buttons
    document.querySelectorAll('.task').forEach(task => {
        const button = task.querySelector('.claim-reward-btn');
        const img = task.querySelector('img[alt]');

        switch (img.alt) {
            case 'Subscribe to Twitter':
                button.addEventListener('click', () => handleClaimReward(button, 'twitter', 'https://www.instagram.com/timapotapenko?igsh=MWxsNHBibzN5andudQ%3D%3D&utm_source=qr', 10000));
                break;
            case 'Subscribe to YouTube':
                button.addEventListener('click', () => handleClaimReward(button, 'youtube', 'https://youtube.com/@eeoneguy?si=HGGBM6MghxytXRLe', 10000));
                break;
            case 'Subscribe to Telegram':
                button.addEventListener('click', () => handleClaimReward(button, 'telegram', 'https://t.me/+iLQq9R7VJLM3YTAy', 10000));
                break;
            case 'Invite 1 Friend':
                button.addEventListener('click', () => handleClaimReward(button, 'invite1', '', 10000, friendsInvited >= 1));
                break;
            case 'Invite 5 Friends':
                button.addEventListener('click', () => handleClaimReward(button, 'invite5', '', 100000, friendsInvited >= 5));
                break;
            case 'Invite 10 Friends':
                button.addEventListener('click', () => handleClaimReward(button, 'invite10', '', 500000, friendsInvited >= 10));
                break;
            default:
                break;
        }
    });

    // Prevent default action for disabled buttons
    document.addEventListener('click', (event) => {
        if (event.target.closest('.claim-reward-btn.disabled')) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
});

function showCityLevelImage() {
    const imageId = `city-level-${cityLevel}`;
    const cityLevelImage = document.getElementById(imageId);
    if (cityLevelImage) {
        cityLevelImage.classList.remove('hidden');
        document.getElementById('screen-city').addEventListener('click', hideCityLevelImage);
    }
}

function hideCityLevelImage() {
    const imageId = `city-level-${cityLevel}`;
    const cityLevelImage = document.getElementById(imageId);
    if (cityLevelImage) {
        cityLevelImage.classList.add('hidden');
        document.getElementById('screen-city').removeEventListener('click', hideCityLevelImage);
    }
}

function hideAllCityLevelImages() {
    const cityLevelImages = document.querySelectorAll('.city-level-image');
    cityLevelImages.forEach(image => image.classList.add('hidden'));
}


let availableClicks = 2000; // Initial available clicks

function increaseAvailableClicks() {
        if (availableClicks < availableClicksMax) {
            availableClicks += Math.round(availableClicksMax / 3600);
            if (availableClicks > availableClicksMax) {
                availableClicks = availableClicksMax;
            }
            document.querySelector('.button-text').innerText = `${availableClicks} clics`;
}}

function setCityLevel(newLevel) {
    cityLevel = newLevel;
    updateMoneyPerClick();
    updateAvailableClicksMax();
}

function checkCityLevelUp() {
    const levels = {
        1: ['school', 'farm'],
        2: ['store', 'park'],
        3: ['hospital', 'police', 'fire', 'factory', 'mediumStore'],
        4: ['bigFactory', 'airport', 'university', 'mall', 'stadium'],
        5: ['bigHospital', 'bigPoliceStation', 'bigFireStation', 'militaryBase', 'hugeMall'],
        6: ['bigTrainStation', 'shippingPort', 'advancedFactory', 'superStadium', 'area51'],
        7: ['skyscraper', 'launchSite', 'nuclearPlant', 'cryptoMuseum', 'megapolisMall']
    };

    const currentLevelBuildings = levels[cityLevel];
    const allMaxLevel = currentLevelBuildings.every(building => buildings[building].level >= buildings[building].maxLevel);

    if (allMaxLevel && cityLevel < 7) {
        cityLevel++;
        console.log(`City level up! New city level: ${cityLevel}`);
        updateUI();
        setCityLevel(cityLevel);
        showScreen('city');
        showCityLevelImage(cityLevel);
    }
}

// Function to update the UI
function updateUI() {
    for (const building in buildings) {
        const btn = document.getElementById(`${building}-upgrade-btn`);
        if (buildings[building].level >= buildings[building].maxLevel) {
            btn.innerText = 'Max Level';
            btn.disabled = true;
        } else if (cityLevel < buildings[building].requiredCityLevel) {
            btn.innerText = 'Need Higher Level';
            btn.disabled = true;
        } else {
            btn.innerText = `UPGRADE ${Math.round(buildings[building].upgradeCost[buildings[building].level])} COINS`;
            btn.disabled = false;
        }
    }
    updateMoneyDisplay();
    updatePassiveDisplay();
}

// Function to update the money display
function updateMoneyDisplay() {
    const moneyDisplay = document.getElementById('money-display');
    moneyDisplay.innerHTML = Math.round(money) + '<span class="coin-emoji"></span>';
}

// Function to update the passive income display
function updatePassiveDisplay() {
    increaseAvailableClicks();
    const passiveDisplay = document.getElementById('passive-display');
    passiveDisplay.innerHTML = Math.round(passiveIncome) + '<span class="coin-emoji"></span>';
}

function updateUI() {
    // Обновление кнопок апгрейда зданий
    for (const building in buildings) {
        const btn = document.getElementById(`${building}-upgrade-btn`);
        if (buildings[building].level >= buildings[building].maxLevel) {
            btn.innerText = 'Max Level';
            btn.disabled = true;
        } else if (cityLevel < buildings[building].requiredCityLevel) {
            btn.innerText = 'Need Higher Level';
            btn.disabled = true;
        } else {
            btn.innerText = `UPGRADE ${Math.round(buildings[building].upgradeCost[buildings[building].level])} COINS`;
            btn.disabled = false;
        }
    }
    // Обновление отображения денег и пассивного дохода
    updateMoneyDisplay();
    updatePassiveDisplay();
    // Обновление изображения топбара в зависимости от уровня города
    updateTopbar();
    updateCityBackground()
}

function updateTopbar() {
    const topbar = document.getElementById('topbar');
    const topbarImages = {
        1: 'images/topbar_smallvillage.webp',
        2: 'images/topbar_village.webp',
        3: 'images/topbar_smallcity.webp',
        4: 'images/topbar_city.webp',
        5: 'images/topbar_bigcity.webp',
        6: 'images/topbar_mayorcity.webp',
        7: 'images/topbar_megapolis.webp'
    };

    const newImage = topbarImages[cityLevel];
    topbar.style.backgroundImage = `url('${newImage}')`;
}
function updateCityBackground() {
    const background = document.getElementById('background');
    const backgroundImages = {
        1: 'images/smallvillage.webp',
        2: 'images/village.webp',
        3: 'images/smallcity.webp',
        4: 'images/city.webp',
        5: 'images/bigcity.webp',
        6: 'images/mayorcity.webp',
        7: 'images/megapolis.webp'
    };
    background.src = backgroundImages[cityLevel];
}
// Function to upgrade a building
function upgradeBuilding(buildingName) {
    const building = buildings[buildingName];
    console.log(`Upgrading building: ${buildingName}, Current Level: ${building.level}, Max Level: ${building.maxLevel}`);
    if (cityLevel >= building.requiredCityLevel && building.level < building.maxLevel) {
        const cost = building.upgradeCost[building.level];
        console.log(`Cost to upgrade: ${cost}, Available money: ${money}`);
        if (money >= cost) {
            money -= cost;
            console.log(`Old passive income: ${building.passive}`);
            passiveIncome -= building.passive || 0; // Remove old passive income
            building.level++;
            building.passive = building.passiveIncome[building.level] || 0;
            console.log(`New Level: ${building.level}, New passive income: ${building.passive}`);
            passiveIncome += building.passive; // Add new passive income
            document.getElementById(`${buildingName}-level`).innerText = `LVL: ${building.level}`;
            document.getElementById(`${buildingName}-passive`).innerText = `Passive: ${Math.round(building.passive)}`;
            updateUI();
            checkCityLevelUp();
            saveUserData();
        } else {
            console.log('Not enough money to upgrade.');
        }
    } else {
        console.log('Cannot upgrade building.');
    }
}

// Existing functionality
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
}

function createFlyingCoin() {
    const coin = document.createElement('div');
    coin.className = 'coin';

    // Random fly direction with larger radius
    const flyX = (Math.random() * 400 - 200) + 'px'; // Random value between -200px and 200px
    const flyY = (Math.random() * -400 - 100) + 'px'; // Random value between -100px and -500px

    coin.style.setProperty('--fly-x', flyX);
    coin.style.setProperty('--fly-y', flyY);

    document.body.appendChild(coin);

    // Remove the coin element after the animation ends
    setTimeout(() => {
        coin.remove();
    }, 2000); // Match the animation duration
}

let lastJumpTime = 0;

document.addEventListener('click', function(event) {
    const now = Date.now();
    const guy = document.getElementById('guy');

    if (event.target === guy) {
        if (now - lastJumpTime >= 400) { // 400 milliseconds throttle time
            guy.classList.add('jump');
            lastJumpTime = now;
            setTimeout(() => {
                guy.classList.remove('jump');
            }, 400); // Duration of the jump animation
        }
    }

    // Create and animate a coin

});

function handleInteraction() {
    if(availableClicks>0){
    money+=moneyPerClick;
    availableClicks-=1;
    createFlyingCoin();
    updateMoneyDisplay();
    animateGuy();
    vibrate();
    }
}

// Add event listener for clicking or touching the guy image
const guy = document.getElementById('guy');
guy.addEventListener('click', handleInteraction);
guy.addEventListener('touchstart', handleInteraction);

// Add event listener for clicking or touching the background image
const background = document.getElementById('background');
background.addEventListener('click', handleInteraction);
background.addEventListener('touchstart', handleInteraction);

// Function to show the specific screen
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

    const activeScreen = document.getElementById(`screen-${screenId}`);
    if (activeScreen) {
        activeScreen.classList.remove('hidden');
    }
    const energyLimitBtn = document.getElementById('energy-limit-btn');
    if (screenName === 'city') {
        energyLimitBtn.style.display = 'block';
    } else {
        energyLimitBtn.style.display = 'none';
    }
}

function showScreen(screenName) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    const targetScreen = document.getElementById(`screen-${screenName}`);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
}

function addPassiveIncome() {
    money += passiveIncome / 3600;
    updateMoneyDisplay();
    increaseAvailableClicks();
}

// Initial display update
updateMoneyDisplay();
updatePassiveDisplay();

setInterval(addPassiveIncome, 1000);

document.getElementById('invite-friends-btn').addEventListener('click', function() {
    const message = "Играй со мной, построй свой город и получи возможность заработать криптовалюту!\n💸 +1,000 монет в качестве первого подарка\n🔥 +10.000 монет, если у тебя есть Telegram Premium";
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
    updateUI();
});

showScreen('city');
