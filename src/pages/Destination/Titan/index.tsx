import { Destination } from '../DestinationComponent';
import titanImg from '../../../assets/destination/image-titan.webp'

export function Titan() {
  return (
    <Destination
      title="TITAN"
      subtitle="04 PICK YOUR DESTINATION"
      image={titanImg}
      description="The only moon known to have a dense 
      atmosphere other than Earth, Titan is a home 
      away from home (just a few hundred degrees colder!).
       As a bonus, you get striking views
        of the Rings of Saturn."
      distance="31.6 BIL. km"
      travelTime="7 YEARS"
    />
  );
}
