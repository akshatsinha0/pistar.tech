"use client";
import React,{useEffect,useLayoutEffect,useRef,useState,useId} from "react";
import styles from "./timeline-scroll.module.css";

type Side="left"|"right";

type Entry={kind:"milestone"|"note";text:string;current?:boolean};

const entries:Entry[]=[
  {kind:"milestone",text:"Idea"},
  {kind:"note",text:"Pre-Seed Stage (Supported by Meity Tide 2.0 – 7 lakhs, 2021)"},
  {kind:"milestone",text:"Research"},
  {kind:"milestone",text:"POC Development"},
  {kind:"milestone",text:"Idea Validation"},
  {kind:"note",text:"Seed Stage (Supported by Nidhi Prayas – 10 lakhs, 2022)"},
  {kind:"milestone",text:"Prototype Development"},
  {kind:"milestone",text:"Market Validation"},
  {kind:"note",text:"Early Stage (Supported by PRIF – 25 lakhs, 2022)"},
  {kind:"milestone",text:"Minimum Viable Product",current:true},
  {kind:"milestone",text:"Launch and Scale to Bigger Market"},
  {kind:"note",text:"Growth Stage (Supported by Nidhi SSS – 40 lakhs, 2024)"}
];

function useTypewriter(t:string,active:boolean,speed=30){
  const [out,setOut]=useState("");
  useEffect(()=>{if(!active){return;} let i=0; const id=window.setInterval(()=>{i+=1; setOut(t.slice(0,i)); if(i>=t.length){window.clearInterval(id);}},speed); return()=>window.clearInterval(id);},[t,active,speed]);
  return out;
}

function Item({index,text,side,kind,current,onRefs,onActive}:{index:number;text:string;side:Side;kind:"milestone"|"note";current?:boolean;onRefs:(idx:number,refs:{container:HTMLDivElement|null;text:HTMLHeadingElement|null;bullet:HTMLSpanElement|null;underline:HTMLSpanElement|null})=>void;onActive:(idx:number,active:boolean)=>void}){
  const ref=useRef<HTMLDivElement|null>(null);
  const textRef=useRef<HTMLHeadingElement|null>(null);
  const bulletRef=useRef<HTMLSpanElement|null>(null);
  const underlineRef=useRef<HTMLSpanElement|null>(null);
  const [active,setActive]=useState(false);
  const typed=useTypewriter(text,active,kind==="note"?26:30);
  useEffect(()=>{if(!ref.current)return; const io=new IntersectionObserver(([e])=>{setActive(e.isIntersecting); onActive(index,e.isIntersecting);},{threshold:0.35}); io.observe(ref.current); return()=>io.disconnect();},[index,onActive]);
  useLayoutEffect(()=>{onRefs(index,{container:ref.current,text:textRef.current,bullet:bulletRef.current,underline:underlineRef.current});},[index,onRefs]);
  useEffect(()=>{const r=()=>onRefs(index,{container:ref.current,text:textRef.current,bullet:bulletRef.current,underline:underlineRef.current}); window.addEventListener("resize",r); return()=>window.removeEventListener("resize",r);},[index,onRefs]);
  useEffect(()=>{if(kind!=="milestone"||!textRef.current||!underlineRef.current)return; const width=textRef.current.offsetWidth*0.5; underlineRef.current.style.width=`${width}px`;},[typed,kind]);
  return(
    <div ref={ref} className={[styles.item,styles[kind],side==='left'?styles.left:styles.right,active?styles.show:""] .join(" ")}>
      <span ref={bulletRef} className={[styles.bullet,current?styles.currentBullet:""] .join(" ")}></span>
      <h4 ref={textRef} className={kind==="note"?styles.noteText:styles.text}>
        {typed}
        {current? <span className={styles.badge}>We are at this stage</span>:null}
        {kind==="milestone"? <span ref={underlineRef} className={[styles.underline,side==='left'?styles.underlineLeft:styles.underlineRight].join(" ")}></span> : null}
      </h4>
    </div>
  );
}

export default function TimelineScroll(){
  const list:(Entry & {side:Side})[]=[];
  let currentSide:Side="left";
  let lastMilestone:Side="left";
  for(const e of entries){
    if(e.kind==="milestone"){list.push({...e,side:currentSide}); lastMilestone=currentSide; currentSide=currentSide==="left"?"right":"left";} else {list.push({...e,side:lastMilestone});}
  }
const timelineRef=useRef<HTMLDivElement|null>(null);
  const sparkleRef=useRef<HTMLDivElement|null>(null);
const refs=useRef(new Array(list.length).fill(null) as {container:HTMLDivElement|null;text:HTMLHeadingElement|null;bullet:HTMLSpanElement|null;underline:HTMLSpanElement|null}[]);
  const [paths,setPaths]=useState<{forIndex:number;d:string}[]>([]);
  const [activeNotes,setActiveNotes]=useState<Set<number>>(new Set());
  function handleRefs(i:number,r:{container:HTMLDivElement|null;text:HTMLHeadingElement|null;bullet:HTMLSpanElement|null}){refs.current[i]=r;}
  function handleActive(i:number,a:boolean){setActiveNotes(prev=>{const n=new Set(prev); if(a){n.add(i);} else {n.delete(i);} return n;});}
  function rebuild(){if(!timelineRef.current)return; const tRect=timelineRef.current.getBoundingClientRect(); const centerX=tRect.width/2; const out:{forIndex:number;d:string}[]=[]; for(let i=0;i<list.length;i++){if(list[i].kind!=="note")continue; const note=refs.current[i]; if(!note||!note.text)continue; const nRect=note.text.getBoundingClientRect(); const endX=list[i].side==='left'? (nRect.left - tRect.left - 10):(nRect.right - tRect.left + 10); const endY=nRect.top - tRect.top + nRect.height/2; function addFrom(anchorIndex:number){const m=refs.current[anchorIndex]; if(!m)return; const bRect=(m.bullet?m.bullet.getBoundingClientRect():m.container?.getBoundingClientRect()); if(!bRect)return; const startX=centerX; const startY=bRect.top - tRect.top + bRect.height/2; const dx=Math.abs(endX-startX); const c=Math.min(Math.max(dx*0.5,80),220); const cp1x=startX + (list[i].side==='left'? -c: c); const cp1y=startY - c*0.25; const cp2x=endX + (list[i].side==='left'? c*0.2: -c*0.2); const cp2y=endY + c*0.25; const d=`M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`; out.push({forIndex:i,d}); }
    let prev=i-1; while(prev>=0 && list[prev].kind!=="milestone") prev--; if(prev>=0) addFrom(prev);
    let next=i+1; while(next<list.length && list[next].kind!=="milestone") next++; if(next<list.length) addFrom(next);
  }
  setPaths(out);
  }
  useLayoutEffect(()=>{rebuild();},[]);
  useEffect(()=>{const r=()=>rebuild(); window.addEventListener("resize",r); return()=>window.removeEventListener("resize",r);});
  useEffect(()=>{let raf=0; let lastY=window.scrollY; let lastT=performance.now(); let speed=0; let y=0; let activeUntil=0; function onScroll(){const now=performance.now(); const dy=Math.abs(window.scrollY-lastY); const dt=Math.max(1,now-lastT); lastT=now; lastY=window.scrollY; speed=Math.min(10,0.25+dy/dt*6); activeUntil=now+220; if(!raf) step();} function step(){const now=performance.now(); if(!sparkleRef.current||!timelineRef.current){raf=0;return;} const h=timelineRef.current.offsetHeight; y=(y+speed)%Math.max(1,h); sparkleRef.current.style.transform=`translateX(-50%) translateY(${y}px)`; if(now<activeUntil){raf=requestAnimationFrame(step);} else {raf=0;}} window.addEventListener("scroll",onScroll,{passive:true}); return()=>{if(raf)cancelAnimationFrame(raf); window.removeEventListener("scroll",onScroll);};},[]);
  return(
    <section className={styles.timelineSection}>
      <div className="container">
        <div className="title-one details-meta mb-40 lg-mb-10"><h3>Our Journey</h3></div>
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.line}></div>
          <svg className={styles.arrowSvg} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowHead" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="rgb(226,216,255)" />
              </marker>
            </defs>
            {paths.map((p,idx)=>(
              <path key={idx} d={p.d} className={[styles.arrowPath, activeNotes.has(p.forIndex)?styles.arrowActive:""] .join(" ")} markerEnd="url(#arrowHead)" pathLength={1 as any} />
            ))}
          </svg>
          <div ref={sparkleRef} className={styles.sparkle}></div>
          {list.map((d,i)=>(<Item key={i} index={i} text={d.text} side={d.side} kind={d.kind} current={d.current} onRefs={handleRefs} onActive={handleActive}/>))}
        </div>
      </div>
    </section>
  );
}
