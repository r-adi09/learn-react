// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
// //   if (isSent) {
// //     return <h1>Thank you!</h1>;
// //   } else {
//     // eslint-disable-next-line

//     const [message, setMessage] = useState('');
//     return (
//       !isSent ? 
//       (<form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form> )  : <h1>Thank You</h1>
//     );
//   }
// //}




import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}