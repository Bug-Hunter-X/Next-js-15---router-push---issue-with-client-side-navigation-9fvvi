// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact', undefined, { shallow: true })
      .then(() => {
        // Navigation successful
      })
      .catch(error => {
        console.error('Error during navigation:', error);
        // Handle navigation error, e.g., show an error message
      });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
