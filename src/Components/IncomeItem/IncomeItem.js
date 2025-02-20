import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';
import "./IncomeItem.css"; // Import the CSS file

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'#FFF2D8'}
                            color={'#113946'}
                            iColor={'#fff'}
                            hColor={'white'}
                            onClick={() => deleteItem(id)}
                         
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #113946;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: .8rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #113946;
    .icon{
        width: 50px;
        height: 50px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        // gap: .3rem;
        h5{
            font-size: 1.3rem;
            color: #FFF2D8;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            .text{
                display: flex;
                align-items: center;
                gap: 1rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #EAD7BB;
                    opacity: 0.8;
                    font-size: 1rem;
                }
            }
        }
    }
         /* Media Queries for Responsiveness */
  @media (max-width: 910px) {
    

    .icon {
      width: 60px;
      height: 60px;

      i {
        font-size: 2rem;
      }
    }

    .content {
    gap: 1rem;
      h5 {
        font-size: 1.1rem;
        padding-left: 1.5rem;
      }

      .inner-content {
        
        gap: 1rem;

        .text {
          gap: 0.6rem;

          p {
            font-size: 0.9rem;
          }
        }

        .btn-con {
          margin-top: 0.5rem;

          button {
            padding: 0.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 485px) {
  flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    .icon {
      width: 50px;
      height: 50px;

      i {
        font-size: 1.5rem;
      }
    }

    .content {
      h5 {
        font-size: 1rem;
        padding-left: 1rem;
      }

      .inner-content {
      flex-direction: column;
        align-items: flex-start;
        .text {
          p {
            font-size: 0.85rem;
          }
        }

        .btn-con {
          button {
            padding: 0.4rem;
          }
        }
      }
    }
  }
`;

export default IncomeItem