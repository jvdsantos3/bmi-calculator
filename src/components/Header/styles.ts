import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderContent = styled.div`
  padding: 3.2rem 2.4rem 21.7rem;
  background: linear-gradient(
      315deg,
      ${({ theme }) => theme.colors['bg-gradient-1']} 0%,
      rgba(214, 252, 254, 0) 100%
    )
    no-repeat;
  border-radius: 0 0 35px 35px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 768px) {
    padding: 3.2rem 4.1rem 32.6rem;
  }
`

export const Headertexts = styled.section`
  text-align: center;

  h1 {
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.gunmetal};
    font-size: ${({ theme }) => theme.typography.h.fontSizes.l};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    line-height: ${({ theme }) => theme.typography.h.lineHeights.l};
    letter-spacing: ${({ theme }) => theme.typography.h['letter-spacings'].l};
  }

  p {
    font-size: ${({ theme }) => theme.typography.b.fontSizes.m};
    line-height: ${({ theme }) => theme.typography.b.lineHeights.m};
  }
`

export const Calculator = styled.section`
  margin-top: -16.9rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  width: 32.8rem;
  height: 64.9rem;

  @media (min-width: 768px) {
    margin-top: -28.6rem;
    width: 68.6rem;
    height: 46.7rem;
  }
`
