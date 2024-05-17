"use client";
import React, { useState } from "react";
// import { GoPlay } from "react-icons/go";
import Image from "next/image";


const timeline = [
  {
    id: 1,
    year: "1980",
    image: "//",
    link: "/",
  },
  {
    id: 2,
    year: "1985",
    image: "//",
    link: "/",
  },
  {
    id: 3,
    year: "1990",
    image: "//",
    link: "/",
  },
  {
    id: 4,
    year: "1995",
    image: "//",
    link: "/",
  },
  {
    id: 5,
    year: "2000",
    image: "//",
    link: "/",
  },
  {
    id: 6,
    year: "2005",
    image: "//",
    link: "/",
  },
  {
    id: 7,
    year: "2010",
    image: "//",
    link: "/",
  },
  {
    id: 8,
    year: "2015",
    image: "//",
    link: "/",
  },
  {
    id: 9,
    year: "2020",
    image: "//",
    link: "/",
  },
  {
    id: 10,
    year: "2022",
    image: "//",
    link: "/",
  },
  {
    id: 11,
    year: "1981",
    image: "//",
    link: "/",
  },
  {
    id: 12,
    year: "1982",
    image: "//",
    link: "/",
  },
];

const HomeBanner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      {!showVideo && (
        <div
          onClick={handleImageClick}
          className="flex relative bg-center h-[70vh] bg-no-repeat bg-cover bg-[url('/home_images/home_banner.png')] bg-gray-300 bg-blend-multiply lg:h-[74vh] relative mx-auto"
          data-aos="fade-down"
        >
          {/* <Image className="bg-center h-[70vh] bg-no-repeat bg-cover bg-[url('/home_images/home_banner.png')] bg-gray-300 bg-blend-multiply lg:h-[74vh] relative mx-auto"
        /> */}
          <div className="flex justify-center items-center absolute inset-0">
            {/* <GoPlay className="size-28 text-white cursor-pointer" /> */}
          </div>
        </div>
      )}
      {showVideo && (
        <iframe
          width="1600"
          height="900"
          src="https://www.youtube.com/embed/1DSQ3D0jpaE?autoplay=1"
          title="VDS Hero Banner V2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <div className="bg-[#015C96] h-[5em] shadow shadow-blue-500/40 relative flex">
        {timeline.map((items, index) => (
          <div key={items.id} class="oj-nav-item flex flex-row-reverse ">
            <span className="text-[19px] content-center ml-10 text-white">
              {items.year}
            </span>
          </div>
        ))}
      </div>

      {/* <article>
        <section id="top" tabindex="0">
          <div class="content">
            <h1>10 Fascinating Facts About Butterflies</h1>
            <p>
              <a href="https://www.thoughtco.com/fascinating-facts-about-butterflies-1968171">
                Read the original article.
              </a>
            </p>
            <p class="intro">
              People love watching colorful butterflies float from flower to
              flower. But from the tiniest blues to the largest swallowtails,
              how much do you really know about these insects? Here are 10
              butterfly facts you'll find fascinating.
            </p>
          </div>
          <div class="footer">
            <p>Scroll or tab to start reading</p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>1 of 10</p>
          </div>e
          <div class="content">
            <h2>Butterfly Wings Are Transparent</h2>
            <p>
              How can that be? We know butterflies as perhaps the most colorful,
              vibrant insects around! Well, a butterfly's wings are covered by
              thousands of tiny scales, and these scales reflect light in
              different colors. But underneath all of those scales, a butterfly
              wing is actually formed by layers of chitin—the same protein that
              makes up an insect's exoskeleton. These layers are so thin you can
              see right through them. As a butterfly ages, scales fall off the
              wings, leaving spots of transparency where the chitin layer is
              exposed.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>2 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Taste With Their Feet</h2>
            <p>
              Butterflies have taste receptors on their feet to help them find
              their host plants and locate food. A female butterfly lands on
              different plants, drumming the leaves with her feet until the
              plant releases its juices. Spines on the back of her legs have
              chemoreceptors that detect the right match of plant chemicals.
              When she identifies the right plant, she lays her eggs. A
              butterfly of any biological sex will also step on its food, using
              organs that sense dissolved sugars to taste food sources like
              fermenting fruit.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>3 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Live on an All-Liquid Diet</h2>
            <p>
              Speaking of butterflies eating, adult butterflies can only feed on
              liquids—usually nectar. Their mouthparts are modified to enable
              them to drink, but they can't chew solids. A proboscis, which
              functions as a drinking straw, stays curled up under the
              butterfly's chin until it finds a source of nectar or other liquid
              nutrition. The long, tubular structure then unfurls and sips up a
              meal. A few species of butterflies feed on sap, and some even
              resort to sipping from carrion. No matter the meal, they suck it
              up a straw.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>4 of 10</p>
          </div>
          <div class="content">
            <h2>A Butterfly Must Assemble Its Own Proboscis—Quickly </h2>
            <p>
              A butterfly that can't drink nectar is doomed. One of its first
              jobs as an adult butterfly is to assemble its mouthparts. When a
              new adult emerges from the pupal case or chrysalis, its mouth is
              in two pieces. Using palpi located adjacent to the proboscis, the
              butterfly begins working the two parts together to form a single,
              tubular proboscis. You may see a newly emerged butterfly curling
              and uncurling the proboscis over and over, testing it out.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>5 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Drink From Mud Puddles</h2>
            <p>
              A butterfly cannot live on sugar alone; it needs minerals, too. To
              supplement its diet of nectar, a butterfly will occasionally sip
              from mud puddles, which are rich in minerals and salts. This
              behavior, called puddling, occurs more often in male butterflies,
              which incorporate the minerals into their sperm. These nutrients
              are then transferred to the female during mating and help improve
              the viability of her eggs.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>6 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Can't Fly If They're Cold </h2>
            <p>
              Butterflies need an ideal body temperature of about 85 degrees
              Fahrenheit to fly. Since they're cold-blooded animals, they can't
              regulate their own body temperatures. As a result, the surrounding
              air temperature has a big impact on their ability to function. If
              the air temperature falls below 55 degrees Fahrenheit, butterflies
              are rendered immobile—unable to flee from predators or feed.
            </p>
            <p>
              When air temperatures range between 82 and 100 degrees Fahrenheit,
              butterflies can fly with ease. Cooler days require a butterfly to
              warm up its flight muscles, either by shivering or basking in the
              sun.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>7 of 10</p>
          </div>
          <div class="content">
            <h2>A Newly Emerged Butterfly Can't Fly</h2>
            <p>
              Inside the chrysalis, a developing butterfly waits to emerge with
              its wings collapsed around its body. When it finally breaks free
              of the pupal case, it greets the world with tiny, shriveled wings.
              The butterfly must immediately pump body fluid through its wing
              veins to expand them. Once its wings reach their full size, the
              butterfly must rest for a few hours to allow its body to dry and
              harden before it can take its first flight.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>8 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Often Live Just a Few Weeks</h2>
            <p>
              Once it emerges from its chrysalis as an adult, a butterfly has
              only two to four short weeks to live, in most cases. During that
              time, it focuses all its energy on two tasks: eating and mating.
              Some of the smallest butterflies, the blues, may only survive a
              few days. However, butterflies that overwinter as adults, like
              monarchs and mourning cloaks, can live as long as nine months.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>9 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Are Nearsighted but Can See Colors</h2>
            <p>
              Within about 10–12 feet, butterfly eyesight is quite good.
              Anything beyond that distance gets a little blurry, though.
            </p>
            <p>
              Despite that, butterflies can see not just some of the colors that
              we can see, but also a range of ultraviolet colors that are
              invisible to the human eye. The butterflies themselves may even
              have ultraviolet markings on their wings to help them identify one
              another and locate potential mates. Flowers, too, display
              ultraviolet markings that act as traffic signals to incoming
              pollinators like butterflies.
            </p>
          </div>
        </section>

        <section tabindex="0">
          <div class="header">
            <p>10 of 10</p>
          </div>
          <div class="content">
            <h2>Butterflies Employ Tricks to Avoid Being Eaten</h2>
            <p>
              Butterflies rank pretty low on the food chain, with lots of hungry
              predators happy to make a meal of them. Therefore, they need some
              defense mechanisms. Some butterflies fold their wings to blend
              into the background, using camouflage to render themselves all but
              invisible to predators. Others try the opposite strategy, wearing
              vibrant colors and patterns that boldly announce their presence.
              Bright colored insects often pack a toxic punch if eaten, so
              predators learn to avoid them.
            </p>
          </div>
          <div class="footer">
            <a href="#top">Go to the begining</a>
          </div>
        </section>
      </article> */}
    </>
  );
};

export default HomeBanner;
