'use client';
import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import FaqItem from "./faq-item";
import Image, {StaticImageData} from "next/image";

import screen from '@/assets/images/assets/screen_11.png';



const FaqSolutionsThree = ({cls,title,para,page}:{cls?:string,title:string,para:string,page:string}) => {
  const accordionId = 'companyFaqAccordion';

  const expandAll = React.useCallback(() => {
    const root = typeof document !== 'undefined' ? document.getElementById(accordionId) : null;
    if(!root) return;
    root.querySelectorAll('.accordion-collapse').forEach((el) => el.classList.add('show'));
    root.querySelectorAll('.accordion-button').forEach((el) => el.classList.remove('collapsed'));
  }, []);

  const collapseAll = React.useCallback(() => {
    const root = typeof document !== 'undefined' ? document.getElementById(accordionId) : null;
    if(!root) return;
    root.querySelectorAll('.accordion-collapse').forEach((el) => el.classList.remove('show'));
    root.querySelectorAll('.accordion-button').forEach((el) => el.classList.add('collapsed'));
  }, []);

  return (
    <>
      <div className={`faq-section-one service-details ${cls?cls:'pt-150 pb-120 lg-pt-120 md-pt-80'}`} style={{background:"#ebf3ee"}}>
        <div className="container">
          <div className="row">

            <div className="col-lg-12 details-meta">
                <div className="title-one mb-40 lg-mb-20 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h3 className="m-0">{title}</h3>
                    <div className="faq-controls">
                      <button type="button" className="faq-control-link" onClick={expandAll}>EXPAND ALL</button>
                      <span className="faq-control-divider" aria-hidden="true">|</span>
                      <button type="button" className="faq-control-link" onClick={collapseAll}>COLLAPSE ALL</button>
                    </div>
                </div>
                <p className="text-lg mb-40 lg-mb-20">
                 {para}
                </p>
              <div
                className="accordion accordion-style-one mt-15 md-mt-50"
                id={accordionId}
              >
                {faq_data.filter(faq => faq.page === `${page}`)
                .map((faq, i) => (
                  <FaqItem key={i} {...faq} parent={accordionId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSolutionsThree;
