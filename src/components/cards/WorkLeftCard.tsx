import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Work } from '../../../service/api';
import { Button, buttonVariants } from '../ui/button/Button';
import { Card, CardDescription, CardHeader } from '../ui/card/Card';
import { Paragraphs } from './Paragraphs';

export function WorkLeftCard({ image, time, description, externalSite }: Work) {
  const { width, height, alt, src } = image;
  const { from, end } = time;
  const { href, name } = externalSite;

  return (
    <Card>
      <CardHeader>
        <Image width={width} height={height} alt={alt} src={src} />
      </CardHeader>
      <Card>
        <CardDescription>
          📅 <time dateTime={from}>{from.replace('-', ' .')}</time> ~
          <time dateTime={end}>{end.replace('-', ' .')}</time>
        </CardDescription>
        <Card as='div'>
          <Paragraphs description={description} />
        </Card>
        <CardDescription className={cn('mt-3 pl-3')}>
          <Button
            asChild
            className={buttonVariants({
              variant: 'work',
              size: 'none',
            })}
          >
            <Link href={href} target='_blank' rel='noreferrer noopener'>
              🔗 {name}
            </Link>
          </Button>
        </CardDescription>
      </Card>
    </Card>
  );
}
