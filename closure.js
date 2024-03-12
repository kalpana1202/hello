// closure: closure gives you access to an outer function from an inner function.

// function outfun(){
//     let outvar="hello"
//     console.log(outvar)


//     function infun(){
//         let invar="ironman"
//         console.log(outvar,invar)

//     }
//      return infun
// }
// res=outfun()
// res()



// function add(sclfee){
//     console.log("school fees is: ",sclfee)

//     return function(vanfee){
//         console.log("van fees is: ",vanfee)
//         let totalfee = sclfee + vanfee;
//         // console.log("totalfees is: ",totalfee)
//         return totalfee
//     }
// }


// res=add(12000)
// total=res(450)
// console.log("totalfee is: ",total)
