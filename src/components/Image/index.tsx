import {cn} from '@lib';
import type {FC} from 'react';
import NextImage from 'next/image';
import type {PlaceholderValue} from 'next/dist/shared/lib/get-img-props';
import styles from './image.module.css';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
  w: number | `${number}`;
  h: number | `${number}`;
  sizes?: string;
  placeholder?: PlaceholderValue;
  fill?: boolean;
  priority?: boolean;
}

const Image: FC<ImageProps> = ({className, src, w, h, alt, fill, sizes, placeholder, priority}) => (
  <NextImage
    className={cn(styles.image, className)}
    width={w}
    height={h}
    src={src}
    alt={alt}
    fill={fill}
    sizes={sizes}
    placeholder={placeholder}
    priority={priority}
  />
);

export {Image};
