import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import enhanceWithClickOutside from "react-click-outside";

import "./daypicker.css";

import calendar from "./calendar.svg";
import dateClear from "./date-clear.svg";

import format from "date-fns/format";
import ru from "date-fns/locale/ru";

const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

const WEEKDAYS_LONG = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];

const FIRST_DAY_OF_WEEK = 1;

const LABELS = {
    nextMonth: "следующий месяц",
    previousMonth: "предыдущий месяц"
};

const prices = {
    24: ["43 606"],
    25: ["43 606"],
    26: ["41 920"],
    27: ["42 140"],
    28: ["42 130"],
};

const priceStyle = {
      fontSize: "10px",
      textAlign: "cener",
      color: "#00C455",
      position: "absolute",
      left: "-5px",
      right: "0",
      bottom: "2px"
};

const cellStyle = {
      position: "relative",
      width: "48px",
      height: "48px"
};

const dateStyle = {
      position: "absolute",
      top: "12px",
      right: "0",
      left: "-5px"
};

function renderDay(day) {
  const date = day.getDate();

  return (
    <div style={cellStyle}>
      <div style={dateStyle}>{date}</div>
      {prices[date] &&
        prices[date].map((price, i) => (
          <div key={i} style={priceStyle}>
            {price}
          </div>
        ))}
    </div>
  );
}

const Calendar = styled.button`
      background: none;
      border: none;
      height: 32px;
      width: 32px;
      background-repeat: no-repeat;
      background-image: url(${calendar});
      cursor: pointer;
      position: absolute;
      right: 3px;
      top: 17px;
      background-color: #fff;
`;

const ClearDate = styled.button`
      background: none;
      border: none;
      height: 32px;
      width: 30px;
      right: 1px;
      background-repeat: no-repeat;
      background-image: url(${dateClear});
      cursor: pointer;
      position: absolute;
      top: 20px;
      background-color: #fff;
      
      &:focus {
        outline: auto;
      }
`;

const Dates = styled.div`
      flex-basis: 100%;
      display: flex;
      position: relative;
      margin-bottom: 2px;
    
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
        display: flex;
      }
    
      @media screen and (min-width: 1024px) {
        flex-basis: 30%;
        min-width: 280px;
      }
`;

const Depart = styled.div`
      position: relative;
      width: 50%;
      display: flex;
      margin-right: 2px;
    
      @media screen and (min-width: 768px) {
        width: 50%;
      }
`;

const Return = Depart.extend`
      margin-right: 0;
`;

const Input = styled.input`
      padding: 18px 16px;
      background: #fff;
      border: none;
      margin: 0;
      border-radius: 5px;
      display: flex;
      cursor: pointer;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ff8e41;
      }
`;

const DepartInput = Input.extend`
      width: 100%;
      border-radius: 0;
      cursor: pointer;
    
      @media screen and (min-width: 768px) {
        border-bottom-left-radius: 4px;
      }
    
      @media screen and (min-width: 1024px) {
        border-radius: 0;
      }
`;

const ReturnInput = Input.extend`
      width: 100%;
      border-radius: 0;
`;

const Checkbox = styled.input`
      position: absolute;
      opacity: 0;
      cursor: pointer;
`;

const Checkmark = styled.span`
      position: absolute;
      top: -5px;
      left: -20px;
      width: 40px;
      height: 24px;
      transition: all 0.3s;
      background-repeat: no-repeat;
      background: #bccdd6;
      border-radius: 100px;
      
      :after {
        content: "";
        position: absolute;
        display: none;
        transition: all 0.3s ease;
      }
`;

const Label = styled.label`
      position: relative;
      display: flex;
      margin-left: 30px;
      padding-left: 28px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 12px;
      color: #4a4a4a;
      user-select: none;
    
      & ${Checkbox}:checked ~ ${Checkmark}:after {
        display: block;
        background-repeat: no-repeat;
        background: #fff;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        left: 17px;
      }
    
      & ${Checkbox}:checked ~ ${Checkmark} {
        background: #ffa353;
      }
    
      & ${Checkmark}:after {
        left: 2px;
        top: 2px;
        display: block;
        background-repeat: no-repeat;
        background: #fff;
        width: 20px;
        height: 20px;
        border-radius: 100px;
      }
`;

const DayPickerWrapper = styled.div`
      position: absolute;
      z-index: 9;
      box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
        0px 2px 4px rgba(74, 74, 74, 0.2);
      border-radius: 2px;
      background: #fff;
      top: 0px;
      left: -2px;
      padding-bottom: 20px;
      text-align: center;
`;

class DatePicker extends React.Component {
  state = { isOpen: false };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined
    };
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  handleDayClick(day, { disabled }) {
    if (!disabled) {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleClearClick = () => {
    this.setState({ to: null });
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return (
      <Dates>
        <Depart>
          <DepartInput
            onClick={this.toggleOpen}
            id="depart"
            placeholder="Туда"
            value={
              from
                ? format(new Date(from), "D MMMM, dd", {
                    locale: ru
                  })
                : ""
            }
          />
          <Calendar onClick={this.toggleOpen} />
          {this.state.isOpen && (
            <DayPickerWrapper>
              <DayPicker
                className="Selectable"
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                renderDay={renderDay}
                disabledDays={{ before: new Date() }}
                locale={ru}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={FIRST_DAY_OF_WEEK}
                labels={LABELS}
              />
              <Label>
                Показать цены в одну сторону
                <Checkbox type="checkbox" />
                <Checkmark />
              </Label>
            </DayPickerWrapper>
          )}
        </Depart>
        <Return>
          <ReturnInput
            onClick={this.toggleOpen}
            placeholder="Обратно"
            value={
              to
                ? format(new Date(to), "D MMMM, dd", {
                    locale: ru
                  })
                : ""
            }
          />
          <ClearDate onClick={this.handleClearClick} />
        </Return>
      </Dates>
    );
  }
}

export default enhanceWithClickOutside(DatePicker);
