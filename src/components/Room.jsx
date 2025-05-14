
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
const {id} = useParams();

const ref=useRef(null);

     let myMeeting = async (element) => {
    
      const appID =251687079 ;
      const serverSecret = "c2ba385e56cc6a292cd7ba13a1e977a2";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),  'prvRoom');
     
            const zp = ZegoUIKitPrebuilt.create(kitToken);


        zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:5173/room/${id}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONOneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
     }

useEffect(() => {
  myMeeting(ref.current);
}, [id])


  return (
    <div ref={ref}>
        video call id
    </div>
  )
}

export default Room