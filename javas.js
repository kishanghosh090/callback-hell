function getData(dataId,getNExtData){
    setTimeout(() =>{
        console.log("data", dataId);
        if(getNExtData){
            getNExtData();
        }
        
    },2000);
}
getData(1, () => {
    getData(2, () => {
        getData(3,() => {
            getData(4)
        })
    })
})

//promises

function asyncFun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1")
            resolve("sucess")
        },2000)
    });
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1")
            resolve("sucess")
        },4000)
    });
}

console.log("fecthing data1")
let p1 = asyncFun();
p1.then((res) =>{
    console.log(res);
    console.log("fecthing data2")
    let p2 = asyncFun2();
   p2.then((res) =>{
    console.log(res);
});

});


