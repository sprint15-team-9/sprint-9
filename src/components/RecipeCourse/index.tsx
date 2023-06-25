import { styled } from 'styled-components';
import HandIcon from '../../assets/icons/ic_recipe_hand.svg';
import RightIcon from '../../assets/icons/ic_recipe_tip_next.svg';
import TimerIcon from '../../assets/icons/ic_recipe_time.svg';

const STEP_MOCK = [
  {
    step_order: 1,
    time_stamp: '05:30',
    step_description:
      '감자는 껍질을 제거하고 감자전 믹서기에 잘 갈아지도록 듬성듬성 썰어준다.',
    tip: '기왕이면 깍둑썰기로 썰어주세요',
    tip_method: '감자 깍둑썰기',
    isCompleted: true,
  },
  {
    step_order: 2,
    time_stamp: '07:30',
    step_description:
      '채에 내려진 물은 20분 정도 가라앉혀서 감자전분 앙금을 만들어 준다.',
    timer: 5,
    isCompleted: false,
  },
  {
    step_order: 3,
    time_stamp: '08:30',
    step_description:
      '채에 내려진 물은 20분 정도 가라앉혀서 감자전분 앙금을 만들어 준다.',
    isCompleted: false,
  },
  {
    step_order: 4,
    time_stamp: '10:00',
    step_description:
      '채에 내려진 물은 20분 정도 가라앉혀서 감자전분 앙금을 만들어 준다.',
    isCompleted: false,
  },
];

const RecipeCourse = () => {
  return (
    <Wrapper>
      <Header>
        <Title>조리 과정</Title>
        <EmptyButton>재료 보기</EmptyButton>
      </Header>
      <Main>
        <ProgressOuter>
          <ProgressInnter />
          {Array.from({ length: STEP_MOCK.length }, (_, i) => (
            <ProgressStep key={i} />
          ))}
        </ProgressOuter>
        <StepWrapper>
          {STEP_MOCK.map((data) => (
            <Article key={data.step_order}>
              <StepNumberWrapper>
                <StepNumber>
                  <span>{data.step_order}</span>
                </StepNumber>
                <StepTime>{data.time_stamp}</StepTime>
              </StepNumberWrapper>
              <Content>
                <Description>{data.step_description}</Description>
                {data.tip && (
                  <TipWrapper>
                    <img src={HandIcon} alt="Recipe Hand Icon" />
                    <TipContent>{data.tip}</TipContent>
                  </TipWrapper>
                )}
                {data.tip_method && (
                  <MethodButton>
                    <span>{data.tip_method}</span>
                    <img src={RightIcon} alt="Right Chevron Icon" />
                  </MethodButton>
                )}
                {data.timer && (
                  <TimerButton>
                    <img src={TimerIcon} alt="Right Chevron Icon" />
                    <span>타이머 재기</span>
                  </TimerButton>
                )}
              </Content>
            </Article>
          ))}
        </StepWrapper>
      </Main>
    </Wrapper>
  );
};

export default RecipeCourse;

const Wrapper = styled.section`
  margin-top: 24px;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const EmptyButton = styled.button`
  padding: 6px 13px;
  border: 1px solid #ed7732;
  color: #ed7732;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: bold;
  background: #fff;
  cursor: pointer;
`;

const Main = styled.main`
  display: flex;
`;

const ProgressOuter = styled.div`
  position: relative;
  width: 10px;
  height: 500px;
  border-radius: 12px;
  background-color: #f2f4f6;
  margin-right: 0.75rem;
`;

const ProgressInnter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 300px;
  border-radius: 12px;
  background-color: #ed7732;
`;

const ProgressStep = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
`;

const StepWrapper = styled.div`
  width: 300px;
`;

const Article = styled.article`
  padding-bottom: 40px;
`;

const StepNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ed7732;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;

  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    color: #fff;
  }
`;

const StepTime = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  color: #ed7732;
`;

const Content = styled.div`
  padding-left: 24px;
`;

const Description = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  word-break: break-all;
`;

const TipWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    margin-right: 6px;
  }
`;

const TipContent = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  word-break: break-all;
  color: #4e535f;
`;

const MethodButton = styled.button`
  display: flex;
  align-items: center;
  background: #fdebdc;
  border: none;
  color: #ed7732;
  margin: 0;
  border-radius: 6px;
  padding: 6px 6px 6px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
  }

  svg {
    margin-left: 5px;
  }
`;

const TimerButton = styled.button`
  display: flex;
  align-items: center;
  background: #eaf3fe;
  border: none;
  color: #4880ee;
  margin: 0;
  border-radius: 6px;
  padding: 8px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  img {
    margin-right: 4px;
  }

  span {
    margin-right: 5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
  }
`;
