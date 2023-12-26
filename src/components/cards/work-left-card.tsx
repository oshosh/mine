import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '../ui/button/Button';
import { Card, CardDescription, CardHeader } from '../ui/card/Card';

export function WorkLeftCard() {
  return (
    <Card>
      <CardHeader>
        <Image width={40} height={40} alt='이미지 테스트' src={`/images/error.svg`} />
      </CardHeader>
      <Card>
        <CardDescription>
          <time dateTime='2019-10'>2019. 10</time> ~ <time dateTime='2020-02'>2021. 02</time>
        </CardDescription>
        <CardDescription>
          카드 테스트 입니다. <br />
          약간의 상세 내용
          <br /> 내가 한일~~
        </CardDescription>
        <CardDescription className={cn('mt-3 pl-3')}>
          <Button
            asChild
            className={buttonVariants({
              variant: 'work',
              size: 'none',
            })}
          >
            <Link href='https://github.com/oshosh' target='_blank' rel='noreferrer noopener'>
              🔗 테스트
            </Link>
          </Button>
        </CardDescription>
      </Card>
    </Card>
  );
}
