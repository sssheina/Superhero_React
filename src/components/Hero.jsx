import './Hero.css';

function rating(index) {
    return `<div class="rating-area">
    <input type="radio" id="star-5_${index}" name="rating_${index}" value="5" onchange="onRatingChanged(event)">
    <label for="star-5_${index}" title="Оценка «5»"></label>
    <input type="radio" id="star-4_${index}" name="rating_${index}" value="4" onchange="onRatingChanged(event)">
    <label for="star-4_${index}" title="Оценка «4»"></label>
    <input type="radio" id="star-3_${index}" name="rating_${index}" value="3" onchange="onRatingChanged(event)">
    <label for="star-3_${index}" title="Оценка «3»"></label>
    <input type="radio" id="star-2_${index}" name="rating_${index}" value="2" onchange="onRatingChanged(event)">
    <label for="star-2_${index}" title="Оценка «2»"></label>
    <input type="radio" id="star-1_${index}" name="rating_${index}" value="1" onchange="onRatingChanged(event)">
    <label for="star-1_${index}" title="Оценка «1»"></label>
  </div>`;
  }


function Hero(props) {
    return (
    <div className="superhero">
    <h2>{props.name}</h2>
    <div className="image">{props.image}</div>
    <p><span>Вселенная:</span> {props.universe}</p>
    <p><span>Альтер эго:</span> {props.alterego}</p>
    <p><span>Род деятельности:</span> {props.business}</p>
    <p><span>Друзья:</span> {props.friends}</p>
    <p><span>Суперсилы:</span> {props.superpowers}</p>
    <p><span>Подробная информация:</span> {props.details}</p>
    <p>{props.id}</p>
    <p>{rating(props.id)}</p>
    {/* {index++} */}
    </div>
     
    // index++;
    );
}

export default Hero;