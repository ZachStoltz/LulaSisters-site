/* eslint-disable react/jsx-pascal-case */
import FAQ from './FAQ.jsx';
import Helmet from 'react-helmet';
import React from 'react';
import { sendOutboundEvent, setOgCommons } from '../helpers';

export default () => (
  <section id="faq">
    <Helmet
      title="FAQ - LuLaSisters"
      meta={[
        ...setOgCommons('frequently-asked'),
      ]}
    />
    <div className="wrapper">
      <div>
        <h2>Frequently Asked Questions</h2>
        <p className="container">
          Are you thinking about joining the wonderful world
          of LuLaRoe consulting? Below are some of the most
          frequently asked questions, both basic and consultant
          specific.
        </p>
      </div>
      <div className="container">
        <h5>The Basics:</h5>
      </div>
      <FAQ
        question="What is LuLaRoe?"
        answer="An exclusive clothing line designed to
        fit women of all ages, sizes, and shapes. LuLaRoe
        clothing is sold by independent business owners at
        pop-up boutiques, private online shopping groups,
        and other events. These clothes cannot be purchased
        anywhere other than with a consultant."
      />
      <FAQ
        question='Where does the name "LuLaRoe" come from?'
        answer="The founder’s granddaughters; Lucy, Lola, and Monroe."
      >
        <img src="/static/style/img/granddaughters.jpeg" alt="LuLaRoe's granddaughters" />
      </FAQ>

      <FAQ
        question="How do you pronounce LuLaRoe?"
        answer="Loo-Luh-Row"
      />
      <FAQ
        question="When was LuLaRoe founded?"
        answer="May 2013"
      />
      <FAQ
        question="Who founded LuLaRoe?"
        answer="Mark and Deanne Stidham (a truly inspiring and GIVING couple!)"
      >
        <img src="/static/style/img/founders.jpg" alt="LuLaRoe's founders" />
      </FAQ>
      <FAQ
        question="What is LuLaRoe clothing comparable to?"
        answer="LuLaRoe is comparable to Anthropology"
      />
      <FAQ
        question="What types of clothing are available?"
        answer="All types! Dresses, skirts, leggings, tunics, tops, you name it! All items have varying sleeve lengths, dress/skirt lengths, fabrics and prints. There is definitely something for everyone. Sizes run from size 2 in kids to 3X in adults."
      >
        <img style={{ width: '100%' }} src="/static/style/img/lulagroup.jpg" alt="LuLaRoe clothing types" />
      </FAQ>
      <FAQ
        question="Why do the clothes have names of people?"
        answer="It’s great isn’t it? The owners of LuLaRoe value their relationships and each item is named in honor of someone significant in their lives, whether it is a family member or a crucial person within the company. The LuLaRoe naming technique also makes identifying styles easy and fun, while giving the items personality."
      />
      <FAQ
        question="What makes LuLaRoe clothing so special?"
        answer="Each item is made in very limited quantities, only 5,000 of a certain print is made across multiple styles and distributed throughout the US between all consultants. What you see today will not be available tomorrow. LuLaRoe designs their own prints and fabrics, which cannot be found elsewhere. The clothing is also designed to be comfortable and flattering on all body types."
      >
        <img src="/static/style/img/unique-lularoe.jpg" alt="What Makes LuLaRoe Special" />
      </FAQ>
      <FAQ
        question="Where is LuLaRoe Clothing manufactured?"
        answer="Initially, all clothing was made in the U.S.A. However, due to a rapid increase in demand, international fair-wage factories were also incorporated."
      />
      <div className="container">
        <h5>Consultant Specific:</h5>
      </div>
      <FAQ
        question="How much does it cost to become a LuLaRoe Consultant?"
        answer="In order to have an adequate selection of styles and sizes for your customers to choose from, LuLaRoe has determined that you need at least 300 pieces of clothing. To start, you will be ordering an “onboarding package” that includes sufficient items to throw a great party. The initial investment is $5,000 to $6,000 depending on the current onboarding package that LuLaRoe offers. You can always add more styles after your initial package is ordered, and trust us, you will want to."
      />
      <FAQ
        question="Are there any hidden startup fees?"
        answer="Absolutely NOT! There are never any costs or fees to being a LuLaRoe consultant. The only thing you are paying for is the clothing. You buy it at wholesale to sell at retail. In order to remain a consultant, you must purchase a total of 33 items from LuLaRoe per month – which is very easy to accomplish! You can sell 33 pieces at just one pop up!"
      />
      <FAQ
        question="How do I signup for LuLaRoe?"
        answer={<p>
          First, fill out this link:&nbsp;
          <a
            href="https://mylularoe.com/join/LuLaSistersDiciaErica"
            target="_blank"
            data-event-label="Join Our Team CTA"
            onTouchTap={sendOutboundEvent}
          >
            LuLaSistersDiciaErica&nbsp;
          </a>
          Then you will open an Onboarding ticket at support.lularoe.com. We, of course, will help you with everything you need. We have an entire toolkit ready to help you every step of the way!
        </p>}
      />
      <FAQ
        question="What if I decide LuLaRoe isn’t for me? Can I quit?"
        answer="Yes! Life happens. LuLaRoe will buy back ALL of your unused clothing at the price you paid for it – minus a 5% restocking fee. Another option is to sell your remaining inventory to other consultants at wholesale. However, LuLaRoe has an unheard of retention rate of 88%. Most direct sales companies are below 30% retention rate. Basically, you won’t want to quit once you start, but you’re not trapped if you do."
      />
      <FAQ
        question="What is the LuLaRoe Queue?"
        answer="Currently LuLaRoe is experiencing tremendous growth. In order to ensure that current and new consultants alike have sufficient inventory, LuLaRoe has placed a limit on how many consultants can join per day. The current wait time is 8 weeks to get onboarded, meaning after you submit your paperwork this is the amount of time you will have to wait in order to place your first order. LuLaRoe is efficiently working to decrease the amount of time you will have to wait in the queue."
      />
      <FAQ
        question="How many LuLaRoe Consultants does the company currently have?"
        answer="Currently there are roughly 25,000 LuLaRoe consultants nationwide. Compared to other direct sales companies, LuLaRoe is just in its youth. The potential for growth is astounding."
      >
        <img src="/static/style/img/consultant.png" alt="LuLaRoe Consultant Count" />
      </FAQ>
      <FAQ
        question="Do I have to do in-home parties?"
        answer="No. Though you will likely want to. LuLaRoe parties are awesome! You get to hang out with your friends, eat food, and try on great clothes! Also, your friends, neighbors, coworkers and acquaintances will be interested in the clothing. Making the clothing available to them will really boost your sales. You will find that once you throw in-home parties, you will gain regular customers who want to come back and shop for more, even if you are not throwing an official party. They may just stop by one day alone to buy more clothes; this is money in your pocket! Having in-home parties also allows for customers to try new styles, get a feel for the clothes, and get a feel for their sizing so they can buy confidently in your online pop ups."
      />
      <FAQ
        question="Do I have to sell online?"
        answer="No. Many consultants do really well without selling online; in fact, many prefer that face-to-face interaction of in-home parties. However, online parties are also a great way to have fun and make friends as they are held in intimate closed groups."
      />
      <FAQ
        question="Can I make my own prices for the clothing?"
        answer="Yes, and No. You can sell your clothes for as much as you like, however, there is a base price (MAP Pricing) that you cannot go below. Honestly, people are willing to pay for the clothes because of their quality and uniqueness. The clothes sell themselves."
      />
      <FAQ
        question="What is the profit margin?"
        answer="45-60% depending on the item"
      />
      <FAQ
        question="Should I worry about over saturation in my area?"
        answer="No. Each consultant has completely different inventory. Not all consultants carry the same styles, and if they do, they will each have entirely different prints."
      />
      <FAQ
        question="What about prints I don’t like? Can I return them?"
        answer="Well, you could, but trust us, everything sells. Just because you don’t like it doesn’t mean someone else won’t. There are prints we thought we would never sell, but when the right person comes along and tries it on, they love it, and you know what? It actually looks great on them! It’s a good thing we all don’t have the same tastes!"
      />
      <FAQ
        question="How long does it take to earn back my initial investment?"
        answer="The amount of time is totally up to you. If you reinvest to grow your inventory then it will take longer. If you simply replace what you sold, most consultants can pay back their initial investment within 2-4 months. It is entirely up to you to decide how much you want to sell."
      />
      <FAQ
        question="Do I have to build a team to be successful?"
        answer="No. You are your own business owner; you do what works for you! There is no requirement to build a team and train other consultants; you can make plenty of money just selling the cute clothes."
      />
      <FAQ
        question="How much does the top paid consultants make?"
        answer="Top consultants sell $60,000 each month. The average of our team sells $12- 18K each month. The top team-building consultant got a monthly bonus check of $1.4 million at the July convention. You would be surprised to learn how many girls make a significant income! As your sponsors, we would help you build & grow your business! Everything from setting up your social media accounts, to getting your taxes and finances in order – we have your back! We spent a lot of time with our accountant and lawyer to make sure we could do this business as two girls living in two different states. We would love to help you figure out this business to suit your personal needs. We also are always eager to learn and share what has worked for us. If you believe you can be a LuLaRoe fashion consultant and want in on this adventure, we will gladly be your sponsor, helping you every step of the way. If you are ready for that next step, let us get you more details and make it happen! We’re just a phone call or email away and we’d love to have you join our Sisterhood."
      />
      <div className="signature container">
        <div>Sincerely,</div>
        <div className="cursive">Dicia Marguccio & Erica Stoltz</div>
        <div>LuLaSistersDiciaErica@gmail.com</div>
      </div>
    </div>
  </section>
);
