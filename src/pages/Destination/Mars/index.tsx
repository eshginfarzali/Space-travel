import {Destination} from '../DestinationComponent'
import marsImg from '../../../assets/destination/image-mars.webp';
export function Mars() {
  return (
    <Destination
      title="MARS"
      subtitle="02 PICK YOUR DESTINATION"
      image={marsImg}
      description="Don’t forget to pack your hiking boots. 
      You’ll need them to tackle Olympus Mons, the tallest 
      planetary mountain in our solar system. 
      It’s two and a half times the size of Everest!"
      distance="225 MIL. KM"
      travelTime="9 MONTHS"
    />
  );
}