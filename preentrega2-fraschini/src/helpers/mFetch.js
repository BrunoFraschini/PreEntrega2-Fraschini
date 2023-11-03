const products = [
    {id:1, name:"Guitarra Fender Stratocaster", category:"instrumentos", price:"1500", stock:"20", description:"texto", imageUrl: "./assets/img/FenderStrat.jpg"},
    {id:2, name:"The Dark Side of the Moon", category:"Musica", price:"20", stock:"0", description:"texto", imageUrl: "./assets/img/DarkSide.jpg"},
    {id:3, name:"Artaud", category:"Musica", price:"12", stock:"10", description:"texto", imageUrl: "./assets/img/Artaud.jpg"},
    {id:4, name:"Bateria Pearl", category:"Instrumentos", price:"3500", stock:"5", description:"texto", imageUrl: "./assets/img/BatPearl.jpg"},
    {id:5, name:"Guitarra acustica Yamaha", category:"Instrumentos", price:"500", stock:"40", description:"texto", imageUrl: "./assets/img/YamahaAcus.jpg"}
]


export const mFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(products)
        },3000)
    })
}