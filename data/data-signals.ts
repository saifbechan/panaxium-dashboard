const dataSignals = [
  [
    [1, 0.47],
    [2, 0.4],
    [3, 0.31],
    [4, 0.57],
    [5, 0.29],
    [6, 0.3],
    [7, 0.13],
    [8, 0.21],
    [9, 0.18],
    [10, 0.1],
    [11, 0.02],
    [12, 0.02],
    [13, 0.26],
    [14, 0.35],
    [15, 0.36],
    [16, 0.04],
    [17, 0.25],
    [18, 0.44],
    [19, 0.81],
    [20, 1],
    [21, 0.72],
    [22, 1],
    [23, 0.92],
    [24, 1.0],
    [25, 1],
    [26, 0.98],
    [27, 0.97],
    [28, 0.83],
    [29, 1],
    [30, 0.89],
    [31, 1],
    [32, 1],
    [33, 0.94],
    [34, 0.97],
    [35, 0.83],
    [36, 0.79],
    [37, 0.8],
    [38, 0.93],
    [39, 0.93],
    [40, 1],
    [41, 0.97],
    [42, 1],
    [43, 1],
    [44, 0.94],
    [45, 1],
    [46, 1],
    [47, 1],
    [48, 0.8],
    [49, 0.86],
    [50, 1],
    [51, 1],
    [52, 0.95],
    [53, 1],
    [54, 1],
    [55, 0.95],
    [56, 0.82],
    [57, 0.8],
    [58, 1],
    [59, 0.88],
    [60, 0.9],
    [61, 1],
    [62, 1],
    [63, 0.87],
    [64, 0.87],
    [65, 0.95],
    [66, 0.76],
    [67, 0.93],
    [68, 1],
    [69, 1],
    [70, 1],
    [71, 1],
    [72, 1],
    [73, 1],
    [74, 1.0],
    [75, 1],
    [76, 1],
    [77, 0.81],
    [78, 1],
    [79, 0.97],
    [80, 1],
    [81, 0.95],
    [82, 0.86],
    [83, 0.91],
    [84, 0.88],
    [85, 0.88],
    [86, 0.98],
    [87, 0.87],
    [88, 0.9],
    [89, 0.86],
    [90, 1],
    [91, 1],
    [92, 1],
    [93, 0.93],
    [94, 1],
    [95, 0.93],
    [96, 1],
    [97, 1],
    [98, 1],
    [99, 0.92],
    [100, 0.63],
    [101, 0.61],
    [102, 0.66],
    [103, 0.8],
    [104, 0.83],
    [105, 0.83],
    [106, 0.76],
    [107, 0.96],
    [108, 1],
    [109, 0.78],
    [110, 1],
    [111, 0.84],
    [112, 1],
    [113, 0.95],
    [114, 1],
    [115, 0.19],
    [116, 0.24],
    [117, 0.03],
    [118, 0.33],
    [119, 0.14],
    [120, 0.23],
    [121, 0.18],
    [122, 0],
    [123, 0.22],
    [124, 0.17],
    [125, 0.31],
    [126, 0.23],
    [127, 0.16],
    [128, 0.28],
  ],
  [
    [1, 0.16],
    [2, 0.33],
    [3, 0],
    [4, 0.43],
    [5, 0.14],
    [6, 0.22],
    [7, 0.19],
    [8, 0.58],
    [9, 0.47],
    [10, 0],
    [11, 0.17],
    [12, 0.35],
    [13, 0.17],
    [14, 0.36],
    [15, 0.0],
    [16, 0.2],
    [17, 0.2],
    [18, 0.25],
    [19, 0.78],
    [20, 0.79],
    [21, 0.71],
    [22, 0.94],
    [23, 1],
    [24, 0.84],
    [25, 0.9],
    [26, 1],
    [27, 0.79],
    [28, 1],
    [29, 0.77],
    [30, 1],
    [31, 1],
    [32, 1],
    [33, 0.87],
    [34, 1],
    [35, 0.78],
    [36, 0.77],
    [37, 1],
    [38, 1],
    [39, 0.97],
    [40, 0.97],
    [41, 1],
    [42, 1],
    [43, 0.93],
    [44, 1],
    [45, 0.99],
    [46, 1],
    [47, 1],
    [48, 0.88],
    [49, 0.9],
    [50, 1],
    [51, 1],
    [52, 0.84],
    [53, 1],
    [54, 0.89],
    [55, 0.89],
    [56, 0.92],
    [57, 0.83],
    [58, 1],
    [59, 0.86],
    [60, 0.91],
    [61, 1],
    [62, 0.79],
    [63, 1],
    [64, 1],
    [65, 1],
    [66, 0.75],
    [67, 0.94],
    [68, 0.87],
    [69, 1],
    [70, 0.95],
    [71, 1],
    [72, 1],
    [73, 1],
    [74, 1],
    [75, 1],
    [76, 0.98],
    [77, 0.84],
    [78, 1],
    [79, 0.77],
    [80, 1],
    [81, 1],
    [82, 0.98],
    [83, 0.85],
    [84, 1],
    [85, 0.8],
    [86, 0.9],
    [87, 0.98],
    [88, 0.93],
    [89, 1],
    [90, 0.81],
    [91, 0.85],
    [92, 0.87],
    [93, 1],
    [94, 0.96],
    [95, 0.96],
    [96, 0.77],
    [97, 0.89],
    [98, 0.88],
    [99, 0.97],
    [100, 0.65],
    [101, 0.83],
    [102, 0.54],
    [103, 0.86],
    [104, 0.89],
    [105, 0.81],
    [106, 0.56],
    [107, 0.97],
    [108, 1],
    [109, 0.7],
    [110, 0.99],
    [111, 1],
    [112, 0.77],
    [113, 0.94],
    [114, 1],
    [115, 0.35],
    [116, 0],
    [117, 0],
    [118, 0.25],
    [119, 0],
    [120, 0.38],
    [121, 0.36],
    [122, 0.13],
    [123, 0.29],
    [124, 0.4],
    [125, 0.31],
    [126, 0.2],
    [127, 0.17],
    [128, 0.28],
  ],
  [
    [1, 0.23],
    [2, 0.19],
    [3, 0.21],
    [4, 0.26],
    [5, 0.23],
    [6, 0],
    [7, 0.42],
    [8, 0.39],
    [9, 0.18],
    [10, 0.11],
    [11, 0.24],
    [12, 0.13],
    [13, 0.0],
    [14, 0.11],
    [15, 0.14],
    [16, 0.04],
    [17, 0.28],
    [18, 0.12],
    [19, 1],
    [20, 0.95],
    [21, 0.9],
    [22, 1],
    [23, 0.88],
    [24, 0.8],
    [25, 1],
    [26, 0.84],
    [27, 1],
    [28, 0.88],
    [29, 1],
    [30, 1],
    [31, 0.88],
    [32, 1],
    [33, 1],
    [34, 0.87],
    [35, 1],
    [36, 1],
    [37, 0.91],
    [38, 0.96],
    [39, 1],
    [40, 0.86],
    [41, 0.98],
    [42, 1],
    [43, 0.78],
    [44, 0.89],
    [45, 0.85],
    [46, 0.82],
    [47, 1],
    [48, 0.9],
    [49, 0.95],
    [50, 0.76],
    [51, 0.89],
    [52, 0.82],
    [53, 1],
    [54, 1],
    [55, 1],
    [56, 1],
    [57, 0.9],
    [58, 0.85],
    [59, 1],
    [60, 1],
    [61, 1],
    [62, 0.83],
    [63, 0.78],
    [64, 0.8],
    [65, 0.88],
    [66, 0.74],
    [67, 0.82],
    [68, 0.81],
    [69, 0.83],
    [70, 1],
    [71, 0.97],
    [72, 1.0],
    [73, 0.86],
    [74, 1],
    [75, 0.81],
    [76, 0.92],
    [77, 1],
    [78, 0.82],
    [79, 1],
    [80, 1],
    [81, 1],
    [82, 0.99],
    [83, 0.82],
    [84, 1],
    [85, 0.95],
    [86, 0.75],
    [87, 1],
    [88, 0.94],
    [89, 1],
    [90, 0.82],
    [91, 1.0],
    [92, 0.83],
    [93, 0.91],
    [94, 1],
    [95, 0.77],
    [96, 0.8],
    [97, 1],
    [98, 0.97],
    [99, 0.81],
    [100, 0.56],
    [101, 0.61],
    [102, 0.76],
    [103, 0.71],
    [104, 1],
    [105, 0.69],
    [106, 0.72],
    [107, 1],
    [108, 1],
    [109, 1],
    [110, 1],
    [111, 0.9],
    [112, 1],
    [113, 0.9],
    [114, 1],
    [115, 0.15],
    [116, 0.1],
    [117, 0.11],
    [118, 0.02],
    [119, 0.29],
    [120, 0.4],
    [121, 0.43],
    [122, 0],
    [123, 0.21],
    [124, 0.49],
    [125, 0.54],
    [126, 0.42],
    [127, 0],
    [128, 0.34],
  ],
  [
    [1, 0.28],
    [2, 0.28],
    [3, 0.17],
    [4, 0.23],
    [5, 0],
    [6, 0.08],
    [7, 0.34],
    [8, 0.34],
    [9, 0.38],
    [10, 0.16],
    [11, 0.2],
    [12, 0.33],
    [13, 0.17],
    [14, 0.32],
    [15, 0.31],
    [16, 0.03],
    [17, 0.16],
    [18, 0.12],
    [19, 0.96],
    [20, 1],
    [21, 1],
    [22, 0.97],
    [23, 1],
    [24, 0.86],
    [25, 1],
    [26, 0.88],
    [27, 0.97],
    [28, 1],
    [29, 0.79],
    [30, 1.0],
    [31, 0.9],
    [32, 0.86],
    [33, 0.87],
    [34, 1],
    [35, 1],
    [36, 0.91],
    [37, 1],
    [38, 1],
    [39, 1],
    [40, 0.86],
    [41, 1],
    [42, 0.83],
    [43, 1],
    [44, 0.75],
    [45, 1],
    [46, 0.83],
    [47, 0.75],
    [48, 1],
    [49, 0.98],
    [50, 0.97],
    [51, 0.82],
    [52, 0.99],
    [53, 0.87],
    [54, 0.84],
    [55, 1],
    [56, 0.84],
    [57, 1],
    [58, 0.8],
    [59, 1],
    [60, 1],
    [61, 1],
    [62, 1],
    [63, 0.96],
    [64, 0.97],
    [65, 0.77],
    [66, 0.79],
    [67, 0.83],
    [68, 1],
    [69, 0.99],
    [70, 1],
    [71, 0.89],
    [72, 0.96],
    [73, 1],
    [74, 0.83],
    [75, 0.8],
    [76, 1],
    [77, 1],
    [78, 1],
    [79, 0.77],
    [80, 0.93],
    [81, 1],
    [82, 1],
    [83, 0.99],
    [84, 0.87],
    [85, 1],
    [86, 0.71],
    [87, 0.92],
    [88, 0.87],
    [89, 0.96],
    [90, 1],
    [91, 1],
    [92, 1],
    [93, 1],
    [94, 1],
    [95, 0.8],
    [96, 0.78],
    [97, 0.92],
    [98, 1],
    [99, 0.89],
    [100, 0.7],
    [101, 0.53],
    [102, 0.45],
    [103, 0.65],
    [104, 0.82],
    [105, 0.84],
    [106, 0.89],
    [107, 1],
    [108, 0.97],
    [109, 0.87],
    [110, 1],
    [111, 0.8],
    [112, 0.78],
    [113, 1.0],
    [114, 0.93],
    [115, 0.16],
    [116, 0.0],
    [117, 0.25],
    [118, 0.15],
    [119, 0.16],
    [120, 0.15],
    [121, 0.38],
    [122, 0.11],
    [123, 0.31],
    [124, 0.2],
    [125, 0.22],
    [126, 0.33],
    [127, 0],
    [128, 0.19],
  ],
  [
    [1, 0.37],
    [2, 0.29],
    [3, 0.33],
    [4, 0.44],
    [5, 0.01],
    [6, 0],
    [7, 0.13],
    [8, 0.33],
    [9, 0.22],
    [10, 0.18],
    [11, 0],
    [12, 0.14],
    [13, 0.19],
    [14, 0.3],
    [15, 0.11],
    [16, 0.19],
    [17, 0.12],
    [18, 0.34],
    [19, 1],
    [20, 1],
    [21, 1],
    [22, 0.89],
    [23, 0.98],
    [24, 0.98],
    [25, 0.85],
    [26, 0.99],
    [27, 1],
    [28, 1],
    [29, 1],
    [30, 1],
    [31, 1],
    [32, 0.98],
    [33, 1],
    [34, 1.0],
    [35, 0.88],
    [36, 0.99],
    [37, 0.91],
    [38, 0.85],
    [39, 1],
    [40, 0.8],
    [41, 0.81],
    [42, 0.8],
    [43, 0.89],
    [44, 0.83],
    [45, 0.79],
    [46, 0.79],
    [47, 0.86],
    [48, 1],
    [49, 0.77],
    [50, 0.75],
    [51, 1],
    [52, 1],
    [53, 0.86],
    [54, 0.81],
    [55, 0.93],
    [56, 1],
    [57, 1],
    [58, 0.96],
    [59, 1],
    [60, 1],
    [61, 0.96],
    [62, 1],
    [63, 0.78],
    [64, 1],
    [65, 1],
    [66, 0.81],
    [67, 1],
    [68, 0.94],
    [69, 1],
    [70, 0.92],
    [71, 0.87],
    [72, 0.94],
    [73, 1],
    [74, 0.8],
    [75, 1],
    [76, 0.97],
    [77, 1],
    [78, 1],
    [79, 0.91],
    [80, 0.77],
    [81, 0.94],
    [82, 1],
    [83, 1],
    [84, 0.79],
    [85, 0.77],
    [86, 0.93],
    [87, 0.79],
    [88, 0.94],
    [89, 0.75],
    [90, 0.93],
    [91, 1],
    [92, 0.87],
    [93, 0.88],
    [94, 0.92],
    [95, 1],
    [96, 1],
    [97, 0.95],
    [98, 0.85],
    [99, 0.62],
    [100, 0.68],
    [101, 0.45],
    [102, 0.65],
    [103, 0.94],
    [104, 0.69],
    [105, 0.8],
    [106, 0.68],
    [107, 0.94],
    [108, 0.92],
    [109, 0.99],
    [110, 1],
    [111, 1],
    [112, 0.81],
    [113, 0.92],
    [114, 0.83],
    [115, 0.38],
    [116, 0.32],
    [117, 0.17],
    [118, 0.27],
    [119, 0.3],
    [120, 0.36],
    [121, 0.5],
    [122, 0.06],
    [123, 0.15],
    [124, 0.51],
    [125, 0.4],
    [126, 0.23],
    [127, 0],
    [128, 0.28],
  ],
  [
    [1, 0.43],
    [2, 0.44],
    [3, 0.12],
    [4, 0.52],
    [5, 0.25],
    [6, 0.22],
    [7, 0.29],
    [8, 0.58],
    [9, 0.27],
    [10, 0.18],
    [11, 0.31],
    [12, 0.05],
    [13, 0.14],
    [14, 0.32],
    [15, 0.26],
    [16, 0.18],
    [17, 0.04],
    [18, 0.1],
    [19, 0.89],
    [20, 1],
    [21, 0.91],
    [22, 0.96],
    [23, 0.85],
    [24, 0.85],
    [25, 1],
    [26, 1],
    [27, 1],
    [28, 0.91],
    [29, 1],
    [30, 1],
    [31, 0.91],
    [32, 0.94],
    [33, 0.8],
    [34, 0.83],
    [35, 0.82],
    [36, 0.82],
    [37, 0.95],
    [38, 0.82],
    [39, 0.83],
    [40, 0.89],
    [41, 0.99],
    [42, 1],
    [43, 1],
    [44, 1],
    [45, 0.78],
    [46, 1],
    [47, 1],
    [48, 0.86],
    [49, 1],
    [50, 0.82],
    [51, 1],
    [52, 0.83],
    [53, 1.0],
    [54, 1],
    [55, 1],
    [56, 0.84],
    [57, 1],
    [58, 1],
    [59, 0.96],
    [60, 0.75],
    [61, 0.93],
    [62, 0.94],
    [63, 1],
    [64, 0.79],
    [65, 1.0],
    [66, 1],
    [67, 0.97],
    [68, 0.98],
    [69, 1],
    [70, 1],
    [71, 0.94],
    [72, 1],
    [73, 1],
    [74, 1],
    [75, 1.0],
    [76, 0.87],
    [77, 0.77],
    [78, 1],
    [79, 1],
    [80, 0.94],
    [81, 0.84],
    [82, 0.78],
    [83, 0.96],
    [84, 0.92],
    [85, 1],
    [86, 0.9],
    [87, 0.79],
    [88, 0.84],
    [89, 1],
    [90, 0.95],
    [91, 1],
    [92, 0.75],
    [93, 0.81],
    [94, 0.81],
    [95, 0.97],
    [96, 0.75],
    [97, 1],
    [98, 1],
    [99, 0.82],
    [100, 0.84],
    [101, 0.61],
    [102, 0.55],
    [103, 0.91],
    [104, 0.99],
    [105, 0.76],
    [106, 0.74],
    [107, 1],
    [108, 1],
    [109, 0.88],
    [110, 0.8],
    [111, 0.8],
    [112, 0.78],
    [113, 1],
    [114, 0.86],
    [115, 0.34],
    [116, 0.04],
    [117, 0.2],
    [118, 0.37],
    [119, 0],
    [120, 0.42],
    [121, 0.18],
    [122, 0.19],
    [123, 0.36],
    [124, 0.22],
    [125, 0.56],
    [126, 0.46],
    [127, 0.04],
    [128, 0.05],
  ],
  [
    [1, 0.46],
    [2, 0.15],
    [3, 0],
    [4, 0.36],
    [5, 0.03],
    [6, 0.21],
    [7, 0.43],
    [8, 0.36],
    [9, 0.31],
    [10, 0],
    [11, 0.23],
    [12, 0.32],
    [13, 0.08],
    [14, 0.13],
    [15, 0.24],
    [16, 0.03],
    [17, 0],
    [18, 0.18],
    [19, 1],
    [20, 0.93],
    [21, 0.81],
    [22, 0.79],
    [23, 0.97],
    [24, 0.92],
    [25, 1],
    [26, 0.79],
    [27, 1],
    [28, 0.85],
    [29, 0.92],
    [30, 0.82],
    [31, 0.77],
    [32, 0.96],
    [33, 0.93],
    [34, 1],
    [35, 0.86],
    [36, 1],
    [37, 1],
    [38, 0.98],
    [39, 0.97],
    [40, 0.94],
    [41, 0.82],
    [42, 1],
    [43, 0.9],
    [44, 1],
    [45, 0.86],
    [46, 0.98],
    [47, 0.99],
    [48, 0.84],
    [49, 0.98],
    [50, 0.99],
    [51, 1],
    [52, 1],
    [53, 1],
    [54, 1],
    [55, 1],
    [56, 0.96],
    [57, 1],
    [58, 0.95],
    [59, 1.0],
    [60, 0.99],
    [61, 1],
    [62, 1],
    [63, 1.0],
    [64, 0.95],
    [65, 1],
    [66, 0.96],
    [67, 0.92],
    [68, 1],
    [69, 1],
    [70, 0.86],
    [71, 1],
    [72, 1],
    [73, 0.88],
    [74, 0.95],
    [75, 1],
    [76, 0.83],
    [77, 1],
    [78, 1],
    [79, 0.74],
    [80, 0.84],
    [81, 0.85],
    [82, 1],
    [83, 0.85],
    [84, 1],
    [85, 0.75],
    [86, 1],
    [87, 0.88],
    [88, 1.0],
    [89, 0.84],
    [90, 1],
    [91, 0.85],
    [92, 1],
    [93, 0.92],
    [94, 0.97],
    [95, 0.92],
    [96, 1],
    [97, 0.95],
    [98, 0.98],
    [99, 0.8],
    [100, 0.57],
    [101, 0.45],
    [102, 0.63],
    [103, 0.97],
    [104, 0.94],
    [105, 0.85],
    [106, 0.94],
    [107, 1],
    [108, 0.88],
    [109, 1],
    [110, 0.84],
    [111, 0.78],
    [112, 1],
    [113, 1],
    [114, 0.97],
    [115, 0.28],
    [116, 0.19],
    [117, 0.21],
    [118, 0.13],
    [119, 0.08],
    [120, 0.19],
    [121, 0.3],
    [122, 0.21],
    [123, 0.14],
    [124, 0.53],
    [125, 0.32],
    [126, 0.2],
    [127, 0.21],
    [128, 0.15],
  ],
  [
    [1, 0.4],
    [2, 0.4],
    [3, 0.23],
    [4, 0.31],
    [5, 0],
    [6, 0.01],
    [7, 0.39],
    [8, 0.31],
    [9, 0.19],
    [10, 0],
    [11, 0.18],
    [12, 0.11],
    [13, 0.23],
    [14, 0.04],
    [15, 0.15],
    [16, 0.13],
    [17, 0.3],
    [18, 0.28],
    [19, 0.92],
    [20, 0.82],
    [21, 0.81],
    [22, 1],
    [23, 1],
    [24, 0.84],
    [25, 0.86],
    [26, 1],
    [27, 0.74],
    [28, 1],
    [29, 1],
    [30, 1],
    [31, 1],
    [32, 0.93],
    [33, 0.75],
    [34, 1],
    [35, 0.86],
    [36, 1],
    [37, 1],
    [38, 1],
    [39, 0.83],
    [40, 1],
    [41, 1],
    [42, 0.79],
    [43, 1],
    [44, 0.89],
    [45, 1],
    [46, 0.85],
    [47, 1],
    [48, 1],
    [49, 1],
    [50, 1],
    [51, 1.0],
    [52, 0.83],
    [53, 1],
    [54, 1],
    [55, 0.93],
    [56, 1],
    [57, 1],
    [58, 1],
    [59, 1],
    [60, 0.78],
    [61, 1],
    [62, 1],
    [63, 0.93],
    [64, 0.92],
    [65, 1],
    [66, 1],
    [67, 1],
    [68, 0.84],
    [69, 1],
    [70, 1],
    [71, 1],
    [72, 0.87],
    [73, 1],
    [74, 1],
    [75, 1],
    [76, 1],
    [77, 1],
    [78, 1],
    [79, 1],
    [80, 0.81],
    [81, 1],
    [82, 0.93],
    [83, 1],
    [84, 1],
    [85, 0.95],
    [86, 0.73],
    [87, 0.97],
    [88, 1],
    [89, 0.87],
    [90, 0.8],
    [91, 0.88],
    [92, 0.96],
    [93, 0.82],
    [94, 1],
    [95, 0.88],
    [96, 1],
    [97, 0.89],
    [98, 0.84],
    [99, 0.77],
    [100, 0.79],
    [101, 0.79],
    [102, 0.75],
    [103, 0.59],
    [104, 0.91],
    [105, 0.8],
    [106, 0.78],
    [107, 0.93],
    [108, 0.95],
    [109, 0.94],
    [110, 1],
    [111, 0.82],
    [112, 1],
    [113, 0.97],
    [114, 1],
    [115, 0.26],
    [116, 0.08],
    [117, 0.08],
    [118, 0.41],
    [119, 0.23],
    [120, 0.17],
    [121, 0.14],
    [122, 0],
    [123, 0.2],
    [124, 0.19],
    [125, 0.49],
    [126, 0.18],
    [127, 0.24],
    [128, 0.03],
  ],
  [
    [1, 0.42],
    [2, 0.16],
    [3, 0.12],
    [4, 0.34],
    [5, 0.09],
    [6, 0.17],
    [7, 0.42],
    [8, 0.37],
    [9, 0.13],
    [10, 0],
    [11, 0.33],
    [12, 0.0],
    [13, 0.2],
    [14, 0.27],
    [15, 0.02],
    [16, 0.0],
    [17, 0.11],
    [18, 0.16],
    [19, 0.78],
    [20, 0.9],
    [21, 0.8],
    [22, 1],
    [23, 0.93],
    [24, 0.96],
    [25, 1],
    [26, 1],
    [27, 1],
    [28, 0.76],
    [29, 0.98],
    [30, 1],
    [31, 0.79],
    [32, 0.96],
    [33, 1],
    [34, 0.78],
    [35, 1],
    [36, 0.94],
    [37, 0.88],
    [38, 0.84],
    [39, 0.93],
    [40, 0.8],
    [41, 0.97],
    [42, 1],
    [43, 0.92],
    [44, 0.79],
    [45, 0.99],
    [46, 0.76],
    [47, 1],
    [48, 1],
    [49, 1],
    [50, 0.98],
    [51, 0.92],
    [52, 0.79],
    [53, 1],
    [54, 1],
    [55, 0.94],
    [56, 1],
    [57, 0.95],
    [58, 0.9],
    [59, 1.0],
    [60, 0.95],
    [61, 1],
    [62, 1],
    [63, 0.98],
    [64, 0.8],
    [65, 0.97],
    [66, 0.87],
    [67, 0.92],
    [68, 1],
    [69, 1],
    [70, 0.93],
    [71, 1],
    [72, 1],
    [73, 0.85],
    [74, 0.87],
    [75, 0.87],
    [76, 0.84],
    [77, 0.83],
    [78, 1],
    [79, 0.92],
    [80, 0.96],
    [81, 1],
    [82, 0.86],
    [83, 1],
    [84, 0.78],
    [85, 0.82],
    [86, 1],
    [87, 0.83],
    [88, 1],
    [89, 0.73],
    [90, 1],
    [91, 1],
    [92, 1],
    [93, 0.92],
    [94, 0.81],
    [95, 0.93],
    [96, 0.79],
    [97, 0.85],
    [98, 1],
    [99, 0.93],
    [100, 0.59],
    [101, 0.59],
    [102, 0.63],
    [103, 0.86],
    [104, 0.7],
    [105, 0.48],
    [106, 0.6],
    [107, 1],
    [108, 0.91],
    [109, 0.98],
    [110, 1],
    [111, 1],
    [112, 1],
    [113, 1],
    [114, 0.82],
    [115, 0.29],
    [116, 0.18],
    [117, 0],
    [118, 0.15],
    [119, 0.17],
    [120, 0.26],
    [121, 0.19],
    [122, 0.19],
    [123, 0.19],
    [124, 0.17],
    [125, 0.47],
    [126, 0.15],
    [127, 0.08],
    [128, 0.05],
  ],
  [
    [1, 0.48],
    [2, 0.27],
    [3, 0.22],
    [4, 0.52],
    [5, 0.14],
    [6, 0],
    [7, 0.09],
    [8, 0.49],
    [9, 0.5],
    [10, 0],
    [11, 0.06],
    [12, 0.12],
    [13, 0],
    [14, 0.12],
    [15, 0.1],
    [16, 0.01],
    [17, 0.07],
    [18, 0.35],
    [19, 0.72],
    [20, 1],
    [21, 0.85],
    [22, 0.81],
    [23, 1],
    [24, 0.79],
    [25, 1],
    [26, 0.9],
    [27, 0.95],
    [28, 0.83],
    [29, 0.85],
    [30, 1],
    [31, 1],
    [32, 1],
    [33, 0.86],
    [34, 1],
    [35, 0.7],
    [36, 0.93],
    [37, 1],
    [38, 1],
    [39, 0.93],
    [40, 1.0],
    [41, 1],
    [42, 0.91],
    [43, 1],
    [44, 0.75],
    [45, 1],
    [46, 1],
    [47, 1],
    [48, 0.94],
    [49, 0.79],
    [50, 0.88],
    [51, 0.86],
    [52, 0.83],
    [53, 1],
    [54, 0.98],
    [55, 0.86],
    [56, 0.96],
    [57, 0.99],
    [58, 0.83],
    [59, 0.91],
    [60, 1],
    [61, 0.83],
    [62, 1],
    [63, 1],
    [64, 0.93],
    [65, 0.97],
    [66, 0.97],
    [67, 1],
    [68, 0.92],
    [69, 0.99],
    [70, 0.97],
    [71, 1],
    [72, 0.88],
    [73, 0.79],
    [74, 0.9],
    [75, 0.85],
    [76, 0.77],
    [77, 0.87],
    [78, 0.81],
    [79, 0.86],
    [80, 0.86],
    [81, 0.82],
    [82, 0.97],
    [83, 1],
    [84, 1],
    [85, 0.83],
    [86, 0.83],
    [87, 1],
    [88, 0.92],
    [89, 0.69],
    [90, 0.81],
    [91, 0.82],
    [92, 1],
    [93, 1],
    [94, 1],
    [95, 1],
    [96, 0.88],
    [97, 0.95],
    [98, 0.87],
    [99, 0.96],
    [100, 0.73],
    [101, 0.69],
    [102, 0.53],
    [103, 0.63],
    [104, 0.99],
    [105, 0.56],
    [106, 0.77],
    [107, 0.96],
    [108, 0.95],
    [109, 0.91],
    [110, 0.84],
    [111, 0.98],
    [112, 1],
    [113, 1],
    [114, 0.88],
    [115, 0.34],
    [116, 0.28],
    [117, 0.27],
    [118, 0.29],
    [119, 0.21],
    [120, 0.26],
    [121, 0.36],
    [122, 0.11],
    [123, 0.46],
    [124, 0.3],
    [125, 0.25],
    [126, 0.23],
    [127, 0.14],
    [128, 0.29],
  ],
  [
    [1, 0.35],
    [2, 0.33],
    [3, 0],
    [4, 0.4],
    [5, 0.07],
    [6, 0.07],
    [7, 0.1],
    [8, 0.21],
    [9, 0.4],
    [10, 0.06],
    [11, 0.22],
    [12, 0.01],
    [13, 0.1],
    [14, 0.17],
    [15, 0.36],
    [16, 0.26],
    [17, 0],
    [18, 0.16],
    [19, 0.8],
    [20, 0.87],
    [21, 0.91],
    [22, 0.77],
    [23, 1],
    [24, 1],
    [25, 0.96],
    [26, 0.83],
    [27, 0.82],
    [28, 1],
    [29, 0.79],
    [30, 0.93],
    [31, 1],
    [32, 0.98],
    [33, 0.75],
    [34, 1],
    [35, 0.88],
    [36, 1],
    [37, 1],
    [38, 0.91],
    [39, 1],
    [40, 1],
    [41, 1],
    [42, 0.81],
    [43, 0.92],
    [44, 0.96],
    [45, 0.84],
    [46, 1],
    [47, 0.87],
    [48, 0.82],
    [49, 0.74],
    [50, 0.8],
    [51, 0.93],
    [52, 1],
    [53, 1],
    [54, 1],
    [55, 1],
    [56, 0.88],
    [57, 1.0],
    [58, 0.82],
    [59, 0.95],
    [60, 0.87],
    [61, 1],
    [62, 0.88],
    [63, 1],
    [64, 0.96],
    [65, 0.91],
    [66, 0.98],
    [67, 0.83],
    [68, 0.81],
    [69, 1],
    [70, 1],
    [71, 0.86],
    [72, 0.92],
    [73, 1],
    [74, 1],
    [75, 1],
    [76, 1],
    [77, 1],
    [78, 1],
    [79, 1],
    [80, 1],
    [81, 0.91],
    [82, 0.96],
    [83, 1],
    [84, 0.9],
    [85, 0.85],
    [86, 0.96],
    [87, 0.94],
    [88, 0.8],
    [89, 0.76],
    [90, 0.78],
    [91, 1],
    [92, 0.89],
    [93, 1],
    [94, 1],
    [95, 0.94],
    [96, 0.96],
    [97, 0.84],
    [98, 0.8],
    [99, 0.75],
    [100, 0.9],
    [101, 0.84],
    [102, 0.79],
    [103, 0.95],
    [104, 1],
    [105, 0.87],
    [106, 0.88],
    [107, 0.78],
    [108, 0.85],
    [109, 0.82],
    [110, 1],
    [111, 0.94],
    [112, 0.95],
    [113, 1],
    [114, 1],
    [115, 0.47],
    [116, 0.03],
    [117, 0.25],
    [118, 0.16],
    [119, 0.28],
    [120, 0.15],
    [121, 0.13],
    [122, 0],
    [123, 0.34],
    [124, 0.48],
    [125, 0.55],
    [126, 0.47],
    [127, 0],
    [128, 0.22],
  ],
  [
    [1, 0.38],
    [2, 0.26],
    [3, 0],
    [4, 0.54],
    [5, 0],
    [6, 0],
    [7, 0.18],
    [8, 0.47],
    [9, 0.51],
    [10, 0],
    [11, 0],
    [12, 0.3],
    [13, 0.03],
    [14, 0.29],
    [15, 0.1],
    [16, 0.11],
    [17, 0.04],
    [18, 0.18],
    [19, 0.84],
    [20, 0.95],
    [21, 0.88],
    [22, 1],
    [23, 1],
    [24, 0.76],
    [25, 1],
    [26, 0.99],
    [27, 0.94],
    [28, 1],
    [29, 1],
    [30, 1],
    [31, 0.97],
    [32, 0.77],
    [33, 1],
    [34, 0.94],
    [35, 0.92],
    [36, 0.86],
    [37, 1],
    [38, 0.97],
    [39, 1],
    [40, 0.85],
    [41, 1],
    [42, 1],
    [43, 0.83],
    [44, 0.95],
    [45, 0.94],
    [46, 1],
    [47, 1],
    [48, 0.88],
    [49, 0.99],
    [50, 0.86],
    [51, 1],
    [52, 1.0],
    [53, 1],
    [54, 1],
    [55, 1],
    [56, 0.84],
    [57, 1],
    [58, 0.84],
    [59, 1],
    [60, 1.0],
    [61, 1.0],
    [62, 1],
    [63, 0.74],
    [64, 0.83],
    [65, 0.95],
    [66, 1],
    [67, 1],
    [68, 1],
    [69, 1],
    [70, 0.93],
    [71, 0.79],
    [72, 1],
    [73, 1],
    [74, 0.93],
    [75, 0.89],
    [76, 0.87],
    [77, 1],
    [78, 1],
    [79, 0.97],
    [80, 1],
    [81, 1],
    [82, 0.83],
    [83, 0.8],
    [84, 0.98],
    [85, 0.85],
    [86, 0.91],
    [87, 0.99],
    [88, 0.98],
    [89, 0.94],
    [90, 0.76],
    [91, 1],
    [92, 0.97],
    [93, 0.9],
    [94, 0.93],
    [95, 0.82],
    [96, 0.95],
    [97, 1],
    [98, 0.79],
    [99, 0.78],
    [100, 0.65],
    [101, 0.47],
    [102, 0.83],
    [103, 0.89],
    [104, 0.66],
    [105, 0.71],
    [106, 0.55],
    [107, 1],
    [108, 1],
    [109, 0.83],
    [110, 0.87],
    [111, 1],
    [112, 0.79],
    [113, 1],
    [114, 0.97],
    [115, 0.16],
    [116, 0.14],
    [117, 0.27],
    [118, 0.1],
    [119, 0.17],
    [120, 0.27],
    [121, 0.41],
    [122, 0],
    [123, 0.36],
    [124, 0.55],
    [125, 0.44],
    [126, 0.46],
    [127, 0],
    [128, 0.31],
  ],
  [
    [1, 0.26],
    [2, 0.19],
    [3, 0.32],
    [4, 0.47],
    [5, 0],
    [6, 0.11],
    [7, 0.14],
    [8, 0.31],
    [9, 0.41],
    [10, 0],
    [11, 0.2],
    [12, 0],
    [13, 0.22],
    [14, 0.03],
    [15, 0.36],
    [16, 0.05],
    [17, 0.22],
    [18, 0.22],
    [19, 0.9],
    [20, 1],
    [21, 0.89],
    [22, 0.96],
    [23, 0.97],
    [24, 0.99],
    [25, 0.9],
    [26, 1],
    [27, 0.77],
    [28, 0.91],
    [29, 1],
    [30, 0.95],
    [31, 0.88],
    [32, 0.92],
    [33, 1],
    [34, 1],
    [35, 0.84],
    [36, 0.93],
    [37, 1],
    [38, 0.85],
    [39, 0.84],
    [40, 0.85],
    [41, 0.82],
    [42, 0.81],
    [43, 0.95],
    [44, 1],
    [45, 1],
    [46, 1],
    [47, 0.97],
    [48, 1.0],
    [49, 0.98],
    [50, 1],
    [51, 1],
    [52, 1],
    [53, 1],
    [54, 0.96],
    [55, 0.94],
    [56, 1],
    [57, 1],
    [58, 0.92],
    [59, 0.88],
    [60, 0.74],
    [61, 0.87],
    [62, 0.93],
    [63, 1],
    [64, 1.0],
    [65, 0.97],
    [66, 0.92],
    [67, 1],
    [68, 0.98],
    [69, 1],
    [70, 1],
    [71, 0.81],
    [72, 1],
    [73, 0.81],
    [74, 0.94],
    [75, 0.82],
    [76, 0.85],
    [77, 1],
    [78, 1],
    [79, 0.92],
    [80, 1],
    [81, 1],
    [82, 0.98],
    [83, 0.84],
    [84, 0.86],
    [85, 1],
    [86, 0.73],
    [87, 1],
    [88, 0.92],
    [89, 1],
    [90, 0.89],
    [91, 1],
    [92, 1],
    [93, 0.94],
    [94, 1],
    [95, 0.91],
    [96, 0.87],
    [97, 0.82],
    [98, 0.82],
    [99, 0.83],
    [100, 0.81],
    [101, 0.49],
    [102, 0.54],
    [103, 0.68],
    [104, 0.97],
    [105, 0.51],
    [106, 0.82],
    [107, 1],
    [108, 1],
    [109, 0.72],
    [110, 0.93],
    [111, 0.77],
    [112, 0.94],
    [113, 0.85],
    [114, 1],
    [115, 0.11],
    [116, 0.32],
    [117, 0.17],
    [118, 0.06],
    [119, 0.11],
    [120, 0.49],
    [121, 0.16],
    [122, 0],
    [123, 0.47],
    [124, 0.42],
    [125, 0.19],
    [126, 0.25],
    [127, 0.12],
    [128, 0.19],
  ],
  [
    [1, 0.27],
    [2, 0.15],
    [3, 0],
    [4, 0.21],
    [5, 0.15],
    [6, 0.0],
    [7, 0.26],
    [8, 0.2],
    [9, 0.27],
    [10, 0.05],
    [11, 0.22],
    [12, 0.21],
    [13, 0.23],
    [14, 0.15],
    [15, 0.12],
    [16, 0.27],
    [17, 0.0],
    [18, 0.45],
    [19, 1],
    [20, 1],
    [21, 1],
    [22, 0.77],
    [23, 1],
    [24, 0.76],
    [25, 1],
    [26, 0.81],
    [27, 1],
    [28, 0.76],
    [29, 0.77],
    [30, 0.83],
    [31, 1],
    [32, 0.93],
    [33, 0.76],
    [34, 0.76],
    [35, 1],
    [36, 0.83],
    [37, 1.0],
    [38, 0.87],
    [39, 0.81],
    [40, 1],
    [41, 1],
    [42, 1],
    [43, 1],
    [44, 1],
    [45, 0.91],
    [46, 0.77],
    [47, 0.91],
    [48, 1],
    [49, 0.91],
    [50, 1],
    [51, 0.85],
    [52, 0.89],
    [53, 0.84],
    [54, 0.82],
    [55, 1],
    [56, 0.79],
    [57, 1],
    [58, 1.0],
    [59, 0.99],
    [60, 0.89],
    [61, 0.94],
    [62, 1],
    [63, 1],
    [64, 0.9],
    [65, 0.82],
    [66, 1],
    [67, 0.79],
    [68, 0.8],
    [69, 0.88],
    [70, 1],
    [71, 1],
    [72, 1],
    [73, 1.0],
    [74, 0.89],
    [75, 0.99],
    [76, 1],
    [77, 0.85],
    [78, 0.85],
    [79, 0.85],
    [80, 1],
    [81, 1],
    [82, 0.86],
    [83, 1],
    [84, 0.86],
    [85, 0.84],
    [86, 0.71],
    [87, 0.95],
    [88, 0.92],
    [89, 0.9],
    [90, 1],
    [91, 1],
    [92, 0.84],
    [93, 0.81],
    [94, 1],
    [95, 0.8],
    [96, 1],
    [97, 0.97],
    [98, 1],
    [99, 0.92],
    [100, 0.88],
    [101, 0.6],
    [102, 0.78],
    [103, 0.63],
    [104, 0.67],
    [105, 0.83],
    [106, 0.76],
    [107, 1],
    [108, 0.99],
    [109, 0.89],
    [110, 1],
    [111, 0.89],
    [112, 0.9],
    [113, 1],
    [114, 1],
    [115, 0.42],
    [116, 0.3],
    [117, 0],
    [118, 0.34],
    [119, 0.06],
    [120, 0.49],
    [121, 0.12],
    [122, 0],
    [123, 0.43],
    [124, 0.23],
    [125, 0.32],
    [126, 0.44],
    [127, 0.14],
    [128, 0.24],
  ],
  [
    [1, 0.26],
    [2, 0.15],
    [3, 0.32],
    [4, 0.23],
    [5, 0.01],
    [6, 0],
    [7, 0.21],
    [8, 0.35],
    [9, 0.25],
    [10, 0],
    [11, 0.27],
    [12, 0.01],
    [13, 0],
    [14, 0.19],
    [15, 0.22],
    [16, 0.06],
    [17, 0.0],
    [18, 0.45],
    [19, 1],
    [20, 0.92],
    [21, 0.95],
    [22, 0.9],
    [23, 0.92],
    [24, 1],
    [25, 0.98],
    [26, 1],
    [27, 0.8],
    [28, 0.79],
    [29, 0.91],
    [30, 0.94],
    [31, 0.86],
    [32, 1],
    [33, 0.92],
    [34, 0.92],
    [35, 0.96],
    [36, 0.98],
    [37, 0.8],
    [38, 0.8],
    [39, 1],
    [40, 1],
    [41, 0.98],
    [42, 0.91],
    [43, 1],
    [44, 1],
    [45, 0.98],
    [46, 0.87],
    [47, 0.84],
    [48, 0.77],
    [49, 0.77],
    [50, 0.88],
    [51, 0.78],
    [52, 0.94],
    [53, 0.86],
    [54, 0.8],
    [55, 0.87],
    [56, 1],
    [57, 0.94],
    [58, 1],
    [59, 0.85],
    [60, 0.97],
    [61, 1],
    [62, 0.82],
    [63, 1],
    [64, 0.88],
    [65, 1],
    [66, 1],
    [67, 0.86],
    [68, 1],
    [69, 1],
    [70, 1],
    [71, 0.92],
    [72, 0.96],
    [73, 1],
    [74, 1],
    [75, 0.91],
    [76, 1],
    [77, 0.8],
    [78, 1],
    [79, 0.95],
    [80, 0.9],
    [81, 1.0],
    [82, 1],
    [83, 0.82],
    [84, 1],
    [85, 1],
    [86, 1],
    [87, 0.98],
    [88, 0.86],
    [89, 0.83],
    [90, 1],
    [91, 1],
    [92, 1],
    [93, 1],
    [94, 1],
    [95, 0.98],
    [96, 0.87],
    [97, 1],
    [98, 1],
    [99, 0.78],
    [100, 0.69],
    [101, 0.5],
    [102, 0.59],
    [103, 0.77],
    [104, 0.95],
    [105, 0.77],
    [106, 0.64],
    [107, 0.84],
    [108, 0.93],
    [109, 0.91],
    [110, 1],
    [111, 0.96],
    [112, 1],
    [113, 1],
    [114, 0.96],
    [115, 0.27],
    [116, 0.14],
    [117, 0.26],
    [118, 0.4],
    [119, 0.21],
    [120, 0.38],
    [121, 0.33],
    [122, 0],
    [123, 0.23],
    [124, 0.21],
    [125, 0.21],
    [126, 0.43],
    [127, 0.22],
    [128, 0.17],
  ],
  [
    [1, 0.19],
    [2, 0.3],
    [3, 0.1],
    [4, 0.42],
    [5, 0.08],
    [6, 0],
    [7, 0.24],
    [8, 0.35],
    [9, 0.38],
    [10, 0],
    [11, 0.16],
    [12, 0.29],
    [13, 0],
    [14, 0.2],
    [15, 0.14],
    [16, 0.17],
    [17, 0.29],
    [18, 0.21],
    [19, 0.79],
    [20, 1],
    [21, 0.86],
    [22, 0.97],
    [23, 1],
    [24, 0.88],
    [25, 0.84],
    [26, 0.8],
    [27, 1],
    [28, 1],
    [29, 1],
    [30, 0.8],
    [31, 0.97],
    [32, 0.9],
    [33, 0.83],
    [34, 0.99],
    [35, 0.86],
    [36, 0.83],
    [37, 0.99],
    [38, 0.86],
    [39, 0.94],
    [40, 0.94],
    [41, 0.92],
    [42, 0.9],
    [43, 0.81],
    [44, 0.87],
    [45, 1],
    [46, 1],
    [47, 0.99],
    [48, 1],
    [49, 0.89],
    [50, 0.74],
    [51, 0.81],
    [52, 0.86],
    [53, 0.9],
    [54, 0.9],
    [55, 0.95],
    [56, 1],
    [57, 0.81],
    [58, 0.85],
    [59, 0.89],
    [60, 0.78],
    [61, 0.98],
    [62, 1],
    [63, 0.86],
    [64, 0.98],
    [65, 1],
    [66, 0.87],
    [67, 0.96],
    [68, 1],
    [69, 1],
    [70, 1],
    [71, 1],
    [72, 0.89],
    [73, 1],
    [74, 0.98],
    [75, 1],
    [76, 0.86],
    [77, 1],
    [78, 0.8],
    [79, 0.77],
    [80, 0.85],
    [81, 0.93],
    [82, 1],
    [83, 0.87],
    [84, 0.99],
    [85, 0.81],
    [86, 0.9],
    [87, 1],
    [88, 0.97],
    [89, 0.85],
    [90, 0.9],
    [91, 0.95],
    [92, 1],
    [93, 0.8],
    [94, 0.9],
    [95, 0.86],
    [96, 0.78],
    [97, 0.95],
    [98, 1],
    [99, 0.68],
    [100, 0.58],
    [101, 0.64],
    [102, 0.65],
    [103, 0.76],
    [104, 0.96],
    [105, 0.53],
    [106, 0.79],
    [107, 0.8],
    [108, 0.99],
    [109, 0.91],
    [110, 1],
    [111, 0.91],
    [112, 1],
    [113, 0.85],
    [114, 0.96],
    [115, 0.09],
    [116, 0.27],
    [117, 0],
    [118, 0.27],
    [119, 0.0],
    [120, 0.53],
    [121, 0.17],
    [122, 0.11],
    [123, 0.43],
    [124, 0.2],
    [125, 0.31],
    [126, 0.34],
    [127, 0],
    [128, 0.3],
  ],
  [
    [1, 0.37],
    [2, 0.21],
    [3, 0.04],
    [4, 0.23],
    [5, 0],
    [6, 0.06],
    [7, 0.46],
    [8, 0.4],
    [9, 0.25],
    [10, 0.05],
    [11, 0.16],
    [12, 0.16],
    [13, 0.0],
    [14, 0.39],
    [15, 0.36],
    [16, 0.13],
    [17, 0.12],
    [18, 0.13],
    [19, 0.86],
    [20, 0.99],
    [21, 0.8],
    [22, 0.8],
    [23, 1],
    [24, 0.76],
    [25, 1],
    [26, 1],
    [27, 0.99],
    [28, 1.0],
    [29, 1],
    [30, 0.78],
    [31, 0.75],
    [32, 0.89],
    [33, 0.78],
    [34, 1],
    [35, 0.87],
    [36, 0.77],
    [37, 0.9],
    [38, 0.97],
    [39, 1],
    [40, 1],
    [41, 0.86],
    [42, 1],
    [43, 1],
    [44, 0.92],
    [45, 0.93],
    [46, 1],
    [47, 1],
    [48, 0.81],
    [49, 0.95],
    [50, 0.82],
    [51, 1],
    [52, 0.87],
    [53, 0.87],
    [54, 0.9],
    [55, 1],
    [56, 0.9],
    [57, 1],
    [58, 1],
    [59, 0.86],
    [60, 1],
    [61, 0.85],
    [62, 0.82],
    [63, 0.88],
    [64, 1.0],
    [65, 1],
    [66, 0.84],
    [67, 1],
    [68, 0.85],
    [69, 0.96],
    [70, 0.87],
    [71, 1],
    [72, 1],
    [73, 1],
    [74, 1],
    [75, 1],
    [76, 0.81],
    [77, 1],
    [78, 0.84],
    [79, 0.99],
    [80, 0.82],
    [81, 1],
    [82, 0.75],
    [83, 1],
    [84, 1],
    [85, 1],
    [86, 0.81],
    [87, 1],
    [88, 1],
    [89, 0.71],
    [90, 1],
    [91, 0.99],
    [92, 0.86],
    [93, 0.97],
    [94, 0.94],
    [95, 0.81],
    [96, 0.82],
    [97, 0.93],
    [98, 0.99],
    [99, 0.85],
    [100, 0.56],
    [101, 0.81],
    [102, 0.71],
    [103, 0.71],
    [104, 0.67],
    [105, 0.53],
    [106, 0.88],
    [107, 1.0],
    [108, 0.99],
    [109, 0.76],
    [110, 0.82],
    [111, 0.85],
    [112, 1],
    [113, 1],
    [114, 0.95],
    [115, 0.31],
    [116, 0.3],
    [117, 0],
    [118, 0.31],
    [119, 0.3],
    [120, 0.3],
    [121, 0.29],
    [122, 0.2],
    [123, 0.23],
    [124, 0.35],
    [125, 0.44],
    [126, 0.21],
    [127, 0],
    [128, 0.35],
  ],
  [
    [1, 0.44],
    [2, 0.44],
    [3, 0.33],
    [4, 0.28],
    [5, 0],
    [6, 0.19],
    [7, 0.16],
    [8, 0.36],
    [9, 0.32],
    [10, 0],
    [11, 0.05],
    [12, 0],
    [13, 0.07],
    [14, 0.14],
    [15, 0.31],
    [16, 0.2],
    [17, 0],
    [18, 0.23],
    [19, 0.71],
    [20, 0.87],
    [21, 0.79],
    [22, 1],
    [23, 1],
    [24, 1],
    [25, 1.0],
    [26, 0.88],
    [27, 0.77],
    [28, 0.94],
    [29, 1],
    [30, 1],
    [31, 1],
    [32, 0.88],
    [33, 0.95],
    [34, 1],
    [35, 0.95],
    [36, 0.98],
    [37, 0.96],
    [38, 1],
    [39, 1],
    [40, 1],
    [41, 1],
    [42, 1],
    [43, 0.76],
    [44, 0.82],
    [45, 1],
    [46, 0.88],
    [47, 0.94],
    [48, 0.78],
    [49, 0.88],
    [50, 1],
    [51, 1],
    [52, 1],
    [53, 0.98],
    [54, 0.89],
    [55, 1],
    [56, 1],
    [57, 0.82],
    [58, 1],
    [59, 0.84],
    [60, 0.89],
    [61, 1],
    [62, 1],
    [63, 0.87],
    [64, 1],
    [65, 0.81],
    [66, 1],
    [67, 1],
    [68, 1],
    [69, 0.82],
    [70, 0.97],
    [71, 0.86],
    [72, 0.95],
    [73, 0.86],
    [74, 1],
    [75, 1],
    [76, 0.97],
    [77, 1],
    [78, 0.95],
    [79, 1],
    [80, 0.98],
    [81, 0.96],
    [82, 0.86],
    [83, 0.99],
    [84, 1],
    [85, 0.96],
    [86, 0.89],
    [87, 1],
    [88, 0.79],
    [89, 0.86],
    [90, 0.76],
    [91, 0.93],
    [92, 1],
    [93, 1],
    [94, 0.8],
    [95, 1],
    [96, 1],
    [97, 1],
    [98, 1],
    [99, 0.86],
    [100, 0.57],
    [101, 0.46],
    [102, 0.61],
    [103, 0.65],
    [104, 0.9],
    [105, 0.75],
    [106, 0.87],
    [107, 0.91],
    [108, 1],
    [109, 0.79],
    [110, 1],
    [111, 1],
    [112, 0.91],
    [113, 0.86],
    [114, 0.85],
    [115, 0.33],
    [116, 0.2],
    [117, 0],
    [118, 0.21],
    [119, 0.28],
    [120, 0.27],
    [121, 0.3],
    [122, 0.07],
    [123, 0.36],
    [124, 0.22],
    [125, 0.22],
    [126, 0.24],
    [127, 0],
    [128, 0.31],
  ],
  [
    [1, 0.23],
    [2, 0.31],
    [3, 0.26],
    [4, 0.21],
    [5, 0.15],
    [6, 0],
    [7, 0.3],
    [8, 0.25],
    [9, 0.28],
    [10, 0],
    [11, 0.12],
    [12, 0.1],
    [13, 0],
    [14, 0.3],
    [15, 0.37],
    [16, 0.06],
    [17, 0.26],
    [18, 0.15],
    [19, 0.81],
    [20, 1],
    [21, 0.87],
    [22, 0.82],
    [23, 0.86],
    [24, 0.78],
    [25, 0.93],
    [26, 0.94],
    [27, 1],
    [28, 0.78],
    [29, 0.74],
    [30, 1],
    [31, 1],
    [32, 1],
    [33, 0.77],
    [34, 0.82],
    [35, 0.89],
    [36, 1],
    [37, 0.79],
    [38, 0.94],
    [39, 0.96],
    [40, 1],
    [41, 1],
    [42, 1],
    [43, 0.88],
    [44, 0.97],
    [45, 0.76],
    [46, 0.77],
    [47, 1],
    [48, 0.93],
    [49, 1.0],
    [50, 0.82],
    [51, 0.93],
    [52, 0.88],
    [53, 1],
    [54, 1.0],
    [55, 0.86],
    [56, 1],
    [57, 0.86],
    [58, 1],
    [59, 1],
    [60, 0.98],
    [61, 0.83],
    [62, 0.95],
    [63, 0.84],
    [64, 0.76],
    [65, 0.76],
    [66, 0.9],
    [67, 1],
    [68, 1],
    [69, 0.87],
    [70, 1],
    [71, 1],
    [72, 1],
    [73, 1.0],
    [74, 1],
    [75, 0.95],
    [76, 0.88],
    [77, 0.93],
    [78, 0.78],
    [79, 1],
    [80, 1],
    [81, 0.9],
    [82, 0.9],
    [83, 0.83],
    [84, 1],
    [85, 0.74],
    [86, 0.68],
    [87, 0.87],
    [88, 0.79],
    [89, 1],
    [90, 0.87],
    [91, 0.91],
    [92, 1],
    [93, 0.92],
    [94, 0.85],
    [95, 1],
    [96, 0.9],
    [97, 0.87],
    [98, 1],
    [99, 0.95],
    [100, 0.83],
    [101, 0.53],
    [102, 0.75],
    [103, 0.95],
    [104, 0.79],
    [105, 0.56],
    [106, 0.59],
    [107, 0.97],
    [108, 1],
    [109, 0.82],
    [110, 0.81],
    [111, 0.99],
    [112, 0.92],
    [113, 0.91],
    [114, 1],
    [115, 0.2],
    [116, 0.22],
    [117, 0.2],
    [118, 0.31],
    [119, 0],
    [120, 0.2],
    [121, 0.44],
    [122, 0.18],
    [123, 0.21],
    [124, 0.4],
    [125, 0.21],
    [126, 0.18],
    [127, 0.22],
    [128, 0.33],
  ],
  [
    [1, 0.27],
    [2, 0.39],
    [3, 0.15],
    [4, 0.39],
    [5, 0.06],
    [6, 0.24],
    [7, 0.43],
    [8, 0.49],
    [9, 0.38],
    [10, 0.1],
    [11, 0.29],
    [12, 0.28],
    [13, 0.14],
    [14, 0.32],
    [15, 0.26],
    [16, 0.24],
    [17, 0.3],
    [18, 0.12],
    [19, 0.79],
    [20, 0.86],
    [21, 0.81],
    [22, 0.98],
    [23, 0.8],
    [24, 0.94],
    [25, 1],
    [26, 1],
    [27, 0.9],
    [28, 1],
    [29, 0.98],
    [30, 1.0],
    [31, 0.84],
    [32, 1.0],
    [33, 0.82],
    [34, 1],
    [35, 0.71],
    [36, 1],
    [37, 0.74],
    [38, 1],
    [39, 1],
    [40, 1],
    [41, 0.91],
    [42, 0.8],
    [43, 0.95],
    [44, 0.91],
    [45, 0.75],
    [46, 0.82],
    [47, 1],
    [48, 0.8],
    [49, 1],
    [50, 0.85],
    [51, 1],
    [52, 0.89],
    [53, 1],
    [54, 0.96],
    [55, 1],
    [56, 1],
    [57, 0.8],
    [58, 0.86],
    [59, 1],
    [60, 0.85],
    [61, 1],
    [62, 0.79],
    [63, 0.93],
    [64, 1],
    [65, 1.0],
    [66, 1],
    [67, 1],
    [68, 0.95],
    [69, 0.82],
    [70, 1],
    [71, 0.9],
    [72, 0.8],
    [73, 0.91],
    [74, 0.91],
    [75, 0.98],
    [76, 1],
    [77, 0.99],
    [78, 0.79],
    [79, 0.84],
    [80, 0.94],
    [81, 1],
    [82, 0.76],
    [83, 0.82],
    [84, 0.94],
    [85, 0.94],
    [86, 0.77],
    [87, 1],
    [88, 1],
    [89, 0.91],
    [90, 0.81],
    [91, 0.8],
    [92, 1],
    [93, 0.92],
    [94, 0.95],
    [95, 0.84],
    [96, 0.91],
    [97, 0.96],
    [98, 1],
    [99, 0.77],
    [100, 0.63],
    [101, 0.75],
    [102, 0.53],
    [103, 0.84],
    [104, 0.86],
    [105, 0.67],
    [106, 0.93],
    [107, 0.95],
    [108, 1],
    [109, 0.73],
    [110, 0.98],
    [111, 1],
    [112, 0.94],
    [113, 0.83],
    [114, 0.89],
    [115, 0.16],
    [116, 0.31],
    [117, 0.13],
    [118, 0.4],
    [119, 0.12],
    [120, 0.15],
    [121, 0.16],
    [122, 0.04],
    [123, 0.21],
    [124, 0.24],
    [125, 0.54],
    [126, 0.25],
    [127, 0],
    [128, 0.0],
  ],
];

export default dataSignals;
