import Image from 'next/image';
import styles from './home.module.css';

type TechnoUseProps = {
  name: string;
  image: string;
};

export default function TechnoUse(props: TechnoUseProps) {
  return (
    <>
      <div className={styles.mediaFlex}>
        <Image src={`/${props.name}.png`} alt="{props.name}" width={50} height={50} layout="fixed" />
        <h3 style={{ marginLeft: 8 }}>{props.name}</h3>
      </div>
    </>
  );
}
