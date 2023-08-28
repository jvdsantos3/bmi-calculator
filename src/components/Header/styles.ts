import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
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

  @media (min-width: 768px) {
    padding: 3.2rem 4.1rem 32.6rem;
  }

  @media (min-width: 1024px) {
    max-width: 97.8rem;
    margin-left: 2.4rem;
    padding: 7.5rem 29.8rem 19.6rem 11.6rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    gap: 13.1rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }
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

  @media (min-width: 1024px) {
    max-width: 46.5rem;
    text-align: start;

    h1 {
      margin-bottom: 3.5rem;
      font-size: ${({ theme }) => theme.typography.h.fontSizes.xl};
      line-height: ${({ theme }) => theme.typography.h.lineHeights.xl};
      letter-spacing: ${({ theme }) =>
        theme.typography.h['letter-spacings'].xl};
    }
  }
`
