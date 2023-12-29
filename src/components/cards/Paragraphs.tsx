import { Work } from '../../../service/api';
import { CardDescription } from '../ui/card/Card';

export const Paragraphs = ({ description }: Pick<Work, 'description'>) => {
  const paragraphs = description.split('<br />').map((paragraph, index) => (
    <CardDescription key={index}>
      {paragraph}
      {index < description.length - 1 && <>&nbsp;</>}
    </CardDescription>
  ));

  return <>{paragraphs}</>;
};
