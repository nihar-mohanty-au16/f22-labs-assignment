import React from "react";
import "./LandingPage.css";
import book from "./assets/b-1@3x.png";
import book2 from "./assets/b-1.png";
import person1 from "./assets/oval.png";
import one from "./assets/1.jpeg";
import layout11 from "./assets/layout-11.png";
import layers3 from "./assets/layers-3.png";
import responsive from "./assets/responsive.png";
import path from "./assets/path.png";
import darika from "./assets/Darika(1).png";
import elsie from "./assets/ELSIE(1).png";
import trash from "./assets/TRASHAE(3).png";
import JW from "./assets/ovala(cs).png";
import TR from "./assets/tail-right@2x.png";

const LandingPage = () => {
  return (
    <div>
      <div className="LP">
        <h2 className="Logo" alt="Logo">
          Omega
        </h2>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">
                <select className="DEM" name="Demo" id="Demo">
                  <option value="Demo1">demo1</option>
                  <option value="Demo2">demo2</option>
                  <option value="Demo3">demo3</option>
                </select>
              </a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <button className="GTB">Get this Book</button>
        </a>
      </div>
      <div className="box-1">
        <div>
          <img className="book" src={book} alt="book" />
        </div>
        <div className="heading1">
          Solve your daily life problems in 1 minute.
        </div>
        <div className="list1">
          <ul>
            <li className="listOne">12 chapters with detail Illustrations</li>
            <li className="listTwo">
              Learn from the experts with 24 years of experience
            </li>
            <li className="listThree">
              Audio version is included with the purchase
            </li>
          </ul>
        </div>
        <div>
          <a href="#">
            <button className="GTB29">
              <span className="TWENIN">Get this Book- Starts from $29</span>
            </button>
          </a>
        </div>
        <div className="CHAP">
          Interested in a free chapter.<a href="#">Get it now</a>
        </div>
      </div>
      <div>
        <div>
          <img className="person1" src={person1} alt="person" />
        </div>

        <div className="comment">
          <div className="desc1">
            "OMG! I cannot believe that I got a landing page after getting
            Omega. It was super easy to edit and publish."
          </div>
          <div className="Jonathan-Taylor">Jonathan Taylor</div>
        </div>
        <div className="Chapters-weve-cover">Chapters we've covered</div>
        <div className="Create-custom-landing">
          Create custom Landing pages with Omega that converts more visitor than
          any websites
        </div>
      </div>
      <div className=".BG">
        <div className="one">
          <img src={one} alt="one" />
        </div>
        <div className="wrapper">
          <div className="Chapter-01">Chapter 1</div>
          <div className="What-is-problem-solv">What is Problem Solving?</div>
          <div className="Create-custom-landin">
            Create custom landing pages with omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding
          </div>
        </div>
      </div>
      <div>
        <div className="yot">
          <div>
            <img className="layout-11" src={layout11} alt="yot1" />
            <div className="Solve-Daily-Problems">Solve daily problems</div>
            <div className="With-lots-of-unique">
              With lots of unique blocks you can easily,build a page without
              coding. Build your next landing page quickly
            </div>
          </div>

          <div>
            <img className="layers-3" src={layers3} alt="yot2" />
            <div className="Key-Notes-on-Each-Ch">
              Key Notes On Each Chapter
            </div>
            <div className="With-lots-of-unique1">
              With lots of unique blocks you can easily,build a page without
              coding. Build your next landing page quickly
            </div>
          </div>
          <div>
            <img className="responsive" src={responsive} alt="yot3" />
            <div className="Audio-Book-Available">Audio Book Available</div>
            <div className="With-lots-of-unique2">
              With lots of unique blocks you can easily,build a page without
              coding. Build your next landing page quickly
            </div>
          </div>
        </div>
      </div>
      <div className="yot1">
        <div className="Things-youll-learn">Things You'll Learn</div>
        <div className="Create-custom-landin3">
          Create custom landing pages with omega that converts more visitors
          than any website. With lots of unique blocks, you can easily build a
          page without coding
        </div>
        <div className="cards">
          <div className="HOWTO">
            <div className="How-to-improve-yours">
              How to improve yourself with small tasks.
            </div>
            <div className="How-to-utilize-your">
              How to utilize your time while working hard.
            </div>
            <div className="How-to-think-creativ">How to think creatively.</div>
          </div>
          <div className="SOLVING">
            <div className="Solving-your-problem">
              Solving your problems without hurting yourself.
            </div>
            <div className="Developing-new-skill">Making money smartly.</div>
            <div className="Developing-new-skill">
              Developing new skills fast and furious!
            </div>
          </div>
          <div className="UNDERSTANDING">
            <div className="Understanding-People">
              Understanding People 101.
            </div>
            <div className="secrects-to-solve">
              10 secrects to solve any problem easily.
            </div>
            <div className="Creating-valuable-go">
              Creating valuable goal for next 5 years.
            </div>
          </div>
        </div>
        <div className="rectangle-1">
          <div>
            <img className="b1" src={book2} alt="book1" />
          </div>
          <div className="Get-a-free-chapter-o">
            Get a free chapter of this book
          </div>
          <div className="Create-custom-landin4">
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </div>
          <div>
            <button className="Get-a-free-chapter">Get a free chapter</button>
          </div>
        </div>
        <div className="data">
          <div className="K">50K+</div>
          <div className="L">96%</div>
          <div className="M">4.9/5.0</div>
        </div>
        <div className="people">
          <div className="People-are-already-r">
            People are already reading this book and improving!
          </div>
          <div className="Satisfaction-rate-co">
            Satisfaction rate comes from our awesome customers.
          </div>
          <div className="Average-customer-rat">
            Average customer ratings we have got from Amazon users.
          </div>
        </div>
        <div className="">
          <div className="Reviews-from-readers">Reviews from readers</div>
          <div className="Create-custom-landin5">
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </div>
        </div>
        <div className="BG100">
          <div className="BG45">
            <div className="You-made-it-so-simp">
              <div>
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
              </div>
              “You made it so simple. My new site is so much faster and easier
              to work with than my old site. I just choose the page, make the
              change and click save.”
            </div>
            <img className="darika" src={darika} alt="darika" />
            <div className="Darika-Samak">Darika Samak</div>
            <div className="From-Amazoncom">From Amazon.com</div>
          </div>

          <div className="BG55">
            <div className="Simply-the-best-Be">
              <div>
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
              </div>
              “Simply the best. Better than all the rest. I’d recommend this
              product to beginners and advanced users.”
            </div>
            <img className="elsie" src={elsie} alt="elsie" />
            <div className="Elsie-Curtis ">Elsie Curtis </div>
            <div className="From-Amazoncom1">From Amazon.com</div>
          </div>
          <div className="BG65">
            <div className="Must-have-book-for-s">
              <div>
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
              </div>
              Must have book for students, who want to be Product Designer, UX
              Designer, or Interaction Designer.
            </div>
            <img className="trash" src={trash} alt="trash" />
            <div className="Trashae-Hubbard">Trashae Hubbard</div>
            <div className="From-Amazoncom2">From Amazon.com</div>
          </div>
        </div>
        <div className="Check-all-3583-revi">
          Check all 3,583 reviews on Amazon.com
        </div>
        <div className="About-the-author">About the Author</div>
        <img className="JW" src={JW} alt="JW" />
        <div className="Joseph-Williams">Joseph Williams</div>
        <div className="Hey-My-name-is-Jose">
          Hey! My name is Joseph Williams and I'm a product designer based in
          Berlin. Most recently I led the design of multiple products at WeWork
          and prior to that I worked with startups building their products and
          design culture. Previous products I built for the design community are
          used by tens of thousands of designers working at companies like
          Google, Airbnb, Netflix and Boeing. Products I built or designed are
          featured in Wired, TechCrunch, Forbes, Quartz, Smashing Magazine,
          Awwwards and more. Reach me on Twitter or Email.
        </div>
        <div className="backgroundd"></div>
        <div className="PP">
          <div className="Pricing-Plans">Pricing & Plans</div>
          <div className="Create-custom-landin6">
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </div>
          <div className="planned">
            <div className="plan1">
              <div className="Limited">Limited</div>
              <div className="Free">Free</div>
              <div className="Get-free-chapter-o">
                Get a free chapter of our book right now.
              </div>
              <div className="RectangleEmailBox">Email Address</div>
              <div>
                <button className="freeChapter">Send free Chapter</button>
              </div>
            </div>
            <div className="plan2">
              <div className="Only-eBook">Only eBook</div>
              <div className="twentynine">$29</div>
              <div className="Get-the-eBook-versio">
                Get the eBook version + Audio version of the book.
              </div>

              <button className="amazoneButton">Buy from Amazon</button>
            </div>
            <div className="plan3">
              <div className="Everything">Everything</div>
              <div className="fortynine">$49</div>
              <div className="Hardcover-eBook-ve">
                Hardcover + eBook version + Audio version of the book.
              </div>
              <div>
                <button className="amazzoneButton">Buy from Amazon</button>
              </div>
            </div>
            <div className="FAQ">
              <div>
                <img className="TR1" src={TR} alt="tail" />
                <div className="Can-I-use-Omega-for">
                  Can I use Omega for my clients?
                </div>
                <div className="Absolutely-The-Enva">
                  Absolutely. The Envato Theme license allows you to build a
                  websites for personal use or for a client. User Omega for your
                  clients.
                </div>
              </div>
              <div>
                <img className="TR2" src={TR} alt="tail" />
                <div className="Can-I-use-Omega-for">
                  Do I get free updates?
                </div>
                <div className="Yes-We-update-all-o">
                  Yes. We update all of our themes regularly, plus are
                  constantly adding new components, pages, and features to our
                  themes. Purchase once and get lifetime updates.
                </div>
              </div>
            </div>
            <div className="FAQ2">
              <div>
                <img className="TR3" src={TR} alt="tail" />
                <div className="Does-it-work-with-Wo">
                  Does it work with WordPress?
                </div>
                <div className="Create-custom-landin-58">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </div>
              </div>
              <div>
                <img className="TR4" src={TR} alt="tail" />
                <div className="Will-you-provide-sup">
                  Will you provide support?
                </div>
                <div className="With-lots-of-unique">
                  With lots of unique blocks, you can easily build a page
                  without any design or custom coding. with Omega that converts
                  more visitors than any website.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Learn-problem-solvin">Learn problem solving</div>
        <div className="Create-custom-landin98">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </div>
        <div className="Omega54">Omega</div>
        <div className="Support-Privacy-Poli">
          Support Privacy Policy Terms and Conditions
        </div>
        <div className = "ARR">© 2020 UXTheme, All Rights Reserved</div>
        <a href="#">
          <button className="GTB1">Get this Book</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
