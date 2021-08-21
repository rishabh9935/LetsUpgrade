

function Service(props){

    return(
        <div className = "card">
           <div className = "card-img">
               <img src = {props.img} className= "card-image"/>
           </div>
           <h1 className="card-title">{props.title}</h1>
           <h3 className="card-title">{props.subtitle}</h3>
           <p className = "card-description">
               {props.description}
           </p> 
           <p className = "btn-parent">
                <button className = "card-btn">
                    Read More
                </button>
            </p>
        </div>
    );
}

export default Service;