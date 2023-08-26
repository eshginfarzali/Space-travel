import {Destination} from '../DestinationComponent'
import europaImg from '../../../assets/destination/image-europa.webp';
export function Europa() {
  return (
    <Destination
      title="EUROPA"
      subtitle="03 PICK YOUR DESTINATION"
      image={europaImg}
      description="The smallest of the four Galilean moons
       orbiting Jupiter, Europa is a winter lover’s dream.
        With an icy surface, it’s perfect for a bit of ice skating, curling,
       hockey, or simple relaxation in your snug wintery cabin."
      distance="628 MIL. km"
      travelTime="3 YEARS"
    />
  );
}