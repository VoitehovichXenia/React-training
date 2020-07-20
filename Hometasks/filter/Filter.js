var Filter = React.createClass({

    displayName: 'Filter',

    proptypes: {
        words: React.PropTypes.array,
    },

    getInitialState: function () {
        return {
            initialWordsList: this.props.words.map(word => word),
            currWords: this.props.words,
            prevWords: this.props.words.map(word => word),
            isChecked: false,
            inputValue:'',
        }
    },

    sortWords: function (ev) {
        ev.target.checked?
        this.setState({currWords: this.state.currWords.sort(), isChecked: true}):
        this.setState({currWords: this.state.prevWords.map(word => word), isChecked: false});
    },

    filterWords: function (ev) {
        var inputValue = ev.target.value;
        var newWordsList = this.state.initialWordsList.filter( word =>{
            return word.includes(inputValue);
        });
        this.setState({currWords: newWordsList, prevWords: newWordsList.map(word => word), inputValue: inputValue});
    },

    resetButton: function() {
        this.setState({isChecked: false, currWords: this.state.initialWordsList.map(word => word), prevWords: this.state.initialWordsList.map(word => word), inputValue: ''});
    },

    render: function () {
        var words = this.state.currWords.map (word => 
            React.DOM.p({key: word+Math.random()}, word)
        );

        return React.DOM.div ({className:"FilterBlock"},
            React.DOM.input({className: 'checkbox', type:"checkbox", checked: this.state.isChecked, onClick: this.sortWords}),
            React.DOM.input({className: 'textField', type:"text", value: this.state.inputValue, onChange: this.filterWords}),
            React.DOM.input({className: 'resetButton', type:"button", value:"сброс", onClick: this.resetButton}),
            React.DOM.div({className: 'FilterList'},
                words
            )
        )
    },
});