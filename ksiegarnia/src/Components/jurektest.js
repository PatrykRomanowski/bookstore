import React, {
  useState
} from "react";
import ReactDOM from 'react-dom/client';

const TestCompJurek = () => {
  return <div > Jurek testowanie c < br > < /br>



    <
    select >
    <
    option value = "grapefruit" > Grapefruit < /option> <
    option value = "lime" > Lime < /option> <
    option selected value = "coconut" > Coconut < /option> <
    option value = "mango" > Mango < /option> <
    /select>


  {
    /* my input form  */ } <
  form >
    <
    label >
    Name:
    <
    input type = "text"
  name = "name" / >
    <
    /label> <
    input type = "submit"
  value = "Submit" / >
    <
    label >
    Surname:
    <
    input type = "text"
  name = "surname" / >
    <
    /label> <
    input type = "submit"
  value = "zapisz" / >
    <
    br > < /br> <
    h1 > Hello World!2222 < /h1> <
    /form>


    <
    /div>;
};

export default TestCompJurek;