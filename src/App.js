import React from 'react';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  const idCard = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178 / 100 + ' m',
      birth: new Date('1992-07-14').toISOString().slice(0, 10),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172 / 100 + ' m',
      birth: new Date('1988-05-11').toISOString().slice(0, 10),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const idCardMap = idCard.map((card) => (
    <IdCard
      picture={card.picture}
      firstName={card.firstName}
      lastName={card.lastName}
      gender={card.gender}
      height={card.height}
      birth={card.birth}
      key={card.lastName}
    />
  ));

  const creditCard = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white',
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the Bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: 'white',
    },
  ];

  const creditCardMap = creditCard.map((card) => (
    <CreditCard
      type={card.type}
      number={card.number}
      expirationMonth={card.expirationMonth}
      expirationYear={card.expirationYear}
      bank={card.bank}
      owner={card.owner}
      bgColor={card.bgColor}
      color={card.color}
      key={card.number}
    />
  ));

  const driverLicense = [
    {
      name: 'Travis Kalanick',
      rating: 4.2,
      img:
        'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
      car: {
        model: 'Toyota Corolla Altis',
        licensePlate: 'CO42DE',
      },
    },
    {
      name: 'Dara Khosrowshahi',
      rating: 4.9,
      img:
        'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
      car: {
        model: 'Audi A3',
        licensePlate: 'BE33ER',
      },
    },
  ];

  const driverLicenseMap = driverLicense.map((license) => (
    <DriverCard
      name={license.name}
      key={license.name}
      rating={license.rating}
      img={license.img}
      car={{
        model: license.car.model,
        licensePlate: license.car.licensePlate,
      }}
    />
  ));

  return (
    <div className="App">
      <h1>1. IdCard</h1>
      {idCardMap}

      <h1>2. Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>3. Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>4. BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>5. CreditCard</h1>
      <div className="credit-box">{creditCardMap}</div>

      <h1>6. Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>7. DriverCard</h1>
      {driverLicenseMap}

      <h1>8. LikeButton</h1>
      <LikeButton />
      <LikeButton />

      <h1>9. ClickablePicture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <h1>10. Dice</h1>
      <Dice />

      <h1>11. Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <h1>12. NumberTable</h1>
      <NumbersTable limit={12} />

      <h1>13 & 14. List and Keys - FaceBook</h1>
      <FaceBook />

      <h1>15. Form SignupPage</h1>
      <SignupPage />

      <h1>16. Lifting State Up - RGBColorPicker</h1>
      <RGBColorPicker />
    </div>
  );
}

export default App;
