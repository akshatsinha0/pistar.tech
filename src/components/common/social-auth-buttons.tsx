"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import google from '@/assets/images/icon/google.png';
import facebook from '@/assets/images/icon/facebook.png';

type Props={
  verb?:string; // e.g., "Signup" or "Login"
  className?:string;
};

const SocialAuthButtons:React.FC<Props>=({verb='Signup',className})=>{
  const cls=['row','social-row','mb-5',className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <div className="col-sm-6">
        <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
          <Image src={google} alt="google" />
          <span className="ps-3">{verb} with Google</span>
        </Link>
      </div>
      <div className="col-sm-6">
        <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
          <Image src={facebook} alt="facebook" />
          <span className="ps-3">{verb} with Facebook</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialAuthButtons;
