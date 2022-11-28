import {Header} from './Header';

export interface Props {
  name: string;
  headerItem1: string;
  headerItem2: string;
  headerItem3: string;
}

export const Article = ({name, headerItem1, headerItem2, headerItem3}: Props) => {
  return (
    <div>
      <Header
        item1={headerItem1}
        item2={headerItem2}
        item3={headerItem3}
      />
      <h1>Article: {name}</h1>
    </div>
  );
}
