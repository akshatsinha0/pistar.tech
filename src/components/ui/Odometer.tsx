"use client";
import React from "react";

interface OdometerProps{
  value:number|string;
  threshold?:number; // intersection threshold
  durationMs?:number; // per digit
  digitDelayMs?:number; // stagger per digit
}

const Digits = Array.from({length:10},(_,i)=>i.toString());

const Odometer:React.FC<OdometerProps>=({value,threshold=.25,durationMs=800,digitDelayMs=60})=>{
  const ref=React.useRef<HTMLSpanElement|null>(null);
  const [animate,setAnimate]=React.useState(false);

  React.useEffect(()=>{
    const node=ref.current;
    if(!node) return;
    if(typeof window==='undefined') return;
    const reduce=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce){ setAnimate(true); return; }
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ setAnimate(true); obs.disconnect(); }});
    },{threshold});
    obs.observe(node);
    return ()=>obs.disconnect();
  },[threshold]);

  const str=String(value);

  return (
    <span ref={ref} className="odometer" aria-label={str}>
      {str.split("").map((ch,idx)=>{
        if(!/\d/.test(ch)){
          return <span key={idx} className="odometer-char">{ch}</span>;
        }
        const d=parseInt(ch,10);
        return (
          <span key={idx} className="odometer-col" aria-hidden="true">
            <span
              className={`odometer-strip ${animate? 'odometer-strip--animate':''}`}
              style={animate?{['--digit' as any]: d, transitionDuration:`${durationMs}ms`, transitionDelay:`${idx*digitDelayMs}ms`}:{}}
            >
              {Digits.map((dg)=> (
                <span key={dg} className="odometer-digit">{dg}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
};

export default Odometer;
