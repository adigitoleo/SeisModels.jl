"""
# `AK135`

1-D layered model of the Earth, containing density.

## Reference

Kennett, B.L.N., Engdahl, E., Buland, R., 1995. Constraints on seismic velocities in
the Earth from travel-times. Geophys J Int 122, 108–124.
https://doi.org/10.1111/j.1365-246X.1995.tb03540.x
"""
const AK135 = LinearLayeredModel(
    r = 6371 .- reverse([ 0.0, 20.0, 20.0, 35.0, 35.0, 77.5, 120.0, 165.0, 210.0, 210.0,
          260.0, 310.0, 360.0, 410.0, 410.0, 460.0, 510.0, 560.0, 610.0, 660.0, 660.0, 710.0,
          760.0, 809.5, 859.0, 908.5, 958.0, 1007.5, 1057.0, 1106.5, 1156.0, 1205.5, 1255.0, 1304.5, 1354.0,
          1403.5, 1453.0, 1502.5, 1552.0, 1601.5, 1651.0, 1700.5, 1750.0, 1799.5, 1849.0,
          1898.5, 1948.0, 1997.5, 2047.0, 2096.5, 2146.0, 2195.5, 2245.0, 2294.5, 2344.0,
          2393.5, 2443.0, 2492.5, 2542.0, 2591.5, 2640.0, 2690.0, 2740.0, 2740.0, 2789.7,
          2839.3, 2891.5, 2891.5, 2939.3, 2989.7, 3040.0, 3090.3, 3140.7, 3191.0, 3241.3,
          3291.7, 3342.0, 3392.3, 3442.6, 3493.0, 3543.3, 3593.6, 3644.0, 3694.3, 3744.6,
          3795.0, 3845.3, 3895.6, 3945.9, 3996.3, 4046.6, 4096.9, 4147.3, 4197.6, 4247.9,
          4298.3, 4348.6, 4398.9, 4449.3, 4499.6, 4549.9, 4600.3, 4650.6, 4700.9, 4801.6,
          4851.9, 4902.2, 4952.6, 5002.9, 5053.2, 5103.6, 5153.5, 5153.5, 5204.6, 5255.3,
          5306.0, 5356.8, 5407.5, 5458.2, 5508.9, 5559.6, 5610.3, 5661.0, 5711.7, 5813.2,
          5863.9, 5914.6, 5965.3, 6016.0, 6066.7, 6117.4, 6168.1, 6218.9, 6269.6, 6320.3,
          6371.0]),

    vp = reverse([ 5.8000, 5.8000, 6.5000, 6.5000, 8.0400, 8.0450, 8.0500, 8.1750, 8.3000,
          8.3000, 8.4825, 8.6650, 8.8475, 9.0300, 9.3600, 9.5280, 9.6960, 9.8640, 10.0320,
          10.2000, 10.7900, 10.9229, 11.0558, 11.1353, 11.2221, 11.3068, 11.3896, 11.4705,
          11.5495, 11.6269, 11.7026, 11.7766, 11.8491, 11.9200, 11.9895, 12.0577, 12.1245,
          12.1912, 12.2550, 12.3185, 12.3819, 12.4426, 12.5031, 12.5631, 12.6221, 12.6804,
          12.7382, 12.7956, 12.8526, 12.9096, 12.9668, 13.0222, 13.0783, 13.1336, 13.1894,
          13.2465, 13.3018, 13.3585, 13.4156, 13.4741, 13.5312, 13.5900, 13.6494, 13.6494,
          13.6530, 13.6566, 13.6602, 8.0000, 8.0382, 8.1283, 8.2213, 8.3122, 8.4001, 8.4861,
          8.5692, 8.6496, 8.7283, 8.8036, 8.8761, 8.9461, 9.0138, 9.0792, 9.1426, 9.2042,
          9.2634, 9.3205, 9.3760, 9.4297, 9.4814, 9.5306, 9.5777, 9.6232, 9.6673, 9.7100,
          9.7513, 9.7914, 9.8304, 9.8682, 9.9051, 9.9410, 9.9761, 10.0103, 10.0439, 10.0768,
          10.1415, 10.1739, 10.2049, 10.2329, 10.2565, 10.2745, 10.2854, 10.2890, 11.0427,
          11.0585, 11.0718, 11.0850, 11.0983, 11.1166, 11.1316, 11.1457, 11.1590, 11.1715,
          11.1832, 11.1941, 11.2134, 11.2219, 11.2295, 11.2364, 11.2424, 11.2477, 11.2521,
          11.2557, 11.2586, 11.2606, 11.2618, 11.2622]),

    vs = reverse([3.4600, 3.4600, 3.8500, 3.8500, 4.4800, 4.4900, 4.5000, 4.5090, 4.5180,
          4.5230, 4.6090, 4.6960, 4.7830, 4.8700, 5.0800, 5.1860, 5.2920, 5.3980, 5.5040,
          5.6100, 5.9600, 6.0897, 6.2095, 6.2426, 6.2798, 6.3160, 6.3512, 6.3854, 6.4187,
          6.4510, 6.4828, 6.5138, 6.5439, 6.5727, 6.6008, 6.6285, 6.6555, 6.6815, 6.7073,
          6.7326, 6.7573, 6.7815, 6.8052, 6.8286, 6.8515, 6.8742, 6.8972, 6.9194, 6.9418,
          6.9627, 6.9855, 7.0063, 7.0281, 7.0500, 7.0720, 7.0931, 7.1144, 7.1369, 7.1586,
          7.1807, 7.2031, 7.2258, 7.2490, 7.2490, 7.2597, 7.2704, 7.2811, 0.0000, 0.0000,
          0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
          0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
          0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
          0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
          0.0000, 0.0000, 0.0000, 3.5043, 3.5187, 3.5314, 3.5435, 3.5551, 3.5661, 3.5765,
          3.5864, 3.5957, 3.6044, 3.6126, 3.6202, 3.6337, 3.6396, 3.6450, 3.6498, 3.6540,
          3.6577, 3.6608, 3.6633, 3.6653, 3.6667, 3.6675, 3.6678]),

    density = reverse([2.44900, 2.44900, 2.71420, 2.71420, 3.29760, 3.29940, 3.30130, 3.34870,
              3.39600, 3.39600, 3.46520, 3.53430, 3.60340, 3.67260, 3.79760, 3.86120, 3.92480,
              3.98850, 4.05210, 4.11580, 4.33930, 4.38960, 4.43990, 4.47010, 4.50290, 4.53500,
              4.56640, 4.59700, 4.62700, 4.65630, 4.68490, 4.71300, 4.74040, 4.76730, 4.79360,
              4.81950, 4.84480, 4.87000, 4.89420, 4.91820, 4.94230, 4.96530, 4.98820, 5.01090,
              5.03330, 5.05530, 5.07720, 5.09900, 5.12060, 5.14220, 5.16380, 5.18480, 5.20610,
              5.22700, 5.24810, 5.26980, 5.29070, 5.31220, 5.33380, 5.35600, 5.37760, 5.39990,
              5.42240, 5.42240, 5.42380, 5.42510, 5.42650, 9.91450, 9.99420, 10.07220, 10.14850,
              10.22330, 10.29640, 10.36790, 10.43780, 10.50620, 10.57310, 10.63850, 10.70230,
              10.76470, 10.82570, 10.88520, 10.94340, 11.00010, 11.05550, 11.10950, 11.16230,
              11.21370, 11.26390, 11.31270, 11.36040, 11.40690, 11.45210, 11.49620, 11.53910,
              11.58090, 11.62160, 11.66120, 11.69980, 11.73730, 11.77370, 11.80920, 11.84370, 
              11.87720, 11.94140, 11.97220, 12.00010, 12.03110, 12.05930, 12.08670, 12.11330,
              12.13910, 12.70370, 12.72890, 12.75300, 12.77600, 12.79800, 12.81880, 12.83870,
              12.85740, 12.87510, 12.89170, 12.90720, 12.92170, 12.94740, 12.95860, 12.96880,
              12.97790, 12.98590, 12.99290, 12.99880, 13.00360, 13.00740, 13.01000, 13.01170,
              13.01220]),
)
