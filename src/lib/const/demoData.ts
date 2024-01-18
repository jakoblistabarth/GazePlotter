import type { DataType } from '$lib/type/Data/DataType.ts'

/**
 * A variable that stores demo data for testing and showcasing.
 * It is used automatically when the app is started.
 *
 * @property {DataType} demoData - The demo data.
 */
export const demoData: DataType = {
  isOrdinalOnly: false,
  stimuli: { data: [['Stimulus 1'], ['Stimulus 2']], orderVector: [] },
  participants: {
    data: [['Agnes'], ['Bartholomeus'], ['Frida'], ['Martin']],
    orderVector: [],
  },
  participantsGroups: [
    { id: 0, name: 'Group 1', participantsIds: [0, 1] },
    { id: 1, name: 'Group 2', participantsIds: [2, 3] },
  ],
  categories: {
    data: [['Fixation'], ['Saccade'], ['EyesNotFound'], ['Unclassified']],
    orderVector: [],
  },
  aois: {
    data: [
      [['Rectangle 1'], ['Rectangle 2'], ['Rectangle 3']],
      [['Ellipse'], ['Rectangle 1'], ['Rectangle 2']],
    ],
    orderVector: [],
    dynamicVisibility: {},
  },
  segments: [
    [
      [
        [0, 3.3339999999734573, 1],
        [6.666999999957625, 113.33299999998417, 2],
        [116.66599999996834, 139.9989999999525, 1],
        [143.33299999998417, 296.66499999997905, 0, 2],
        [299.9979999999632, 336.66399999998976, 1],
        [339.9969999999739, 699.9929999999586, 0, 0],
        [703.3269999999902, 729.9919999999693, 1],
        [733.3260000000009, 1059.9890000000014, 0, 0],
        [1063.3219999999856, 1089.987999999954, 1],
        [1093.3219999999856, 1286.6529999999912, 0],
        [1289.9859999999753, 1319.984999999986, 1],
        [1323.3189999999595, 1543.316999999981, 0, 2],
        [1546.649999999965, 1593.3159999999916, 1],
        [1596.6489999999758, 1763.3139999999548, 0, 2],
        [1766.6469999999972, 1796.6469999999972, 1],
        [1799.9799999999814, 1979.9659999999567, 0, 2],
        [1983.298999999999, 2009.9649999999674, 1],
        [2013.298999999999, 2446.6269999999786, 0, 2],
        [2449.9599999999627, 2496.6259999999893, 1],
        [2499.9589999999735, 2746.622999999963, 0, 0],
        [2749.9560000000056, 2769.9560000000056, 1],
        [2773.289999999979, 3009.9529999999795, 0],
        [3013.286999999953, 3066.619000000006, 1],
        [3069.95199999999, 3359.948999999964, 0, 1],
        [3363.282999999996, 3386.61599999998, 1],
        [3389.948999999964, 3536.6140000000014, 2],
        [3539.9469999999856, 3559.9469999999856, 1],
        [3563.280999999959, 3899.94299999997, 0, 2],
        [3903.2759999999544, 3926.6089999999967, 1],
        [3929.941999999981, 4033.274999999965, 2],
        [4036.6080000000075, 4053.274999999965, 1],
        [4056.6080000000075, 4213.2729999999865, 0],
        [4216.605999999971, 4233.2729999999865, 1],
        [4236.604999999981, 4373.271000000008, 0],
        [4376.603999999992, 4419.935999999987, 1],
        [4423.26999999996, 4863.264999999956, 0, 2],
        [4866.597999999998, 4896.597999999998, 1],
        [4899.930999999982, 4996.595999999961, 0, 2],
      ],
      [
        [0, 309.99600000004284, 0, 2],
        [313.329000000027, 346.66300000000047, 1],
        [349.99600000004284, 819.9910000000382, 0, 0],
        [823.3240000000224, 846.6579999999958, 1],
        [849.9910000000382, 953.3230000000331, 2],
        [956.6570000000065, 993.3220000000438, 1],
        [996.6560000000172, 1213.320000000007, 0, 0],
        [1216.6540000000386, 1233.320000000007, 1],
        [1236.6540000000386, 1416.7540000000154, 0, 0],
        [1419.9839999999967, 1459.9850000000442, 1],
        [1463.3180000000284, 1466.6520000000019, 3],
        [1469.9850000000442, 1469.9850000000442, 1],
        [1473.3180000000284, 1476.6520000000019, 3],
        [1479.9850000000442, 1486.6520000000019, 1],
        [1489.9850000000442, 1813.314000000013, 0, 2],
        [1816.6480000000447, 1856.6469999999972, 1],
        [1859.9800000000396, 2266.64300000004, 0, 0],
        [2269.976000000024, 2303.308000000019, 1],
        [2306.6419999999925, 2496.640000000014, 0, 2],
        [2499.972999999998, 2519.972999999998, 1],
        [2523.3060000000405, 2619.972000000009, 2],
        [2623.304999999993, 2659.9710000000196, 1],
        [2663.3040000000037, 2799.9700000000303, 0, 2],
        [2803.3030000000144, 2829.969000000041, 1],
        [2833.302000000025, 3133.2880000000005, 0, 0],
        [3136.622000000032, 3179.954000000027, 1],
        [3183.287000000011, 3639.9490000000224, 0, 2],
        [3643.2820000000065, 3679.9490000000224, 1],
        [3683.2820000000065, 3686.615000000049, 3],
        [3689.948000000033, 3689.948000000033, 1],
        [3693.2810000000172, 3696.615000000049, 3],
        [3699.948000000033, 3706.615000000049, 1],
        [3709.948000000033, 4016.7540000000154, 0, 0],
        [4019.945000000007, 4033.2780000000494, 1],
        [4036.6110000000335, 4266.608999999997, 0, 0],
        [4269.942000000039, 4309.940999999992, 1],
        [4313.274000000034, 4313.274000000034, 3],
        [4316.608000000007, 4316.608000000007, 1],
        [4319.940999999992, 4323.274000000034, 3],
        [4326.608000000007, 4336.608000000007, 1],
        [4339.940999999992, 4733.270000000019, 0, 2],
        [4736.603000000003, 4766.603000000003, 1],
        [4769.936000000045, 4996.601000000024, 0, 2],
      ],
      [
        [0, 26.667000000015832, 2],
        [30, 83.33299999998417, 1],
        [86.66599999996834, 289.9969999999739, 0, 2],
        [293.3310000000056, 326.6630000000587, 1],
        [329.99600000004284, 609.9930000000168, 0, 0],
        [613.3270000000484, 643.3270000000484, 1],
        [646.6600000000326, 949.9890000000596, 0, 0],
        [953.3229999999749, 986.655999999959, 1],
        [989.9890000000596, 1219.9860000000335, 0, 0],
        [1223.3199999999488, 1266.6520000000019, 1],
        [1269.984999999986, 1269.984999999986, 3],
        [1273.3190000000177, 1276.6520000000019, 1],
        [1279.984999999986, 1589.9810000000289, 0, 2],
        [1593.3150000000605, 1616.6489999999758, 1],
        [1619.98199999996, 1963.3120000000345, 0, 2],
        [1966.6450000000186, 1993.310999999987, 1],
        [1996.6439999999711, 2236.6410000000615, 0, 2],
        [2239.1149999999907, 2273.307999999961, 1],
        [2276.6410000000615, 2579.969999999972, 0, 2],
        [2583.3040000000037, 2619.969999999972, 1],
        [2623.3040000000037, 2899.9560000000056, 0, 0],
        [2903.2900000000373, 2933.2900000000373, 1],
        [2936.6230000000214, 3186.6199999999953, 0, 0],
        [3189.9529999999795, 3226.618999999948, 1],
        [3229.9520000000484, 3233.2859999999637, 3],
        [3236.618999999948, 3239.9520000000484, 1],
        [3243.2859999999637, 3476.616000000038, 0, 2],
        [3479.9490000000224, 3503.283000000054, 1],
        [3505.780999999959, 3506.616000000038, 2],
        [3509.9490000000224, 3509.9490000000224, 3],
        [3513.2820000000065, 3579.947999999975, 2],
        [3583.2820000000065, 3653.280999999959, 1],
        [3656.6140000000596, 3979.94299999997, 0, 2],
        [3983.277000000002, 4019.942000000039, 1],
        [4023.2759999999544, 4293.273000000045, 0, 2],
        [4296.606000000029, 4323.271999999997, 1],
        [4326.604999999981, 4573.268999999971, 0, 0],
        [4576.601999999955, 4606.601999999955, 1],
        [4609.935000000056, 4619.935000000056, 2],
        [4623.268999999971, 4623.268999999971, 3],
        [4626.601999999955, 4683.26800000004, 2],
        [4686.601000000024, 4686.601000000024, 3],
        [4689.934000000008, 4696.601000000024, 2],
        [4699.934000000008, 4783.266999999993, 1],
        [4786.599999999977, 4973.2639999999665, 0, 2],
        [4976.596999999951, 4996.596999999951, 1],
      ],
      [
        [0, 263.33000000000175, 0, 2],
        [266.6640000000043, 306.66300000000047, 1],
        [309.99800000000687, 516.6610000000073, 0, 0],
        [519.994000000006, 536.6619999999966, 1],
        [539.994000000006, 716.6580000000104, 0, 0],
        [719.9919999999984, 746.6580000000104, 1],
        [749.9919999999984, 1403.3160000000062, 0, 0],
        [1406.649000000005, 1453.4150000000081, 1],
        [1456.649000000005, 1803.3110000000015, 0, 2],
        [1806.645000000004, 1829.9790000000066, 1],
        [1833.3110000000015, 1979.9760000000097, 0, 2],
        [1983.3090000000084, 2003.3099999999977, 1],
        [2006.642000000007, 2216.6300000000047, 0, 2],
        [2219.9630000000034, 2246.6310000000085, 1],
        [2249.964000000007, 2546.626000000004, 0, 2],
        [2549.9590000000026, 2583.2920000000013, 1],
        [2586.6270000000077, 2843.2880000000005, 0, 2],
        [2846.620999999999, 2863.2890000000043, 1],
        [2866.622000000003, 3019.953999999998, 0, 2],
        [3023.2869999999966, 3079.952000000005, 1],
        [3083.2850000000035, 3199.952000000005, 0, 1],
        [3203.2850000000035, 3246.6169999999984, 1],
        [3249.949999999997, 3436.6140000000014, 0, 1],
        [3439.948000000004, 3473.2820000000065, 1],
        [3476.6150000000052, 3696.6129999999976, 0, 1],
        [3699.9459999999963, 3726.6120000000083, 1],
        [3729.945000000007, 4096.608000000007, 0, 0],
        [4099.941000000006, 4136.607000000004, 1],
        [4139.941000000006, 4309.9389999999985, 0, 0],
        [4313.271999999997, 4333.271999999997, 1],
        [4336.6050000000105, 4659.9330000000045, 0, 0],
        [4663.267999999996, 4696.601999999999, 1],
        [4699.934000000008, 4996.597999999998, 0, 0],
      ],
    ],
    [
      [
        [0, 286.6619999999966, 0, 0, 2],
        [289.9959999999992, 329.99499999999534, 1, 0],
        [333.32799999999406, 339.99499999999534, 1],
        [343.32799999999406, 483.3269999999902, 0, 0],
        [485.20900000000256, 539.9930000000022, 1],
        [543.3260000000009, 543.3260000000009, 2],
        [546.6589999999997, 573.3249999999971, 1],
        [576.6579999999958, 673.3239999999932, 0, 2],
        [676.656999999992, 689.9909999999945, 1],
        [693.3239999999932, 779.9899999999907, 2],
        [783.3229999999894, 806.6549999999988, 1],
        [809.9890000000014, 946.653999999995, 0, 2],
        [949.9879999999976, 989.9869999999937, 1],
        [993.3199999999924, 1246.6499999999942, 0, 1],
        [1249.9839999999967, 1283.3159999999916, 1],
        [1285.2090000000026, 1589.979999999996, 0],
        [1593.3129999999946, 1656.6449999999895, 1],
        [1659.978999999992, 1843.3089999999938, 0, 0],
        [1846.6419999999925, 1863.3089999999938, 1],
        [1866.6419999999925, 2029.974000000002, 0, 0],
        [2033.3070000000007, 2063.3070000000007, 1],
        [2066.6399999999994, 2609.9649999999965, 0, 0],
        [2613.297999999995, 2646.62999999999, 1],
        [2649.9639999999927, 2953.2920000000013, 0],
        [2956.625, 3003.2920000000013, 1],
        [3006.625, 3239.955999999991, 0, 2],
        [3243.2889999999898, 3279.9550000000017, 1],
        [3283.2880000000005, 3733.2810000000027, 0, 1],
        [3736.6140000000014, 3789.947, 1],
        [3793.279999999999, 4076.6089999999967, 0, 1],
        [4079.9429999999993, 4103.275999999998, 1],
        [4106.608999999997, 4453.262000000002, 0, 1],
        [4456.595000000001, 4476.595000000001, 1],
        [4479.928999999989, 4586.5929999999935, 2],
        [4589.926999999996, 4619.925999999992, 1],
        [4623.258999999991, 4709.924999999988, 0, 1],
        [4713.258000000002, 4729.924999999988, 1],
        [4733.258000000002, 4819.922999999995, 2],
        [4823.255999999994, 4856.588999999993, 1],
        [4859.922999999995, 4916.587999999989, 3],
        [4919.921999999991, 4946.587999999989, 1],
        [4949.921999999991, 4996.5869999999995, 0, 2],
      ],
      [
        [0, 229.99700000003213, 0, 2],
        [233.3300000000163, 266.66399999998976, 1],
        [269.99700000003213, 516.6610000000219, 0, 0],
        [519.994000000006, 596.6590000000433, 1],
        [599.9920000000275, 726.6579999999958, 2],
        [729.9910000000382, 789.9899999999907, 1],
        [793.3230000000331, 1453.3150000000023, 0, 2],
        [1456.649000000034, 1479.9820000000182, 1],
        [1483.3150000000023, 1809.9780000000028, 0, 2],
        [1813.310999999987, 1853.310999999987, 1],
        [1856.6450000000186, 2049.976000000024, 0, 0],
        [2053.3090000000084, 2076.6419999999925, 1],
        [2079.975000000035, 2733.301000000036, 0, 0],
        [2736.6350000000093, 2750.6320000000414, 1],
        [2753.301000000036, 2756.63400000002, 3],
        [2759.967000000004, 2763.2999999999884, 1],
        [2766.63400000002, 3246.619000000006, 0, 0],
        [3249.95199999999, 3269.95199999999, 1],
        [3273.2850000000326, 3403.282999999996, 0, 0],
        [3406.6170000000275, 3449.9500000000116, 1],
        [3453.282999999996, 3453.282999999996, 3],
        [3456.616000000038, 3456.616000000038, 1],
        [3459.9490000000224, 3466.616000000038, 3],
        [3469.9490000000224, 3476.616000000038, 1],
        [3479.9490000000224, 3893.277000000002, 0, 1],
        [3896.6110000000335, 3919.9440000000177, 1],
        [3923.277000000002, 4096.608999999997, 0, 1],
        [4099.942000000039, 4150.632000000041, 1],
        [4153.274000000034, 4513.270000000019, 0, 0],
        [4516.603999999992, 4569.9370000000345, 1],
        [4573.270000000019, 4579.9370000000345, 3],
        [4583.270000000019, 4589.935999999987, 1],
        [4593.269000000029, 4843.266999999993, 0, 1],
        [4846.601000000024, 4873.266000000003, 1],
        [4876.600000000035, 4996.598999999987, 0, 1],
      ],
      [
        [0, 176.66500000003725, 0, 2],
        [179.99800000002142, 216.66399999998976, 1],
        [219.99700000009034, 399.99499999999534, 0, 0],
        [403.329000000027, 443.329000000027, 1],
        [446.6620000000112, 806.6469999999972, 0, 2],
        [809.9799999999814, 846.6469999999972, 1],
        [849.9799999999814, 1099.9770000000717, 0, 1],
        [1103.310999999987, 1149.9760000000242, 1],
        [1153.3100000000559, 1469.972000000067, 0, 0],
        [1472.609999999986, 1496.639000000083, 1],
        [1499.972000000067, 1839.9679999999935, 0, 0],
        [1843.3020000000251, 1866.6350000000093, 1],
        [1869.9679999999935, 2063.298999999999, 0, 0],
        [2066.6319999999832, 2096.6319999999832, 1],
        [2099.965000000084, 2146.631000000052, 2],
        [2149.9640000000363, 2206.631000000052, 1],
        [2209.9640000000363, 2773.292000000016, 0, 2],
        [2776.625, 2799.957999999984, 1],
        [2803.2910000000848, 2983.2889999999898, 0, 2],
        [2986.6220000000903, 3006.6220000000903, 1],
        [3009.9550000000745, 3076.621000000043, 2],
        [3079.954000000027, 3136.6199999999953, 1],
        [3139.277000000002, 3286.6190000000643, 0, 0],
        [3289.9520000000484, 3323.2850000000326, 1],
        [3326.6180000000168, 3696.6140000000596, 0],
        [3699.9470000000438, 3723.280000000028, 1],
        [3726.613000000012, 3959.9440000000177, 0],
        [3963.2780000000494, 3986.609999999986, 1],
        [3989.9430000000866, 4123.276000000071, 0, 2],
        [4126.609000000055, 4163.275000000023, 1],
        [4166.608000000007, 4389.938000000082, 0, 0],
        [4393.271999999997, 4433.271999999997, 1],
        [4436.604999999981, 4439.938000000082, 3],
        [4443.271999999997, 4446.604999999981, 1],
        [4449.938000000082, 4986.597999999998, 0, 1],
        [4989.930999999982, 5013.265000000014, 1],
      ],
      [
        [0, 230.00600000005215, 0, 2],
        [233.33800000010524, 273.33800000010524, 1],
        [276.6720000000205, 420.00600000005215, 0, 0],
        [423.3410000000149, 440.00600000005215, 1],
        [443.3410000000149, 546.6710000000894, 0, 0],
        [550.0050000000047, 593.3390000000363, 1],
        [596.6720000000205, 973.3340000000317, 0],
        [976.6670000000158, 1023.3330000001006, 1],
        [1026.6680000000633, 1170, 0, 0],
        [1173.3330000001006, 1189.999000000069, 1],
        [1193.3330000001006, 1453.329000000027, 0, 0],
        [1456.6630000000587, 1479.9960000000428, 1],
        [1483.329000000027, 2013.3120000000345, 0, 0],
        [2016.6450000000186, 2036.6450000000186, 1],
        [2039.9780000000028, 2333.3080000000773, 0, 0],
        [2336.6410000000615, 2389.975000000093, 1],
        [2393.3080000000773, 2556.640000000014, 0, 1],
        [2559.972999999998, 2579.9740000000456, 1],
        [2583.3060000000987, 2803.3040000000037, 0, 1],
        [2806.6370000001043, 2829.9700000000885, 1],
        [2833.3030000000726, 3083.301000000094, 0, 1],
        [3086.6340000000782, 3103.301000000094, 1],
        [3106.6330000000307, 3323.298000000068, 0, 1],
        [3326.6330000000307, 3359.9640000000363, 1],
        [3363.298999999999, 3533.2970000000205, 0, 1],
        [3536.6300000000047, 3559.9630000001052, 1],
        [3563.2960000000894, 3659.9620000000577, 0, 1],
        [3663.295000000042, 3713.295000000042, 1],
        [3716.628000000026, 3986.625, 0],
        [3989.9580000001006, 4009.9580000001006, 1],
        [4013.2910000000848, 4079.9580000001006, 0, 2],
        [4083.2900000000373, 4099.958000000101, 1],
        [4103.290000000037, 4106.623000000021, 2],
        [4109.958000000101, 4499.953000000096, 0, 0],
        [4503.28600000008, 4519.953000000096, 1],
        [4523.28600000008, 4689.952000000048, 0, 0],
        [4693.2840000001015, 4716.618000000017, 1],
      ],
    ],
  ],
}
