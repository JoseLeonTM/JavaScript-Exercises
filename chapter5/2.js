/**
 * Created by Jose Leon on 2/15/2016.
 */
bind =function(context,method){
    return function(){
        return context[method].apply(context,[document.getElementById("search").value]);
    }
};
var building= [
        first= [
            'first',
            office1=[
                'office 1',
                equipment=[
                    'computer1',
                    'computer2',
                    'computer3',
                    'computer4',
                    'printer1',
                    'scanner1',
                    'fax1',
                    'telephone1'
                ],
                users=[
                    'Aemon',
                    'Grenn',
                    'Pyp',
                    'Edd'
                ]
            ],
            office2=[
                'office 2',
                equipment=[
                    'computer5',
                    'computer6',
                    'computer7',
                    'computer8',
                    'printer2',
                    'scanner2',
                    'fax2',
                    'telephone2'
                ],
                users=[
                    'Jaime',
                    'Meryn',
                    'Oswald',
                    'Barristan',
                ]
            ]
        ],
        second=[
            'second',
            office3=[
                'third office 3',
                equipment=[
                    'computer9',
                    'computer10',
                    'computer11',
                    'computer12',
                    'printer3',
                    'scanner3',
                    'fax3',
                    'telephone3'
                ],
                users=[
                    'Jon',
                    'Danaerys',
                    'Tyrion',
                    'Arya'
                ]
            ],
            office4=[
                'office 4',
                equipment=[
                    'computer13',
                    'computer14',
                    'computer15',
                    'printer4',
                    'scanner4',
                    'fax4',
                    'telephone4'
                ],
                    users=[
                        'Luwin',
                        'Pycelle',
                        'Qyburn'
                    ]
                ]
        ],
        third=[
            'third',
            office5=[
                'office 5',
                equipment=[
                    'computer16',
                    'computer17',
                    'computer18',
                    'computer19',
                    'printer5',
                    'scanner5',
                    'fax5',
                    'telephone5'
                ],
                users=[
                    'Jagho',
                    'Jiqqui',
                    'Irri',
                    'Jorah'
                ]
            ],
            office6=[
                'office 6',
                equipment=[
                    'computer20',
                    'computer21',
                    'computer22',
                    'computer23',
                    'printer6',
                    'scanner6',
                    'fax6',
                    'telephone6'
                ],
                users=[
                    'Aerys',
                    'Robert',
                    'Joffrey',
                    'Tommen'
                ]
            ]
        ]
];
var techSupport= {
    find: function(target){
        if(!find.stored) find.stored={};
        if(find.stored[target]!=null) {
            console.log("Using a saved value");
            return find.stored[target];
        }
            for (var a = 0; a < building.length; a++) {
                for (var b = 1; b < building[a].length; b++) {
                    for (var c = 0; c < building[a][b][1].length; c++) {
                        if (building[a][b][1][c] == target) {
                            find.stored[target]= target + " is in the " + building[a][b][0] + " in the " + building[a][0] + " floor.";
                            document.getElementById("result2").innerHTML = find.stored[target];
                            return ;
                        }
                    }
                    for (c = 0; c < building[a][b][1].length; c++) {
                        if (building[a][b][2][c] == target) {
                            find.stored[target]= target + " is in the " + building[a][b][0] + " in the " + building[a][0] + " floor.";
                            document.getElementById("result2").innerHTML = find.stored[target];
                            return ;
                        }
                    }
                }
            }
        find.stored[target]= "The target is not in the building";
        document.getElementById("result2").innerHTML = find.stored[target];
    }
};

document.getElementById("Title2").innerHTML = "Find a user or a piece of equipment";

var Find = document.getElementById("find");
    Find.addEventListener('click',bind(techSupport,"find"),false);