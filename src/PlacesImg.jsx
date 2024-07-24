export default function PlacesImg({place,index=0,className=null}) {
    console.log(place);
    if(!place.photos?.length){
        return '';
    }

    
    if(!className){
        className = 'object-cover';
    }
    return(
        <img className={className} src={'https://airbnb-api-xpe7.onrender.com/uploads/'+place.photos[index]} alt="" />

    );
}