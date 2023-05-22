export default function Cart(props) {
    return(
        <div className="items">
            <img src={props.img} width={"40px"} height={"40px"}/>
            <p>{props.title}</p>
        </div>
    )
}