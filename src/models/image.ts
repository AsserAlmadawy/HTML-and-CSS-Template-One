import type { StaticImageData } from "next/image";

interface Image {
  source: string | StaticImageData;
  alt: string;
}

export type { Image };