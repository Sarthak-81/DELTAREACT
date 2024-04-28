import "./Product.css";
import Price from "./Price";
function Product({title, idx}){
    let oldPrice = ["10,000", "20,000", "30,000", "12,000"];
    let newPrice = ["8,000", "17,000", "26,000", "8,999"];  
    let description = [
        ["Best to use", "In the market"], ["Think different", "By Apple"], ["Get the vibe", "Take Control"], ["Great Music", "Feel the vibe"]
    ];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;