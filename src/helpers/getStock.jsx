const stock = [
    {ID:1, Name: "Patagonia Bohemian", Tipo:"Cerveza", Precio:"1000", Img:"../assets/img/pataBohemian.png", IBU:"15"},
    {ID:2, Name: "Patagonia Amber", Tipo:"Cerveza", Precio:"1000", Img:"../assets/img/pataAmber.png" ,IBU:"20"},
    {ID:3, Name: "Bacardi Ron", Tipo:"BebidaBlanca", Precio:"2500", Img:"../assets/img/ronBacardi.png" ,ALC:20},
    {ID:4, Name: "Grey Goose Vodka", Tipo:"BebidaBlanca", Precio:"2500", Img:"../assets/img/grey_goose_vodka.jpg", ALC:25}
]
export const getStock = (e)=>{
    return new Promise((res, rej)=>{
        const condition = true
        if (condition){
            setTimeout(()=>{
                res(stock)
            }, 1000)
        }else{
            rej("no stock")
        }
    })
}

