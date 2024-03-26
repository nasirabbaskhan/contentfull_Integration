import client from "../lib/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getData() {
  const response = await client.getEntries({ content_type: "blog" });
  return response;
}

export default async function Contentfull() {
  const data = await getData();
  console.log("nasirResponse", data.items[0].fields.description);

  return (
    <>
      <div>
        {data.items.map((item: any, index: any) => {
          return (
            <div
              key={index}
              id={item.sys.id}
              className="try mt-5 ml-56 max-w-[900px] bg-red-100 px-8 py-8 border rounded shadow-xl "
            >
              <div className="title text-2xl  ">
                <p>{item.fields.title}</p>
              </div>
              <div className="mt-5">
                {documentToReactComponents(item.fields.description)}
              </div>
              <div>
                <img
                  className="mt-5"
                  src={item.fields.image.fields.file.url}
                  width={1222}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        })}
        {/* <div className="title text-2xl text-center">
          <p>Be challenged and encouraged with our featured article</p>
        </div>
        <div className="desc">
          <p>
            you are a brand new church planter with a dream to change the world
            or a seasoned ministry veteran with decades of experience, these
            posts will help you articulate what you've always felt deep within
            you. second blog Whether Those are a brand new church planter with a
            dream to change the world or a seasoned ministry veteran with
            decades of experience, these posts will help you articulate what
            you've always felt deep within you.
          </p>
        </div>
        <div className="img"></div> */}
      </div>
    </>
  );
}
