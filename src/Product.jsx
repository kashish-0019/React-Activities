import "./Product.css";
import "./ProductTab.jsx";
import Price from "./Price";
function Product({title,idx}){
    let oldPrices = ["12,495", "11,900","1,599","599"];
    let newPrices = ["8.999", "9,199", "899", "278"];
    let description = [["8,000 DPI","5 Programmable Buttons"]
    ,["Intutive Surface","Designed for i Pad Pro"]
    ,["Designed for i Pad Pro","Intutive Surface"]
    ,["Wireless","Optical Orientation"]
];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
   
      
}
export default Product; 