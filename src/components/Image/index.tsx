import type {FC} from 'react';

import type {ImageProps as NextImageProps} from 'next/image';
import NextImage from 'next/image';

import {cn} from '@lib';

import styles from './image.module.css';

interface ImageProps extends NextImageProps {
  className?: string;
}

const Image: FC<ImageProps> = ({className, ...props}) => (
  <NextImage className={cn(styles.image, className)} {...props} />
);

export {Image};
