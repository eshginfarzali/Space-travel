import { useState, useEffect } from 'react';
import { Destination } from '../DestinationComponent';
import europaImg from '../../../assets/destination/image-europa.webp'


interface DestinationData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}



interface Data {
  destinations: DestinationData[];
 
}

export function Europa() {
  const [europaData, seteuropaData] = useState<DestinationData | null>(null);

  useEffect(() => {
    fetch('../../../../data.json')  
      .then(response => response.json())
      .then((data: Data) => {
        const europaDestination = data.destinations.find(destination => destination.name === 'Europa');
        if (europaDestination) {
          seteuropaData(europaDestination);
        }
      });
  }, []);

  return (
    <div>
      {europaData && (
        <Destination
          title={europaData.name}
          subtitlenum='03'
          subtitle="PICK YOUR DESTINATION"
          image={europaImg}
          description={europaData.description}
          distance={europaData.distance}
          travelTime={europaData.travel}
        />
      )}
    </div>
  );
}

