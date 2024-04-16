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


