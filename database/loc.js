// Make a border around the municipal vicinity

var munBorder = L.polygon([
  [14.554509,121.114483],
  [14.553221,121.113539],
  [14.553263,121.113367],
  [14.553013,121.113431],
  [14.551622,121.113067],
  [14.551061,121.112230],
  [14.549379,121.110449],
  [14.548672,121.110020],
  [14.548008,121.108496],
  [14.550459,121.105471],
  [14.550791,121.105213],
  [14.552473,121.102059],
  [14.552494,121.102231],
  [14.552826,121.101844],
  [14.553387,121.101286],
  [14.553636,121.101093],
  [14.553574,121.100471],
  [14.553200,121.099312],
  [14.554716,121.098175],
  [14.555506,121.098325],
  [14.556149,121.098068],
  [14.557001,121.097875],
  [14.557811,121.098046],
  [14.558476,121.098282],
  [14.560012,121.096287],
  [14.559825,121.096437],
  [14.560116,121.096244],
  [14.560760,121.096501],
  [14.561445,121.096973],
  [14.562027,121.097553],
  [14.562318,121.097875],
  [14.562567,121.097939],
  [14.563045,121.097403],
  [14.563398,121.096716],
  [14.563938,121.095815],
  [14.564644,121.098669],
  [14.564540,121.096061],
  [14.564924,121.096233],
  [14.564550,121.099581],
  [14.564685,121.099699],
  [14.564675,121.099827],
  [14.564654,121.100128],
  [14.564571,121.100192],
  [14.564467,121.100192],
  [14.563948,121.100020],
  [14.562681,121.102585],
  [14.563491,121.103368],
  [14.562702,121.104312],
  [14.561944,121.105556],
  [14.561757,121.106029],
  [14.561861,121.106372],
  [14.562152,121.106608],
  [14.562484,121.106887],
  [14.563086,121.107273],
  [14.565578,121.105642],
  [14.566845,121.104763],
  [14.567717,121.103926],
  [14.570043,121.102359],
  [14.571622,121.101308],
  [14.572722,121.100600],
  [14.573231,121.101243],
  [14.574571,121.100364],
  [14.575609,121.102059],
  [14.576191,121.102874],
  [14.576460,121.103411],
  [14.576886,121.104387],
  [14.577353,121.104913],
  [14.577447,121.104902],
  [14.577634,121.105578],
  [14.577379,121.104977],
  [14.577421,121.104907],
  [14.577457,121.104977],
  [14.577582,121.105090],
  [14.577639,121.105278],
  [14.577665,121.105433],
  [14.577649,121.105519],
  [14.577618,121.105621],
  [14.577629,121.105744],
  [14.577717,121.105878],
  [14.577961,121.106029],
  [14.578153,121.106195],
  [14.578371,121.106345],
  [14.578568,121.106495],
  [14.578667,121.106704],
  [14.578719,121.107139],
  [14.578760,121.107354],
  [14.578823,121.107568],
  [14.578885,121.107793],
  [14.578916,121.107917],
  [14.578968,121.108029],
  [14.579207,121.108346],
  [14.579524,121.108571],
  [14.580012,121.108775],
  [14.580437,121.108936],
  [14.581076,121.109145],
  [14.581273,121.109070],
  [14.581528,121.108936],
  [14.582234,121.109092],
  [14.582576,121.109000],
  [14.582727,121.108743],
  [14.583018,121.108721],
  [14.583262,121.108480],
  [14.583677,121.108416],
  [14.583776,121.108217],
  [14.583936,121.108185],
  [14.584071,121.108292],
  [14.584180,121.108335],
  [14.584279,121.108249],
  [14.584414,121.108271],
  [14.584471,121.108233],
  [14.584736,121.108249],
  [14.585058,121.108298],
  [14.585234,121.108351],
  [14.585398,121.108400],
  [14.585613,121.108266],
  [14.586021,121.108437],
  [14.586161,121.108434],
  [14.586392,121.108523],
  [14.586667,121.108555],
  [14.587059,121.108384],
  [14.587147,121.108394],
  [14.587153,121.108448],
  [14.587807,121.108778],
  [14.587513,121.108587],
  [14.587807,121.108781],
  [14.587975,121.109934],
  [14.588188,121.108979],
  [14.588624,121.109183],
  [14.588801,121.109306],
  [14.589336,121.109505],
  [14.589471,121.109612],
  [14.589803,121.109805],
  [14.590021,121.109955],
  [14.590218,121.110154],
  [14.590332,121.110325],
  [14.590431,121.110508],
  [14.590561,121.110626],
  [14.590608,121.110701],
  [14.590774,121.110814],
  [14.590919,121.110948],
  [14.591059,121.111017],
  [14.591225,121.110975],
  [14.591724,121.110757],
  [14.592938,121.110277],
  [14.593271,121.110304],
  [14.594101,121.110299],
  [14.594667,121.110138],
  [14.594766,121.109912],
  [14.594839,121.109848],
  [14.595192,121.109709],
  [14.595508,121.109548],
  [14.596105,121.109467],
  [14.596313,121.109827],
  [14.596360,121.109966],
  [14.596427,121.110041],
  [14.599687,121.108024],
  [14.602688,121.106168],
  [14.603425,121.105739],
  [14.604276,121.105438],
  [14.605190,121.105202],
  [14.608107,121.104237],
  [14.611346,121.103271],
  [14.611409,121.103325],
  [14.614928,121.102177],
  [14.616921,121.101673],
  [14.615644,121.101973],
  [14.616267,121.100085],
  [14.616309,121.099688],
  [14.615727,121.099441],
  [14.615800,121.098315],
  [14.616298,121.098261],
  [14.618032,121.098497],
  [14.618759,121.098615],
  [14.618520,121.100868],
  [14.618613,121.100997],
  [14.620441,121.101029],
  [14.619631,121.101083],
  [14.620233,121.101072],
  [14.620451,121.101029],
  [14.620067,121.106114],
  [14.620358,121.106372],
  [14.620773,121.106286],
  [14.621043,121.106179],
  [14.621167,121.105878],
  [14.621022,121.105707],
  [14.620856,121.105492],
  [14.621645,121.104784],
  [14.622019,121.104677],
  [14.622351,121.104398],
  [14.622683,121.104484],
  [14.622766,121.104612],
  [14.623181,121.104677],
  [14.623347,121.104827],
  [14.623555,121.104805],
  [14.623742,121.104612],
  [14.623950,121.104612],
  [14.624136,121.104698],
  [14.624240,121.104677],
  [14.624552,121.104140],
  [14.624738,121.103947],
  [14.625174,121.103883],
  [14.625527,121.103904],
  [14.625880,121.104076],
  [14.626233,121.103947],
  [14.626794,121.103711],
  [14.626732,121.103754],
  [14.627022,121.104162],
  [14.627624,121.104655],
  [14.627157,121.104366],
  [14.627697,121.104698],
  [14.627396,121.104559],
  [14.627593,121.104687],
  [14.627946,121.104816],
  [14.628258,121.104870],
  [14.628517,121.104913],
  [14.628818,121.104913],
  [14.629908,121.104999],
  [14.630043,121.105406],
  [14.630261,121.105428],
  [14.630427,121.105481],
  [14.630562,121.105503],
  [14.630832,121.105481],
  [14.631029,121.105460],
  [14.631185,121.105471],
  [14.631403,121.105519],
  [14.631528,121.105637],
  [14.631735,121.105723],
  [14.631922,121.105798],
  [14.632125,121.105637],
  [14.632000,121.105771],
  [14.632093,121.105675],
  [14.632187,121.105589],
  [14.632254,121.105508],
  [14.632337,121.105460],
  [14.632529,121.105438],
  [14.632670,121.105578],
  [14.632965,121.105776],
  [14.633157,121.105809],
  [14.633282,121.105857],
  [14.633339,121.105878],
  [14.633412,121.105959],
  [14.633484,121.105996],
  [14.633542,121.106077],
  [14.633739,121.106216],
  [14.633972,121.106538],
  [14.635031,121.107091],
  [14.634175,121.106726],
  [14.634310,121.106812],
  [14.634419,121.106839],
  [14.634528,121.106924],
  [14.634761,121.107059],
  [14.635078,121.107118],
  [14.634896,121.107101],
  [14.635068,121.107107],
  [14.635109,121.107128],
  [14.635234,121.107236],
  [14.635405,121.107359],
  [14.635581,121.107584],
  [14.635851,121.107718],
  [14.635929,121.107810],
  [14.635997,121.107863],
  [14.636126,121.108013],
  [14.636412,121.108410],
  [14.636256,121.108233],
  [14.636396,121.108405],
  [14.636443,121.108695],
  [14.636381,121.108947],
  [14.636360,121.109000],
  [14.636324,121.109220],
  [14.636308,121.109381],
  [14.636303,121.109515],
  [14.636308,121.109682],
  [14.636267,121.109864],
  [14.636152,121.110148],
  [14.636054,121.110336],
  [14.635856,121.110610],
  [14.635820,121.110755],
  [14.635846,121.111114],
  [14.635825,121.111109],
  [14.635882,121.111270],
  [14.635971,121.111441],
  [14.636007,121.111591],
  [14.636033,121.111677],
  [14.628766,121.111286],
  [14.630365,121.110771],
  [14.627417,121.110942],
  [14.626005,121.110599],
  [14.623970,121.107852],
  [14.621645,121.106479],
  [14.617721,121.107037],
  [14.617388,121.106887],
  [14.612509,121.112466],
  [14.614378,121.114161],
  [14.615063,121.116521],
  [14.613236,121.115513],
  [14.615395,121.119912],
  [14.614419,121.124547],
  [14.614565,121.126950],
  [14.612281,121.124225],
  [14.614835,121.131949],
  [14.612821,121.131992],
  [14.612883,121.131885],
  [14.612156,121.134095],
  [14.612364,121.133409],
  [14.611907,121.132679],
  [14.609789,121.131091],
  [14.607463,121.130705],
  [14.607194,121.130233],
  [14.607214,121.130437],
  [14.607152,121.130061],
  [14.607245,121.129589],
  [14.607515,121.129332],
  [14.607702,121.129214],
  [14.607567,121.128774],
  [14.607339,121.128645],
  [14.606197,121.128387],
  [14.606477,121.128591],
  [14.606259,121.128838],
  [14.605159,121.129922],
  [14.605024,121.130126],
  [14.604889,121.130244],
  [14.604401,121.130351],
  [14.603944,121.130383],
  [14.603664,121.130211],
  [14.603425,121.129889],
  [14.603113,121.129632],
  [14.602895,121.129557],
  [14.602657,121.129407],
  [14.601961,121.128570],
  [14.598659,121.129332],
  [14.596386,121.129482],
  [14.596365,121.130158],
  [14.596282,121.132078],
  [14.595607,121.132743],
  [14.595503,121.132829],
  [14.594932,121.131810],
  [14.594849,121.131274],
  [14.595866,121.133441],
  [14.596354,121.134417],
  [14.595399,121.133687],
  [14.597029,121.134675],
  [14.597445,121.135061],
  [14.598275,121.136498],
  [14.597912,121.136649],
  [14.596759,121.137024],
  [14.596126,121.137013],
  [14.595638,121.136863],
  [14.595337,121.136831],
  [14.594901,121.137700],
  [14.595171,121.138279],
  [14.595690,121.138709],
  [14.596998,121.139374],
  [14.597227,121.139889],
  [14.597600,121.140618],
  [14.597766,121.141155],
  [14.597870,121.141841],
  [14.597517,121.142657],
  [14.597019,121.143193],
  [14.596541,121.143451],
  [14.595960,121.143622],
  [14.595607,121.143858],
  [14.595461,121.144524],
  [14.595648,121.145103],
  [14.595877,121.145360],
  [14.595960,121.145597],
  [14.595960,121.145940],
  [14.595918,121.146626],
  [14.595731,121.147056],
  [14.595545,121.147506],
  [14.594693,121.147978],
  [14.594423,121.148343],
  [14.594112,121.148407],
  [14.593863,121.148300],
  [14.593530,121.148171],
  [14.593053,121.147957],
  [14.592762,121.148086],
  [14.592367,121.148579],
  [14.592388,121.148686],
  [14.592720,121.148815],
  [14.593115,121.148944],
  [14.593385,121.149137],
  [14.593634,121.149330],
  [14.593696,121.149395],
  [14.593738,121.149867],
  [14.593551,121.150231],
  [14.593032,121.150210],
  [14.592575,121.150210],
  [14.592118,121.150231],
  [14.591724,121.150146],
  [14.591495,121.150253],
  [14.591391,121.150446],
  [14.591267,121.150146],
  [14.591288,121.149802],
  [14.591225,121.149437],
  [14.590893,121.149137],
  [14.590415,121.149158],
  [14.590021,121.149395],
  [14.589585,121.149759],
  [14.589336,121.149802],
  [14.589979,121.148493],
  [14.589772,121.149137],
  [14.589813,121.148000],
  [14.589855,121.147614],
  [14.591038,121.144266],
  [14.590104,121.147077],
  [14.589959,121.146798],
  [14.589772,121.146777],
  [14.589585,121.146777],
  [14.589190,121.143751],
  [14.591205,121.142979],
  [14.591744,121.142442],
  [14.591952,121.142077],
  [14.592181,121.141562],
  [14.592201,121.139266],
  [14.592118,121.138494],
  [14.590852,121.138623],
  [14.589398,121.138966],
  [14.587695,121.135919],
  [14.586968,121.135168],
  [14.584726,121.134031],
  [14.583625,121.132700],
  [14.583521,121.132250],
  [14.583251,121.132078],
  [14.581569,121.131134],
  [14.582068,121.128774],
  [14.573906,121.124825],
  [14.572805,121.123710],
  [14.572494,121.122658],
  [14.572494,121.122143],
  [14.572349,121.122057],
  [14.572079,121.122100],
  [14.570666,121.121628],
  [14.570417,121.121478],
  [14.570251,121.120083],
  [14.569794,121.119761],
  [14.569317,121.119182],
  [14.569067,121.119182],
  [14.568610,121.123452],
  [14.568216,121.123345],
  [14.567946,121.123152],
  [14.568112,121.120706],
  [14.568642,121.119976],
  [14.567686,121.122733],
  [14.567717,121.119751],
  [14.567292,121.120631],
  [14.565495,121.120309],
  [14.565474,121.120684],
  [14.565957,121.120824],
  [14.563278,121.119783],
  [14.564805,121.120276],
  [14.563278,121.119810],
  [14.562863,121.118447],
  [14.562816,121.119289],
  [14.558849,121.116092],
  [14.554509,121.114504],
  [14.554510,121.114486]
]).addTo(map);

// Plot all the ordinances fetched from database/ordinances.js in the map 
	
	L.marker([14.554510,121.114486]).addTo(map).bindPopup(ord1);
	L.marker([14.567686,121.122733]).addTo(map).bindPopup(ord2);
	L.marker([14.568216,121.123345]).addTo(map).bindPopup(ord3);

