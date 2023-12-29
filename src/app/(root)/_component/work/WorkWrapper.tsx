'use client';

import { PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ReactCarousel } from '@/components/ui/carousel/ReactCarousel';
import { WorkLeftCard } from '@/components/cards/WorkLeftCard';

import { getWorks } from '../../_lib/getWorks';
import { WorkItem } from '../../../../../service/api';

export default function WorkWrapper({ children }: PropsWithChildren) {
  const { data } = useQuery<WorkItem>({
    queryKey: ['works'],
    queryFn: getWorks,
  });

  if (data && data.works)
    return (
      <ReactCarousel>
        {data?.works.map(({ image, time, description, externalSite }) => {
          return (
            <div className='flex flex-row md:flex-col' key={image.alt}>
              <WorkLeftCard
                image={image}
                time={time}
                description={description}
                externalSite={externalSite}
              />
            </div>
          );
        })}
      </ReactCarousel>
    );
  return null; // TODO: 나중에 스켈리톤 처리?
}
