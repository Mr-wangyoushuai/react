
/**
 * 可以通过输入数字来判断水是否会烧开
 * @param props
 * @returns {*}
 * @constructor
 */

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}

/**
 * 创建一个输入组件
 */
/*class Calculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {temperature: ''}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>

        )

    }
}*/

/**
 * Calculate 组件中抽离 一个 TemperatureInput 组件
 * @type {{c: string, f: string}}
 */
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/**
 * 温度输入组件
 * ui
 * 参数
 */

class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({
        //     temperature: e.target.value
        // })

        // 给父组件传递数据
        this.props.onTemperatureChange(e.target.value);

    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature}
                onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: ''}
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature})
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature})
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale ==='f' ? tryConvert(temperature, toCelsius) :
            temperature;
        const fahrenheit = scale ==='c' ? tryConvert(temperature,toFahrenheit) :
            temperature;
        return (
            <div>
                <Temperature scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />  /*接受子组件的数据*/

                <Temperature scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} /> /*接受子组件的数据*/
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

/**
 * 转化为摄氏温度
 * @param fahrenheit
 * @returns {number}
 */
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * 转化华氏温度
 * @param celsius
 * @returns {number}
 */
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * 鉴别数字并转化格式为Number ，通过回调函数
 * @param temperature
 * @param convert
 * @returns {string}
 */
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    // 解析字符串 转换为数字保留两位小数
    // 开头为数字  允许开头是空格
    // 除了空格外的第一个字符是数字
    // 不能解析返回数字 为NaN
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);
