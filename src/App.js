import IMG from './assets/images/illustration-sign-up-desktop.svg'
import IMGMobile from './assets/images/illustration-sign-up-mobile.svg'
import iconlist from './assets/images/icon-list.svg'
import iconsuccess from './assets/images/icon-success.svg'
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [currentPage, setCurrentPage] = useState('form');

  // will go back to the form if the success message dismiss button is clicked
  const handleDismiss  = () => {
    setCurrentPage('form');

    // clear input email when form is submitted;
    setEmail('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  }

  const formSubmit = (e) => {
    e.preventDefault(); 
    
    //if form is validated, it will show success message
    if (checkEmail(email)) {
      setCurrentPage('popup');
    }
  }

  function checkEmail (email) {
    if (email === ''){
      setEmailError('Please input your email');
      return false;
    } 

    if (!email.match(/^([A-Za-z0-9_.-])+@([A-Za-z])+\.([A-Za-z]{2,4})$/)){
      setEmailError('Valid email required');
      return false;
    }
    setEmailError('');
    return true;
  }

  return (
    <main className='font-roboto min-h-[100dvh] w-full bg-Charcoal-Grey flex items-center justify-center md:p-6 '>
      {currentPage === 'form' ? (
        <Form email={email} handleChange={handleChange} emailError={emailError} formSubmit={formSubmit}/>
      ) : (
        <Popup email={email} handleDismiss={handleDismiss}/>
      )}
    </main>
  );
}

export default App;


const Form = ({ email, handleChange, emailError, formSubmit }) => {

  return ( 
    <form onSubmit={formSubmit}>
      <div className='max-md:h-[100dvh] max-md:w-[100dvw] max-w-[928px] text-Dark-Slate-Grey bg-white flex max-md:flex-col gap-x-6 md:p-6 md:rounded-[36px] md:shadow-2xl'>
        <div className='p-6 lg:px-10 flex flex-col gap-y-[42px] justify-center max-md:order-2 '>
          <div className='flex flex-col gap-y-6 '>
            <h1 className='text-40 lg:text-56 font-bold'>Stay updated!</h1>
            <p>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className='flex flex-col gap-y-2.5'>
              {Data.map((list) => (
              <div key={list.text} className='flex gap-x-4 items-start'>
                <img src={list.icon} alt='icon-list' className='w-[21px] h-[21px]'/> 
                <p>{list.text}</p>
              </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between'>
                <label className='text-[12px] leading-4 font-bold'>Email address</label>
                <label className='text-[12px] leading-4 font-bold text-Tomato'>{emailError}</label>
              </div>
              <input 
                type='text' 
                name='email'
                placeholder='email@company.com'
                className={`rounded-lg px-6 py-4 outline outline-1 outline-Grey focus:outline-Dark-Slate-Grey focus:text-Dark-Slate-Grey ${emailError ? 'bg-Light-Tomato outline-Tomato text-Tomato ' : ''}`}
                value={email}
                onChange={handleChange}
              />
            </div>
            <button className='bg-Dark-Slate-Grey text-white px-6 py-4 w-full rounded-lg font-bold hover:bg-gradient-to-r from-Dark-Tomato to-Tomato hover:shadow-2xl focus:bg-gradient-to-r from-Dark-Tomato to-Tomato focus:shadow-2xl'>
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className='min-h-full lg:min-w-[400px] max-md:hidden '>
          <img src={IMG} alt='img' className='h-full w-full object-cover rounded-xl'/>
        </div>
        <div className='md:hidden'>
          <img src={IMGMobile} alt='img' className='h-full w-full '/>
        </div>
      </div>
    </form>
  );
}

const Popup = ({ email, handleDismiss }) => {
  return ( 
    <div className='max-sm:h-[100dvh] max-sm:w-full bg-white sm:rounded-[36px] px-6 pt-[149px] pb-10 sm:px-16 sm:pt-12 sm:pb-16 md:shadow-2xl flex flex-col justify-between gap-y-10 '>
      <div className='flex flex-col gap-y-10'>
        <img src={iconsuccess} alt='icon' className='w-16 h-16'/>
        <div className='max-w-[375px] flex flex-col gap-y-6 text-Dark-Slate-Grey'>
          <h1 className='text-40 sm:text-56 font-bold'>Thanks for subscribing!</h1>
          <p className=''>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        </div>
      </div>
      <button 
        onClick={handleDismiss}
        className='bg-Dark-Slate-Grey text-white px-6 py-4 w-full rounded-lg font-bold hover:bg-gradient-to-r from-Dark-Tomato to-Tomato hover:shadow-2xl focus:bg-gradient-to-r from-Dark-Tomato to-Tomato focus:shadow-2xl'>
        Dismiss message
      </button>
    </div>
  )
}

//list of data
const Data = [
  {icon: iconlist, text: 'Product discovery and building what matters'},
  {icon: iconlist, text: 'Measuring to ensure updates are a success'},
  {icon: iconlist, text: 'And much more!'},
]