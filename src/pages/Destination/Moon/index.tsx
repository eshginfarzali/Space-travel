import { useState, useEffect } from 'react';
import { Destination } from '../DestinationComponent';
import moonImg from '../../../assets/destination/image-moon.webp'


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

export function Moon() {
  const [moonData, setmoonData] = useState<DestinationData | null>(null);

  useEffect(() => {
    fetch('../../../../data.json')  
      .then(response => response.json())
      .then((data: Data) => {
        const moonDestination = data.destinations.find(destination => destination.name === 'MOON');
        if (moonDestination) {
          setmoonData(moonDestination);
        }
      });
  }, []);

  return (
    <div>
      {moonData && (
        <Destination
          title={moonData.name}
          subtitlenum='01'
          subtitle="PICK YOUR DESTINATION"
          image={moonImg}
          description={moonData.description}
          distance={moonData.distance}
          travelTime={moonData.travel}
        />
      )}
    </div>
  );
}

