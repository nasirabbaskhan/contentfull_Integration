interface Iprops {
  heading: string;
  description: string;
  img: string;
}
export default function Card(props: Iprops) {
  return (
    <>
      <div className="cart bg-slate-100 px-4 pt-6 pb-7 max-w-[400px] border rounded shadow-lg">
        <div className="flex gap-x-4 items-center">
          <div className="img">
            <img src={props.img} width={60} alt="sorry" />
          </div>
          <div>
            <h2 className="font-bold">{props.heading}</h2>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="ml-16">{props.description}</h2>
        </div>
      </div>
    </>
  );
}
