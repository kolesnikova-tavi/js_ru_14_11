import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import Chart from './Chart'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    static defaultProps = {
        articles: []
    };

    state = {
        selectedArticle: null,
        selectedFromDay: null,
        selectedToDay: null
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const { selectedFromDay: from, selectedToDay: to } = this.state;
        const selectedDays = (from && to) ? <div>
            <p>From {from.toISOString().slice(0, 10)} to {to.toISOString().slice(0, 10)}</p>
            <p><a href="#" onClick={this.handleDayReset}>Reset</a></p>
        </div>: null;

        return (
            <div>
                <Chart />
                <ArticleList articles={this.props.articles} />
                <Select
                    options = {options}
                    value = {this.state.selectedArticle}
                    onChange = {this.handleArticleChange}
                    multi = {true}
                />
                {selectedDays}
                <DayPicker
                    selectedDays={this.selectedDays(from, to)}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }

    handleArticleChange = selectedArticle => this.setState({ selectedArticle });

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, {
            from: this.state.selectedFromDay,
            to: this.state.selectedToDay
        });
        this.setState({
            selectedFromDay: range.from,
            selectedToDay: range.to
        })
    };

    handleDayReset = e => this.setState({
        selectedFromDay: null,
        selectedToDay: null
    });

    selectedDays = (from, to) => day => DateUtils.isDayInRange(day, {from, to})
}

export default App