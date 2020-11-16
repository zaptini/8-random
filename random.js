//pieci skaitļi līdz 35
var cipari=[]
let rnd = 0
for (var i=0; i<9000000; i++) {
    rnd = Math.floor(Math.random()*65+1);
    cipari.push(rnd);
    };

a = cipari
result = { };
for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
};
// console.log(result)

var sortable = [];
for (var vehicle in result) {
    sortable.push([vehicle, result[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});

// console.log(sortable)

var objSorted = {}
sortable.forEach(function(item){
    objSorted[item[0]]=item[1]
})

sortable.reverse()

// for (i=0; i<8; i++) {
//     console.log(sortable[i])
// }


n0=parseInt(sortable[0])
n1=parseInt(sortable[9])
n2=parseInt(sortable[21])
n3=parseInt(sortable[17])
n4=parseInt(sortable[1])

//2 skaitļi līdz 10
var syortable = []
var cyipari=[]
let rynd = 0
for (var i=0; i<9000000; i++) {
    rnd = Math.floor(Math.random()*10+1);
    cyipari.push(rnd);
    };

a = cyipari
ryesult = { };
for(var i = 0; i < a.length; ++i) {
    if(!ryesult[a[i]])
        ryesult[a[i]] = 0;
    ++ryesult[a[i]];
};
// console.log(result)

var syrtable = [];
for (var vyehicle in ryesult) {
    syortable.push([vyehicle, ryesult[vyehicle]]);
}

syortable.sort(function(a, b) {
    return a[1] - b[1];
});

// console.log(sortable)

var objSorted = {}
syortable.forEach(function(item){
    objSorted[item[0]]=item[1]
})

syortable.reverse()

// for (zi=0; zi<8; zi++) {
//     console.log(syortable[zi])
// }


ny0=parseInt(syortable[0])
ny1=parseInt(syortable[4])

//Izvade uz ekrānu

var h = document.createElement("H1");
var t = document.createTextNode("Lucky numbers are: ");
h.appendChild(t); 
document.body.appendChild(h); 

var hi = document.createElement("H2");
var ti = document.createTextNode(n0 + " " + " | " + " " + n1 + " " + " | " + " " + n2 + " " + " | " + " " + n3 + " " + " | " + " " + n4 +" ");
hi.appendChild(ti); 
document.body.appendChild(hi); 


// document.body.appendChild(h);


var hy = document.createElement("H3");
var ty = document.createTextNode(ny0 + " " + " | " + " " + ny1 +" ");
hy.appendChild(ty); 
document.body.appendChild(hy); 

