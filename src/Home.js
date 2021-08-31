import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" alt="this is img" />
             <div>
                 <h2 className="h1_tag">The best ever self improvement books </h2> 
                  <hr></hr>
             
                 <div className="home_row">
                 <Product   id="12321341" title='Life is What You Make It' price={199.00} image="https://images-na.ssl-images-amazon.com/images/I/41ekOc6O1ML._SX311_BO1,204,203,200_.jpg" rating={3}/>
                      <Product   id="123210341" title='Time Travelling with a Hamster ' price={499.00} image="https://images-na.ssl-images-amazon.com/images/I/51YMwTtmTxL._SX324_BO1,204,203,200_.jpg" rating={3}/>
                      <Product   id="123213131" title='You Can' price={169.00} image="https://images-na.ssl-images-amazon.com/images/I/51+R3tGEsvL._SX321_BO1,204,203,200_.jpg" rating={5}/>
                      <Product   id="123213031" title='Because Life is a Gift: Stories of Hope, Courage and Perseverance' price={199.00} image="https://images-na.ssl-images-amazon.com/images/I/41nfn5VP2EL._SX320_BO1,204,203,200_.jpg" rating={5}/>
                 </div>
              </div>   

             <div>
                 <h2 className="h1_tag">Top rated electronics accessories </h2> 
                  <hr></hr>
               <div className="home_row">
                
                 <Product 
                     id="123213411"
                   title='Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black'
                   price={700} image="https://images-eu.ssl-images-amazon.com/images/I/31N2n4tGvGL._AC_SX184_.jpg" 
                   rating={5}
                  />
                 
                 
                  <Product
                   id="1232134231"
                   title='AKG Headphone Earphones for Samsung Galaxy Note 10+ plus Earphone Wired Stereo Deep Bass Head Hands-free Headset Earbud With Built in-line Mic, Call Answer/End Button, Music 3.5mm Aux Audio Jack (AKG 1, Black)'
                   price={545.00} image="https://images-eu.ssl-images-amazon.com/images/I/41%2BVhZ2ojlL._SX300_SY300_QL70_FMwebp_.jpg"
                   rating={4}

                   />
                    <Product
                   id="1232130231"
                   title='Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)'
                   price={2999} image="https://images-eu.ssl-images-amazon.com/images/I/41OQy6CvBeL._SX300_SY300_QL70_FMwebp_.jpg"
                   rating={3}

                   />
                
                </div>
              </div>  
            
            
           <div>
                 <h2 className="h1_tag">Amazon Fashion </h2> 
                  <hr></hr>
             <div className="home_row">
               <Product 
                     id="123213411"
                   title='Reebok Women`s Stride Runner W Running Shoe'
                   price={1890.00} image="https://images-na.ssl-images-amazon.com/images/I/81LxFBLlJkS._UL1500_.jpg" 
                   rating={5}
               />
               <Product 
                   id="123213401"
                   title='Sonata Busy Bees Analog Blue Dial Girl`s Watch-8164NL03'
                    price={2369.00} image="https://images-na.ssl-images-amazon.com/images/I/61NXa6gFW3L._UL1500_.jpg"
                    rating={5}
               />
               <Product
                  id="12321341231"
                title='Puma Women`s Regular T-Shirt'
                 price={909.00} image="https://images-na.ssl-images-amazon.com/images/I/71baeBKghdL._UL1500_.jpg"
                 rating={5}

                />
                <Product
                  id="12321342231"
                title='Puma Women`s Regular T-Shirt'
                 price={599.00} image="https://m.media-amazon.com/images/I/41ceZamObhL._AC_SR160,200_.jpg"
                 rating={5}

                />
                 <Product
                  id="12321344231"
                title='SWISSTONE Analogue Women`s Watch (Black Dial Black Colored Strap)'
                 price={699.00} image="https://images-na.ssl-images-amazon.com/images/I/61mBMzy4kuL._UL1440_.jpg"
                 rating={5}

                />
             </div>
             </div>

             <div>
                 <h2 className="h1_tag"> Bags,Wallets & Luggage</h2> 
                  <hr></hr>
                <div className="home_row">
                  <Product
                     id="12321013451"
                     title=' LEADERACHI Men`s Leather Wallet (Brown, M - Trifold)'
                     price={597.00}  image="https://images-na.ssl-images-amazon.com/images/I/81czasyuY0L._SL1500_.jpg"
                     rating={5}

               />
               <Product
                     id="1232014341"
                     title=' Leaderachi Vintage Hunter Leather Wallet for Men '
                     price={747.00}  image="https://images-na.ssl-images-amazon.com/images/I/613k9jSLHAL._SL1500_.jpg"
                     rating={3}

               />
                <Product
                     id="1232101341"
                     title=' Gear Carryon Backpack Black- Blue '
                     price={297.00}  image="https://images-na.ssl-images-amazon.com/images/I/81KHT04JtvL._SL1500_.jpg"
                     rating={5}

               />
                <Product
                     id="1232012341"
                     title=' Safari Ray Polycarbonate 65 cms Midnight Blue Hardsided Check-in Luggage '
                     price={2699}  image="https://images-na.ssl-images-amazon.com/images/I/91ZW6yUsj3L._SL1500_.jpg"
                     rating={4}

               />
                <Product
                     id="33333333"
                     title='Safari Polyester 75 cms Blue Softsided Check-in Luggage'
                     price={3333}  image="https://images-na.ssl-images-amazon.com/images/I/61IAEcckn7L._SL1500_.jpg"
                     rating={4}

               />
             </div>
            </div>
            </div>
      
       </div>    
           
    );
    
    

}

export default Home;