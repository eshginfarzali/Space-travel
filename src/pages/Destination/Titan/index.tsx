import { useState, useEffect } from 'react';
import { Destination } from '../DestinationComponent';
import titanImg from '../../../assets/destination/image-titan.webp'


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

export function Titan() {
  const [titanData, setTitanData] = useState<DestinationData | null>(null);

  useEffect(() => {
    fetch('../../../../data.json')  
      .then(response => response.json())
      .then((data: Data) => {
        const titanDestination = data.destinations.find(destination => destination.name === 'TITAN');
        if (titanDestination) {
          setTitanData(titanDestination);
        }
      });
  }, []);

  return (
    <div>
      {titanData && (
        <Destination
          title={titanData.name}
          subtitlenum='04'
          subtitle="PICK YOUR DESTINATION"
          image={titanImg}
          description={titanData.description}
          distance={titanData.distance}
          travelTime={titanData.travel}
        />
      )}
    </div>
  );
}

