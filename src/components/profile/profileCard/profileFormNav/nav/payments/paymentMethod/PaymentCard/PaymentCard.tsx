import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { PaymentCard as IPaymentCard } from '@app/interfaces/interfaces';
import * as S from './PaymentCard.styles';

interface PaymentCardProps {
  className?: string;
  cardData: IPaymentCard;
  children?: React.ReactNode;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({ className, cardData, children }) => (
  <S.Wrapper className={className} $background={cardData.background}>
    <Cards {...cardData} />
    {children}
  </S.Wrapper>
);
