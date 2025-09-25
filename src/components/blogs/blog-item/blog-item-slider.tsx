import React from "react";
import Link from "next/link";
import Image from "next/image";

type ArticleCardProps = {
  article: {
    id?: string;
    image: string;
    imageUrl?: string;
    date: string;
    title: string;
    author: string;
    category: string;
    link: string;
    post_info: string;
  };
};

// img style
const imgStyle = {
  height: "auto",
};

const BlogItemSlider: React.FC<ArticleCardProps> = ({ article }) => {
    const imageUrl = article.imageUrl || article.image;
  return (
    <>
      <div className="item wow fadeInUp">
        <div className="portfolio-block-two">
          <div className="img-wrapper">
            <Link href={`/article/${article.link}`}>
            <Image
              src={imageUrl}
              alt="image"
              className="w-100"
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, 600px"
              style={imgStyle}
            />
            </Link>
          </div>
          <div className="caption d-flex align-items-center justify-content-between flex-wrap">
            <div>
              <span className="fw-bold text-uppercase">
                {article.date.split(" ")[0]} {article.date.split(" ")[1]}
              </span>
              <h3>
                <Link href={`/article/${article.link}`}>{article.title}</Link>
              </h3>
            </div>
            {/* <Link
              href={`/article/${article.link}`}
              className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
            >
              <i className="bi bi-arrow-up-right"></i>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItemSlider;
