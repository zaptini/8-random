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

for (i=0; i<8; i++) {
    console.log(sortable[i])
}

// var n0=sortable[0]
n0=parseInt(sortable[0])
n1=parseInt(sortable[1])
n2=parseInt(sortable[2])
n3=parseInt(sortable[3])
n4=parseInt(sortable[4])
n5=parseInt(sortable[5])
n6=parseInt(sortable[6])
n7=parseInt(sortable[7])


var h = document.createElement("H1");
var t = document.createTextNode("Eight random numbers are: ");
h.appendChild(t); // Append the text node to the H1 element

document.body.appendChild(h); // Append the H1 element to the document body

var h = document.createElement("H2");
var t = document.createTextNode(n0 + " " + n1 +" "+ n2 +" "+ n3 +" "+ n4 +" "+ n5 +" "+ n6 +" "+ n7 +" ");
h.appendChild(t); // Append the text node to the H2 element

document.body.appendChild(h); // Append the H1 element to the document body