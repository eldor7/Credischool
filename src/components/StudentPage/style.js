import styled from "styled-components";
import img from '../../assest/img/img.png'

export const Container1 = styled.div`
margin-top: 150px;
`

export const Student = styled.div`

h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: #030F4B;
}
`

export const Mapimg = styled.img`
margin-left: 80px;
height: 900px;
`

export const Result = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 200px;
margin-left: 200px;
margin-top: 100px;

`

export const Resultleft = styled.div`
    display: flex;
    align-items: center;
    width: 462px;
    height: 168px;
    background: #335DFF;
    box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 8px;
    border: 1px solid #335DFF;
`

export const Leftimg = styled.img`
width: 86px;
height: 86px;
margin-left: 40px;
`

export const Paragrif = styled.div`
margin-left: 20px;
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #91A7FF;
    padding-top: 30px;
}
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #FCFCFF;
    margin-top: 25px;
}
`


export const Resultright = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 378px;
height: 168px;
background: #FD4455;
box-shadow: 0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25);
border-radius: 8px;

`

export const Rightimg = styled.img`
width: 86px;
height: 86px;
`

export const Paragrif1 = styled.div`
padding-left: 20px;
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FCEDEF;
    padding-top: 10px;
}
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #FCFCFF;
    margin-top: -5px;
}
`

export const Register = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 1280px;
height: 199px;
left: 320px;
top: 5174px;
background: #FCFCFF;
box-shadow: 0px 10px 15px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px 1px rgba(0, 0, 0, 0.05);
border-radius: 6px;
margin-top: 300px;
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: #030F4B;
}
button{
    width: 130px;
    height: 42px;
    background: #FD4455;
    box-shadow: 0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-left: 40px;
    border: none;
}
`

export const Bgimg = styled.div`
background-image: url(${img});
height: 700px;
`
