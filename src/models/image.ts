import type { StaticImageData } from "next/image";

interface Image {
  source: StaticImageData;
  alt: string;
}

export type { Image };