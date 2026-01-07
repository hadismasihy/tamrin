/*var obj ={
p1:{
    p2: [
{},
{},
{
    t1:{name:"hadis"}
},
    ]
}
};
console.log(obj.p1.p2[2].t1.name);

var companyData={
    employee:[
        {contact:{email:"x@gmail.com"}}
    ],
    location:{branches:[{focus:["engineering" , "sales"]}]
    },
    product : {
        flagshit: { 
            version:[
                {pricing:{enterprise:999}}
            ]
        }
    }
    }

console.log(companyData.employee[0].contact.email)
console.log(companyData.location.branches[0].focus)
console.log(companyData.product.flagshit.version[0].pricing.enterprise);*/



var students = [
    {
        fullName: "alex",
        score: 12,
    },
    {
        fullName: "sam",
        score: 22,
    },
    {
        fullName: "beni",
        score: 36,
    },
]
var sum = students[0].score + students[1].score + students[2].score
if (sum > 50 ) {
    console.log("more than 50")
}

