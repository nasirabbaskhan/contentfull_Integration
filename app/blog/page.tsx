import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // it is used for ritch type
//`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`

const getBlogs = async () => {
  const response = await fetch(
    "https://cdn.contentful.com/spaces/ph7l1njx41e5/entries?access_token=xnvRbBz51k81LjkQoiSyn4tyASbxdQ-vnTPywP94Cuk&content_type=blog"
  );
  const blogs = response.json();

  return blogs;
};

export default async function Blog() {
  const blogs = await getBlogs();
  console.log("nasirResponse", blogs);
  return (
    <>
      <div></div>
      {blogs.items.map((item: any) => {
        return (
          <div className={item.sys.id}>
            <p>Title:{item.fields.title}</p>
            Desription:{documentToReactComponents(item.fields.description)}
            <img src={item.fields.image.fields.file.url} width={90} alt="" />
            <hr />
          </div>
        );
      })}
    </>
  );
}
