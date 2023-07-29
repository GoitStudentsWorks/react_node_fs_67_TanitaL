import { OurFriendItem } from './OurFriendItem/OurFriendItem';
import { fetchSponsors } from 'service/api/apiFriend';
import { useState, useEffect } from 'react';

export const OurFriend = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      const fetch = await fetchSponsors();
      setFriend(fetch.data);
    };
    featchData().catch(console.error);
  }, []);

  return (
    <>
      <h1>Our Friend</h1>
      <ul>
        {friend.map(
          ({
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            phone,
            email,
          }) =>
            <OurFriendItem
              key={title}
              title={title}
              url={url}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              address={address}
              workDays={workDays}
              phone={phone}
              email={email}
            />
         
        )}
      </ul>
    </>
  );
};
