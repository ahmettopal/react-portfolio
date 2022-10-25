import { Greetings, Skills } from '../components';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Greetings />
      <Skills />
    </div >
  );
};
