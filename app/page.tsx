// import Image from 'next/image'
import Card from "./components/card";
import client from "./lib/contentfulClient";

const fetchServecesFromContentful = async () => {
  let response = await client.getEntries({ content_type: "services" });
  // console.log("fetchResponse", response.items[1].fields.title);
  // reshaping
  // const services = response.items.map((item: any) => {
  //   return <>{item.fields.title}</>;
  // });
  return response;
};

export default async function Home() {
  const service = await fetchServecesFromContentful();
  // console.log("fetchResponse", service.items[0].fields.title);
  return (
    <>
      <section className="mt-3">
        <div className="max-w-full">
          <h1 className="text-2xl font-bold ml-[550px]">SERVICES</h1>
          <p className="mx-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            ducimus deleniti a impedit eos voluptatem excepturi harum nihil vero
            rerum pariatur nemo dicta repellat
          </p>
          <p className="ml-[500px]">
            {" "}
            autem dignissimos, alias blanditiis veritatis dolor!
          </p>
        </div>
        <div className="main grid grid-cols-3 border mx-24 mt-6 gap-x-4 gap-y-6 ">
          {/* run loop to disply services here */}
          {service.items.map((item: any, index: any) => {
            return (
              <Card
                key={index}
                heading={item.fields.title}
                description={item.fields.description}
                img={item.fields.image.fields.file.url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
