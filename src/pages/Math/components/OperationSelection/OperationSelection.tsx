import { useTranslation } from 'react-i18next';

import {
  Container,
  Title,
  OperationsGrid,
  OperationCard,
  OperationSymbol,
} from './OperationSelectionStyled';

export default function OperationSelection() {
  const { t } = useTranslation();
  // difficulty is part of the URL but not needed for logic display here

  const operations = [
    { id: 'addition', symbol: '+' },
    { id: 'subtraction', symbol: '-' },
    { id: 'multiplication', symbol: '×' },
    { id: 'division', symbol: '÷' },
  ];

  return (
    <Container>
      <Title>{t('math.selectOperation')}</Title>
      <OperationsGrid>
        {operations.map((op) => (
          <OperationCard key={op.id} to={op.id}>
            <OperationSymbol>{op.symbol}</OperationSymbol>
          </OperationCard>
        ))}
      </OperationsGrid>
    </Container>
  );
}
