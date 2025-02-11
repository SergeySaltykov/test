import { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useShallow } from 'zustand/react/shallow';

import { Tab } from '../../../shared/ui/Tabs/Tabs.tsx';
import { useCocktailsStore } from '../../../app/store/store.ts';
import { Card } from '../index.ts';
import { ECocktailCode } from '../../../shared/types';
import { addSlashConditional } from '../../../shared/lib/utils';
import { NotFound } from '../../../shared/ui';
import './styled.scss';

interface Params {
  cocktailCode: ECocktailCode;
}

interface IContentProps {
  tabs: Tab[];
}

export const Content: FC<IContentProps> = ({ tabs }) => {
  const { cocktailCode } = useParams<keyof Params>() as Params;
  const activeTab = tabs.find((tab) => tab.label === cocktailCode) || tabs[0];
  const { getCocktail, drinks, loading } = useCocktailsStore(
    useShallow((state) => ({
      getCocktail: state.getCocktail,
      drinks: state.idLists[activeTab.label],
      loading: state.loading,
    })),
  );
  const controllerRef = useRef<AbortController | null>(null);

  const isValidCocktailCode = (cocktailCode: string): boolean => {
    return tabs.some((tab) => tab.path === addSlashConditional(cocktailCode));
  };

  useEffect(() => {
    controllerRef.current = new AbortController();

    // избавляемся от лишних запростов на табы. добавляем списки только один раз
    if (!drinks) {
      getCocktail(cocktailCode, controllerRef.current?.signal);
    }

    return () => {
      controllerRef.current?.abort();
    };
  }, [cocktailCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isValidCocktailCode(cocktailCode)) {
    return <NotFound />;
  }

  return (
    <div className="content">
      {drinks?.map((id: string) => {
        return <Card key={id} id={id} />;
      })}
    </div>
  );
};

export default Content;
