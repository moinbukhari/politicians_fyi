import { Button } from "../ui/button";
import Link from "next/link";

type WBProps = {
  id?: string;
};

const WriteButton = (props: WBProps) => {
  let url = "/write";
  if (props.id) {
    url = url + props.id;
  }
  return (
    <Link href={url}>
      <Button>Write to My MP {"->"}</Button>
    </Link>
  );
};

export default WriteButton;
