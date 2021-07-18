import { useEffect, forwardRef, useState } from 'react'

import { useLocomotiveScroll } from 'react-locomotive-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import React from 'react'

const ScrollTriggerWrapper = forwardRef((props, ref) => {
  const { scroll } = useLocomotiveScroll();
  const { children, animation } = props;
  const [scrollInitState, setScrollInit] = useState(false);

  // Initiate Scrolltrigger
  gsap.registerPlugin(ScrollTrigger)

  // init scroll
  useEffect(() => {
    if (scroll) {
      if (!scrollInitState) {
        setScrollInit(true);
        console.log('init scroll', scrollInitState);

        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        scroll.on("scroll", ScrollTrigger.update);

        // INIT SCROLLTRIGGER
        ScrollTrigger.scrollerProxy("#scroll-container", {
          scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
          }, // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
          pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed"
        });
      }
    }
    return () => {
    }
  }, [scroll]);


  // init timeilne / animation
  useEffect(() => {
    let runAnimationTL = [];
    if (scrollInitState) {

      // Run Animation
      if (animation) {
        //check animation array if single or array;
        if (animation instanceof Array) {
          animation.forEach(each_anim => {
            // push each animation into array.
            // pushing animation = running the animation.
            runAnimationTL.push(each_anim());
          });
        }
        else if (animation instanceof Object) {
          runAnimationTL.push(animation());
        }
      }
    }
    return () => {
      if (runAnimationTL) {
        runAnimationTL.forEach(each_anim => {
          console.log(ScrollTrigger.getById(each_anim.id), each_anim.tl);
          // delete timeline;
          each_anim.tl.clear(true);
          each_anim.tl.kill(true);
          gsap.set(each_anim.elem, { clearProps: true });
        });
        //Clear Array
        runAnimationTL = [];
      }
    }
  }, [scrollInitState, animation]);

  return (
    <>
      {children}
    </>
  )
});

export default ScrollTriggerWrapper;
