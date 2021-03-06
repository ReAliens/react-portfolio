import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const contactArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cpjmmgq',
        'template_800g03b',
        form.current,
        '96jkREdNg92lkmHO_',
      )
      .then(
        () => {
          alert('Message sent done');
        },
        () => {
          alert('failed');
        },
      );
  };
  return (
    <>
      <div className="contact-page grid grid-rows-2 lg:grid-cols-2 gap-10 justify-center items-center w-full h-full px-7">
        <div className="text-zone flex flex-col lg:h-[100vh] sticky w-full justify-center top-[12%] lg:pl-28 lg:px-10 lg:ml-16 ">
          <h1>
            <AnimatedLetters
              strArr={contactArr}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Iam interested in freelance and Remote opportunities especially
            ambitious or large projects and long Contracts. However,if you have
            other request or question, don't hesitate to contact me using below
            form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap w-full h-full lg:h-[80vh] flex top-[5%] lg:top-[10%] text-center lg:items-center lg:sticky relative justify-center m-auto">
        <div className="info-map">
          Ahmed Reda,
          <br />
          Egypt,
          <br />
          Giza, El Ahram-st
          <br />
          <span>freelancers ahmedreda152@gmail.com</span>
        </div>
          <MapContainer center={[29.9803305, 31.1555563]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[29.9803305, 31.1555563]}>
              <Popup>Ahmed lives here, come over for a cup of Coffe</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default Contact;
