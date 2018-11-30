// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>  {/*绑定一个key属性*/}
//             {number}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );
/**
 * key
 * 应该绑定在数组遍历的最外层组件中
 *
 * **/
function ListItem(props) {
    const value =props.value;
    return (
        <li>{value}</li>
    )
}

function NumberList2(props) {
    const numberList = props.numberList;
    const listItem = numberList.map((number) =>
        <ListItem key={number.toString()}
            value={number} />
    )
    return (
        <ul>{listItem}</ul>
    )
}
const numbers = [1, 2, 3, 4, 5, 6, 7];

ReactDOM.render(
    <NumberList2 numberList={numbers} />,
    document.getElementById('root')
)