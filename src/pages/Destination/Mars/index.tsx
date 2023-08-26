import { useState, useEffect } from 'react';
import { Destination } from '../DestinationComponent';
import marsImg from '../../../assets/destination/image-mars.webp'


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

export function Mars() {
  const [marsData, setmarsData] = useState<DestinationData | null>(null);

  useEffect(() => {
    fetch('../../../../data.json')  
      .then(response => response.json())
      .then((data: Data) => {
        const marsDestination = data.destinations.find(destination => destination.name === 'Mars');
        if (marsDestination) {
          setmarsData(marsDestination);
        }
      });
  }, []);

  return (
    <div>
      {marsData && (
        <Destination
          title={marsData.name}
          subtitlenum='02'
          subtitle="PICK YOUR DESTINATION"
          image={marsImg}
          description={marsData.description}
          distance={marsData.distance}
          travelTime={marsData.travel}
        />
      )}
    </div>
  );
}

