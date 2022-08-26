import Image from "next/image";

export default function TechnoUse(props) {
  return (
    <>
      <div className="flex media-flex">
        <Image src={`/${props.name}.png`} alt="{props.name}" width={60} height={40} />
        <h3>{props.name}</h3>
      </div>
    </>
  );
}
