import React from "react";
import { Button, Card } from "@components";
import * as styles from "./PreviewBox.css";
import Image from "next/image";

type PreviewProps = {
  url: string | ArrayBuffer | null;
};

export default function PreviewBox({ url }: PreviewProps) {
  return (
    <>
      {url ? (
        <div>
          <Image
            src={`${url}`}
            width={342}
            height={342}
            placeholder="blur"
            blurDataURL={`${url}`}
            alt="preview image"
            className={styles.container}
          />
          {/* <Button size="small" type="button" label="wow" /> */}
        </div>
      ) : (
        <div className={styles.beforeContainer}>preview</div>
      )}
    </>
  );
}
