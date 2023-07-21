import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SocialIconProps {
  url: string;
  src: string | StaticImageData;
  alt: string;
}

const SocialIcon = ({ url, src, alt }: SocialIconProps) => {
  return (
    <>
      <Link href={url}>
        <Image src={src} width={54} height={54} alt={alt} />
      </Link>
    </>
  );
};

export default SocialIcon;
