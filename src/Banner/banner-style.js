import styled from "styled-components";
export const BannerStyle = styled.div`
  .banner {
    display: flex;
    flex-direction: column;
    background-color: #ff2d4d;

    align-items: center;
    //align-items: flex-start;
    //align-items: flex-end;

    justify-content: center;
    //justify-content: space-between;
    //justify-content: space-evenly;
    //justify-content: flex-end;

    width: 90%;
    padding: 60px 20px;
    margin: 40px auto;

    border-radius: 100px;
    text-align: center;
    color: white;

    gap: 10px;
  }

  .banner__title {
    font-size: 2.3rem;
    font-weight: 700;
  }

  .banner__subtitle {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .courses {
    display: flex;
    flex-direction: column;
    background-color: transparent;

    align-items: center;
    //align-items: flex-start;
    //align-items: flex-end;

    justify-content: center;
    //justify-content: space-between;
    //justify-content: flex-start;

    padding: 40px 20px;
    gap: 10px;
  }

  .courses__title {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .courses__subtitle {
    font-size: 1.2rem;
    max-width: 700px;
    text-align: center;
    color: #556070;
  }


  /*  mobile  */
  @media (max-width: 768px) {
    .banner {
      width: 95%;
      padding: 36px 14px;
      margin: 24px auto;
    }

    .banner__title {
      font-size: 1.8rem;
      line-height: 1.1;
    }

    .banner__subtitle {
      font-size: 1rem;
    }

    .courses {
      padding: 28px 12px;
      gap: 8px;
    }

    .courses__title {
      font-size: 2rem;
    }

    .courses__subtitle {
      font-size: 1rem;
      max-width: 420px;
      padding: 0 8px;
    }
  }

 
`;
