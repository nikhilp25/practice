const cart = ["Phone","Books","Tablet"];

let promise = createOrder(cart);

let pp=async()=>{
    let ans=await promise;
    console.log(ans);
}

pp();


function createOrder(cart){
    const pr=new Promise((resolve,reject)=>{
        if(!validOrder(cart)){
            const err=new Error("This is not valid");
            reject(err);
        }
        let res=[];
        for(let i=0;i<cart.length;i++){
            let ans={
                id:i+cart[i].length,
                name:cart[i]
            }
            res.push(ans);
        }
        if(res.length>0){
            resolve(res);
        }
    });
    return pr;
}

 function validOrder(cart){    
    if(cart.length>0){
        return true;
    }
    return false;
}