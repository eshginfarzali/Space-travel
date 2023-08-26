import {Destination} from '../DestinationComponent'
import moonImg from '../../../assets/destination/image-moon.webp';
export function Moon() {
  return (
    <Destination
      title="MOON"
      subtitle="01 PICK YOUR DESTINATION"
      image={moonImg}
      description="See our planet as you’ve never seen 
      it before. A perfect relaxing trip away to 
      help regain perspective and come back refreshed. 
      While you’re there, take in some history by visiting the 
      Luna 2 and Apollo 11 landing sites."
      distance="384,400 KM"
      travelTime="3 DAYS"
    />
  );
}